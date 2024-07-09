import React from 'react'
import styles from './News.module.css'

export default function News() {
  return (
    <main className={styles.content}>
    <img className={styles.content_image} src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*" alt="" />
        <div> Avatar</div>
        <div> My post </div>
        <div> New Post </div>
    </main>
  )
}
