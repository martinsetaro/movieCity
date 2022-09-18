import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const LogOut = () => {

    let navigate = useNavigate();

    const salir = () => {
        localStorage.removeItem('dataToken');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'sesión finalizada',
            showConfirmButton: false,
            timer: 1500
          })
         
           
            navigate('/');
            setTimeout(()=>{
                window.location.reload();
            },1500)
             
       
         
             
           
          

    }
    const regresar = () =>{
        navigate('/');
    }



  return (
    
        <div className="m-auto w-1/2 shadow-lg mt-4 mb-96">
      <form className="flex flex-col p-4 text-3xl w-1/2 m-auto mt-14">
        <h2>Estas por cerrar sesión de cuenta!!</h2>
        <p>Si quieres salir presiona LogOut o sinó volver atras.</p>
        <button onClick={salir} 
        className="cursor-pointer h-16 rounded-md 
        shadow-md mt-5 bg-orange text-white">Log Out</button>
        <button onClick={regresar} 
        className="cursor-pointer h-16 rounded-md 
        shadow-md mt-5 bg-orange text-white">Atras</button>
      </form>
    </div>
      
    
  )
}

export default LogOut
