import React from "react";
import "./Services.css";
import Service from "./Service";

const data = [
  {
    title: "Usługa 1",
    isNew: true,
  },
  {
    title: "Usługa 2",
    isNew: false,
  },
  {
    title: "Usługa 3",
    isNew: false,
  },
  {
    title: "Usługa 4",
    isNew: false,
  },
  {
    title: "Usługa 5",
    isNew: false,
  },
  {
    title: "Usługa 6",
    isNew: false,
  },
  

];

function OurServices() {
  return (
    <section id="our-services" className="our-services">
      <h2 className="what-we-do">Czym zajmuje się nasza firma?</h2>
      <div className="wrapper services">
        <div className="services">
          {data.map((item, index) => (
            <Service
              key={index}
              title={item.title}
              isNew={item.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
