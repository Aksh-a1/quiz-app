import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/pages/Home.module.scss'
import type { AppProps } from 'next/app'
import AppFooter from '../components/appFooter'
import Navbar from '../components/navbar'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Let's get quizing</title>
        <meta name='description' content='Multiple Online Quizzes' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {router.pathname !== '/' && <Navbar />}
      <Component {...pageProps} />
      <AppFooter />
    </div>
  )
}

export default MyApp
