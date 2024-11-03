import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      console.log(data);
      navigate("/error404"); // Redirige a la página de error 404
    };
  
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contáctenos</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                className="form-control"
                {...register("nombre", { required: "El nombre es obligatorio" })}
              />
              {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
            </div>
  
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input 
                type="text" 
                id="apellido" 
                className="form-control"
                {...register("apellido", { required: "El apellido es obligatorio" })}
              />
              {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
            </div>
  
            <div className="mb-3">
              <label htmlFor="dni" className="form-label">DNI</label>
              <input 
                type="text" 
                id="dni" 
                className="form-control"
                {...register("dni", { 
                  required: "El DNI es obligatorio",
                  pattern: {
                    value: /^\d+$/,
                    message: "El DNI debe contener solo números"
                  }
                })}
              />
              {errors.dni && <p className="text-danger">{errors.dni.message}</p>}
            </div>
  
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input 
                type="text" 
                id="telefono" 
                className="form-control"
                {...register("telefono", { 
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^\d+$/,
                    message: "El teléfono debe contener solo números"
                  }
                })}
              />
              {errors.telefono && <p className="text-danger">{errors.telefono.message}</p>}
            </div>
  
            <div className="mb-3">
              <label htmlFor="consultas" className="form-label">Consultas</label>
              <textarea 
                id="consultas" 
                className="form-control"
                rows="3"
                {...register("consultas", { required: "La consulta es obligatoria" })}
              ></textarea>
              {errors.consultas && <p className="text-danger">{errors.consultas.message}</p>}
            </div>
  
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contacto;