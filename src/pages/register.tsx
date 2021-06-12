import * as React from 'react'
import Image from 'next/image'
import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import SignupBox from '../components/Signup'
import Button from '../components/Button'
import {Input} from '../components/Input'
import Link from 'next/link'

function Register() {
    return (
        <Page>
            <CenteredColumn>
                <div className="space-y-16 md:space-y-24">
                    <div className="-mx-4 -mt-16 md:mt-0 md:-mx-8">
                        <div
                            className="p-8 -mx-4 border-t border-b border-gray-300 border-dashed space-y-4 md:-mx-8 dark:border-gray-700 bg-elevated"
                        >
                            <div className="space-y-2">
                                <p className="flex items-center font-title-heading">
                                    Create your account
                                </p>
                                <p className="text-tertiary">
                                    Join readme.
                                </p>
                            </div>
                            <form
                                className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3"
                            >
                                <label className="md:col-span-3">
                                    <span className="sr-only">Email address</span>
                                    <Input
                                        placeholder="Email address"
                                        type="email"
                                        name="email"
                                    />
                                </label>
                                <label className="md:col-span-3">
                                    <span className="sr-only">Username</span>
                                    <Input
                                        placeholder="Username"
                                        type="username"
                                        name="username"
                                    />
                                </label>
                                <label className="md:col-span-3">
                                    <span className="sr-only">Password</span>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                    />
                                </label>
                                <Button
                                    type="submit"
                                    className="md:col-span-3"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

// <div className="absolute inset-0 z-10 flex items-center justify-center">
//     <p className="text-2xl font-bold">This should be on top of the map</p>
// </div>
// <div className="flex-wrap h-48 bg-yellow-100 grid grid-rows-2 place-content-center">
//     <div className="w-48 h-48 bg-red-400 rounded-full col-start-1 row-start-1 row-span-2"></div>
//     <div className="w-48 h-24 bg-blue-400 row-start-2 col-start-1 bg-opacity-30 bg-clip-padding col-span-full row-span-1" style={{backdropFilter: "blur(20px)"}}></div>
// </div>
export default Register


// export default function Register() {
//     return (
//         <div className="flex">
//             <Head>
//                 <title>Register</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <div
//                 className="w-40 h-screen bg-center bg-cover"
//                 style={{backgroundImage: "url('/images/bricks.jpg')"}}
//             ></div>
//             <div className="flex flex-col justify-center pl-6">
//                 <div className="w-70">
//                     <h1 className="mb-2 text-lg font-medium">Sign Up</h1>
//                     <p className="mb-10 text-xs">
//                         By continuing, you agree to our User Agreement and Privacy Policy
//           </p>
//                     <form>
//                         <div className="mb-6">
//                             <input
//                                 type="checkbox"
//                                 className="mr-1 cursor-pointer"
//                                 id="agreement"
//                             />
//                             <label htmlFor="agreement" className="text-xs cursor-pointer">
//                                 I agree to get emails about cool stuff on Readit
//               </label>
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="email"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Email"
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Username"
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <input
//                                 type="password"
//                                 className="w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded"
//                                 placeholder="Password"
//                             />
//                         </div>
//                         <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
//                             Sign Up
//             </button>
//                     </form>
//                     <small>
//                         Already a readitor?
//             <Link href="/login">
//                             <a className="ml-1 text-blue-500 uppercase">Log In</a>
//                         </Link>
//                     </small>
//                 </div>
//             </div>
//         </div>
//     )
// }
