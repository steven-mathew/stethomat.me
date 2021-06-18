import * as React from 'react'
import Page, {PageHeader} from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import Link from 'next/link'
import Button from '../components/Button'

function MissingPage() {
    return (
        <Page>
            <CenteredColumn>
                <div className="h-screen space-y-8">
                    <PageHeader
                        title="404"
                        subtitle="This page doesn’t exist. We're sending help right away."
                    />
                    <div>
                        <Link href="/" passHref>
                            <a>
                                <Button>Return home</Button>
                            </a>
                        </Link>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

export default MissingPage
