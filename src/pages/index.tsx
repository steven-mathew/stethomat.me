import * as React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import Button from '../components/Button'

function Home() {
    return (
        <Page>
            <CenteredColumn>
                <div className="space-y-16 md:space-y-24">
                    <div className="font-welcome grid grid-cols-15 grid-rows-4 gap-4">
                        <div className="absolute z-0 p-20">
                            <svg
                                aria-hidden="true"
                                role="img"
                                className="w-64 h-64 fill-current text-accent opacity-10"
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
                        <div className="col-span-15 col-start-1 col-end-15">I&apos;m Steven Thomas Mathew —</div>
                        <div className="row-span-1"></div>
                        <div className="col-span-15 col-start-2">yes, that&apos;s <em>three</em> "first" names.</div>
                    </div>
                    <div className="space-y-8 md:items-center">
                        <div className="prose lg:prose-lg text-primary">
                            <p>
                                Hey, I&apos;m Brian. I&apos;m a designer,{' '}
                                <a href="https://designdetails.fm">podcaster</a>,{' '}
                                <Link href="/writing" passHref>
                                    <a>writer</a>
                                </Link>
                                , and{' '}
                                <a href="https://github.com/brianlovin">software tinkerer</a>.
                                I&apos;m currently building{' '}
                                <a href="https://github.com/mobile">
                                    native mobile apps at GitHub
                                </a>
                                .
                            </p>

                            <p>
                                In the past I co-founded{' '}
                                <a href="https://github.com/withspectrum/spectrum">Spectrum</a>,
                                a platform for online communities. Before that, I worked at
                                Facebook building payments systems, and cut my teeth as a
                                product designer at Buffer.
                            </p>


                            <p>
                                In the past I co-founded{' '}
                                <a href="https://github.com/withspectrum/spectrum">Spectrum</a>,
                                a platform for online communities. Before that, I worked at
                                Facebook building payments systems, and cut my teeth as a
                                product designer at Buffer.
                            </p>

                            <p>
                                In the past I co-founded{' '}
                                <a href="https://github.com/withspectrum/spectrum">Spectrum</a>,
                                a platform for online communities. Before that, I worked at
                                Facebook building payments systems, and cut my teeth as a
                                product designer at Buffer.
                            </p>

                            <p>
                                In the past I co-founded{' '}
                                <a href="https://github.com/withspectrum/spectrum">Spectrum</a>,
                                a platform for online communities. Before that, I worked at
                                Facebook building payments systems, and cut my teeth as a
                                product designer at Buffer.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/about" passHref>
                                <a>
                                    <Button>Learn more about me</Button>
                                </a>
                            </Link>
                            <a href="https://changelog.brianlovin.com">
                                <Button>My changelog</Button>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h4 className="font-list-heading">Recent Writing</h4>
                        <Link href="/writing">
                            <a className="inline-block font-medium highlight-link-hover">
                                Read all posts &rarr;
                            </a>
                        </Link>
                    </div>

                    <div className="space-y-8">
                        <h4 className="font-list-heading">Select Projects</h4>
                        <Link href="/projects">
                            <a className="inline-block font-medium highlight-link-hover">
                                See all projects &rarr;
                            </a>
                        </Link>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

export default Home
