import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center inicio-content">
        <h1 className="display-3 hotel-font mb-3">Una Nueva Visión De Confort</h1>
        <p className="lead">Bienvenidos</p>
        <Button className="reserva-btn" variant="light">
          RESERVA TU EXPERIENCIA
        </Button>
      </Container>
    </div>
  );
};

export default Inicio;
