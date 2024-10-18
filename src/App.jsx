import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import IniciarSesion from './components/pages/IniciarSesion'
import Inicio from './components/pages/Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/iniciarSesion" element={<IniciarSesion></IniciarSesion>}></Route>
      <Route exact path="/registro" element={<RegistrationForm></RegistrationForm>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
     
     
     
    </>
  )
}

export default App
