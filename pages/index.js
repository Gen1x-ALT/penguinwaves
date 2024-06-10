import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PenguinWaves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to PenguinWaves!" />
        <section className={styles.intro}>
          <p className={styles.description}>
            Just music. No bullshit.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Features</h2>
          <ul>
            <li>Free song uploads</li>
            <li>Community approval process</li>
            <li>Discover new music from emerging artists</li>
            <li>High-quality streaming</li>
          </ul>
        </section>

        <section className={styles.section}>
           <h1>No bullshit</h1>
           <p>We don't pull up huge paywalls everywhere, we don't make stupid interfaces. Our mission is to provide quality, and we will do that for as long as we possibly can.</p>
          <p>We value our userbase more than anything, and we take suggestions openly. We aren't greedy, toxic, or deaf to our community like other services.</p>
        </section>

        <section className={styles.section}>
          <h2>So then... is it a yes?</h2>
          <p>Will you join this brand new opportunity to share your music without worrying about the bullshit?</p>
          <button className={styles.button}>Sign Up Now</button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
