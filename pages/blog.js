
import Entrada from '../componentes/Entrada'
import Layout from '../componentes/Layout'
import Listado from '../componentes/Listado'
import ListadoBlog from '../componentes/ListadoBlog'


const Blog = ({entradas}) =>{
  
  return(
      <div> 
        <Layout
            pagina="Blog"
        >
           
           <main className='contenedor'>
            <ListadoBlog 
              entradas={entradas}
            />
           </main>
           
            
        </Layout>
      </div>   
    )
}

export async function getStaticProps(){
    
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

  return{
    props:{
      entradas
    }
  }
}

export default Blog