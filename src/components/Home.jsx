import React from "react";
import hero from "./img/hero.png";
import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">
          When <span className="highlight"> Banking</span> Meets
          <br />
          <span className="highlight"> Minimalist</span>
        </h1>

        <img src={hero} className="hero" alt="Home" />
      </div>
      <p className="title">A simpler banking experience for a simpler life</p>
      {/* <link <button className='learn-btn'>Learn More ↓</button> */}
      <Link className="learn-btn " aria-current="page" to="/About">
        Learn More ↓
      </Link>
    </div>
  );
}
export default Home;
