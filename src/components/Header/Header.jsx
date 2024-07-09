import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
    <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" />
  </header>
  )
}
