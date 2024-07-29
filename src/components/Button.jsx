import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="mr-5 border-2 w-20 bg-gray-700 text-white" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
