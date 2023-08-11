import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
// import IMG9 from "../../assets/portfolio9.png";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    image: IMG8,
    title: "LifeTime Lottery Client Project",
    github:
      "https://github.com/tushii05/LifeTime-Lotto",
    demo: "http://192.241.206.36:5000",
  },
  {
    id: uuid(),
    image: IMG1,
    title: "Real Time Chat Application",
    github: "https://github.com/tushii05/live-chat-tushiii",
    demo: "#",
  },
  {
    id: uuid(),
    image: IMG3,
    title: "Training And Placement Department",
    github: "https://github.com/tushii05/Training_Department-",
    demo: "#",
  },
  {
    id: uuid(),
    image: IMG2,
    title: "Resume Builder",
    github: "https://github.com/tushii05/Resume-Builder",
    demo: "#",
  },
  {
    id: uuid(),
    image: IMG4,
    title: "Crypto Currency Tracker",
    github: "https://github.com/tushii05/Ceypto_track",
    demo: "https://tushii05.github.io/Ceypto_track/",
  },
  // {
  //   id: uuid(),
  //   image: IMG3,
  //   title: "Spotify Clone",
  //   github: "https://github.com/Karanmalviya/spotify-clone",
  //   demo: "#",
  // },
  {
    id: uuid(),
    image: IMG5,
    title: "Daily Quotes",
    github: "https://github.com/tushii05/Random-Quote-Generator-in-JavaScript",
    demo: "https://tushii05.github.io/Random-Quote-Generator-in-JavaScript/",
  },
  {
    id: uuid(),
    image: IMG7,
    title: "Clock",
    github: "https://github.com/tushii05/clock-",
    demo: "https://tushii05.github.io/clock-/",
  },
  // {
  //   id: uuid(),
  //   image: IMG6,
  //   title: "Railway Management System",
  //   github: "https://github.com/Karanmalviya/Railway-Management-System.git",
  //   demo: "#",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <SwiperSlide className="testimonial" key={id}>
                <article className="portfolio__item" key={id}>
                  <div>
                    <img src={image} alt="" className="portfolio__item-image" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>{" "}
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Portfolio;
