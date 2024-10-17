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
            <NavLink to="#home" className="nav-link-custom">
              Inicio
            </NavLink>
            <NavLink to="#services" className="nav-link-custom">
              Reservas
            </NavLink>
            <NavLink to="#about" className="nav-link-custom">
              Nosotros
            </NavLink>
            <NavLink to="#gallery" className="nav-link-custom">
              Contactos
            </NavLink>
          </Nav>
          <Nav className="mx-auto">
            <Navbar.Brand href="#" className="hotel-title">
              HOTEL
            </Navbar.Brand>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="#contact" className="nav-link-custom">
              Administración
            </NavLink>
            <NavLink to="#book" className="nav-link-custom">
              Registrarse
            </NavLink>
            <NavLink to="#book" className="nav-link-custom">
              Iniciar sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
