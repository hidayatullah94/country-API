import React from "react";
import "../component/main.css";

function Card(props) {
  return (
    <div className="card" onClick={props.Detail}>
      <img src={props.image} alt="flag" className="flag" />
      <h3 className="title">{props.title}</h3>
      <p className="populasi">Population : {props.populasi}</p>
      <p className="region">Region : {props.region}</p>
      <p className="capital">Capital : {props.capital}</p>
    </div>
  );
}

export default Card;
