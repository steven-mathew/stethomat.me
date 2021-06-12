// https://github.com/brianlovin/brian-lovin-next/tree/main/src/components

import * as React from 'react'

export function CenteredColumn({children}) {
    return (
        <div className="mx-auto max-w-screen-sm justify-content">{children}</div>
    )
}
