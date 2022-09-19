import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-griso w-full h-28 flex justify-around  bottom-0 fixed">
      <h2 className="text-6xl text-white text-center p-4 mt-2">Movie City</h2>
      <h4 className="text-center text-2xl text-orange mt-12">Realizado por Martin Setaro &copy; 2022</h4>
      <Link to='/'><button 
      className='bg-orange w-32 ml-3 text-white uppercase
       rounded-lg p-2 h-12  text-2xl mt-8'>Inicio</button></Link>
    </div>
  )
}

export default Footer
