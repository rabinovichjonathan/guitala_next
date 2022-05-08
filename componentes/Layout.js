import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) =>{
    return(
     <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
            <link rel="icon" href="/favicon.ico" />
          

        </Head>
        <Header
            guitarra={guitarra}
        />
        {children}
        <Footer />
     </div>    
    )
}

Layout.defaultProps = {
    guitarra: null
}

export default Layout
