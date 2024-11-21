import React from "react";
import "./style.css";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div>
        <main className="main-content">
          <h1 className="title">JUST SAY US HELLO</h1>
          <div className="contact-info">
            <div className="contact">
              <h3>Contact</h3>
              <p>+380 (73) 887 87 81</p>
              <p>sale@jet24.aero</p>
            </div>
            <div className="follow">
              <h3>Follow us</h3>
              <div className="social-icons">
                <FaWhatsapp className="icon" />
                <FaTelegramPlane className="icon" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
