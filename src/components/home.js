import React from "react";
import "./main_css/test_main.module.css";
import MiniPlayer from "./miniPlayer";
import Player from "./player";
import Header from "./header";
import Navigation from "./nav";

const Home = (e) => {
  return (
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
  );
};

export default Home;
