import React from "react";
import style from "./button.module.css";

const Button = ({ text }) => {
  return (
    <button type="submit" className={`${style.btn} bg-[#7700c6]`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
