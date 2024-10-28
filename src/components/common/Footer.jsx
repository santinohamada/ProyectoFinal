import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <a href="#" className="social-icon mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon mx-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-icon mx-2">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" className="social-icon mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-icon mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <h5 className="footer-brand my-4">HOTEL PATAGONIA</h5>
            <p className="mb-0">
              &copy; 2024 HOTEL PATAGONIA. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <a href="#" className="footer-link mx-3">
              Información legal
            </a>
            <a href="#" className="footer-link mx-3">
              Política de privacidad
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
