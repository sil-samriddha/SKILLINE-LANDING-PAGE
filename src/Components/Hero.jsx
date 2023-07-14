import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
import "../Styles/hero.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: "top-center",
    });
  }, []);
  function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1>
            <span>Studying </span> Online is now much easier
          </h1>
          <p>
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="hero-btn">
            <button>Join for free</button>
            <img src="Hero/play.svg" alt="play" />
            <a href="/try">Watch how it works</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="Hero/hero-image.png" alt="image" id="hero-main" />
          {range(1, 5).map((obj) => (
            <img
              key={obj}
              src={`Hero/svg (${obj}).svg`}
              alt="image"
              id={`hero-${obj}`}
              data-aos="fade-up"
              data-aos-delay={obj * 300}
            />
          ))}
        </div>
      </div>
      <div className="companies" data-aos="fade-up">
        <h1>Trusted by 5,000+ Companies Worldwide</h1>
        <div className="com-elements">
          {range(1, 7).map((obj) => (
            <img key={obj} src={`Hero/C${obj}.svg`} alt="logo" />
          ))}
        </div>
      </div>
    </>
  );
}
