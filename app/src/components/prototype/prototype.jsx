import React from "react";
import "./prototype.scss";
import home from "../../assets/logos/home.svg";
import home2 from "../../assets/logos/home2.svg"
import ellipse from "../../assets/logos/Ellipse 7.svg";
import work from "../../assets/logos/work.svg";
import add1 from "../../assets/logos/add1.svg";
import add2 from "../../assets/logos/add2.svg";

function Prototype() {
  return(
    <>
      <section className="prototype">
        <h1 className="prototype__title">Hello, Dan</h1>
      </section>
      <form className="prototype__form">
        <input
          className="prototype__search"
          type="text"
          name="text"
          placeholder="Were are you going?"
          required
        />
      </form>
      <section className="prototype__section">
        <h3 className="prototype__section prototype__section--fav">Favorities</h3>
        <h3 className="prototype__section prototype__section--see">See All</h3>
      </section>
      <div className="flex">
          <div className="prototype__icon">
            <img className="prototype__icon prototype__icon--home" src={home} alt="home icon" />
            <img className="prototype__icon prototype__icon--home2" src={home2} alt="top part" />
            <img className="prototype__ellipse prototype__ellipse--bg" src={ellipse} alt="background" />
            <h6>Home</h6>
          </div>
          <div className="prototype__icon">
            <img className="prototype__icon prototype__icon--home" src={work} alt="work icon" />
            <img className="prototype__ellipse prototype__ellipse--bg1" src={ellipse} alt="background" />
            <h6>Work</h6>
          </div>
          <div className="prototype__icon">
            <div>
              <img className="prototype__ellipse prototype__ellipse--bg2" src={ellipse} alt="background" />
              <img
                className="prototype__icon prototype__icon--add"
                src={add1}
                alt="add icon"
              />
              <img
                className="prototype__icon prototype__icon--add2"
                src={add2}
                alt="add icon"
              />
              <h6>Add</h6>
            </div>
      </div>
      </div>
    </>
  );
}

export default Prototype;
