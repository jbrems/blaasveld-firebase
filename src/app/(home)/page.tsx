import styles from "./page.module.css";
import { Branding } from "@/components/branding/Branding";
import { Logo } from "@/components/logo/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1><Logo /> Welkom op <Branding /></h1>
      <Link href="/login">Log in</Link>
    </main>
  );
}
