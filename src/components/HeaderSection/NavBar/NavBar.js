import React from "react";
import "./NavBar.scss";
import logoIcon from "../../../images/logo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <img src={logoIcon} alt="Fylo" className="header-logo" />
        <ul class="navBar-links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
