
import styles from '../styles/Listado.module.css'
import Guitarra from "./Guitarra"

const Listado = ({guitarras}) =>{

   
  
    return(
    
       <div className={styles.listado}>
           {guitarras.map( guitarra =>(
               <Guitarra 
                key={guitarra.url}
                guitarra = {guitarra}
               />
           ))}
       </div> 
      

    )
}
export default Listado