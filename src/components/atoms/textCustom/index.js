import React from "react";
const Text = (props) => {
  const { children = "", size = "12pt", color = "black" } = props;
  return <div style={{ color: color, fontSize: size }}>{children}</div>;
};

export default Text;
