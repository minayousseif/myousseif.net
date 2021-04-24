import React from "react";
import SocialButtons from "./SocialButtons";
import AboutMePic from "./../img/me/my.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">ABOUT ME</h2>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="add-top"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="about-img">
              <img src={AboutMePic} alt="me" />
            </div>
            <SocialButtons />
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="add-top"></div>
          </div>
          <div className="col-10 col-lg-10 offset-lg-1 offset-1">
            <p className="about-block">
              I'm a software engineer with excellent experience in a variety of
              platforms and programming languages. I have a passion for creating
              challenging and data-intensive applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
