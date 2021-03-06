import React from "react";
import "../component/main.css";

function Filter({ ...rest }) {
  return (
    <div className="filter">
      <select name="regions" id="regions" className="regions" {...rest}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
