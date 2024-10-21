import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import nosotros1 from "../../assets/nosotros1.jpg";
import nosotros2 from "../../assets/nosotros2.jpg";

const Nosotros = () => {
  return (
    <section className="container-fluid row justify-content-center text-center fondoNosotros">
      <article className=" col-12 col-md-6 col-lg-4 p-3">
        <img
          src={nosotros1}
          alt="Recepcion del hotel"
          className="img-fluid rounded-circle mb-4 shadow"
        />
      </article>
      <article className=" col-12 col-md-6 col-lg-4 p-3">
        <img
          src={nosotros2}
          alt="Huesped del hotel"
          className="img-fluid rounded-circle mb-4 shadow"
        />
      </article>
      <article className="col-12 col-md-6 col-lg-4 p-3">
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
