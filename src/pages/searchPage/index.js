import React, { useState } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import HorizontalNavBar from "../../components/molecules/horizontalNavBar";
import DefaultTemplate from "../../components/templates/defautTemplate";

const SearchPage = ({ match, location }) => {
  const [query, setQuery] = useState(queryString.parse(location.search));
  const [searchVal, setSearchVal] = useState(query.search_query);
  const [redirect, setRedirect] = useState(<div></div>);
  const enterEvent = (event) => {
    if (event.key === "Enter" && searchVal.trim() !== "") {
      let search_query = searchVal.trim().replace(" ", "+");
      setRedirect(<Redirect to={`/search?search_query=${search_query}`} />);
    }
  };

  return (
    <div>
      <DefaultTemplate
        horizontalNavBar={HorizontalNavBar({
          value: searchVal,
          onChange: setSearchVal,
          enterEvent,
        })}
        content={<div>{JSON.stringify(query)}</div>}
      />
      {redirect}
    </div>
  );
};

export default SearchPage;
