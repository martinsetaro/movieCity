import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Buscador from './Buscador';

const FirstPage = () => {

  const [movie,setMovie]=useState([]);
  const token = localStorage.getItem('dataToken');

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=677650d0c73145c6417b08814d591f68&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  useEffect(()=>{

 axios.get(url).then(response => setMovie(response.data.results)).catch( err => console.log(err));

  },[])


  return (
    <div className='bg-negro pt-14'>
      {token && <Buscador/>}
      <h1 className='text-center text-white uppercase text-5xl'>Peliculas en cartelera de cine</h1>
      <div className='w-full flex flex-wrap justify-between'>
        {movie.map( movies =>{
          return(
            <div key={movies.id} className="w-1/4 h-auto rounded-md p-3 mt-12 mb-12 bg-griso">
              <h2 className='text-center text-2xl uppercase font-bold text-white mb-6'>{movies.title}</h2>
            
              <img  src={`http://image.tmdb.org/t/p/w500/${movies.poster_path}`}/>
              <p className='text-white text-xl text-center mt-3'>{movies.overview.substring(0,200)+'...'}</p>
              <Link to={`/movie/${movies.id}`}><button className='bg-orange text-xl text-white uppercase rounded-md p-2 mt-8 ml-20'>Ver Detalles</button></Link>

            </div>
          )
        })}
    
      </div>
     
    </div>
  )
}

export default FirstPage
