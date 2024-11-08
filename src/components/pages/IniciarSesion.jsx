import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const IniciarSesion = () => {
  const { user, iniciarSesionApi } = useContext(UserContext);
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    iniciarSesionApi(data);
  };
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
      <h2 className="tituloContactos">¡Qué alegría tenerte acá!</h2>

      <div >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input-container">
            <Form.Control
              className="form-input"
              type="text"
              autoComplete="email"
              placeholder="Ingrese su correo o DNI"
              {...register("entrada", {
                required: "El campo es obligatorio",
                pattern: {
                  value:
                    /^[0-9]{8}$|^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "Debe ingresar un correo electrónico válido o un DNI de 8 dígitos",
                },
              })}
            />
          </div>
          <Form.Text className="text-danger">{errors.entrada?.message}</Form.Text>

          <div className="form-input-container">
            <Form.Control
              className="form-input"
              type="password"
              autoComplete="current-password"
              placeholder="Ingrese su contraseña"
              {...register("password", {
                required: "La contraseña es un campo requerido",
                minLength: {
                  value: 5,
                  message:
                    "La contraseña debe contener 5 caracteres como minimo",
                },
              })}
            />
          </div>
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
          <div className="form-forgot-password ">
            <Link to={"/Error404"} className="tituloContactos">
              Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="w-100">
            <Button
              className="tituloContactos btn w-100 bg-white  border"
              type="submit"
            >
              Ingresar
            </Button>
          </div>
        </Form>

        <p className="text-center tituloContactos fs-4">
          <b>o</b>
        </p>
        <div>
          <Link to={"/Error404"} className="btn tituloContactos border w-100">
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
        <Link to={"/registro"} className="mt-1 tituloContactos">
          ¿No tenés cuenta? Registrate acá
        </Link>
      </div>
    </div>
  );
};

export default IniciarSesion;
