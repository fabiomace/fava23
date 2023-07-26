import React from 'react'
import styles from './Conteudo.module.css'

    export default function Conteudo() {
        return (
            <div>
                <section className={styles.section}>
                    Conteudo
                </section>
            </div>
        )
    }
    
    export function OlaMundo(){
        console.log("Ola mundo")
    }