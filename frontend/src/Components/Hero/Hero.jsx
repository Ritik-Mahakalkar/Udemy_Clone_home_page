import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero text-center d-flex align-items-center justify-content-center">
      <div className="text-white">
        <h1>Learn Anytime, Anywhere</h1>
        <p>Join millions of learners on UdemyClone</p>
        <button className="btn button-browse mt-3">Browse Courses</button>
      </div>
    </div>
  );
}

export default Hero;
