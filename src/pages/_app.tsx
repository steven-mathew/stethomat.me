import '../styles/globals.css'
import '../styles/custom-styles.css'
import '../styles/prose-styles.css'

import {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default App
