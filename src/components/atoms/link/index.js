import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CustomLink = (props) => {
  const { children = "Missing Text", to = "/", className } = props;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
