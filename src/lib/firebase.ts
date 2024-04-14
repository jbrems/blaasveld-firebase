import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from '../../firebase.config.mjs'

export const app = initializeApp(firebaseConfig)
export const analytics = typeof window !== 'undefined' && getAnalytics(app)
export const auth = getAuth(app)
auth.languageCode = 'nl'
