import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import MyModal from "../Modal/MyModal";

const Inicio = () => {
  return (
    <>
      {/* Sección principal con texto y botón */}
      <div className="inicio-container">
        <Container className="d-flex flex-column justify-content-center align-items-center text-center inicio-content">
          <h1 className="display-3 hotel-font mb-3">
            Una Nueva Visión De Confort
          </h1>
          <p className="lead">Bienvenidos</p>

          <MyModal>
            <Button className="reserva-btn my-1" variant="light">
              RESERVA TU EXPERIENCIA
            </Button>
          </MyModal>
        </Container>
      </div>

      {/* Sección separada para las imágenes del hotel */}
      <div className="images-section">
        <Container className="py-5">
          <h2 className="text-center mb-4">Explora Nuestro Hotel</h2>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="hotel-card">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg" 
                  alt="Habitación con vista al mar" 
                />
                <Card.Body>
                  <Card.Title>Habitación con Vista al Mar</Card.Title>
                  <Card.Text>
                    Disfruta de la brisa y el sonido del mar desde la comodidad de tu habitación.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="hotel-card">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg" 
                  alt="Restaurante Gourmet" 
                />
                <Card.Body>
                  <Card.Title>Restaurante Gourmet</Card.Title>
                  <Card.Text>
                    Prueba los mejores platos locales e internacionales en nuestro restaurante exclusivo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="hotel-card">
                <Card.Img 
                  variant="top" 
                  src="https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg" 
                  alt="Piscina Infinita" 
                />
                <Card.Body>
                  <Card.Title>Piscina Infinita</Card.Title>
                  <Card.Text>
                    Relájate en nuestra piscina infinita mientras disfrutas de una vista panorámica.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Inicio;
