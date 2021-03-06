import * as React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Page from '../components/Page'
import { CenteredColumn } from '../components/Layouts'
import StackList from '../components/Projects'

import { format, parseISO } from 'date-fns'
import { getAllPosts } from '../pages/api/getPosts'
import { PostType } from '../types/post'
import toast, { Toaster } from 'react-hot-toast'

type IndexProps = {
  posts: PostType[]
}

const notify = () =>
  toast('Copied!', {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: 'var(--color-bg-notifications)',
      color: 'var(--color-text-primary)',
    },
  })

function Home({ posts }: IndexProps) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12 md:space-y-16">
          <div className="font-welcome-lg grid grid-cols-15 grid-rows-4 gap-4 text-intro">
            <div className="absolute z-0 p-20">
              <svg
                aria-hidden="true"
                role="img"
                className="w-48 h-48 fill-current lg:w-64 lg:h-64 text-accent opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 124"
                preserveAspectRatio="xMidYMin slice"
                width="300.00pt"
                height="124.00pt"
              >
                <g transform="translate(0.00,124.00) scale(0.10,-0.10)">
                  <path d="M1064 1190 c-32 -13 -72 -66 -85 -113 -27 -100 10 -193 137 -346 86 -103 87 -105 74 -135 -60 -145 -62 -210 -9 -270 49 -56 113 -53 149 6 41 67 20 136 -75 253 l-32 40 64 120 c35 66 73 129 84 140 20 20 20 20 35 0 22 -30 33 -81 45 -209 11 -127 22 -167 42 -147 7 7 28 58 47 114 39 114 54 126 83 62 39 -88 53 -92 80 -20 10 27 20 52 23 54 3 3 35 -25 72 -62 37 -36 84 -73 104 -82 41 -16 154 -20 178 -5 24 15 8 19 -40 10 -27 -5 -65 -4 -95 2 -44 9 -60 20 -128 90 -51 52 -84 77 -94 74 -8 -3 -16 -6 -18 -6 -2 0 -11 -23 -21 -52 l-17 -51 -18 49 c-28 73 -67 95 -91 52 -6 -13 -26 -65 -43 -117 l-31 -94 -13 138 c-13 152 -34 218 -71 230 -31 10 -47 -9 -120 -150 -35 -66 -64 -121 -65 -123 -7 -9 -172 212 -194 258 -33 71 -35 159 -6 209 23 38 77 71 117 71 16 0 28 5 28 10 0 12 -66 12 -96 0z m215 -666 c58 -85 64 -127 31 -181 -52 -86 -164 5 -146 118 9 55 46 150 56 144 5 -3 32 -40 59 -81z" />
                </g>
              </svg>
            </div>
            <div className="col-span-15">Hi there,</div>
            <div className="col-span-15 col-start-1 col-end-15">
              I&apos;m Steven Thomas Mathew —
            </div>
            <div className="row-span-1"></div>
            <div className="col-span-15 col-start-2">
              yes, that&apos;s{' '}
              <span className="text-accent">
                {' '}
                <em>three</em>{' '}
              </span>{' '}
              first names and a single "t".
            </div>
          </div>
          <div className="space-y-8 md:items-center">
            <div className="prose lg:prose-lg text-primary">
              <p>
                I just kicked off an internship at Oracle, in my third year{' '}
                <span className="text-accent"> @ </span> UofT, expecting a CS
                specialist degree in January of 2024.
              </p>

              <p>
                I develop memory-safe tools to improve my programming workflow, 
                sometimes write my own programming languages, and even put together blog
                posts.
              </p>
              <p>
                When I&apos;m not <em> knee deep </em> in mechanical keyboard
                videos, you&apos;ll find me writing open-source software or
                playing piano by day and learning Rust by night.
              </p>
              <p>
                To the recruiter, I&apos;m on the hunt for internships for Summer 2023. Feel
                free to download my <a href="/static/resume.pdf">resume</a>,
                take a gander at my{' '}
                <a href="https://github.com/steven-mathew">GitHub</a>, or reach
                out to me by <a href="mailto:ste.tho.mat@gmail.com">email</a>.
              </p>
            </div>
          </div>

          <h4 className="font-list-heading">Select Writings</h4>
          {posts.map((post) => (
            <article key={post.slug} className="mt-8">
              <p className="mb-1 text-sm text-gray-500">
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
              </p>
              <h1 className="mb-2 text-xl">
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  <a className="text-tertiary hover:text-accent">
                    {post.title}
                  </a>
                </Link>
              </h1>
              <p className="mb-3">{post.description}</p>
              <p>
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  <a className="hover:text-accent">Read More</a>
                </Link>
              </p>
            </article>
          ))}

          <div className="space-y-8">
            <h4 className="mb-8 font-list-heading">Select Projects</h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/steven-mathew?tab=repositories"
            >
              <a className="inline-block font-medium highlight-link-hover">
                See all projects &rarr;
              </a>
            </a>
          </div>
          <StackList />

          <div className="space-y-8">
            <h4 className="font-list-heading">Let's get to know each other</h4>

            <div className="prose lg:prose-lg text-primary">
              <p>
                My inbox is always open to anything. If you have a question, a
                comment, or even a hilarious joke, I&apos;ll get back to you!
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('ste.tho.mat@gmail.com')
                  notify()
                }}
                className="font-extrabold highlight-link-hover"
              >
                ste.tho.mat@gmail.com
              </button>
            </div>

            <div className="p-8 mt-16 -mx-4 border-t border-b border-dashed bg-tertiary border-note space-y-4 md:-mx-8">
              <p className="font-semibold">Disclaimer</p>
              <div className="prose text-primary">
                <p>
                  If a joke is attached to the email, the joke <em> must </em>{' '}
                  be hilarious. Jokes deemed to be non-hilarious will be placed
                  in the{' '}
                  <Link href="/shame" passHref>
                    <a>Hall of Shame</a>
                  </Link>
                  . Most importantly, don&apos;t forget to like, comment, and
                  subscribe — oops!
                </p>
              </div>
            </div>
          </div>
        </div>
      </CenteredColumn>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: { posts },
  }
}

export default Home
