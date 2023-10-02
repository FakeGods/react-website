import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="copyright-and-socials">
          <p className="copyright">
            Nazwa firmy - wszelkie prawa zastrzeżone, 2023
          </p>
          <p className="socials">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
