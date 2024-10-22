import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import nosotros1 from "../../assets/nosotros1.jpg";
import nosotros2 from "../../assets/nosotros2.jpg";
import nosotros3 from "../../assets/nosotros3.jpg";

const Nosotros = () => {
  return (
    <section className="container-fluid row justify-content-center text-center fondoNosotros">
      <article className="col-12 col-md-6 col-lg-4 p-3">
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={nosotros1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={nosotros2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={nosotros3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
      <article className="col-12 col-md-6 col-lg-4 p-3 mt-5 ms-5">
        <h2 className="mb-4 tituloNosotros">Quienes Somos</h2>
        <p className="textoNosotros">
          En (Nombre del Hotel), creemos que el verdadero lujo reside en la
          dedicación de nuestro equipo. Ubicados en el corazón de la Patagonia,
          ofrecemos una experiencia única gracias a nuestro personal altamente
          capacitado, que se esfuerza por brindar un servicio cálido y
          personalizado.
        </p>
        <p className="textoNosotros">
          Cada miembro de nuestro equipo comparte una profunda pasión por la
          hospitalidad y el entorno natural que nos rodea. Desde el momento en
          que llega, nuestro compromiso es hacer que su estadía sea inolvidable,
          cuidando cada detalle para que disfrute de la Patagonia con el máximo
          confort.
        </p>
      </article>
    </section>
  );
};

export default Nosotros;
