import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet" />
  </Head>
    <Component {...pageProps} />
    <GlobalStyle/>
  </>
  )
}

export default MyApp
