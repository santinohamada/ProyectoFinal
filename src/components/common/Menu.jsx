import { Navbar, Nav, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#services">Reservas</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Navbar.Brand href="#" className="hotel-title">
              HOTEL
            </Navbar.Brand>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#gallery">Contactos</Nav.Link>
            <Nav.Link href="#contact">Administracion</Nav.Link>
            <Nav.Link href="#book">Registrarse</Nav.Link>
            <Nav.Link href="#book">Iniciar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
