import Link from 'next/link'
import Layout from "../componentes/Layout"

import styles from '../styles/NoEncontrado.module.css'


const noEncontrado = () =>{
 
    return(
        <Layout>
            <div className={styles.no_encontrado}>
                <h1 className='heading'>Página no encontrada</h1>
                <Link href='/'>Volver al inicio</Link>
            </div>
        </Layout>
    
    )
       
}

export default noEncontrado