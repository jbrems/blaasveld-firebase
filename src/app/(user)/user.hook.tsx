'use client'

import { auth } from "@/lib/firebase"
import { User, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return unsubscribe
  }, [])

  return { user }
}