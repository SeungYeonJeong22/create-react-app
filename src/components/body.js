import React from "react";
import "./main_css/test_main.module.css";

import LandingPage from "./landingPage"
import MiniPlayer from "./miniPlayer";
import Player from "./player"
import Curator from "./curator"
import Header from "./header";
import Spotify from "../spotifyAPI/spotify";
// import Navigation from "./nav";

const Body = (e) => {
  return (
    <div>
      <header>
        <div>
          <title>Music Recommendation Recsys 07</title>
          <meta charset="UTF-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          />
          <link rel="stylesheet" href="./style.css" />
        </div>
      </header>
      <div className="wrapper">
        <LandingPage />
        <Header />
        {/* <Navigation /> */}
        <MiniPlayer />
        <div className="dim"></div>
        <Player />
        <Curator />
        <Spotify />
      </div>
    </div>
  );
};

export default Body;
