import React from "react";
import "./prototype.scss";
import home from "../../assets/logos/home.svg";
import work from "../../assets/logos/work.svg";
import add1 from "../../assets/logos/add1.svg";
import add2 from "../../assets/logos/add2.svg";


function Prototype(){
    reutrn (
        <>
        <section className="prototype">
            <h1 className="prototype__title">Hello, Persona</h1>
        </section>
        <form>
            <input type="text" name="text" placeholder="Were are you going?"  required/>
        </form>
            <section>
                <h3>Favorities</h3>
                <h3>See All</h3>
            </section>
            <img src={home} alt="home icon" />
            <img src={work} alt="work icon" />
            <div className="prototype__icon">
                <img className="prototype__icon prototype__icon--horizontal" src={add1} alt="add icon" />
                <img className="prototype__icon prototype__icon--vertical" src={add2} alt="add icon" />
            </div>
        </>
    )
}

export default Prototype;