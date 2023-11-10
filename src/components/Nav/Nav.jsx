import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="wrapper nav">
        <div className="company-logo">nazwa firmy</div>
        <ul className="menu">
          <li>
            <a href="#about-us">o nas</a>
          </li>
          <li>
            <a href="#our-services">oferta</a>
          </li>
          <li>
            <a href="#contact">kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
