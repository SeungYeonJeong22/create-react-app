import React from "react";
import "./main_css/test_main.module.css";

const LandingPage = (e) => {
  return (
    <div>
      <div class="wave-container">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <div class="line"></div>
      <div class="text-wrap">
        <div class="text">
          <span>L</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <div class="main-btn_wrapper">
            <i class="main-btn fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
