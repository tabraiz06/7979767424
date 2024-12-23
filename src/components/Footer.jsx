import React from "react";
import logo from "../assets/logo.png";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram1.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  return (
    <div
      className="footerMain flex flex-col pt-16 p-16 pb-4 bg-[#F8F7F7] mt-[-278px]"
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-8 p-4 justify-between w-[70%] footerText">
        <div className="flex flex-col  spantag">
          <span>Resources </span>
          <span>Solutions </span>
          <span>About Us</span>
        </div>
        <div className="contact spantag">
          <span>Contact Us</span>
          <hr className="mb-4" />
          <span>
            support@campus.technology <br />
            +91-9980-747-722
          </span>
        </div>
        <div className="social spantag">
          <span>Chat with us</span>
          <hr className="mb-4" />
          <div className="flex gap-4">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="flex justify-between spantag">
        <span className="">© 2022, Kahan Technologies Pvt. Ltd.</span>
        <span>Designed by Grapdes</span>
      </div>
    </div>
  );
};

export default Footer;
