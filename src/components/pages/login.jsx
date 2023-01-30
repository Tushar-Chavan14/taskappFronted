import React, { useState } from "react";
import LogReg from "../loginReg/Log";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  

  return (
    <div className="h-screen bg-bgLog bg-no-repeat bg-cover">
      <LogReg credentials={credentials} setcredentials={setcredentials} />
    </div>
  );
};

export default Login;
