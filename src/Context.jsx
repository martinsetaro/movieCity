import { createContext } from "react";
import { useState } from "react";
import axios from 'axios';


export const contexto  = createContext();
const { Provider} = contexto;


const Context = ({children}) => {

    const[pelicula,setPelicula]= useState([]);
   


const buscarMovie = (id) =>{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=677650d0c73145c6417b08814d591f68&language=en-US&query=${id}&page=1&include_adult=false`
axios.get(url).then( res => {
    console.log(res.data.results)
    setPelicula(res.data.results)}).catch( err => console.log(err));
};


    
    

   

    return (
        <Provider value={{buscarMovie,pelicula }}>
            {children}
        </Provider>
    );
}

export default Context;
