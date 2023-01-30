import React, { useState } from "react";
import Reg from "../loginReg/Reg";
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
import { toast } from "react-toastify";

const Registration = () => {
  const { register } = useContext(Authcontext);

  const [user, setuser] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await register(user);
      toast.success("user created and logged in");
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <div className="h-screen bg-bgReg bg-no-repeat bg-cover">
      <div className="flex items-center justify-start h-full">
        <form
          className="ml-28 bg-gray-200/90 w-[40rem] h-[45rem] rounded-xl flex flex-col items-center justify-center gap-28"
          onSubmit={submitHandler}
        >
          <Reg user={user} setuser={setuser} />
        </form>
      </div>
    </div>
  );
};

export default Registration;
