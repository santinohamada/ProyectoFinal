import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card, Row, Col, Carousel } from "react-bootstrap";
import MyModal from "../Modal/MyModal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  // Referencias separadas para cada sección
  const refMain = useRef(null);
  const refImages = useRef(null);
  const refTouristSpots = useRef(null);
  const refWineFood = useRef(null);
  const refComments = useRef(null);
  const refServices = useRef(null);
  const refQuality = useRef(null);
  const refSuites = useRef(null);
  const servicios = [
    { icon: "safe", text: "Cajas de seguridad" },
    { icon: "check-circle", text: "Menú apto para celíacos" },
    { icon: "building", text: "Ascensor" },
    { icon: "wifi", text: "WIFI gratis" },
    { icon: "box-seam", text: "Lavandería y tintorería" },
    { icon: "cup-straw", text: "Desayuno Buffet" },
    { icon: "reception-4", text: "Recepción 24hs" },
    { icon: "snow", text: "Aire Acondicionado" },
    { icon: "laptop", text: "Computadora para huéspedes" },
    { icon: "bag", text: "Guardaequipajes gratis" },
    { icon: "fire", text: "Calefacción" },
    { icon: "door-open", text: "Room Service" },
    { icon: "hospital", text: "Asistencia Médica 24hs" },
  ];
  const isInViewMain = useInView(refMain, { once: true });
  const isInViewImages = useInView(refImages, { once: true });
  const isInViewComments = useInView(refComments, { once: true });
  const isInViewServices = useInView(refServices, { once: true });
  const isInViewQuality = useInView(refQuality, { once: true });
  const isInViewTouristSpots = useInView(refTouristSpots, { once: true });
  const isInViewWineFood = useInView(refWineFood, { once: true });
  const isInViewSuites = useInView(refSuites, { once: true });

  return (
    <>
      {/* Sección principal con texto y botón */}
      <div className="inicio-container" ref={refMain}>
        <Container className="d-flex flex-column justify-content-center align-items-center text-center inicio-content">
          <motion.div
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1,
            }}
          >
            <h1 className="display-3 hotel-font mb-3">
              Una Nueva Visión De Confort
            </h1>
            <p className="lead">Bienvenidos</p>
            <MyModal>
              <Button className="reserva-btn my-4" variant="light">
                RESERVA TU EXPERIENCIA
              </Button>
            </MyModal>
          </motion.div>
        </Container>
      </div>

      {/* Sección separada para las imágenes del hotel */}
      <div className="images-section">
        <Container className="py-5" ref={refImages}>
          <h2 className="text-start mb-5 hotel-description">
            Ubicado en el corazón de la Patagonia, al sur de Argentina, nuestro
            hotel ofrece un refugio exclusivo para quienes buscan combinar la
            serenidad de la naturaleza con el confort de un alojamiento de lujo.
            Rodeado de paisajes majestuosos, montañas nevadas y lagos
            cristalinos, el hotel brinda una experiencia única para quienes
            desean desconectar y disfrutar de la belleza natural de la región.
            Con instalaciones de primer nivel y una atención personalizada, cada
            detalle ha sido pensado para que vivas momentos inolvidables en este
            rincón del mundo.
          </h2>

          {/* Descripción del hotel */}
          <article
            style={{
              transform: isInViewImages ? "none" : "translateX(-200px)",
              opacity: isInViewImages ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <img
                  className="w-100"
                  src="https://www.encanto.com.ar/wp-content/uploads/como-ir-de-buenos-aires-al-perito-moreno.jpg"
                  alt="Glaciar perito moreno"
                />
              </div>
              <div className="col-md-4">
                <h4>
                  El mejor momento para visitar el Glaciar Perito Moreno?
                  Cualquiera de ellas!
                </h4>
                <p className="fs-6 text-secondary">
                  En primavera, cuando los colores de la Patagonia contrastan
                  con el azul del hielo. En verano, cuando el sol ilumina los
                  desprendimientos de enormes bloques de hielo. En otoño, con
                  paisajes teñidos de rojos y ocres que añaden calidez al
                  entorno. Hospedarse cerca de este majestuoso glaciar, con un
                  servicio personalizado, es una experiencia única sin importar
                  la temporada.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </div>

      {/* Sección de lugares turísticos */}
      <div
        className="tourist-spots-section bg-light py-5 "
        ref={refTouristSpots}
      >
        <Container>
          <h2 className="text-start mb-5">
            Lugares Turísticos de la Patagonia
          </h2>
          <div className="row justify-content-center align-content-center">
            {[
              {
                title: "Torres del Paine",
                imgSrc:
                  "https://worldlyadventurer.com/wp-content/uploads/2022/11/Chile-Patagonia-Torres-del-Paine-National-Park-Los-Cuernos3.jpg.webp",
                description:
                  "Un impresionante parque nacional con montañas, glaciares y lagos que ofrecen rutas de senderismo espectaculares.",
              },
              {
                title: "El Chaltén",
                imgSrc:
                  "https://i0.wp.com/blog.howlanders.com/wp-content/uploads/2019/11/el-chalten-pueblo-argentina.jpg?fit=1200%2C700&ssl=1",
                description:
                  "Conocido como la capital del trekking en Argentina, El Chaltén es famoso por sus impresionantes vistas del Monte Fitz Roy.",
              },
              {
                title: "Laguna Esmeralda",
                imgSrc:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c5/43/88/caption.jpg?w=600&h=400&s=1",
                description:
                  "Unos de los lugares mas tranquilos de la Patagonia, rodeado de paisajes naturales. Ideal para unos mates 🧉 .",
              },
              {
                title: "Lago Argentino",
                imgSrc:
                  "https://7mar.com.ar/wp-content/uploads/2024/07/lago-argentino-2.jpg",
                description:
                  "El lago más grande de la Patagonia, rodeado de paisajes naturales y lleno de oportunidades para actividades al aire libre.",
              },
            ].map((spot, index) => (
              <motion.div
                className=" my-1 col-md-4 col-lg-3"
                key={index}
                style={{
                  transform: isInViewTouristSpots
                    ? "none"
                    : "translateX(-200px)",
                  opacity: isInViewTouristSpots ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <Card className="shadow-lg border-0 h-100">
                  <img variant="top" className="cardImage" src={spot.imgSrc} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="flex-grow-0">
                      {spot.title}
                    </Card.Title>
                    <Card.Text className="flex-grow-1">
                      {spot.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>

        {/* Sección de vinos y comida */}
        <div className="wine-food-section py-5" ref={refWineFood}>
          <Container>
            <h2 className="text-start mb-5">Vinos y Comida</h2>
            <motion.div
              style={{
                transform: isInViewWineFood ? "none" : "translateX(-200px)",
                opacity: isInViewWineFood ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <p>
                La Patagonia es conocida por su gastronomía única, donde los
                sabores locales se combinan con los mejores vinos de Argentina.
                Disfruta de una variedad de platos tradicionales y maridajes
                excepcionales en nuestro hotel, que reflejan la riqueza de la
                región.
              </p>
              <Link to={"/error404"} className="btn mt-3 btn-outline-dark">
                Ver MAS
              </Link>
            </motion.div>
          </Container>
        </div>

        {/* Sección de suites */}
        <div className="suites-section bg-light py-5" ref={refSuites}>
          <Container>
            <h2 className="text-start mb-5">Nuestras Suites</h2>
            <Row>
              {[
                {
                  title: "Suite Deluxe",
                  imgSrc:
                    "https://media.revistaad.es/photos/65c21a5605ba5d3cad2a23ba/16:9/w_2560%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
                  description:
                    "Disfruta de una experiencia de lujo con vistas espectaculares y todas las comodidades que necesitas para una estancia inolvidable.",
                },
                {
                  title: "Suite Familiar",
                  imgSrc:
                    "https://i0.wp.com/marinaterra.com/wp-content/uploads/suitefamiliar70.png?fit=2000%2C1017&ssl=1",
                  description:
                    "Perfecta para familias, equipada con espacios amplios y todas las facilidades para que todos se sientan cómodos.",
                },
                {
                  title: "Suite Romántica",
                  imgSrc:
                    "https://images.squarespace-cdn.com/content/v1/642c1d5a227d62555176db53/1681475753200-HR95HVZ9MCFIOV8TCLQN/Terraza+Suite+Romantica+Mi+Amor+Luna+Volcan+Hotel+en+Banos+Ecuador.jpeg?format=1000w",
                  description:
                    "Ideal para parejas, con una decoración elegante y un ambiente acogedor para disfrutar de momentos especiales.",
                },
              ].map((suite, index) => (
                <motion.div
                  className="col-md-4 my-1"
                  key={index}
                  style={{
                    transform: isInViewSuites ? "none" : "translateX(-200px)",
                    opacity: isInViewSuites ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  <Card className="shadow-lg border-0 h-100">
                    <img
                      className="cardImage"
                      variant="top"
                      src={suite.imgSrc}
                    />
                    <Card.Body className="d-flex flex-column h-100">
                      <Card.Title className="flex-grow-0">
                        {suite.title}
                      </Card.Title>
                      <Card.Text className="flex-grow-1">
                        {suite.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </Row>
          </Container>
          {/* Sección de servicios con íconos */}
          <motion.div className="servicios-section">
            <Container className="text-center text-light pt-5">
              <h2 className="display-4">Comodidades & Servicios</h2>
              <p className="lead">
                Lo necesario para que disfrutes de tu viaje
              </p>
              <Row>
                {servicios.map((servicio, index) => (
                  <Col xs={6} md={4} lg={3} key={index} className="mb-4">
                    <i className={`bi bi-${servicio.icon} servicio-icon`}></i>
                    <p className="mt-2">{servicio.text}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </motion.div>
          <motion.div
            ref={refQuality}
            style={{
              transform: isInViewQuality
                ? "none"
                : "translateXref={refQuality}(-200px)",
              opacity: isInViewQuality ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="hotel-category"
          >
            <h2>Nuestro Compromiso con la Calidad</h2>
            <p>
              Somos un hotel de 4 estrellas comprometido en ofrecerte una
              experiencia inolvidable. Disfruta de nuestros servicios de primera
              calidad y atención personalizada.
            </p>
            <div className="stars">★★★★</div>
          </motion.div>
        </div>
        <div className="comments-carousel-section">
          <div
            ref={refComments}
            style={{
              transform: isInViewComments
                ? "none"
                : "translateXref={refComments}(200px)",
              opacity: isInViewComments ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className=" container pb-5"
          >
            <h2 className="text-center mb-4">
              Comentarios de Nuestros Huéspedes
            </h2>

            <Carousel
              className="carousel-style"
              indicators={false}
              controls={true}
            >
              <Carousel.Item>
                <div className="carousel-image-overlay" id="imagen1">
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
                <div className="carousel-image-overlay" id="imagen2">
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
                <div className="carousel-image-overlay" id="imagen3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
