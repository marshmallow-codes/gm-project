import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import "./Main.scss";

function Main() {
  return (
    <section className="main">
      <div className="container container--main">
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default Main;
