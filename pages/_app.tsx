import type { AppProps } from 'next/app'
import Footer from '../src/components/patterns/Footer'
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
    <GlobalStyle/>
    <Footer />
  </>
  )
}

export default MyApp
