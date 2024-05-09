import React from "react";

const ButtonPrimary = ({ children, addClass, link }) => {
  return (
    <button
      className={
        "py-3  px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green hover:shadow-green-md transition-all outline-none " +
        addClass
      }
    >
      <a href={link}>{children} </a>
    </button>
  );
};

export default ButtonPrimary;
