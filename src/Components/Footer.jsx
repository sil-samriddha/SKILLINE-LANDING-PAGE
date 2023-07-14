import React from "react";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-icon">
        <div>
          <div className="footer-square"></div>
          <h1>Skilline</h1>
        </div>
        <h4>Virtual Class for Zoom</h4>
      </div>
      <div className="news-letter">
        <h4>Subscribe to get our Newsletter</h4>
        <div>
          <input type="email" placeholder="Your Email" />
          <button>Subcribe</button>
        </div>
      </div>
      <div className="footer-foot">
        <div>
          <a href="/careers">Careers</a>
          <a href="/policy">Privacy Policy</a>
          <a href="/t&c" style={{ borderRight: "0px" }}>
            Terms & Conditions
          </a>
        </div>
        <h4>© 2021 Class Technologies Inc.</h4>
      </div>
    </footer>
  );
}
