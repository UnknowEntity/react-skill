import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const SearchBox = (props) => {
  const { value, onChange, enterEvent } = props;

  return (
    <div className="search-box">
      <FontAwesomeIcon icon={faSearch} />
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onKeyPress={enterEvent}
      />
    </div>
  );
};

export default SearchBox;
