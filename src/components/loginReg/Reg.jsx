import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Reg = ({ user, setuser }) => {
  return (
    <>
      <h3 className=" text-3xl">Register</h3>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        <div>
          <input
            required
            className="p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="Name"
            type="text"
            value={user.name}
            onChange={(e) => {
              setuser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            required
            className="p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={(e) => {
              setuser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            className="p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="age"
            type="Number"
            value={user.age}
            onChange={(e) => {
              setuser({ ...user, age: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            required
            className="p-3 rounded-md bg-[#140021]/40 text-lg placeholder:text-slate-100"
            placeholder="password"
            type="password"
            value={user.password}
            onChange={(e) => {
              setuser({ ...user, password: e.target.value });
            }}
          />
        </div>
      </div>

      <Button text="Create account" />

      <div>
        <p>
          have an account?{" "}
          <Link to={"/login"}>
            <span className=" text-purple-800 underline">login</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Reg;
