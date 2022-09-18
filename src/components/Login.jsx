import Swal from 'sweetalert2'
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const error =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [token,setToken] = useState('');

    localStorage.setItem('dataToken', token);

 

const enviar = () =>{


    axios.post('http://challenge-react.alkemy.org',{email , password})
    .then(response => {
         setToken(response.data.token);
        if(response.status == 200){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login exitoso!',
            showConfirmButton: false,
            timer: 1500
          })
           
          setTimeout(()=>{
         
            navigate('/');
            window.location.reload();
           
          },2000)

                 
           }
      
    })
        .catch( err => {
            if(err){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario no reconocido!',
                    footer: '<a href="">revise sus datos</a>'
                  })
            }
            console.log(err)})

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



  return (
    <div className="m-auto w-1/2 shadow-lg mt-4 mb-96">
      <form onSubmit={handleSubmit} className="flex flex-col p-4 text-3xl w-2/5 m-auto mt-8">
        <label>Ingrese email
            <input onChange={(e) => {setEmail(e.target.value)}} className="w-full shadow-sm mt-4 mb-8 outline-none h-12" type="email" placeholder="Ingrese su email"/>
        </label>
        <label>Password
            <input onChange={(e) => {setPassword(e.target.value)}} className="w-full shadow-sm mt-4 mb-8 outline-none" type="password" placeholder="Ingrese su Password"/>
        </label>
        <input className="cursor-pointer h-16 rounded-md shadow-md mt-5 bg-orange text-white" type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default Login
