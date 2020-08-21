import React from "react";
import Link from "../../atoms/link";
import SearchBox from "../../atoms/searchBox";
import "./style.css";

const HorizontalNavBar = (props) => {
  const { value, onChange, enterEvent } = props;

  return (
    <div className="hor-nav">
      <div className="home">
        <Link to={"/"} className={"white"}>
          <h3>{"Home"}</h3>
        </Link>
      </div>
      <div className="search">
        <SearchBox value={value} onChange={onChange} enterEvent={enterEvent} />
      </div>
    </div>
  );
};

export default HorizontalNavBar;
