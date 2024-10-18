import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import MyModal from "../Modal/MyModal";
import { FiltersProvider } from "../Context/FiltersContext";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center inicio-content">
        <h1 className="display-3 hotel-font mb-3">
          Una Nueva Visión De Confort
        </h1>
        <p className="lead">Bienvenidos</p>
        <FiltersProvider>
          <MyModal>
            <Button className="reserva-btn my-1" variant="light">
              RESERVA TU EXPERIENCIA
            </Button>
          </MyModal>
        </FiltersProvider>
      </Container>
    </div>
  );
};

export default Inicio;
