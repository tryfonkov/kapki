"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CanvasScene() {
  return (
    <div className="flex-1 relative">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        shadows
      >
        {/* Ambient light */}
        <ambientLight intensity={0.5} />

        {/* Directional light */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <hemisphereLight color={"white"} groundColor={"#444"} intensity={0.5} />

        {/* Test cube */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Camera controls */}
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
}
