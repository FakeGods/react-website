import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import OurServices from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Arrow from "./components/Arrow/Arrow";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <Arrow />
        <Employees />
        <OurServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
