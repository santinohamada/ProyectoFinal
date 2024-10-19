import React, { createContext } from "react";
import useFilters from "../CustomsHooks/useFilters.jsx";

const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { personas, handleChangePersonas, handleOrderByPrice } = useFilters();

  const data = {
    personas,
    handleChangePersonas,
    handleOrderByPrice,
  };

  return (
    <FiltersContext.Provider value={data}>{children} </FiltersContext.Provider>
  );
};
export { FiltersContext, FiltersProvider };
