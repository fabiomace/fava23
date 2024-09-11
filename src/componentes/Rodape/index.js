import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (
    <div className={styles.footer}>
      <footer>
        <p className={styles.copy}>@All Copyright Reserved - IFRN CM 2024</p>
      </footer>
    </div>
  )
}
