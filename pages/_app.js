import '../styles/globals.css'
//import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Media from '../components/media'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CELESTIAL</title>
        <link rel="icon" href="/razer.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Media/>
      <Footer />
    </>
  )
}

export default MyApp

