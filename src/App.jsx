import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import IniciarSesion from './components/pages/IniciarSesion'
import Inicio from './components/pages/Inicio'
import Nosotros from './components/pages/Nosotros'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Reservar from './components/pages/Reservar'
import { CartProvider } from './components/Context/CartContext'
import { FiltersProvider } from './components/Context/FiltersContext'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
        
      <Route exact path="/iniciarSesion" element={<IniciarSesion></IniciarSesion>}></Route>
      <Route exact path="/registro" element={<RegistrationForm></RegistrationForm>}></Route>
      <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      <Route exact path="/reservar" element={
         <CartProvider>
          <FiltersProvider>

           <Reservar></Reservar>
          </FiltersProvider>
         </CartProvider>
      }></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
     
     
     
    </>
  )
}

export default App
