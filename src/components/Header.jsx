import Logo from '../assets/logo.png'
import NavBar from './NavBar'

const Header = () => {


   


  return (
    <div className="h-42 w-full bg-negro flex justify-around align-middle">
      <img className='h-40 mt-4 ' src={Logo} alt="img"/>
      <NavBar/>
    </div>
  )
}

export default Header
