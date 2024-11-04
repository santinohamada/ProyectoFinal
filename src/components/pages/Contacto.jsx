import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/error404"); // lleva a la página de error 404
  };

  return (
    <section className="container mt-5 componentePagina">
      <h2 className="text-center mb-4 tituloContactos">Deja tu consultas</h2>
      <article className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "El nombre no debe exceder los 40 caracteres",
                },
              })}
              required
              minLength={3}
              maxLength={40}
            />
            {errors.nombre && (
              <p className="text-danger">{errors.nombre.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              className="form-control"
              {...register("apellido", {
                required: "El apellido es obligatorio",
                minLength: {
                  value: 3,
                  message: "El apellido debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "El apellido no debe exceder los 40 caracteres",
                },
              })}
              required
              minLength={3}
              maxLength={40}
            />
            {errors.apellido && (
              <p className="text-danger">{errors.apellido.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              className="form-control"
              {...register("dni", {
                required: "El DNI es obligatorio",
                pattern: {
                  value: /^\d{8}$/,
                  message: "DNI inválido. Deben ser 8 numeros",
                },
              })}
              required
            />
            {errors.dni && <p className="text-danger">{errors.dni.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "El formato del email no es válido",
                },
              })}
              required
              pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="consultas" className="form-label">
              Consultas
            </label>
            <textarea
              id="consultas"
              className="form-control"
              rows="3"
              {...register("consultas", {
                required: "La consulta es obligatoria",
                minLength: {
                  value: 5,
                  message: "La consulta debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 400,
                  message: "La consulta no debe exceder los 400 caracteres",
                },
              })}
              required
              minLength={5}
              maxLength={400}
            ></textarea>
            {errors.consultas && (
              <p className="text-danger">{errors.consultas.message}</p>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contacto;
