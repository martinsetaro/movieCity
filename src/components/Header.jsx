import Logo from '../assets/logo.png'
import NavBar from './NavBar'

const Header = () => {


   


  return (
    <div className="h-96 w-full bg-negro flex justify-around align-middle sm:flex-col pb-8">
      <img className='h-40 mt-4 sm:h-18 ' src={Logo} alt="img"/>
      <NavBar/>
    </div>
  )
}

export default Header
