import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link-custom">
              Inicio
            </NavLink>
            <NavLink to="/reservas" className="nav-link-custom">
              Reservas
            </NavLink>
            <NavLink to="/nosotros" className="nav-link-custom">
              Nosotros
            </NavLink>
            <NavLink to="/contactos" className="nav-link-custom">
              Contactos
            </NavLink>
          </Nav>
          <Nav className="mx-auto">
            <Navbar.Brand href="#" className="hotel-title">
              HOTEL
            </Navbar.Brand>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="/administrador" className="nav-link-custom">
              Administrador
            </NavLink>
            <NavLink to="/registrarse" className="nav-link-custom">
              Registrarse
            </NavLink>
            <NavLink to="/iniciar sesión" className="nav-link-custom">
              Iniciar sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
