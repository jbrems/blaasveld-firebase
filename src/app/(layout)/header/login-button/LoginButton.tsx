'use client'

import { useUser } from "@/app/(user)/user.hook";
import Image from "next/image";
import Link from "next/link";
import styles from './LoginButton.module.css'

export default function LoginButton() {
  const { user } = useUser()

  if (user) return <Link href="/profile" className={styles.profile}>
    {user.photoURL && <Image src={user.photoURL} width={30} height={30} alt="Ingelogde gebruiker" aria-hidden />}
    {user.displayName}
  </Link>

  return <Link href="/login">Log in</Link>
}