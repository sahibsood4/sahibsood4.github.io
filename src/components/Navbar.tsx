

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]") as HTMLElement | null;
    if (!container) return;

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
    });

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let section = document.querySelector(element.getAttribute("data-href")!) as HTMLElement | null;
          if (section) {
            scroll.scrollTo(section);
          }
        }
      });
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Sahib Sood
        </a>
        <a
          href="mailto:sahibs@smu.edu"
          className="navbar-connect"
          data-cursor="disable"
        >
          Email
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
