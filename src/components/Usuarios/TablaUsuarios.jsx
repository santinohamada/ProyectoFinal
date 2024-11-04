import { Button, Form, Modal } from "react-bootstrap";
import { borrarUsuarios, editarUsuario } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TablaUsuarios = ({
  usuario,
  posicion,
  setEstadoUsuario,
  estadoUsuario,
}) => {
  const [showModal, setShowModal] = useState(false);

  const borrarUsuario = async (usuario) => {
    Swal.fire({
      title: `Deseas eliminar al usuario: ${usuario.nombre}, ${usuario.apellido} `,
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aplicar cambios.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await borrarUsuarios(usuario._id);

          if (respuesta.status === 200) {
            setEstadoUsuario(true);
            Swal.fire({
              title: "El usuario fue eliminado con exito!",
              icon: "success",
            });
            return;
          }

          Swal.fire({
            title: "Ocurrió un error al guardar!",
            icon: "error",
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  const {
    register: registerUsuario,
    handleSubmit: handleSubmitUsuario,
    setValue: setValueUsuario,
    formState: { errors: errorsUsuario },
  } = useForm();

  const handleOpenModal = () => {
    setValueUsuario("nombre", usuario.nombre);
    setValueUsuario("apellido", usuario.apellido);
    setValueUsuario("dni", usuario.dni);
    setValueUsuario("email", usuario.email);
    setValueUsuario("domicilio", usuario.domicilio);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const editarUsuarioAPI = async (usuarioEditado) => {
    Swal.fire({
      title: "Deseas aplicar estos cambios?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aplicar cambios.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await editarUsuario(usuarioEditado, usuario._id);

          if (respuesta.status === 200) {
            setEstadoUsuario(true);
            Swal.fire({
              title: "El usuario fue editado con exito!",
              icon: "success",
            });
            return;
          }

          Swal.fire({
            title: "Ocurrió un error al guardar!",
            icon: "error",
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
    handleCloseModal();
  };

  useEffect(() => {
    setEstadoUsuario(false);
  }, [estadoUsuario]);

  return (
    <>
      <tr>
        <td>{posicion}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.dni}</td>
        <td>{usuario.domicilio}</td>
        <td>{usuario.email}</td>
        <td>
          <div className="d-flex justify-content-evenly">
            <Button variant="warning" onClick={handleOpenModal}>
              <i className="bi bi-pen"></i>
            </Button>
            <div>
              <p>  </p>
            </div>
            <Button variant="danger" onClick={() => borrarUsuario(usuario)}>
              <i className="bi bi-trash3 gap-1"></i>
            </Button>
          </div>
        </td>
      </tr>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>FORMULARIO USUARIO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUsuario(editarUsuarioAPI)}>
            <Form.Group className="mb-3" controlId="secondFormNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                {...registerUsuario("nombre", {
                  required: "Nombre es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.nombre?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido"
                {...registerUsuario("apellido", {
                  required: "Apellido es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.apellido?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="text"
                placeholder="DNI"
                {...registerUsuario("dni", {
                  required: "DNI es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.dni?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                {...registerUsuario("email", {
                  required: "Email es dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormDomicilio">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Domicilio"
                {...registerUsuario("domicilio", {
                  required: "Domicilio es dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.domicilio?.message}</Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
              <Button type="submit">Guardar</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaUsuarios;
