/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 headsetDraco.gltf --transform
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wireless-gaming-headset-3075896c0ab84e23a6f085c300c33805
Title: Wireless Gaming Headset
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/headsetDraco-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -0.22, 0]}
        rotation={[0, 0, 1.28]}
        scale={[1, 0.61, 1]}
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.RoughPlastic}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Silver} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Logo} />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Black_Leather}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.material_6}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/headsetDraco-transformed.glb");
