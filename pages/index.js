import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
    </div>
  )
}
