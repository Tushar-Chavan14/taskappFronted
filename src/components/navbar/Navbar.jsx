import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider";

const Navbar = () => {
  const { logout } = useContext(Authcontext);

  return (
    <nav className=" bg-blueGrey h-16 flex items-center px-16 justify-between">
      <Link to={"/"}>
        <span className=" text-2xl">Task App</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link to={"/profile"}>
          <span className="text-xl">profile</span>
        </Link>
        <div>
          <button
            className="p-1 bg-redDark hover:bg-redLight rounded-md active:translate-y-[0.15rem] shadow-md"
            onClick={async (e) => {
              e.preventDefault();
              await logout();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
