'use client'

import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        console.log('Logged in user', user)
      }
    });
  }, [])


  return <h2>
    {user && user.email}
    {!user && 'Not logged in'}
  </h2>
}