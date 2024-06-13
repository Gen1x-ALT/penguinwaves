import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.css";
import Cookies from "js-cookie";

export default function Home() {
  const [globalName, setGlobalName] = useState("");

  useEffect(() => {
    const userInfo = Cookies.get("userInfo");
    if (userInfo) {
      try {
        const userInfoJson = JSON.parse(userInfo);
        setGlobalName(userInfoJson.global_name || "");
      } catch (error) {
        console.error("Error parsing userInfo cookie", error);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>PenguinWaves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Thank you so much!" />
        <section className={styles.intro}>
          <p className={styles.description}>Welcome, {globalName && <p>{globalName}</p>}!</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}