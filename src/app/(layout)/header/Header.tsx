import { Logo } from '@/components/logo/Logo'
import styles from './Header.module.css'
import { Branding } from '@/components/branding/Branding'
import Link from 'next/link'
import LoginButton from './login-button/LoginButton'

export function Header() {
  return <header className={styles.header}>
    <div>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <Link href="/" className={styles.branding}>
        <Branding />
      </Link>
    </div>
    <div></div>
    <div>
      <LoginButton />
    </div>
  </header>
}