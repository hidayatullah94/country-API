import React, { useContext } from "react";
import "../component/main.css";
import { Theme } from "../pages/ThemeContex";

function Navbar({ ...rest }) {
  const theme = useContext(Theme);
  return (
    <div className="nav" style={theme}>
      <h2>Wordl Country </h2>
      <div className="theme" {...rest}>
        <i className="fas fa-moon"></i>
        <p className="dark">Dark Mode</p>
      </div>
    </div>
  );
}

export default Navbar;
