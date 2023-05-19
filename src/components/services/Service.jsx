import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";
const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Performance </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Easy to Use</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li> */}
          </ul>
        </article>

        {/* END OF WEB DEVLOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Back-End Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server-Side Programming</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Security</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Debugging</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lastest</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Well Structured</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Industry Related Topics</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data analysis</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
