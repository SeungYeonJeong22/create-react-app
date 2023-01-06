import React from "react";
import "./main_css/test_main.module.css";

const Header = (e) => {
  return (
    <div class="header">
      <div class="burger-wrapper">
        <div class="burger"></div>
      </div>
      <div class="logo-text">Listeners Playlist</div>
      <div class="back_btn">
        <div class="circle"></div>
        <div class="text">Back</div>
      </div>
    </div>
  );
}

export default Header;
