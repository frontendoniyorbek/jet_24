import React from "react";
import "./style.css";
import icon1 from "./icon/JET24_Icon_Chartersjet-01 1.svg";
import icon2 from "./icon/JET24_Icon_ChartersHeli-01 1.svg";
import icon3 from "./icon/JET24_Icon_MedCorporate_2-01 1.svg";

import img from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

export default function Chart() {
  return (
    <div>
      <>
        <div className="concierge-page">
          <div className="left-section chart__left-section">
            <h1>Charters</h1>
            <p>
              JET24 does the worldwide private charters from the top leading
              aviation operators for personal and business purposes, works with
              corporate VIP-airliners and helicopters, medical flights.
            </p>
            {/* <p>We care for details without unnecessary costs.</p> */}

            <div className="icon-section ">
              <img src={icon1} alt="Rent Villa Icon" className="icon chart__icon" />
              <img src={icon2} alt="Rent Yacht Icon" className="icon chart__icon" />
              <img src={icon3} alt="Gastronomy Icon" className="icon chart__icon" />
            </div>
          </div>
        </div>

        <div className="chart__right-section">
          <div className="image large-image chart__large-image">
            <img src={img} alt="Dining Setup" />
          </div>
          <div className="image small-image2 chart__small-image2">
            <img src={img2} alt="Villa" />
          </div>
          <div className="image small-image chart__small-image">
            <img src={img3} alt="Yacht Charter" />
          </div>
        </div>
      </>
    </div>
  );
}
