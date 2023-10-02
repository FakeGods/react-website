import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div class="wrapper nav">
        <div class="company-logo">nazwa firmy</div>
        <ul class="menu">
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
