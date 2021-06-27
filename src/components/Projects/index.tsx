import * as React from 'react'
import Image from 'next/image'
import data from './data'
import {TECHNOLOGIES} from './colors'

export default function StackList() {
    const sorted = data.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
    })

    return (
        <div className="mt-8">
            {sorted.map((stack) => {
                const hasBadges = Object.keys(TECHNOLOGIES).some(prop => stack[prop])
                return (
                    <a
                        key={stack.name}
                        className="flex py-4 bg-gray-400 rounded bg-opacity-0 md:-mx-4 sm:p-4 sm:hover:bg-opacity-10 sm:dark:hover:bg-accent-hover sm:dark:hover:bg-opacity-5"
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
                                    {/* TODO: Find an alternative to this*/}
                                    {stack.typescript && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.typescript.color}4b`, color: `${TECHNOLOGIES.typescript.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.typescript.name}
                                        </span>
                                    )}
                                    {stack.postgresql && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.postgresql.color}5b`, color: `${TECHNOLOGIES.postgresql.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.postgresql.name}
                                        </span>
                                    )}
                                    {stack.tailwindcss && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 bg-purple-500 bg-opacity-5 dark:bg-opacity-20">
                                            {TECHNOLOGIES.tailwindcss.name}
                                        </span>
                                    )}
                                    {stack.nextjs && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.nextjs.color}2a`, color: `${TECHNOLOGIES.nextjs.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.nextjs.name}
                                        </span>
                                    )}
                                    {stack.rust && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.rust.color}5b`, color: `${TECHNOLOGIES.rust.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.rust.name}
                                        </span>
                                    )}
                                    {stack.nodejs && (
                                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                                            {TECHNOLOGIES.nodejs.name}
                                        </span>
                                    )}
                                    {stack.opencv && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.opencv.color}5b`, color: `${TECHNOLOGIES.opencv.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.opencv.name}
                                        </span>
                                    )}
                                    {stack.python && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.python.color}5f`, color: `${TECHNOLOGIES.python.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.python.name}
                                        </span>
                                    )}
                                    {stack.typeorm && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.typeorm.color}5b`, color: `${TECHNOLOGIES.typeorm.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.typeorm.name}
                                        </span>
                                    )}
                                    {stack.expressjs && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.expressjs.color}5b`, color: `${TECHNOLOGIES.expressjs.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.expressjs.name}
                                        </span>
                                    )}
                                    {stack.tensorflow && (
                                        <span
                                            style={{backgroundColor: `${TECHNOLOGIES.tensorflow.color}5b`, color: `${TECHNOLOGIES.tensorflow.color}`, }}
                                            className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide"
                                        >
                                            {TECHNOLOGIES.tensorflow.name}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </a>
                )
            })}
        </div >
    )
}
