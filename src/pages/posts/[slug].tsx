import {format, parseISO} from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import {GetStaticPaths, GetStaticProps} from 'next'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'

import markdown from 'remark-parse'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'

import Layout, {WEBSITE_HOST_URL} from '../../components/Blog'
import {MetaProps} from '../../types/layout'
import {PostType} from '../../types/post'
import {postFilePaths, POSTS_PATH} from '../../utils/mdxUtils'

const components = {
    Head,
    Image,
    Link,
}

type PostPageProps = {
    source: MDXRemoteSerializeResult
    frontMatter: PostType
}

const PostPage = ({source, frontMatter}: PostPageProps): JSX.Element => {
    const customMeta: MetaProps = {
        title: `${frontMatter.title} - Steven Mathew`,
        description: frontMatter.description,
        image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
        date: frontMatter.date,
        edited: frontMatter.edited,
        type: 'article',
    }

    return (
        <Layout customMeta={customMeta}>
            <Head>
                <title>{frontMatter.title}</title>
                <meta name="description" content={frontMatter.description} />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                    integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                    crossOrigin="anonymous"
                />
            </Head>
            <article>
                <h1 className="mb-3 text-xl font-black md:text-2xl text-primary">
                    {frontMatter.title}
                </h1>
                <div className="mb-10">
                    <p className="text-sm leading-snug text-tertiary">
                        {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
                    </p>
                    {frontMatter.edited &&
                        <p className="text-sm leading-snug text-tertiary">
                            Edited {format(parseISO(frontMatter.edited), 'MMMM dd, yyyy')}
                        </p>
                    }
                </div>
                <div className="prose dark:prose-dark">
                    <MDXRemote {...source} components={components} />
                </div>
            </article>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const {content, data} = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [markdown, require('remark-code-titles'), require('remark-math')],
            rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings, rehypeKatex],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({params: {slug}}))

    return {
        paths,
        fallback: false,
    }
}

export default PostPage
