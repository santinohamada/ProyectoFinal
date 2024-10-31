import { Button } from "react-bootstrap";

const TablaUsuarios = ({ usuario, posicion }) => {
  return (
    <>
      <tr>
        <td>{posicion}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.dni}</td>
        <td>{usuario.domicilio}</td>
        <td>{usuario.email}</td>
        <div className="d-flex justify-content-evenly">
          <Button>
            <td>
              <i class="bi bi-pen gap-1"></i>
            </td>
          </Button>
          <Button>
            <td>
              <i class="bi bi-trash3 gap-1"></i>
            </td>
          </Button>
        </div>
      </tr>
    </>
  );
};

export default TablaUsuarios;
