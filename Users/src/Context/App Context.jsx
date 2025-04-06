import { createContext } from "react";
import { doctors } from "../Assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    // Define any context values or functions here
    doctors,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
