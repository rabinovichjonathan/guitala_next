import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'
import Layout from '../componentes/Layout'

const Nosotros = () =>{
    return(
      <div> 
        <Layout
            pagina="Nosotros"
        >
          <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
              <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen sobre nosotros"/>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo feugiat leo, sed lacinia nulla imperdiet vel. Nulla et risus neque. Donec convallis vestibulum ante, eget aliquam arcu. Curabitur ultrices rhoncus leo, a egestas mi mattis eu. Phasellus commodo eget ante id vestibulum. Pellentesque nec fringilla diam, ut lobortis mauris. Quisque at porttitor libero.

                    Morbi non felis dolor. Sed posuere efficitur tortor, ut pretium augue auctor quis. Pellentesque eu urna ac quam mollis molestie. Phasellus ullamcorper convallis neque, eu dignissim est laoreet accumsan. Mauris nisi libero, mollis ut fermentum malesuada, semper eu arcu. Vivamus rutrum augue quis maximus fringilla. Donec eleifend libero libero, vel consequat nulla elementum vitae.

                      Donec ut feugiat nisi, aliquet mollis tortor. Quisque commodo accumsan nisl, vel commodo metus elementum id. Morbi turpis dui, egestas non convallis nec, consectetur at erat. Sed et imperdiet neque. Curabitur ac fermentum dolor. Morbi vitae diam velit. Vivamus lobortis, enim id scelerisque placerat, odio mi vehicula enim, vitae convallis magna felis a odio.
                </p>
              </div>
            </div>
          </main>  
            
        </Layout>
      </div>   
    )
}
export default Nosotros
