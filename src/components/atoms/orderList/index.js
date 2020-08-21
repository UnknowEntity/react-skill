import React from "react";
import "./style.css";

const OrderList = (props) => {
  const { children = ["Missing Text"], className = "" } = props;

  return (
    <ol className={`list ${className}`}>
      {children.map((value) => {
        return <li>{value}</li>;
      })}
    </ol>
  );
};

export default OrderList;
