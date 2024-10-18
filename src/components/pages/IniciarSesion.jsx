import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const IniciarSesion = () => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <div
      className="componentePagina"
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h2>¡Qué alegría tenerte acá!</h2>

      <div className="form-container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input-container">
            <input
              className="form-input"
              type="email"
              placeholder="Ingrese su correo electronico"
              {...register("email", {
                required: "El mail es un campo obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "El correo es invalido",
                },
              })}
            />
            <i className="bi form-icon bi-envelope"></i>
          </div>
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>

          <div className="form-input-container">
            <input
              className="form-input"
              type="password"
              placeholder="Ingrese su contraseña"
              {...register("password", {
                required: "La contraseña es un campo requerido",
                minLength: {
                  value: 8,
                  message:
                    "La contraseña debe contener 8 caracteres como minimo",
                },
              })}
            />
            <i className="bi form-icon bi-eye"></i>
          </div>
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
          <div className="form-forgot-password">
            <Link to={"/Error404"} className="text-dark">
              Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="w-100">
            <Button
              className="btn w-100 bg-white text-dark border"
              type="submit"
            >
              Ingresar
            </Button>
          </div>
        </Form>

        <p className="text-center fs-4">
          <b>o</b>
        </p>
        <div>
          <Link to={"/Error404"} className="btn border w-100">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
              style={{ width: "24px" }}
            />
            Continuar con Google
          </Link>
        </div>
      </div>
      <div>
        <Link to={"/Error404"} className="mt-1 text-dark">
          ¿No tenés cuenta? Registrate acá
        </Link>
      </div>
    </div>
  );
};

export default IniciarSesion;
