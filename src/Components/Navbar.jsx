import React, { useState } from "react";
import nav_constants from "../Constants/Nav";
import "../Styles/nav.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <div className="polygon"></div>
          <a href="/">Skilline</a>
        </li>

        {nav_constants.map((nav) => (
          <li key={nav.id} className={`item ${isActive ? "active" : ""}`}>
            <a href={nav.path}>{nav.name}</a>
          </li>
        ))}
        <li className={`item button ${isActive ? "active" : ""}`}>
          <a href="/login">Login</a>
        </li>
        <li className={`item button secondary ${isActive ? "active" : ""}`}>
          <a href="/signup">Signup</a>
        </li>
        <li className="toggle" onClick={toggleActive}>
          <span className="bars"></span>
        </li>
      </ul>
    </nav>
  );
}
