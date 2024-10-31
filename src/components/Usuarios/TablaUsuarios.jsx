import { Button } from "react-bootstrap";
import { borrarUsuarios } from "../../helpers/queries";

const TablaUsuarios = ({ usuario, posicion, setEstadoUsuario }) => {

    const borrarUsuario = async ()=>{
        const respuesta = await borrarUsuarios(usuario._id)
        if(respuesta.status===200){
            console.log("USUARIO BORRADO")
            setEstadoUsuario(true)
        }
    }
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
          <Button>
              <i className="bi bi-pen gap-1"></i>
           
          </Button>
          <Button onClick={borrarUsuario}>
            
              <i className="bi bi-trash3 gap-1"></i>
          </Button>
        </div>
           
            </td>
      </tr>
    </>
  );
};

export default TablaUsuarios;
