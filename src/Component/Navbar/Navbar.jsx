import React from "react";
import "./style.css";
import icon from "./img/logo.svg";
export default function Navbar() {
  return (
    <div>
      <div className="container">
        <header className="navbar">
          <img src={icon} alt="JET24 Logo" className="logo" />
        </header>
      </div>
    </div>
  );
}
