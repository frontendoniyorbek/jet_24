import React from 'react'
import './style.css'
import icon1 from "./icon/1.svg";
import icon2 from "./icon/2.svg";
import icon3 from "./icon/3.svg";

import img from "./img/Mask group.png";
import img2 from "./img/image 3.png";

export default function Aircraft() {
  return (
    <div>
    
    
    
    <>
      <div className="concierge-page">
        <div className="left-section">
          <h1>Aircraft 
          Management</h1>
          <p>
          We provide full operational management of your private jet and arrange its commercial sales and subcharter on demand.  You can do with us aircraft purchase and sale, technical, financial and legal audit, crew management.
          </p>
          <p>We care for details without unnecessary costs.</p>
 
          <div className="icon-section ms-5">
            <img src={icon1} alt="Rent Villa Icon" className="icon" />
            <img src={icon2} alt="Rent Yacht Icon" className="icon" />
            <img src={icon3} alt="Gastronomy Icon" className="icon" />
          </div>
        </div>
      </div>

      <div className="air-right-section">
          <div className="image large-image">
            <img src={img} alt="Dining Setup" />
          </div>
          <div className="image small-image2">
            <img src={img2} alt="Villa" />
          </div>
          {/* <div className="image small-image">
            <img src={img3} alt="Yacht Charter" />
          </div> */}
      </div>
    </>
    
    
    
    </div>
  )
}
