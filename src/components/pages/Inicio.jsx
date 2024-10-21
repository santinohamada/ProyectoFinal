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

          {/* Descripción del hotel */}
          <p className="text-center mb-5 hotel-description">
            Ubicado en el corazón de la Patagonia, al sur de Argentina, nuestro
            hotel ofrece un refugio exclusivo para quienes buscan combinar la
            serenidad de la naturaleza con el confort de un alojamiento de lujo.
            Rodeado de paisajes majestuosos, montañas nevadas y lagos
            cristalinos, el hotel brinda una experiencia única para quienes
            desean desconectar y disfrutar de la belleza natural de la región.
            Con instalaciones de primer nivel y una atención personalizada, cada
            detalle ha sido pensado para que vivas momentos inolvidables en este
            rincón del mundo.
          </p>

          <Row className="gy-4">
            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/28054888/pexels-photo-28054888/free-photo-of-paisaje-vacaciones-hotel-relajante.jpeg"
                  alt="Habitación con vista al mar"
                />
                <Card.Body>
                  <Card.Title>Habitación con Vista al Mar</Card.Title>
                  <Card.Text>
                    Disfruta de la brisa y el sonido del mar desde la comodidad
                    de tu habitación.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg"
                  alt="Restaurante Gourmet"
                />
                <Card.Body>
                  <Card.Title>Restaurante Gourmet</Card.Title>
                  <Card.Text>
                    Prueba los mejores platos locales e internacionales en
                    nuestro restaurante exclusivo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/5865693/pexels-photo-5865693.jpeg"
                  alt="Piscina Infinita"
                />
                <Card.Body>
                  <Card.Title>Piscina</Card.Title>
                  <Card.Text>
                    Relájate en nuestra piscina mientras disfrutas de una vista
                    panorámica. Zona de bar para mayor confort.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/433626/pexels-photo-433626.jpeg"
                  alt="Spa de Lujo"
                />
                <Card.Body>
                  <Card.Title>Spa de Lujo</Card.Title>
                  <Card.Text>
                    Descubre un mundo de relajación en nuestro spa de lujo.
                    Incluye masajes, sauna y tratamientos de belleza.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/20944032/pexels-photo-20944032/free-photo-of-restaurante-naturaleza-vacaciones-amor.jpeg"
                  alt="Centro de Eventos"
                />
                <Card.Body>
                  <Card.Title>Centro de Eventos</Card.Title>
                  <Card.Text>
                    Organiza tus eventos en nuestro centro de convenciones.
                    Equipado con lo mejor para tu comodidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/19689234/pexels-photo-19689234/free-photo-of-mesa-lujo-interior-vela.jpeg"
                  alt="Sala VIP"
                />
                <Card.Body>
                  <Card.Title>Sala VIP</Card.Title>
                  <Card.Text>
                    Exclusivo sala VIP y áreas de descanso.
                    Ideal para reuniones privadas y momentos de tranquilidad.
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
