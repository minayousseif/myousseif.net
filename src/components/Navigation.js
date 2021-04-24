import React, { useEffect } from "react";
import Scrollspy from "react-scrollspy";

const easingStyle = {
  transition: "all 300ms ease-in-out 100ms",
  WebkitTransition: "all 300ms ease-in-out 100ms",
  MozTransition: "all 300ms ease-in-out 100ms",
  OTransition: "all 300ms ease-in-out 100ms",
};

const navItems = ["about", "skills", "accomplishments", "experience"];

const Navigation = () => {
  const handleResponsiveNavClick = () => {
    document.getElementById("navbarResponsiveBtn").click();
  };

  useEffect(() => {
    const mainNav = document.getElementById("mainNav");
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Mina Yousseif
        </a>
        <button
          id="navbarResponsiveBtn"
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <span className="fas fa-bars fa-lg"></span>
        </button>
        <div
          id="navbarResponsive"
          className="collapse navbar-collapse"
          style={easingStyle}
        >
          <Scrollspy
            className="navbar-nav text-uppercase ml-auto"
            items={navItems}
            currentClassName="active"
          >
            {navItems.map((navItem) => {
              const navText = navItem === "about" ? "about me" : navItem;
              return (
                <li key={`nav-${navItem}`} className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href={`#${navItem}`}
                    onClick={handleResponsiveNavClick}
                  >
                    {navText}
                  </a>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
