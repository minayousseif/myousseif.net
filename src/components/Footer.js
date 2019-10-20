import React from "react";
import SocialButtons from './SocialButtons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-above">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 offset-md-3">
              <h3>Contact Me</h3>
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; Mina Yousseif{" "}
              <span className="copyright-year">{currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
