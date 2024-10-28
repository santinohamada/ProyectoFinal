import React, { useContext } from "react";
import { FiltersContext } from "../Context/FiltersContext.jsx";
import Form from "react-bootstrap/Form";

const SelectPersonas = React.memo(() => {
  const { personas, handleChangePersonas } = useContext(FiltersContext);

  return (
    <Form.Select
      onChange={(e) => {
        handleChangePersonas(e);
      }}
      value={personas}
      name="Personas"
      id="personas"
    >
      <option value="1">1 Persona</option>
      <option value="2">2 Personas</option>
      <option value="3">3 Personas</option>
      <option value="4">4 Personas</option>
    </Form.Select>
  );
});

export default SelectPersonas;
