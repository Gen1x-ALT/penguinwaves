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
          <h1>Introduction</h1>
          <i>What we refer to in this page as "bullshit" means unnecessary and unwanted features that make the experience of using the service worse for a lot of users.</i>
          <p>We have a robust and easy-to-use platform, that anyone can try.</p>
          <p>We don't care about how much money you have in that wallet. We just want you to enjoy our service as much as possible.</p>
          <p>With our approval-based song submission system, we make sure you only listen to songs that are made by users themselves.</p>
        </section>

        <section className={styles.section}>
           <h1>No bullshit</h1>
           <p>We don't pull up huge paywalls everywhere and we don't make stupid interfaces. Our mission is to provide quality, and we will do that for as long as we possibly can.</p>
          <p>We value our userbase more than anything, and we take suggestions openly. We aren't greedy, toxic or deaf to our community like other services.</p>
        </section>
          </div>

        <div className={styles.section_container}>
          <section className={styles.section}>
             <h1>About</h1>
             <p>PenguinWaves was made by one online user called Gen1x, who wanted to have an honest and easy music listening service because he got annoyed of having to watch ads constantly.</p>
            <p>So, he also wants YOU to not have to go through all that hussle.</p>
          </section>
          <section className={styles.section}>
             <h1>How it works</h1>
             <p>The main interface is powered by a project made using a platform called <a href="https://penguinmod.com/" target="_blank">PenguinMod</a> (hence the name "PenguinWaves").</p>
          </section>
            </div>

        <section className={styles.section}>
          <h2>So then... is it a "yes"?</h2>
          <p>Will you join this brand new opportunity to share your music without worrying about the bullshit?</p>
          <button className={styles.button}><a href="interface" style={{'color': "white", 'text-decoration': "none"}}>Experience something unique</a></button>
        </section>
      </main>

      <Footer />
    </div>
  )
}