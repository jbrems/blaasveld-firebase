import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welkom op <span className={styles.brandName}>Blaasveld<span>.net</span></span></h1>
    </main>
  );
}
