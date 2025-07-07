"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from "@react-three/drei";
import { ModelLoader } from "./ModelLoader";

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

         <ModelLoader url="/models/DamagedHelmet.glb" scale={1} />

        {/* Camera controls */}
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          enableDamping={false}
        />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
