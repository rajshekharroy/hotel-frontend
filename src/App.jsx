import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";
import Offers from "./components/Offers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Offers />
      <About />
      <Footer />
    </div>
  );
};

export default App;
