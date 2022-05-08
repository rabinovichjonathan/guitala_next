import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) =>{
    console.log(guitarra)
   const {nombre, descripcion, imagen, precio, url} = guitarra
  
    return(
    
       <div className={styles.guitarra}>
        <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`imagen de ${nombre}`}/>
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/guitarras/${url}`}>
               <a className={styles.enlace}>
                Ver más
               </a> 
            </Link>
        </div>
       </div> 
      

    )
}
export default Guitarra