import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Heading, Link } from "@chakra-ui/react";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>O Rango</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="2xl" mb="2">
          O Rango
        </Heading>

        <p className={styles.description}>
          Comida de verdade para todas as necessidades.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Ganho de massa &rarr;</h3>
            <p>Loren ipsun</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Perda de peso &rarr;</h3>
            <p>Loren ipsun</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Sem origem animal &rarr;</h3>
            <p>Loren ipsun.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Outras restrições &rarr;</h3>
            <p>Loren ipsun</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
