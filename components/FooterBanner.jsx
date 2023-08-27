"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/headphones_c_1.webp";
//import HeadSet from "../components/HeadSet";

function FooterBanner() {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>30% OFF</p>
          <h3>This</h3>
          <h3>Eid</h3>
          <p>Eid Sale</p>
        </div>
        <div className="right">
          <p>Headset</p>
          <h3>Beat Box</h3>
          <p>Good Sound Quality</p>

          <button type="button">HeadSet</button>
          <div className="footer-banner-image">
            <Image alt="headset" src={logo} />
          </div>
          {/* <HeadSet /> */}
          {/* <div className="footer-banner-image">
            <Canvas>
              <ChairDraco />
            </Canvas>
          </div> */}

          {/* {banners.map((banner) => (
            <div key={banner.slug}>
              {" "}
              <img
                src={urlFor(banner.image)}
                alt="headphones"
                className="footer-banner-image"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
