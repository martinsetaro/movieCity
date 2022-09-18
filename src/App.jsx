import Container from './Container';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Context from './Context';


function App() {
 

  return (
    <BrowserRouter>
    <Context>
    <Header/>
    <Container/>
    <Footer/>
    </Context>
    </BrowserRouter>
     
    
  )
}

export default App
