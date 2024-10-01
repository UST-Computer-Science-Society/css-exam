import React, { useState, useEffect } from "react";
import cssLogo from "../assets/css.png";
import mobileMenu from "../assets/mobile-menu.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setShowNav(!isScrollingDown);

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-transform transform ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={cssLogo} alt="CSS Logo" className="w-auto h-12 mr-2" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a className="nav-button" href="#">
              Home
            </a>
            <a className="nav-button" href="#">
              About
            </a>
            <a className="nav-button" href="#">
              Community
            </a>
            <a className="nav-button" href="#">
              News & Events
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <img src={mobileMenu} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="w-full px-8 py-2 flex justify-end ">
          <div className="flex flex-col text-end">
            <a href="#" className="nav-button block py-2 text-sm">
              Home
            </a>
            <a href="#" className="nav-button block py-2 text-sm">
              About
            </a>
            <a href="#" className="nav-button block py-2 text-sm">
              Community
            </a>
            <a href="#" className="nav-button block py-2 text-sm">
              News & Events
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
