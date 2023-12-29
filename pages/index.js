import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";



  export default function Home(){

     const {categoriaActual} = useQuiosco()

    return (
      
         <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
              <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
              <p className="text-2xl mt-10">Elije tu pedido a continuacion</p>
          <div className="grid gap-4 grids-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {categoriaActual?.productos?.map(producto => (
                    <Producto
                         key={producto.id} 
                         producto = {producto}
                    />

              ))}
          </div>

         </Layout>
     
      )
  }

  