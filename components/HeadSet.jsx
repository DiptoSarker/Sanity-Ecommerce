"use client";

import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeadsetDraco from "./ChairDraco";

function page() {
  return (
    <div className="footer-banner-image">
      <Canvas>
        <Stage environment="city" intensity={0.9}>
          <HeadsetDraco />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default page;
