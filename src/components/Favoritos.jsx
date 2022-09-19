import { useContext, useEffect, useState } from "react";
import { contexto } from "../Context";

const Favoritos = () => {

    const {datosGuardados} = useContext(contexto);

    const [favorito,setFavorito]= useState([]);


   useEffect(()=>{
    setFavorito(datosGuardados);
    
   },[])
        
        
   



  return (
    <div className="w-full h-auto mb-96">
        <h2 className="text-5xl uppercase mt-6 mb-4 text-center">Favoritos</h2>
        <div className="w-full h-auto flex mb-96">
        {favorito.map( datos => {
            return(
                <div className="w-1/2 p-3 text-center">
                    <h2 className="text-3xl uppercase mt-6 mb-4">{datos.titulo}</h2>
                    <img src={datos.imagen} alt="img"/>
                    <p>{datos.texto}</p>
                    <button>Quitar</button>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Favoritos