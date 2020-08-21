import React from "react";
import "./style.css";

const Text = (props) => {
  const { children = "", classText = "" } = props;
  return <div className={`text ${classText}`}>{children}</div>;
};

export default Text;
