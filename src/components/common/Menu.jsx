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

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link text-end">
              <MyModal>Reservar</MyModal>
            </Nav.Link>
            <NavLink to="/nosotros" className="nav-link text-end">
              Nosotros
            </NavLink>
            <NavLink to="/contactos" className="nav-link text-end">
              Contactos
            </NavLink>
          </Nav>
          <Nav className="mx-auto">
            <NavLink to="/" className="navbar-brand hotel-title text-end">
              HOTEL PATAGONIA
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            {isAdmin && (
              <NavLink to="/administrador" className="nav-link text-end">
                Administrador
              </NavLink>
            )}
            {!user ? (
              <NavLink to="/iniciarSesion" className="nav-link text-end">
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
