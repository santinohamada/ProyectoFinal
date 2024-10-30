import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyModal from "../Modal/MyModal";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext.jsx";

const Menu = () => {
  const { cerrarSesion, user, isAdmin } = useContext(UserContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
console.log(isAdmin)
  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" end className="nav-link">
              Inicio
            </NavLink>
            <Nav.Link className="nav-link">
              <MyModal>Reservar</MyModal>
            </Nav.Link>
            <NavLink to="/nosotros" className="nav-link">
              Nosotros
            </NavLink>
            <NavLink to="/contactos" className="nav-link">
              Contactos
            </NavLink>
          </Nav>
          <Nav className="mx-auto">
            <NavLink to="/" className="navbar-brand hotel-title">
              HOTEL PATAGONIA
            </NavLink>
          </Nav>
          {isAdmin ? (
            <NavLink to="/administrador" className="nav-link">
              Administrador
            </NavLink>
          ) : (
            ""
          )}
          <Nav className="ms-auto">
            {!user ? (
              <NavLink to="/iniciarSesion" className="nav-link">
                Iniciar sesión
              </NavLink>
            ) : (
              <NavLink
                onClick={() => {
                  cerrarSesion();
                }}
                className="nav-link"
              >
                Cerrar sesión
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
