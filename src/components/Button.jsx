// Button.jsx
import React from "react";

const Button = ({ label = "Click Me", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition"
    >
      {label}
    </button>
  );
};

export default Button;