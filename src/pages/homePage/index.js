import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import HorizontalNavBar from "../../components/molecules/horizontalNavBar";
import DefaultTemplate from "../../components/templates/defautTemplate";

const HomePage = () => {
  const [searchVal, setSearchVal] = useState("");
  const [redirect, setRedirect] = useState(<div></div>);
  const enterEvent = (event) => {
    if (event.key === "Enter" && searchVal.trim() !== "") {
      let search_query = searchVal.trim().replace(" ", "+");
      setRedirect(<Redirect to={`/search?search_query=${search_query}`} />);
    }
  };

  return (
    <>
      <DefaultTemplate
        horizontalNavBar={HorizontalNavBar({
          value: searchVal,
          onChange: setSearchVal,
          enterEvent,
        })}
      />
      {redirect}
    </>
  );
};

export default HomePage;
