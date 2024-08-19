import { createContext, useEffect, useState } from "react";

export const Context = createContext();
function ContextProvider({ children }) {
  const [alexText, setAlexText] = useState("salom");
  return (
    <Context.Provider
      value={{
        alexText,
        setAlexText
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
