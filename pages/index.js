import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Form from './Form'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JB & Co engineering</title>
        <meta name="description" content="engineering your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.linkedin.com/in/joshua-burkin/">Milkys biness</a>
        </h1>
      </main>
      <Form />

      <footer className={styles.footer}>
        <a
          href="https://dwaynediddy.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
          </span>
            <p>DwayneDiddy</p>
        </a>
      </footer>
    </div>
  )
}
