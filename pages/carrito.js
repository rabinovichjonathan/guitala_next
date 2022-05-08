import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../componentes/Layout"
import styles from '../styles/Carrito.module.css'




const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) =>{

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad*producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    const [productos, setProductos] = useState([])
    return(
        <Layout
            pagina={"Carrito de compras"}
        >
            <h1 className='heading'>Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
               
                <div>
                  <h2>Artículos</h2>  
                    {carrito.length === 0 ? "No hay productos en el carrito" : (
                        carrito.map( producto => (
                            <div key={producto._id} className={styles.producto}>
                                <div>
                                    <Image layout="responsive" height={480} width={250} src={producto.imagen} alt={`imagen de ${producto.nombre}`}/>
                                </div>
                                <div>
                                    <p className={styles.producto}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p >Cantidad:</p>
                                        <select 
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={(e) => {actualizarCantidad({
                                                id:producto._id,
                                                cantidad: e.target.value
                                            })}}
                                        >
                                            
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                        </select>
                                    </div>    
                                    <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio *  producto.cantidad}</span></p>
                                </div>
                                <button 
                                    type="button"
                                    className={styles.eliminar}
                                    onClick= {() =>eliminarProducto(producto._id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </>
                    ):(
                        <h3>No hay productos en el carrito</h3>
                    )}  
                    
                    

                </div>
               
            </main>  
        
           
        </Layout>
    
    )
       
}

export default Carrito