import * as React from 'react'
import Page, {PageHeader} from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import routes from '../config/routes'
import Jokes from '../components/HallOfShame'

import Link from 'next/link'
import {NextSeo} from 'next-seo'


export default function Shame() {
    return (
        <Page>
            <NextSeo
                title={routes.shame.seo.title}
                description={routes.shame.seo.description}
            />

            <CenteredColumn>
                <div className="h-full space-y-8">
                    <Link href="/" passHref>
                        <a className="leading-snug text-tertiary hover:text-accent">
                            &larr; Take me home
                        </a>
                    </Link>
                    <PageHeader
                        title="Hall of Shame"
                        subtitle="Here lies the guys, gals, and non-binary pals who sent me non-hilarious jokes.
                        They shall be forever mocked."
                    />
                    <Jokes />
                </div>
            </CenteredColumn>
        </Page>
    )
}
