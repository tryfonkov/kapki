import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

type Props = {
  url: string;
  scale?: number;
};

export function ModelLoader({ url, scale = 1 }: Props) {
  const { scene } = useGLTF(url) as { scene: Group };

  scene.traverse((child) => {
    if ((child as any).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={scale} />
    </Suspense>
  );
}

useGLTF.preload("/models/DamagedHelmet.glb");
