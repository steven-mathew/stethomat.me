import '../styles/globals.css'
import '../styles/custom-styles.css'
import '../styles/prose-styles.css'

import Providers from '../components/Providers'

import {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    )
}

export default App
