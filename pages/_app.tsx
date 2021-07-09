import '../styles/globals.scss'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import type { AppProps } from 'next/app'
import AppFooter from '../components/appFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Let's get quizing</title>
        <meta name='description' content='Multiple Online Quizzes' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
      <AppFooter />
    </div>
  )
}

export default MyApp
