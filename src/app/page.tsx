import Image from "next/image";
import styles from "./page.module.css";
import { Branding } from "@/components/branding/Branding";
import { Logo } from "@/components/logo/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1><Logo /> Welkom op <Branding /></h1>
    </main>
  );
}
