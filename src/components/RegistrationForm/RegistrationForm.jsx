import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { registrarUsuarioAPI } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    data.rol = false;
    registrarUsuarioAPI(data);
    reset();
    navigate(-1);
  };

  return (
    <div className="componentePagina container d-flex flex-row align-items-center justify-content-center my-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 3,
                  message: "Como minimo debe ingresar 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "Como maximo debe ingresar 40 caracteres",
                },
              })}
            />
          </div>
          {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              {...register("apellido", {
                required: "El apellido es requerido",
                minLength: {
                  value: 3,
                  message: "Como minimo debe ingresar 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "Como maximo debe ingresar 40 caracteres",
                },
              })}
            />
          </div>
          {errors.apellido && <span className="text-danger" >{errors.apellido.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="email"
              placeholder="hola@hotelRollingCode.com"
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Direccion de correo invalida",
                },
              })}
            />
          </div>
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDni">
          <Form.Label>DNI</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="text"
              placeholder="Ingrese su DNI"
              {...register("dni", {
                required: "El apellido es requerido",
                minLength: {
                  value: 5,
                  message: "Como minimo debe ingresar 5 caracteres",
                },
                maxLength: {
                  value: 8,
                  message: "Como maximo debe ingresar 8 caracteres",
                },
                pattern: {
                  value: /^[0-9]{8}$/,
                  message: "Ingresar solo numeros",
                },
              })}
            />
          </div>
          {errors.dni && <span className="text-danger">{errors.dni.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 8,
                  message: "Como minimo debe ingresar 8 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Contraseña inválida",
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/,
                  message:
                    "La contraseña debe tener minimo 8 caracteres, debe contener numeros, letras, mayusculas y un caracter especial",
                },
              })}
            />
          </div>
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDomicilio">
          <Form.Label>Domicilio</Form.Label>
          <div className="form-input-container">
            <Form.Control
              type="text"
              placeholder="Ingrese su domicilio"
              {...register("domicilio", {
                required: "El domicilio es requerido",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
          </div>
          {errors.domicilio && <span className="text-danger">{errors.domicilio.message}</span>}
        </Form.Group>

        <Button
          style={{ display: "block", margin: "0 auto" }}
          variant="primary"
          type="submit"
          className="align-item-center btn w-50 bg-white text-dark border"
        >
          Registrar
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
