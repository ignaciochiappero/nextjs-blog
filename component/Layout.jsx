import Link from "next/link";
import estilos from "/styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";


export default function Layout({children, title, description, home}) {

  return (
    <div>

        <Head>
        <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta 
            name="description"
            content={description}          
          />
        </Head>

      <nav>
        
        <div className={estilos.navContainer}>

          <div><Link href="/">Home</Link></div>
          <div><Link href="/blog">Blogs</Link></div>
          <div><Link href="/about">About</Link></div>
          <div><Link href="/contact">Contact</Link></div>


        </div>
        
      </nav>

      {
        home ? (

          <div className={estilos.imgContainer}>
            <Image
            src="/img/perfil.png"
            height={144}
            width={144}
            >

            </Image>
          </div>
        )  : (

          <div className={estilos.imgContainer}>
          <Image
          src="/img/perfil.png"
          height={104}
          width={104}
          >

          </Image>
        </div>
        )
      }


      <div>
        {children}
      </div>


      <footer>
        Footer
      </footer>


      {
        !home && (
            <div className={estilos.backToHome}>

              <Link href="/">← Back to Home</Link>
            </div>
        )
      }



    </div>
  )
}


Layout.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
}

