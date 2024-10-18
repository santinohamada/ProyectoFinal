import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";





const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registrationAPI = async(usuario)=>{
    try {
        const respuesta = await querie(usuario)
        if(respuesta.status === 201){
            reset();
        Swal.fire({
          title: "Registro",
          text: `El usuario ${usuario.email}, fue registrado con exito.`,
          icon: "success"
        })
        }
        else{
            Swal.fire({
                title: "Ocurrio un error",
                text: `No se pudo registrar el usuario ${usuario.email}, intente esta operación mas tarde `,
                icon: "error"
              });
        }
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div className="componentePagina container d-flex flex-row align-items-center justify-content-center ">

    <Form onSubmit={handleSubmit(registrationAPI)} className="form-container">
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
        {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
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
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Direccion de correo invalida",
                },
            })}
            />
        {errors.email && <span>{errors.email.message}</span>}
            </div>
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
              value: /^[0-9]+$/,
              message: "Ingresar solo numeros",
            },
        })}
        />
        {errors.dni && <span>{errors.dni.message}</span>}
        </div>
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
        {errors.domicilio && <span>{errors.domicilio.message}</span>}
            </div>
      </Form.Group>

      <Button style={{ display: 'block', margin: '0 auto' }} variant="primary" type="submit" className="align-item-center btn w-50 bg-white text-dark border">
        Registrar
      </Button>
    </Form>
        </div>
  );
};

export default RegistrationForm;
