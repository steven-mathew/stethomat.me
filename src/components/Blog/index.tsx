import React from 'react'
import {MetaProps} from '../../types/layout'
import Page from '../../components/Page'
import {CenteredColumn} from '../../components/Layouts'
import Button from '../../components/Button'

import Link from 'next/link'

type LayoutProps = {
    children: React.ReactNode;
    customMeta?: MetaProps;
}

export const WEBSITE_HOST_URL = 'stethomat.me';

const Layout = ({children, customMeta}: LayoutProps): JSX.Element => {
    return (
        <Page>
            <CenteredColumn>
                <div className="h-full space-y-8">
                    <Link href="/" passHref>
                        <a className="leading-snug text-tertiary hover:text-accent">
                            &larr; Take me home
                        </a>
                    </Link>
                    <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
                </div>
                <div className="p-8 mt-16 -mx-4 border-t border-b border-dashed bg-tertiary border-note space-y-4 md:-mx-8">
                    <p className="font-semibold">
                        Disclaimer
                    </p>
                    <div className="prose text-primary">
                        <p>
                            If something was off or you need some clarification,
                            please email me at{' '}
                            <button
                                onClick={() => navigator.clipboard.writeText('ste.tho.mat@gmail.com')}
                                className="text-accent"
                            >
                                ste.tho.mat@gmail.com
                            </button>
                            {' '}by clicking to copy to clipboard.
                        </p>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

export default Layout


