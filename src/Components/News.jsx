import React, { useEffect } from "react";
import AOS from "aos";
import "../Styles/news.css";
import "aos/dist/aos.css";
import news from "../Constants/News";

export default function News() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-center",
    });
  }, []);
  return (
    <div className="news">
      <h1 data-aos="fade-up">
        Lastest <span>News and Resources</span>
      </h1>
      <p data-aos="fade-up">
        See the developments that have occurred to Skillines in the world
      </p>
      <div className="news-cover" data-aos="fade-up">
        <div className="news-main">
          <img src={news[0].Image} alt="image" />
          <span className="news-subject">{news[0].subject}</span>
          <h3>{news[0].title}</h3>
          <p>{news[0].describe}</p>
          <a href="/news">Read more</a>
        </div>
        <div className="news-elements" data-aos="fade-up">
          {news.slice(1).map((news) => (
            <div key={news.id} className="news-element">
              <div className="news-element-img">
                <img src={news.Image} alt="img" />
                <span className="news-subject">{news.subject}</span>
              </div>
              <div>
                <div>{news.title}</div>
                <span>{news.describe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
