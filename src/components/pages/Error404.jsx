import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import fondo from "../../assets/Error404.jpg";

const Error404 = () => {
  return (
    <section 
      className="contenedorError d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${fondo})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <article className="text-center text-white">
        <button 
          className="btn btn-light mt-3 px-5 py-3" 
          onClick={() => window.location.href = '/'}
          style={{ transform: 'translateX(50%)' }}
        >
          Volver a Inicio
        </button>
      </article>
    </section>
  );
};

export default Error404;

