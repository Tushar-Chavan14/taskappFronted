import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../context/Authprovider";

const ProtecForAuthen = ({ children }) => {
  const { auth } = useContext(Authcontext);

  if (!auth) {
    return children;
  } else {
    return <Navigate to="/tasks" />;
  }
};

export default ProtecForAuthen;
