import Layout from "@/component/Layout";
import estilos from "/styles/Layout.module.css";
import Link from "next/link";

export default function listaBlog({data}) {
  return (
    <Layout
    title="Lista Blog"
    description="Lista Blog page"
    >
      <h1>Lista de Blogs</h1>


    <div className={estilos.blogMainContainer}>
      {
        data.map(({id,title,body}) => (
         
         <Link href={`/blog/${id}`}>
         <div className={estilos.blogContainer} key={id}>

            <h3>{id} - {title}</h3>

            <p>{body}</p>
          </div>

          </Link>
        ))
      }
    </div>
      
    </Layout>
  )
}



export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();

    return {
      props: { data }
    }
    
  }catch (error){
    console.log(error);
  }
}