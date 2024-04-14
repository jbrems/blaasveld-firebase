'use client'

import Image from "next/image";
import { useUser } from "../user.hook";
import styles from './page.module.css'
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user } = useUser()
  const router = useRouter()

  async function logout() {
    await auth.signOut()
    router.push('/login')
  }


  return <>
    {user && <div className={styles.userInfo}>
      {user.photoURL && <Image width={80} height={80} src={user.photoURL} alt="Ingelogde gebruiker" aria-hidden />}
      <span>{user.displayName}</span>
      <span>{user.email}</span>
      {user.metadata.creationTime && <span>Lid sinds {new Date(user.metadata.creationTime).toLocaleDateString()}</span>}
      {user.metadata.lastSignInTime && <span>Laatst online op {new Date(user.metadata.lastSignInTime).toLocaleDateString()}</span>}
      <button onClick={logout}>Log uit</button>
    </div>}
    {!user && 'Not logged in'}
  </>
}