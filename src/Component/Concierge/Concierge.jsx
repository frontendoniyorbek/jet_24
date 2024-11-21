import React from "react";
import icon1 from "./icon/JET24_Icon_RentVilla-01 1.svg";
import icon2 from "./icon/JET24_Icon_RentYacht-01 1.svg";
import icon3 from "./icon/JET24_Icon_Gastronomy-01 1.svg";

import img from "./img/20443151 1.png";
import img2 from "./img/image 2.png";
import img3 from "./img/29434 1.png";

import "./style.css";

const ConciergePage = () => {
  return (
    <>
      <div className="concierge-page">
        <div className="left-section">
          <h1>Concierge Service</h1>
          <p>
            Our partnership network around the world allows us to arrange
            concierge service and daily lifestyle support, accommodation service
            in hotels, villas and chalet, yacht charters, ground and helicopter
            transfers, tickets to sport and cultural events, reservations at top
            restaurants.
          </p>
          <p>No membership fee.</p>
 
          <div className="icon-section ms-5">
            <img src={icon1} alt="Rent Villa Icon" className="icon" />
            <img src={icon2} alt="Rent Yacht Icon" className="icon" />
            <img src={icon3} alt="Gastronomy Icon" className="icon" />
          </div>
        </div>
      </div>

      <div className="right-section">
          <div className="image large-image">
            <img src={img} alt="Dining Setup" />
          </div>
          <div className="image small-image2">
            <img src={img2} alt="Villa" />
          </div>
          <div className="image small-image">
            <img src={img3} alt="Yacht Charter" />
          </div>
      </div>
    </>
  );
};

export default ConciergePage;
