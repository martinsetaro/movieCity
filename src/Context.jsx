import { createContext } from "react";
import { useState } from "react";
import axios from 'axios';


export const contexto  = createContext();
const { Provider} = contexto;


const Context = ({children}) => {

    const[pelicula,setPelicula]= useState([]);
    const [datosGuardados,setDatosGuardados] = useState([]);
   


const buscarMovie = (id) =>{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=677650d0c73145c6417b08814d591f68&language=en-US&query=${id}&page=1&include_adult=false`
axios.get(url).then( res => {
    setPelicula(res.data.results)}).catch( err => console.log(err));
};




const ComponenteFavorito = (movieFavorita)=>{
 const {titulo} = movieFavorita;
 const datos=[...datosGuardados];
 const nuevoDato = datos.filter( dato => dato.titulo != titulo)
 setDatosGuardados([movieFavorita,...nuevoDato])
 
}

const removeItem = (id)=>{
    const newCart = datosGuardados.filter(producto => producto.titulo != id);
    setDatosGuardados(newCart);
}


   

    return (
        <Provider value={{buscarMovie,pelicula ,ComponenteFavorito , datosGuardados ,removeItem}}>
            {children}
        </Provider>
    );
}

export default Context;
