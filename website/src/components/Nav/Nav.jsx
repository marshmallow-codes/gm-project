import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <header className="nav">
      <div className="container container--nav">
        <ul className="nav__items">
          <li className="nav__item"><a className="nav__link" href="#about">about</a></li>
          <li className="nav__item"><a className="nav__link" href="#contact">contact</a></li>
        </ul>
        <h2 className="nav__title">
          <span className="highlight">ev</span>olve
        </h2>
      </div>
    </header>
  );
}

export default Nav;
