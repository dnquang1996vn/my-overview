/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types in JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      boxGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      directionalLight: any;
      fog: any;
    }
  }
}

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random particles in a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(3000); // 1000 particles * 3 coords
    for (let i = 0; i < 3000; i++) {
      temp[i] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
       ref.current.rotation.x -= delta / 10;
       ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const FloatingGeometry = () => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[3, 1, -5]} rotation={[0, 1, 0]}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#818cf8" wireframe transparent opacity={0.3} />
            </mesh>
            <mesh position={[-4, -2, -4]} rotation={[1, 0, 1]}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.2} />
            </mesh>
             <mesh position={[4, -2, -2]} rotation={[1, 0, 1]}>
                <torusGeometry args={[0.8, 0.2, 16, 50]} />
                <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
            </mesh>
        </Float>
    )
}

export const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <ParticleField />
        <FloatingGeometry />
        
        <fog attach="fog" args={['#0f172a', 5, 20]} />
      </Canvas>
    </div>
  );
};

// Keep empty export for compatibility if needed, or just remove the second component
export const QuantumComputerScene: React.FC = () => {
  return null; 
};