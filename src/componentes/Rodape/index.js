import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (
    <div className={styles.footer}>
      <footer>
        <p className={styles.copy}>@All Copyright Reserved - IFRN CM 2024</p>
        <p className={styles.copy}>E-mail: fabio.macedo@escolar.ifrn.edu.br</p>
        <p className={styles.copy}>Smartphone: (84) 98844-2443</p>
      </footer>
    </div>
  )
}
