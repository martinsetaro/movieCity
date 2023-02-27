import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../Context';




const Buscador = () => {

    const { buscarMovie} = useContext(contexto);
    const [search,setSearch] = useState('');



  const busca = () =>{
   
   buscarMovie(search)
   console.log(search)
  }




  return (
    <div className=' w-full h-28 flex justify-center'>
        <input onChange={(e)=> setSearch(e.target.value)} className='w-1/4 h-12 p-2 text-2xl rounded-md sm:w-3/4' type="text" placeholder='Buscar pelicula'/>
        <Link to='/itemSearch'><button onClick={busca} className='bg-orange w-24 ml-3 text-white uppercase rounded-lg p-2 h-12 text-xl'>Buscar</button></Link>
        
    </div>
  )
}

export default Buscador
