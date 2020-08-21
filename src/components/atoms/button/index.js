import React from "react";
import "./style.css";

const Button = (props) => {
  const { onClick, children = "Missing Content", classBtn = "" } = props;
  return (
    <button onClick={onClick} className={classBtn}>
      {children}
    </button>
  );
};

export default Button;
