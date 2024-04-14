import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./(layout)/header/Header";
import styles from './layout.module.css'

const roboto = Roboto({ weight: ['300', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blaasveld.net",
  description: "Uw gids in Blaasveld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={roboto.className}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
