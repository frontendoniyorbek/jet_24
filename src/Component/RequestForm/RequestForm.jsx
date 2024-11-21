import React from "react";
import "./style.css";
import img1 from './img/JET24_Icon_FullOperation-01 1.svg'
import img2 from './img/JET24_Icon_Details-01 1.svg'
import img3 from './img/JET24_Icon_Crew-01 2.svg'


export default function RequestForm() {
  return (
    <div>
      <div className="requ__logo-left">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="request-form-container">
        <h2>MAKE REQUEST</h2>
        <p>We will contact you to confirm all the details</p>
        <form className="request-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone (with country code)" required />
          <textarea
            className="request-textarea"
            placeholder="Describe your request"
            required
          ></textarea>

          <button type="submit" className="request__btn">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
