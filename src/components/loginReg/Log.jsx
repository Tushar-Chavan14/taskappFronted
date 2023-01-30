import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
import { toast } from "react-toastify";

const LogReg = ({ credentials, setcredentials }) => {
  const { login } = useContext(Authcontext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      toast.success("logged in sucessfully");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-end h-full">
      <form
        className="mr-36 bg-gray-200/90 w-[30rem] h-[45rem] rounded-xl flex flex-col items-center justify-center gap-12"
        onSubmit={submitHandler}
      >
        <h3 className=" text-3xl">login</h3>
        <div>
          <input
            className=" w-[25rem] p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="Email"
            type="email"
            required
            value={credentials.email}
            onChange={(e) => {
              setcredentials({ ...credentials, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            className=" w-[25rem] p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="password"
            type="password"
            value={credentials.password}
            onChange={(e) => {
              setcredentials({ ...credentials, password: e.target.value });
            }}
            required
          />
        </div>

        <Button text="login" />

        <div>
          <p>
            Dont have an account?{" "}
            <Link to={"/register"}>
              <span className=" text-purple-800 underline">Register</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogReg;
