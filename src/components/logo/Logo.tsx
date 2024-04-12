import style from './Logo.module.css'

export function Logo() {
  return <div className={style.logo}>
    <span>B</span>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4" />
    </svg>
  </div>
}