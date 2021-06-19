import * as React from 'react'
import Image from 'next/image'
import data from './data'

export default function StackList() {
    const sorted = data.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
    })

    return (
        <div className="mt-8">
            {sorted.map((stack) => {
                {/* TODO: Find an alternnative to this*/}
                const hasBadges = stack.typescript || stack.tailwindcss ||
                    stack.nextjs || stack.rust || stack.nodejs ||
                    stack.opencv || stack.python || stack.typeorm ||
                    stack.expressjs || stack.tensorflow || stack.postgresql
                return (
                    <a
                        key={stack.name}
                        className="flex py-4 bg-gray-400 rounded bg-opacity-0 md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
                        href={stack.url}
                    >
                        <Image
                            src={`/static/img/stack/${stack.image}`}
                            width={64}
                            height={64}
                            layout="fixed"
                            alt={`${stack.name} icon`}
                            className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                        />

                        <div className="justify-center flex-1 pl-5 col-span-3 space-y-2 ">
                            <div className="space-y-1 ">
                                <p className="mt-2 font-medium text-primary">{stack.name}</p>
                                <p className="text-base font-normal leading-snug text-tertiary">
                                    {stack.description}
                                </p>
                            </div>
                            {hasBadges && (
                                <div className="flex flex-1 text-center grid grid-flow-row sm:grid-cols-5 sm:grid-rows-2 grid-cols-2 auto-rows-max sm:auto-rows-min gap-2">
                                    {stack.typescript && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 bg-purple-500 bg-opacity-5 dark:bg-opacity-20">
                                            Typescript
                                        </span>
                                    )}
                                    {stack.postgresql && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 bg-purple-500 bg-opacity-5 dark:bg-opacity-20">
                                            PostgreSQL
                                        </span>
                                    )}
                                    {stack.tailwindcss && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Tailwind
                                        </span>
                                    )}
                                    {stack.nextjs && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Next.js
                                        </span>
                                    )}
                                    {stack.rust && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Rust
                                        </span>
                                    )}
                                    {stack.nodejs && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Node.js
                                        </span>
                                    )}
                                    {stack.opencv && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            OpenCV
                                        </span>
                                    )}
                                    {stack.python && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Python
                                        </span>
                                    )}
                                    {stack.typeorm && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            TypeORM
                                        </span>
                                    )}
                                    {stack.expressjs && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Express.js
                                        </span>
                                    )}
                                    {stack.tensorflow && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            Tensorflow
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
