import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import Loader from './Loader';


const ItemMovies = () => {

  const {id } = useParams();

  const [movie,setMovie] = useState([]);
  const [cargando,setCargando] = useState(true);

  const url=`https://api.themoviedb.org/3/movie/${id}?api_key=677650d0c73145c6417b08814d591f68&language=es-ES`;

  axios.get(url).then(res => {setMovie(res.data) 
    }).catch(err => console.log(err));


    setTimeout(()=>{
      setCargando(false);
    },3000)


  return (
    cargando ? <Loader/> : 
    <div className="w-full h-auto flex mb-96 sm:flex-col mt-6">
      <div className="w-1/2 flex justify-center p-2 sm:w-full">
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img"/>
      </div>
      <div className="w-1/2 p-3 text-center sm:w-full">
      
      <h2 className="text-5xl uppercase mt-6 mb-4">{movie.title}</h2>
      <h4 className="text-3xl mb-4">Titulo original : {movie.original_title}</h4>
      <h3 className="text-3xl mb-4">Fecha lanzamiento: {movie.release_date}</h3>
      <h3 className="text-3xl mb-4">Sinopsis</h3>
      <p className="text-xl mb-4">{movie.overview}</p>
      <h3 className="text-3xl mb-4">Promedio de votos</h3>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <p className="text-3xl mb-4">{movie.vote_average}</p>
      
      
     
      </div>
      
      
    </div>
  )
}

export default ItemMovies
