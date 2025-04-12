import { createContext } from "react";
import { doctors } from "../Assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

 
  // You can define any state or functions here that you want to provide to the context
  const currencySymbol = "$";

  const value = {
    // Define any context values or functions here
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
