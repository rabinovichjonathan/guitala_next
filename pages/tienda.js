import Listado from '../componentes/Listado'
import Layout from '../componentes/Layout'

const Tienda = ({guitarras}) =>{
  
  return(
      <div> 
        <Layout
            pagina="Tienda Virtual"
        >
          <main className='contenedor'>  
            <h1 className='heading'>Nuestra colección</h1>
            <Listado
              guitarras = {guitarras}
            />
          </main>
        </Layout>
      </div>   
    )
}
export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  
  return{
    props:{
      guitarras
    }
  }
}

export default Tienda