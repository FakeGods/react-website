import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="opacity">
        <div className="wrapper header">
          <div className="company-introduction">
            <h1 className="page-intro">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="company-slogan">Nie wierz nam na słowo - sprawdź</p>
            <a href="#our-services" className="offer">
              oferta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
