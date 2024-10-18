import React, { createContext } from "react";
import useFilters from "../CustomsHooks/useFilters";

const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { personas, handleChangePersonas } = useFilters();
  const data = {
    personas,
    handleChangePersonas,
  };
  
  return (
    <FiltersContext.Provider value={data}>{children} </FiltersContext.Provider>
  );
};
export {FiltersContext, FiltersProvider};
