import { Button, Form, Modal } from "react-bootstrap";
import { borrarUsuarios, editarUsuario } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const TablaUsuarios = ({ usuario, posicion, setEstadoUsuario, estadoUsuario }) => {
  const [showModal, setShowModal] = useState(false)
  

    const borrarUsuario = async ()=>{
        const respuesta = await borrarUsuarios(usuario._id)
        if(respuesta.status===200){
            console.log("USUARIO BORRADO")
            setEstadoUsuario(true)
        }
    }
    const {
      register: registerUsuario,
      handleSubmit: handleSubmitUsuario,
      setValue: setValueUsuario,
      formState: { errors: errorsUsuario }
    } = useForm();

    
  
    const handleOpenModal = ()=>{
    
      setValueUsuario("nombre", usuario.nombre);
      setValueUsuario("apellido", usuario.apellido);
      setValueUsuario("dni", usuario.dni);
      setValueUsuario("email", usuario.email);
      setValueUsuario("domicilio", usuario.domicilio);
      setShowModal(true)
    } 
    const handleCloseModal = ()=> setShowModal(false)

    const editarUsuarioAPI = async (usuarioEditado) =>{
      const respuesta = await editarUsuario(usuarioEditado,usuario._id)
     
      if(respuesta.status===200){
        setEstadoUsuario(true)
        handleCloseModal()
      }
    }

    useEffect(()=>{
      setEstadoUsuario(false)
    },[estadoUsuario])

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
          <Button onClick={handleOpenModal}>
              <i className="bi bi-pen gap-1"></i>
           
          </Button>
          <Button onClick={borrarUsuario}>
            
              <i className="bi bi-trash3 gap-1"></i>
          </Button>
        </div>
           
            </td>
      </tr>

      <Modal
            show={showModal}
            onHide={handleCloseModal}
       
          >
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
                <Button onClick={handleCloseModal}>Cerrar</Button>
                <Button type="submit">Guardar</Button>
              </Form>
            </Modal.Body>
          
      </Modal>
    </>
  );
};

export default TablaUsuarios;
