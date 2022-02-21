import React from "react";
import "../component/main.css";
import load from "../assets/load.gif";

function Loading() {
  return (
    <div className="loading">
      <img src={load} alt="loading" />
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
