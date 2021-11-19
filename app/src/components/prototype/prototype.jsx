import React from "react";
import "./prototype.scss";
import home from "../../assets/logos/home.svg";
import ellipse from "../../assets/logos/Ellipse 7.svg";
import work from "../../assets/logos/work.svg";
import add1 from "../../assets/logos/add1.svg";
import add2 from "../../assets/logos/add2.svg";

function Prototype() {
  reutrn(
    <>
      <section className="prototype">
        <h1 className="prototype__title">Hello, Dan</h1>
      </section>
      <form>
        <input
          className="prototype__search"
          type="text"
          name="text"
          placeholder="Were are you going?"
          required
        />
      </form>
      <section className="prototype__section">
        <h3>Favorities</h3>
        <h3>See All</h3>
      </section>
      <div>
        <img src={home} alt="home icon" />
        <img src={ellipse} alt="background" />
        <h6>Home</h6>
      </div>
      <div>
        <img src={work} alt="work icon" />
        <img src={ellipse} alt="background" />
        <h6>Work</h6>
      </div>
      <div className="prototype__icon">
        <div>
          <img src={ellipse} alt="background" />
          <img
            className="prototype__icon prototype__icon--horizontal"
            src={add1}
            alt="add icon"
          />
          <img
            className="prototype__icon prototype__icon--vertical"
            src={add2}
            alt="add icon"
          />
          <h6>Add</h6>
        </div>
      </div>
    </>
  );
}

export default Prototype;
