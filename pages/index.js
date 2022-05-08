import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../componentes/Layout'
import Listado from '../componentes/Listado'
import Curso from '../componentes/Curso'
import ListadoBlog from '../componentes/ListadoBlog'

 const Home = ({guitarras, curso, entradas}) => {
  
  console.log(curso)
  return (
    <div>
      <Layout
       pagina="Inicio"
       guitarra ={guitarras[3]}
      >
        <main className='contenedor'>
          <h1 className='heading'>
            Nuestra colección
          </h1>
          <Listado 
            guitarras={guitarras}
          />
          
          <Curso 
            curso={curso}
          />
        </main>
        <section className='contenedor'>
          <ListadoBlog 
            entradas={entradas}
          />
        </section>
          
        
      </Layout>
      
    </div>
  )
}
export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/titulo`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`
  
  const[resGuitarras, resCursos, resBlog] = await Promise.all([fetch(urlGuitarras),
  fetch(urlCursos), fetch(urlBlog)])
  
  const[guitarras, curso, entradas] = await Promise.all([resGuitarras.json(), resCursos.json(), resBlog.json()])
  
  
  
  return{
      props:{
          guitarras,
          curso,
          entradas
      }
  }
}

export default Home
