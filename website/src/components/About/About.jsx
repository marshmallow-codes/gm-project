import React from "react";
import googlePlay from "../../assets/images/Google_Play-Badge-Logo.wine.svg";
import appStore from "../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import phonePrototype from "../../assets/images/X - 3.png";


function About() {
  return (
    <article className="about">
      <div className="inline">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="inline">
            <img
              src={googlePlay}
              className="download-icon"
              alt="get it on Google Play"
            />
            <img
              src={appStore}
              className="download-icon"
              alt="get it in the App Store"
            />
          </div>
        </div>
        <img src={phonePrototype} className="prototype" alt="demo" />
      </div>
    </article>
  );
}

export default About;
