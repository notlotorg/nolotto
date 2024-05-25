import React from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { MainScene } from "../scenes/MainScene";
import { OrbitControls } from "@react-three/drei";

export const LoginPage = () => {
  return <>
    {/* <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 2], fov: 75, near: 1, far: 10}}
    >
      <ambientLight />
      <MainScene />
      <OrbitControls />
    </Canvas> */}
  </>;
};
