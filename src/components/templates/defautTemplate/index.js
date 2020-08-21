import React from "react";
import "./style.css";

const DefaultTemplate = (props) => {
  const {
    horizontalNavBar = <div></div>,
    verticalNavBar = <div></div>,
    content = <div></div>,
  } = props;
  return (
    <div className="default-template">
      <div className="horizontal-nav-bar">{horizontalNavBar}</div>
      <div>{verticalNavBar}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DefaultTemplate;
