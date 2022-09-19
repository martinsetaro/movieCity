import { useContext, useEffect, useState } from "react";
import { contexto } from "../Context";

const Favoritos = () => {

    const {datosGuardados , removeItem} = useContext(contexto);

    const [favorito,setFavorito]= useState([]);


   useEffect(()=>{
    setFavorito(datosGuardados);
    
   },[datosGuardados])
        
const eliminar = (e)=>{
   const elimina = e.target.parentElement;
   const titulo = elimina.querySelector('h2').textContent;
   removeItem(titulo)
}
   




  return (
    <div className="w-full h-auto mb-96">
        <h2 className="text-5xl uppercase mt-6 mb-4 text-center">Favoritos</h2>
        <div className="w-full h-auto flex justify-around">
        {favorito.map( (datos,index) => {
            return(
                <div key={index} className="w-1/4 p-3 text-center shadow-lg">
                    <h2 className="text-3xl uppercase mt-6 mb-4">{datos.titulo}</h2>
                    <img src={datos.imagen} alt="img"/>
                    <p className="text-2xl">{datos.texto}</p>
                    <button onClick={eliminar} className='bg-orange w-24 ml-3 text-white uppercase rounded-lg p-2 h-12 text-xl mt-4'>Quitar</button>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Favoritos