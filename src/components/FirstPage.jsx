import {useState,useEffect} from 'react';
import { useContext } from 'react';
import { contexto } from '../Context';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Buscador from './Buscador';
import Swal from 'sweetalert2'

const FirstPage = () => {

  const [movie,setMovie]=useState([]);
  const {ComponenteFavorito} = useContext(contexto)
  const token = localStorage.getItem('dataToken');

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=677650d0c73145c6417b08814d591f68&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  useEffect(()=>{

 axios.get(url).then(response => setMovie(response.data.results)).catch( err => console.log(err));

  },[])


  const handleClick = (e) => {
    const seleccionar = e.target.parentElement.parentElement;
    const titulo = seleccionar.querySelector('h2').textContent;
    const imagen = seleccionar.querySelector('img').src;
    const texto = seleccionar.querySelector('p').textContent;
    
    const movieFavorita = {
      titulo:titulo,
      imagen:imagen,
      texto:texto
      
    }
    ComponenteFavorito(movieFavorita);
 
   Swal.fire('Añadido a favoritos!!')
  }



  return (
    <div className='bg-negro pt-14 pb-40'>
      {token && <Buscador/>}
      <h1 className='text-center text-white uppercase text-5xl sm:text-2xl'>Peliculas en cartelera de cine</h1>
      <div className='md: flex flex-wrap justify-between pt-6 sm:flex-col'>
        {movie.map( movies =>{
          return(
            <div key={movies.id} className="w-1/3 h-auto rounded-md p-3 mt-12 mb-12 bg-griso sm:w-full">
              <h2 className='text-center text-2xl uppercase font-bold text-white mb-6'>{movies.title}</h2>
              <span onClick={handleClick} className='text-orange text-5xl absolute ml-3 cursor-pointer'><ion-icon name="heart"></ion-icon></span>
              <img className='sm:m-auto' src={`http://image.tmdb.org/t/p/w500/${movies.poster_path}`}/>
              <p className='text-white text-xl text-center mt-3 sm:text-sm'>{movies.overview.substring(0,200)+'...'}</p>
              <Link to={`/movie/${movies.id}`}><button className='bg-orange text-xl text-white uppercase rounded-md p-2 mt-8 ml-20'>Ver Detalles</button></Link>

            </div>
          )
        })}
    
      </div>
     
    </div>
  )
}

export default FirstPage
