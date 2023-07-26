import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo}/>
      <p className={styles.titulo}>{props.titulo}</p>
      <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo}</p>
      <img className={styles.imagem}src={props.facebook}/>
      <img className={styles.imagem} src={props.twitter}/>
      <img className={styles.imagem} src={props.instagram}/>
    </div>
  )
}