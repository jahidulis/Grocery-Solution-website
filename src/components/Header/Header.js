import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="brand">
          <img src={logo} alt="" />
          <p className="brand-name">Grocery Solution</p>
        </div>
        <div>
          <a href="./Home">Home</a>
          <a href="#q_a">Q&A</a>
          <a href="/about">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
