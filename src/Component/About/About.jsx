import React from 'react'
import icon1 from "./icon/1 (2).svg";
import icon2 from "./icon/2 (2).svg";
import icon3 from "./icon/3 (2).svg";

import img from "./img/pilot.png";
import img2 from "./img/Maskgroup.png";

import "./style.css";

export default function About() {
  return (
    <div className="container">
      <div className="left-section ab__left-section">
        <h1>About us
          Why Jet24</h1>
        <p>
          We are the professional team with the experience in business
          aviation for more than 10 years. We offer you personal
          support 24/7, own dispatch and flight control service, off-market
          offers right for your needs and budget, concierge service.
        </p>

        <div className="icon-section ab__icon-section">
          <img src={icon1} alt="Rent Villa Icon" className="icon" />
          <img src={icon2} alt="Rent Yacht Icon" className="icon" />
          <img src={icon3} alt="Gastronomy Icon" className="icon" />
        </div>
      </div>
      <div className="about-right-section">
        <div className="image large-image ab__large-image">
          <img src={img} alt="Dining Setup" />
        </div>
        {/* <div className="image small-image2 ab__small-image2">
            <img src={img2} alt="Villa" />
          </div> */}
        <div className="bigImg">
          <img src={img2} alt="Yacht Charter" />
        </div>
      </div>
    </div>
  )
}
