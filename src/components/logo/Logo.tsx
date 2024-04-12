import style from './Logo.module.css'

export function Logo() {
  return <div className={style.logo} aria-hidden>
    <span>B</span>
    <svg width="12" height="12" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8" />
    </svg>
  </div>
}