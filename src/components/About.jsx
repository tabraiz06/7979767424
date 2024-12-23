import React from "react";
import finger from "../assets/g487.png";
import ai from "../assets/ai.png";
import Group23 from "../assets/Group23.png";
import dashboard from "../assets/dashboard.png";
import signals from "../assets/signals.png";
import http from "../assets/http.png";
import Ellipse from "../assets/Ellipse.png";
import Ellipse2 from "../assets/Ellipse2.png";
const About = () => {
  return (
    <div
      className="h-[654px] w-full flex items-center bg-[#F8F7F7] p-8 aboutMain" >
      <img src={Ellipse} alt="ellipse" className="ellipse" />
      <div className="container1">
        <h2>
          Why your educational <span>institution needs Campus Tech</span>
        </h2>
        <button className="h-[52px]  w-[114px] bg-[#30A981] text-white  hover:bg-white hover:text-black hover:border-black hover:border">
          About Us
        </button>
      </div>
      <div className="container 2 flex gap-4">
        <div className="items">
          <div className="item flex gap-3">
            <img src={finger} alt="" />
            <p>Simple and easy-to-use interface</p>
          </div>
          <div className="item flex gap-3">
            <img src={ai} alt="" />
            <p>AI-based alerts for all activities to be conducted</p>
          </div>
          <div className="item flex gap-3">
            <img src={Group23} alt="" />
            <p>Build a new culture of compliance and accreditation</p>
          </div>
        </div>
        <div className="items">
          <div className="item flex gap-3">
            <img src={dashboard} alt="" />
            <p>Multi-institutional dashboard</p>
          </div>
          <div className="item flex gap-3">
            <img src={signals} alt="" />
            <p>Track learning behaviour and learning outcomes</p>
          </div>
          <div className="item flex gap-3">
            <img src={http} alt="" />
            <p>Integration with your campus website</p>
          </div>
        </div>
      </div>
      <img src={Ellipse2} alt="ellipse" className="ellipse2" />
    </div>
  );
};

export default About;
