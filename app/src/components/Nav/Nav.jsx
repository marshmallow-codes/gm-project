import React from "react";
import "./Nav.scss";
import gmLogo from "../../assets/logos/GM-logo-2021.png";

function Nav() {
  return (
    <header className="nav">
      <div className="container container--nav">
        <img src={gmLogo} className="logo" alt="general motors 2021 logo" />
        <h2 className="evolve-title"><span className="highlight">ev</span>olve</h2>
      </div>
    </header>
  );
}

export default Nav;
