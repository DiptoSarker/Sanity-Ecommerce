import React from "react";
import logo from "../public/io.png";
import Image from "next/image";

function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Best</p>
        <h3>Chair</h3>
        <h1>Regal</h1>

        <div>
          <button type="button">25% OFF</button>
          <div className="hero-banner-image">
            <Image alt="headset" src={logo} />
          </div>
          <div className="desc">
            <h5>Regal</h5>
            <p>Best in the country...!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
