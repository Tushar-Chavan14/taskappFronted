import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authHeaders from "../utils/Authheader";
import { toast } from "react-toastify";

export const Authcontext = createContext({});

const Authprovider = ({ children }) => {
  const [auth, setauth] = useState(() => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  });
  const navigate = useNavigate();

  const login = async (credentials) => {
    const res = await axios.post("/users/login", credentials);
    localStorage.setItem("token", res.data.token);
    setauth((prev) => !prev);
    navigate("/tasks");
  };

  const register = async (user) => {
    const res = await axios.post("/users", user);
    localStorage.setItem("token", res.data.token);
    setauth((prev) => !prev);
    navigate("/tasks");
  };

  const logout = async () => {
    try {
      await axios({
        method: "post",
        url: "/users/logout",
        headers: authHeaders(),
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("token");
    setauth((prev) => !prev);
    navigate("/login");
    toast.success("logged out");
  };

  return (
    <Authcontext.Provider value={{ auth, login, register, logout }}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
