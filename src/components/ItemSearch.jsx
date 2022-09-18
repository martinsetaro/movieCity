import { useContext } from "react"
import { contexto } from "../Context"
import Loader from './Loader';
import {useState} from 'react';


const ItemSearch = () => {

const {pelicula} = useContext(contexto);
const [cargando,setCargando] = useState(true);

setTimeout(()=>{
    setCargando(false);
},3000)


  return (
   cargando ? <Loader/> :
    <div className="flex justify-around flex-wrap p-20 bg-negro">
        {pelicula.map(item => {
            return(
                <div className="w-72 h-96 mb-48 text-white">
                    <h2 className="text-2xl text-center font-bold mb-4">{item.title}</h2>
                    <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img"/>
                </div>
            )
        })}
    </div>
  )
}

export default ItemSearch