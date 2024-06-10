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

        <div className={styles.section_container}>
        <section className={styles.section}>
          <p>We offer a diverse array of features, because our competitors simply have too much bullshit on them.</p>
          <h2>Features</h2>
          <ul>
            <li>Free song uploads</li>
            <li>Approval process</li>
            <li>Discover new music from emerging artists</li>
            <li>High-quality music</li>
            <li>Free lyrics</li>
            <li>Unlimited features</li>
          </ul>
        </section>

        <section className={styles.section}>
           <h1>No bullshit</h1>
           <p>We don't pull up huge paywalls everywhere, we don't make stupid interfaces. Our mission is to provide quality, and we will do that for as long as we possibly can.</p>
          <p>We value our userbase more than anything, and we take suggestions openly. We aren't greedy, toxic, or deaf to our community like other services.</p>
        </section>
          </div>

        <section className={styles.section}>
          <h2>So then... is it a "yes"?</h2>
          <p>Will you join this brand new opportunity to share your music without worrying about the bullshit?</p>
          <button className={styles.button}>Sign Up Now</button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
