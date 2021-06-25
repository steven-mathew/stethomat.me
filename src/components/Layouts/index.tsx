import {useRouter} from 'next/router'
import Image from 'next/image'

import * as React from 'react'

import Page from '../Page'

export function CenteredColumn({children}) {
    return (
        <div className="mx-auto max-w-screen-sm justify-content">{children}</div>
    )
}

export function BlogLayout({children, frontMatter}) {
    const router = useRouter()
    const slug = router.asPath.replace('/blog', '')


    // const imageProps = {
    //     src: frontMatter.image,
    //     alt: frontMatter.alt,
    // }

    return (
        <Page>
            <CenteredColumn>
                <div className="space-y-12 md:space-y-16">
                    <div className="flex-col self-start space-y-8 md:items-center flex-start">

                        <div className="space-y-8">
                            <h4 className="font-list-heading">{frontMatter.title}</h4>
                        </div>

                        <div className="content-between self-start self-center space-y-8">



                        </div>

                    </div>
                    {children}
                </div>
            </CenteredColumn>
        </Page>
    )
}
