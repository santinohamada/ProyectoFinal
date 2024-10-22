import { useState } from "react";

const useFilters = () => {
  const [personas, setPersonas] = useState(2);
  const [orderByPrice, setOrderByPrice] = useState("A");

  const handleChangePersonas = (event) => {
    const newValue = parseInt(event.target.value, 10);

    setPersonas(newValue);
  };

  const handleOrderByPrice = (event) => {
    const value = event.target.value === "A" ? "A" : "D";

    setOrderByPrice(value);
  };

  return {
    personas,
    handleChangePersonas,
    handleOrderByPrice,
  };
};

export default useFilters;
