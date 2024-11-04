import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Nosotros = () => {
  return (
    <section className="nosotros-section container my-5">
      {/* Imagen y descripción 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 parallax-img img1"></div>
        <div className="col-md-6">
          <h2 className="titulo">Quienes Somos</h2>
          <p className="texto">
            En <strong>Hotel Patagonia</strong>, creemos que el verdadero lujo
            reside en la dedicación de nuestro equipo. Ubicados en el corazón de
            la Patagonia, ofrecemos una experiencia única gracias a nuestro
            personal altamente capacitado, que se esfuerza por brindar un
            servicio cálido y personalizado.
          </p>
        </div>
      </div>

      {/* Imagen y descripción 2 */}
      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6 parallax-img img2"></div>
        <div className="col-md-6">
          <h2 className="titulo">Nuestra Misión</h2>
          <p className="texto">
            Nuestra misión es hacer que cada huésped se sienta como en casa. Nos
            apasiona ofrecer experiencias inolvidables, cuidando cada detalle
            para que disfrute de la Patagonia con el máximo confort y calidad en
            el servicio.
          </p>
        </div>
      </div>

      {/* Imagen y descripción 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 parallax-img img3"></div>
        <div className="col-md-6">
          <h2 className="titulo">Nuestro Compromiso</h2>
          <p className="texto">
            Cada miembro de nuestro equipo comparte una profunda pasión por la
            hospitalidad y el entorno natural que nos rodea. Desde el momento en
            que llega, nuestro compromiso es hacer que su estadía sea
            inolvidable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
