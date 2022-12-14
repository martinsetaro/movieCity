
import {Routes,Route} from 'react-router-dom'
import FirstPage from './components/FirstPage'
import Login from './components/Login'
import LogOut from './components/LogOut'
import ItemMovies from './components/ItemMovies'
import ItemSearch from './components/ItemSearch'
import Favoritos from './components/Favoritos'


const Container = () => {


  return (
    <div>
    <Routes>
     <Route path='/' element={<FirstPage/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/logout' element={<LogOut/>}/>
     <Route path='/movie/:id' element={<ItemMovies/>}/>
     <Route path='/itemSearch' element={<ItemSearch/>}/>
     <Route path='/favoritos' element={<Favoritos/>}/>
    </Routes>
    </div>
  )
}

export default Container
