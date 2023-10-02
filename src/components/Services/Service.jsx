import React from "react";

function Service({title, isNew}) {
  return (
    <div className="service">
      <h3>{title}</h3>
      {isNew && <p className="new-offer">(nowość)</p>}
    </div>
  );
}

export default Service;