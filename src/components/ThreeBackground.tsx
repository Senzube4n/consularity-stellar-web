
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Node component that represents each point in our constellation
const Node = ({ position, size = 0.05, color = '#0EA5E9' }) => {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (ref.current) {
      // Subtle floating movement
      ref.current.position.y += Math.sin(Date.now() * 0.001 + position[0]) * 0.0005;
    }
  });
  
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

// Line connecting two nodes
const ConnectionLine = ({ start, end, color = '#0EA5E9', opacity = 0.2 }) => {
  // Create points using Three.js Vector3
  const points = useMemo(() => {
    return [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ];
  }, [start, end]);
  
  // Create geometry using BufferGeometry and LineBasicMaterial
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);
  
  const materialRef = useRef<THREE.LineBasicMaterial>(null!);
  
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = (Math.sin(Date.now() * 0.001) * 0.2) + opacity;
    }
  });
  
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial 
        ref={materialRef}
        color={color} 
        transparent 
        opacity={opacity} 
      />
    </line>
  );
};

// Constellation component that generates nodes and connections
const Constellation = ({ count = 50, connections = 20, bounds = 10 }) => {
  // Generate random nodes
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds
    ]);
  }, [count, bounds]);
  
  // Generate connections between nodes
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < connections; i++) {
      const startIndex = Math.floor(Math.random() * nodes.length);
      let endIndex = Math.floor(Math.random() * nodes.length);
      
      // Avoid self-connections
      while (endIndex === startIndex) {
        endIndex = Math.floor(Math.random() * nodes.length);
      }
      
      result.push([nodes[startIndex], nodes[endIndex]]);
    }
    return result;
  }, [nodes, connections]);

  return (
    <>
      {nodes.map((pos, i) => (
        <Node key={i} position={pos as [number, number, number]} />
      ))}
      
      {lines.map((line, i) => (
        <ConnectionLine
          key={i}
          start={line[0] as [number, number, number]}
          end={line[1] as [number, number, number]}
        />
      ))}
    </>
  );
};

// Main ThreeBackground component
const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['transparent']} />
        <Constellation count={70} connections={50} bounds={15} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
