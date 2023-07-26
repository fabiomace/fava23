import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <div className={styles.footer}>
      <footer>
        <p className={styles.copy}>@All Copyright Reserved - IFRN SGA 2023</p>
        <img className={styles.imagem}src={props.facebook}/>
        <img className={styles.imagem} src={props.twitter}/>
        <img className={styles.imagem} src={props.instagram}/>
      </footer>
    </div>
  )
}
