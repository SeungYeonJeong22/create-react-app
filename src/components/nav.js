import React from "react";
import "./main_css/test_main.module.css";
import { Link } from "react-router-dom";
import Spotify from "./search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigation = (e) => {
  return (
    
      <div className="nav">
          <ul className="nav_main">
            <li>
                <Link className="nav_link" to="/">
                  Home
                </Link>
            </li>
            <li>{/* <Link className="nav_link">Listeners</Link> */}</li>
            <li>
                <Link className="nav_link" id="search_music_page"to="/search">
                  Search Music
                </Link>
            </li>

            <li>{/* <Link className="nav_link">LP. Mix</Link> */}</li>
          </ul>
          <div className="nav_divider"></div>
          <ul className="nav_sub">
            <li>{/* <Link className="nav_link" href="">About</Link> */}</li>
            <li>{/* <Link className="nav_link" href="">Contact</Link> */}</li>
          </ul>
      </div>
    
  );
};

export default Navigation;
