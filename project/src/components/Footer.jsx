import React from "react";
import cssLogoInverted from "../assets/css-inverted.png";
import envelopeIcon from "../assets/envelope-solid.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 flex flex-col gap-3 items-center justify-center">
          <img className="h-[60px]" src={cssLogoInverted} alt="css-logo" />
          <div className="message p-1.5 rounded-lg bg-white shadow-lg ml-2">
            <p className="text-primary text-center">
              Passionately designed & developed by CSS 💻
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="nav text-center flex flex-col sm:text-left">
            <p className="font-bold">UST Computer Science Society</p>
            <a className="cursor-pointer">About Us</a>
            <a className="cursor-pointer">Community</a>
            <a className="cursor-pointer">News & Events</a>
          </div>
          <div className="socials">
            <div className="flex items-center gap-2">
              <img src={envelopeIcon} alt="Email" />
              <a className="cursor-pointer">Email</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={facebookIcon} alt="Facebook" />
              <a href="https://www.facebook.com/USTCSS">Facebook</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={twitterIcon} alt="Twitter" />
              <a className="cursor-pointer">Twitter</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={instagramIcon} alt="Instagram" />
              <a href="https://www.instagram.com/ustcss/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
