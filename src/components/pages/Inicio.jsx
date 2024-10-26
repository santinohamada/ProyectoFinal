import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card, Row, Col, Carousel } from "react-bootstrap";
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
            <Button className="reserva-btn my-4" variant="light">
              RESERVA TU EXPERIENCIA
            </Button>
          </MyModal>
        </Container>
      </div>

      {/* Sección separada para las imágenes del hotel */}
      <div className="images-section">
        <Container className="py-5">
          <h2 className="text-center mb-4">Hotel Patagonia</h2>

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
                  src="https://images.pexels.com/photos/20666872/pexels-photo-20666872/free-photo-of-hotel-habitacion-viaje-viajar.jpeg"
                  alt="Habitación con vista a la Naturaleza"
                />
                <Card.Body>
                  <Card.Title>Habitación con Vista a la Naturaleza</Card.Title>
                  <Card.Text>
                    Disfruta de la hermosa vista desde la comodidad de tu
                    habitación.
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
                  src="https://images.pexels.com/photos/28054351/pexels-photo-28054351/free-photo-of-nieve-nevar-paisaje-naturaleza.jpeg"
                  alt="ACtividades en grupo"
                />
                <Card.Body>
                  <Card.Title>Travesia en moto de nieve</Card.Title>
                  <Card.Text>
                    Un paseo guiado por el bosque, parando en miradores donde se
                    pueden apreciar maravillosos paisajes.
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
                    Exclusivo sala VIP y áreas de descanso. Ideal para reuniones
                    privadas y momentos de tranquilidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="services-section">
          <h2>Servicios Incluidos</h2>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center">
              <i className="bi bi-wifi me-2"></i> Wi-Fi gratis: Conéctate a
              internet de alta velocidad de forma gratuita en todas las áreas
              del hotel.
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-cup-fill me-2"></i> Desayuno buffet: Disfruta
              de un delicioso desayuno buffet con una amplia variedad de
              opciones.
            </li>
            <li className="d-flex align-items-center">
              <i className="bi-car-front me-2"></i> Alquiler de autos: Explora
              la Patagonia a tu propio ritmo.
            </li>
            <li className="d-flex align-items-center">
              <i className="bi-suitcase me-2"></i> Servicio de lavandería y
              tintorería.
            </li>
            <li className="d-flex align-items-center">
              <i className="bi-gift me-2"></i> Organización de eventos
              especiales.
            </li>
          </ul>
        </div>

        <div className="hotel-category">
          <h2>Nuestro Compromiso con la Calidad</h2>
          <p>
            Somos un hotel de 4 estrellas comprometido en ofrecerte una
            experiencia inolvidable. Disfruta de nuestros servicios de primera
            calidad y atención personalizada.
          </p>
          <div className="stars">⭐⭐⭐⭐</div>
        </div>
      </div>
      {/* Carrusel de comentarios de usuarios con nuevo diseño */}
      <div className="comments-carousel-section">
        <Container className="py-5">
          <h2 className="text-center mb-4">
            Comentarios de Nuestros Huéspedes
          </h2>

          <Carousel
            className="carousel-style"
            indicators={false}
            controls={true}
          >
            <Carousel.Item>
              {/* Fondo de imagen */}
              <div
                className="carousel-image-overlay"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/28054888/pexels-photo-28054888/free-photo-of-paisaje-vacaciones-hotel-relajante.jpeg')`,
                }}
              >
                <div className="carousel-comment">
                  <h1>10</h1>
                  <p>
                    "Hermosa estadía, la pasamos muy bien y la atención
                    espectacular."
                  </p>
                  <h5>ALEXIS ARIEL, ARGENTINA</h5>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              {/* Fondo de imagen */}
              <div
                className="carousel-image-overlay"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg')`,
                }}
              >
                <div className="carousel-comment">
                  <h1>9.7</h1>
                  <p>
                    "Se nota la presencia de los dueños en todos los
                    detalles..."
                  </p>
                  <h5>JUAN PABLO, ARGENTINA</h5>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              {/* Fondo de imagen */}
              <div
                className="carousel-image-overlay"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/5865693/pexels-photo-5865693.jpeg')`,
                }}
              >
                <div className="carousel-comment">
                  <h1>9.9</h1>
                  <p>
                    "Toda la dedicación del personal al aprenderse nuestros
                    nombres..."
                  </p>
                  <h5>PAULA, ARGENTINA</h5>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Inicio;
