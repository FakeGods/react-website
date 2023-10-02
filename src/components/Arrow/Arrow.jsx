import React from 'react';
import './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

function Arrow() {
  return (
    <div className="arrow">
      
      <a className="arrow-a" href="#top">
      <FontAwesomeIcon icon={faCircleArrowUp} className="fa-circle-arrow-up" />
    </a>
    </div>
  );
}

export default Arrow;