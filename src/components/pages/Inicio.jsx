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
                  src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg"
                  alt="Habitación con vista al mar"
                />
                <Card.Body>
                  <Card.Title>Habitación con Vista al Mar</Card.Title>
                  <Card.Text>
                    Disfruta de la brisa y el sonido del mar desde la comodidad
                    de tu habitación. Incluye terraza privada, minibar y
                    jacuzzi.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg"
                  alt="Restaurante Gourmet"
                />
                <Card.Body>
                  <Card.Title>Restaurante Gourmet</Card.Title>
                  <Card.Text>
                    Prueba los mejores platos locales e internacionales en
                    nuestro restaurante exclusivo. Menú diseñado por chefs de
                    renombre mundial.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg"
                  alt="Piscina Infinita"
                />
                <Card.Body>
                  <Card.Title>Piscina Infinita</Card.Title>
                  <Card.Text>
                    Relájate en nuestra piscina infinita mientras disfrutas de
                    una vista panorámica. Zona de bar y sillones sumergidos para
                    mayor confort.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg"
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
                  src="https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg"
                  alt="Centro de Eventos"
                />
                <Card.Body>
                  <Card.Title>Centro de Eventos</Card.Title>
                  <Card.Text>
                    Organiza tus eventos en nuestro moderno centro de
                    convenciones. Equipado con tecnología de punta y servicio de
                    catering.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/2064017/pexels-photo-2064017.jpeg"
                  alt="Salón VIP"
                />
                <Card.Body>
                  <Card.Title>Salón VIP</Card.Title>
                  <Card.Text>
                    Exclusivo salón VIP con bar privado y áreas de descanso.
                    Ideal para reuniones privadas y momentos de tranquilidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/2825936/pexels-photo-2825936.jpeg"
                  alt="Gimnasio Moderno"
                />
                <Card.Body>
                  <Card.Title>Gimnasio Moderno</Card.Title>
                  <Card.Text>
                    Mantente en forma con nuestro gimnasio equipado con máquinas
                    de última generación y entrenadores personales.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/3048299/pexels-photo-3048299.jpeg"
                  alt="Bar en la Terraza"
                />
                <Card.Body>
                  <Card.Title>Bar en la Terraza</Card.Title>
                  <Card.Text>
                    Disfruta de cócteles y tapas en nuestro bar en la terraza,
                    con vistas espectaculares al atardecer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="hotel-card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg"
                  alt="Jardines Zen"
                />
                <Card.Body>
                  <Card.Title>Jardines Zen</Card.Title>
                  <Card.Text>
                    Encuentra la paz interior caminando por nuestros jardines
                    zen. Perfectos para meditación y relajación.
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
