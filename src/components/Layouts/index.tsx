import {useRouter} from 'next/router'
import Image from 'next/image'

import * as React from 'react'

import Page from '../Page'

export function CenteredColumn({children}) {
    return (
        <div className="mx-auto max-w-screen-sm justify-content">{children}</div>
    )
}
