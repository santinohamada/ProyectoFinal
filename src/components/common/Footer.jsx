import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="custom-footer bg-light text-dark py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3">
            <h5 className="hotel-title-footer">HOTEL</h5>
            <p>Experiencia única de confort y relajación.</p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h6>Contacto</h6>
            <p>Tel: ## </p>
            <p>Dirección: Tucumán, Argentina</p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h6>Síguenos</h6>
            <div className="social-links d-flex justify-content-center">
              <a href="#" className="social-icon">
                Facebook
              </a>
              <a href="#" className="social-icon">
                Instagram
              </a>
              <a href="#" className="social-icon">
                Twitter
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">
              &copy; 2024 HOTEL. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
