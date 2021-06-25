import {useRouter} from 'next/router'
import * as React from 'react'

export function CenteredColumn({children}) {
    return (
        <div className="mx-auto max-w-screen-sm justify-content">{children}</div>
    )
}

export function BlogLayout({children, frontMatter}) {
    const router = useRouter()
    const slug = router.asPath.replace('/blog', '')

    return (
        <>
            <CenteredColumn>


            </CenteredColumn>
        </>
    )
}
