import React from "react";

const Button = ({ children, background, text, rounded, size, type }) => {
  const bgClasses = {
    white: "bg-white",
    "white/75": "bg-white/75",
    blue: "bg-blue",
    "baby-blue": "bg-baby-blue",
  };

  const textClasses = {
    blue: "text-blue",
    white: "text-white",
    "dark-blue": "text-dark-blue",
  };
  const roundedClasses = {
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      type={type}
      className={`${bgClasses[background] || ""} ${textClasses[text] || ""} ${
        roundedClasses[rounded] || ""
      }  ${
        size === "full" ? "w-full" : ""
      } py-1.5 px-6 rounded-full cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
