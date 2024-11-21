import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <div className="footer-content">
          <ul>
            <li>
              <Link to={`/`} className="link">INTRO</Link>
            </li>
            <li>
              <Link to={`/request`} className="link">REQUEST</Link>
            </li>
            <li>
              <Link to={`/about`} className="link">ABOUT US</Link>
            </li>
            <li>
              <Link to={`/chart`} className="link">CHARTERS</Link>
            </li>
            <li>
              <Link to={`/aircraft`} className="link">AIRCRAFT MANAGEMENT</Link>
            </li>
            <li>
              <Link to={`/concierge`} className="link">CONCIERGE</Link>
            </li>
            <li>
              <Link to={`/contact`} className="link">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
