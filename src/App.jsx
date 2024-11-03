import Nosotros from "./components/pages/Nosotros";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import IniciarSesion from "./components/pages/IniciarSesion";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Reservar from "./components/pages/Reservar";
import { UserProvider } from "./components/Context/UserContext";
import RutaProtegida from "./routes/RutaProtegida";
import RutasAdministrador from "./routes/RutasAdministrador";
import VerHabitaciones from "./components/pages/VerHabitaciones";
import Error404 from "./components/pages/Error404";
import Contacto from "./components/pages/Contacto"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Menu />
          <Routes>
            <Route
              exact
              path="/nosotros"
              element={<Nosotros></Nosotros>}
            ></Route>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/iniciarSesion" element={<IniciarSesion />} />
            <Route exact path="/registro" element={<RegistrationForm />} />
            <Route exact path="/reservar" element={<Reservar />} />
            <Route
              exact
              path="/verhabitaciones"
              element={<VerHabitaciones />}
            />
            <Route exact path="/error404" element={<Error404 />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route
              exact
              path="/administrador/*"
              element={
                <RutaProtegida>
                  <RutasAdministrador />
                </RutaProtegida>
              }
            />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
