import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="custom-navbar bg-light">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={4} className="text-end">
            <Nav className="justify-content-end">
              <Nav.Link href="#" className="nav-item">
                INICIO
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                RESERVAS
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                NOSOTROS
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                CONTACTOS
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={4} className="text-center">
            <Navbar.Brand href="#" className="hotel-title">
              HOTEL
            </Navbar.Brand>
          </Col>
          <Col xs={4} className="text-start">
            <Nav className="justify-content-start">
              <Nav.Link href="#" className="nav-item active">
                REGISTRARSE
              </Nav.Link>
              <Nav.Link href="#" className="nav-item active">
                ADMINISTRACION
              </Nav.Link>
              <Nav.Link href="#" className="nav-item active">
                INICIAR SESION
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Menu;
