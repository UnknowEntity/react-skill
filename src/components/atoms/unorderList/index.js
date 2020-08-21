import React from "react";
import "./style.css";

const UnorderList = (props) => {
  const { children = ["Missing Text"], className = "" } = props;

  return (
    <ul className={`list ${className}`}>
      {children.map((value) => {
        return <li>{value}</li>;
      })}
    </ul>
  );
};

export default UnorderList;
