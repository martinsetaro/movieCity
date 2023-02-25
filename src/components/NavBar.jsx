import {Link, useRouteLoaderData} from 'react-router-dom';
import { useState,useEffect } from 'react';

const NavBar = () => {
    const [logueado,setLogueado] = useState(false);
    ;


    useEffect(()=>{
const token = localStorage.getItem('dataToken')
if(token){
      setLogueado(true);
      
    }else 
    {
      setLogueado(false);
    }

    },[])

  


  return (
    <div className="w-1/2 h-16 uppercase text-4xl text-white flex justify-around mt-20">
         {logueado && <Link to='/favoritos' className="hover:text-orange transition-all" >Favoritos</Link>}
        <Link to='/' className="hover:text-orange transition-all">Inicio</Link>
      
        {logueado ? <Link to='/logout' className="bg-orange rounded-lg p-1 px-2 mb-2" href="#">Log-Out</Link> : 
        <Link to='/login' className="bg-orange rounded-lg p-1 px-2 mb-2">Login</Link>}
      
    </div>
  )
}

export default NavBar
