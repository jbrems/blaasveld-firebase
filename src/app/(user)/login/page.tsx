'use client'

import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const router = useRouter()

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/profile')
  }


  return <div>
    <button onClick={loginWithGoogle}>Log in met je Google account</button>
  </div>
}