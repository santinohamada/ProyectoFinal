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
          Ubicado en el corazón de Dubái, nuestro hotel de cinco estrellas
          redefine el concepto de lujo y exclusividad. Con una arquitectura
          majestuosa que combina la elegancia moderna y la tradición árabe,
          ofrecemos a nuestros huéspedes una experiencia incomparable. Nuestro
          objetivo es brindar el máximo confort y satisfacer las expectativas de
          los viajeros más exigentes.
        </p>
        <p className="textoNosotros">
          Desde suites con vistas panorámicas al icónico Burj Khalifa y al golfo
          Pérsico, hasta servicios personalizados como mayordomos privados,
          garantizamos una estadía inolvidable. Cada detalle ha sido
          cuidadosamente pensado para brindar una experiencia única:
          restaurantes gourmet con chefs galardonados, un spa de clase mundial
          para la relajación absoluta, y una piscina infinity que ofrece vistas
          espectaculares de la ciudad.
        </p>
        <p className="textoNosotros">
          Nos enorgullecemos de ofrecer una hospitalidad impecable y un servicio
          distinguido que refleja la calidez y la hospitalidad de Dubái. Ya sea
          por negocios o placer, en nuestro hotel encontrará el equilibrio
          perfecto entre comodidad, lujo y exclusividad.
        </p>
      </article>
    </section>
  );
};

export default Nosotros;
