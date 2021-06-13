// Inspired heavily by https://github.com/brianlovin/brian-lovin-next/tree/main/src/components/Page

import React from 'react'
import Header from '../Header'

interface Props {
    children: React.ReactNode
}

export default function Page(props: Props) {
    const {children} = props
    return (
        <>
            <Header />
            <div className="h-screen px-4 py-24 md:py-32 lg:px-0">{children}</div>
        </>
    )
}

interface HeaderProps {
    title: string
    subtitle?: string
}

export function PageHeader(props: HeaderProps) {
    const {title, subtitle} = props
    return (
        <div className="space-y-2">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
                {title}
            </h1>
            <p className="font-sans text-xl leading-snug md:text-2xl text-tertiary">
                {subtitle}
            </p>
        </div>
    )
}
