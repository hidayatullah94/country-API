import React from "react";
import "../component/main.css";

function Search({ ...rest }) {
  return (
    <div className="search">
      <i className="fas fa-search search-icon"></i>
      <input type="search" {...rest} />
    </div>
  );
}

export default Search;
