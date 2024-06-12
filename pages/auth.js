import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PenguinWaves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Log in" />
        <section className={styles.intro}>
          <p className={styles.description}>Pick an authentication method</p>
        </section>

        <div>
          <a href="https://pwaves-backend.vercel.app/auth/discord"><button className={styles.button}>Discord Auth</button></a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
