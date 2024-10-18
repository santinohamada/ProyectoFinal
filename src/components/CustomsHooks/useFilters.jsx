import { useState } from "react";

const useFilters = () => {
  const [personas, setPersonas] = useState(2);
  const [orderByPrice, setOrderByPrice] = useState("A");
  // Manejador para cambiar el número de personas
  const handleChangePersonas = (event) => {
    setPersonas(event.target.value); // Solo cambiamos el valor directamente
  };
  const handleOrderByPrice = (event) => {
    event.target.value === "A" ? setOrderByPrice("A") : setOrderByPrice("D");
  };
  // Devuelve el estado y la función manejadora
  console.log(personas, orderByPrice);
  return {
    handleChangePersonas,
    personas,
    handleOrderByPrice,
  };
};

export default useFilters;
