import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="WELCOME TO LEARN SPACE" title="Learn, Grow, Succeed – Anytime, Anywhere" />
            <p>
            "Discover a world of knowledge at your fingertips—engage with interactive courses, expert instructors, and a flexible learning experience tailored to your needs."
            </p>
            <div className="button">
              <button
                className="primary-btn"
                onClick={() => {
                  navigate("/courses", {
                    replace: true,
                  });
                }}
              >
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button
                onClick={() => {
                  navigate("/courses", {
                    replace: true,
                  });
                }}
              >
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
