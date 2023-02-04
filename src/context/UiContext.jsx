import React, { createContext, useState } from "react";

export const UiContext = createContext({});

const UiContextProvider = ({ children }) => {
  const [update, setupdate] = useState(false);
  const [id, setid] = useState("");
  const [Udescription, setUdescription] = useState("");
  const [TaskChange, setTaskChange] = useState(false);

  return (
    <UiContext.Provider
      value={{
        update,
        setupdate,
        id,
        setid,
        TaskChange,
        setTaskChange,
        Udescription,
        setUdescription,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
