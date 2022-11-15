import React from "react";

import "./button.scss";

const Button = ({name, className, onClick, children, icon}) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {icon}
      {name ?? null}
      {children}
    </button>
  );
};

export default Button;
