import React from "react";
import "./main_css/test_main.module.css";

const Home = (e) => {
  return (
    <div>
      <div className="wave-container">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <div className="line"></div>
      <div className="text-wrap">
        <div className="text">
          <span>L</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <div className="main-btn_wrapper">
            <i className="main-btn fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
