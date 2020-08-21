import React from "react";
import "./style.css";

const FormText = (props) => {
  const {
    value,
    onChange,
    type = "text",
    disable = false,
    className = "",
  } = props;

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      disabled={disable}
      className={className}
    />
  );
};

export default FormText;
