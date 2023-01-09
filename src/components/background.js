import React from "react";
import "./main_css/test_main.module.css";
import MiniPlayer from "./miniPlayer";
import Player from "./player";
import Header from "./header";
import Navigation from "./nav";

const Background = (e) => {
  return (
    <div className="wave-container">
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
    </div>
  )
}

export default Background;