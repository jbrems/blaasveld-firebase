'use client'

import { useEffect } from 'react'

import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { auth } from '../../lib/firebase'

const uiConfig = {
  signInSuccessUrl: '/profile',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '#terms-of-service',
  privacyPolicyUrl: '#privacy-policy'
};

export default function LoginPage() {
  useEffect(() => {
    try {
      const ui = new firebaseui.auth.AuthUI(auth)
      ui.start('#firebase-auth-container', uiConfig);
    } catch(err) {
      console.warn('Firebase UI already initialized')
    }
  }, [])

  return <div id="firebase-auth-container" />
}