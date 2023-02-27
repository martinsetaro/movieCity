import Swal from 'sweetalert2'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';


const Login = () => {

  const error =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [token,setToken] = useState('');
    const [cargando,setCargando]= useState(true);

    localStorage.setItem('dataToken', token);

 

const enviar = () =>{


 
        if(email.toUpperCase() == 'ADMIN@ADMIN.COM' && password.toUpperCase() === 'ADMIN'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login exitoso!',
            showConfirmButton: false,
            timer: 1500
          })
           setToken('exitoso');
          setTimeout(()=>{
         
            navigate('/');
            window.location.reload();
           
          },2000)

                 
           }else 
           {

            
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario no reconocido!',
                    footer: '<a href="">revise sus datos</a>'
                  })
           }
      
    
      
            

}



    const verify = ()=>{
        if(!error.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese un email valido!',
                footer: '<a href="">revise sus datos</a>'
              })
              
            }else if (password === "" || email === "" ){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos no pueden ir vacios!',
                footer: '<a href="">revise sus datos</a>'
              })
        } else 
        {
            enviar();

        }
    }

  const handleSubmit = (e) => {
   e.preventDefault();
   verify();
  }

  setTimeout(()=>{
    setCargando(false)
  },5000)



  return (
    cargando ? <Loader/> : <div className="m-auto w-4/5 shadow-lg mt-4 mb-96 sm:w-full">
      <form onSubmit={handleSubmit} className="flex flex-col p-4 text-3xl w-2/5 m-auto mt-8 sm:w-full">
        <p className='text-xl'>Email: admin@admin.com</p>
        <p className='text-xl mb-8'>Password : admin</p>
        <label className='text-xl'>Ingrese email
            <input onChange={(e) => {setEmail(e.target.value)}} className="w-full shadow-sm mt-4 mb-8 outline-none h-12 border-b-2" type="email" placeholder="Ingrese su email"/>
        </label>
        <label className='text-xl'>Password
            <input onChange={(e) => {setPassword(e.target.value)}} className="w-full shadow-sm mt-4 mb-8 outline-none border-b-2" type="password" placeholder="Ingrese su Password"/>
        </label>
        <input className="cursor-pointer h-16 rounded-md shadow-md mt-5 bg-orange text-white" type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default Login
