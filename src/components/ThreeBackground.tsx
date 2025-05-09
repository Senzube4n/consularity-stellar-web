
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

// Node component that represents each point in our constellation
const Node = ({ position, size = 0.05, color = '#0EA5E9', speed = 1 }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [baseSpeed] = useState(() => Math.random() * 0.5 + 0.5); // Random speed multiplier
  
  useFrame(() => {
    if (ref.current) {
      // Unique movement for each node
      ref.current.position.y += Math.sin(Date.now() * 0.001 * baseSpeed + position[0]) * 0.0005 * speed;
      ref.current.position.x += Math.cos(Date.now() * 0.0008 * baseSpeed + position[1]) * 0.0003 * speed;
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
    <>
      <primitive object={new THREE.Line(lineGeometry, 
        <lineBasicMaterial 
          ref={materialRef}
          color={color} 
          transparent 
          opacity={opacity} 
        />
      )} />
    </>
  );
};

// Triangle formed by three nodes
const Triangle = ({ points, color = '#0EA5E9', opacity = 0.1 }) => {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(points[0].x, points[0].y);
    shape.lineTo(points[1].x, points[1].y);
    shape.lineTo(points[2].x, points[2].y);
    shape.lineTo(points[0].x, points[0].y);
    return new THREE.ShapeGeometry(shape);
  }, [points]);

  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = (Math.sin(Date.now() * 0.0015) * 0.1) + opacity;
    }
  });

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <primitive object={geometry} />
      <meshBasicMaterial 
        ref={materialRef}
        color={color} 
        transparent 
        opacity={opacity} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Dynamic connections manager
const DynamicConnections = ({ nodes, maxDistance = 5, triangleDistance = 3 }) => {
  const [connections, setConnections] = useState<Array<[number, number]>>([]);
  const [triangles, setTriangles] = useState<Array<[number, number, number]>>([]);
  
  useFrame(() => {
    const newConnections: Array<[number, number]> = [];
    const potentialTriangles: {[key: string]: number[]} = {};
    
    // Check distances between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = calculateDistance(nodes[i], nodes[j]);
        
        if (dist < maxDistance) {
          newConnections.push([i, j]);
          
          // Store connected pairs for triangle detection
          const key = `${i}-${j}`;
          for (let k = 0; k < nodes.length; k++) {
            if (k !== i && k !== j) {
              const dist1 = calculateDistance(nodes[i], nodes[k]);
              const dist2 = calculateDistance(nodes[j], nodes[k]);
              
              if (dist1 < triangleDistance && dist2 < triangleDistance) {
                // Sort to ensure unique triangles
                const triangleKey = [i, j, k].sort().join('-');
                potentialTriangles[triangleKey] = [i, j, k];
              }
            }
          }
        }
      }
    }
    
    setConnections(newConnections);
    setTriangles(Object.values(potentialTriangles) as Array<[number, number, number]>);
  });
  
  return (
    <>
      {connections.map(([i, j], index) => (
        <ConnectionLine 
          key={`line-${index}`}
          start={nodes[i] as [number, number, number]}
          end={nodes[j] as [number, number, number]}
        />
      ))}
      
      {triangles.map((indices, index) => {
        const trianglePoints = indices.map(idx => new THREE.Vector3(...nodes[idx]));
        return (
          <Triangle 
            key={`triangle-${index}`}
            points={trianglePoints}
          />
        );
      })}
    </>
  );
};

// Calculate distance between two 3D points
function calculateDistance(point1: number[], point2: number[]) {
  return Math.sqrt(
    Math.pow(point1[0] - point2[0], 2) +
    Math.pow(point1[1] - point2[1], 2) +
    Math.pow(point1[2] - point2[2], 2)
  );
}

// Constellation component that generates nodes and connections
const Constellation = ({ count = 50, bounds = 10 }) => {
  // Generate random nodes
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds
    ]);
  }, [count, bounds]);
  
  return (
    <>
      {nodes.map((pos, i) => (
        <Node 
          key={i} 
          position={pos as [number, number, number]} 
          speed={Math.random() * 1.5 + 0.5}
        />
      ))}
      
      <DynamicConnections nodes={nodes} />
    </>
  );
};

// Main ThreeBackground component
const ThreeBackground = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState('transparent');
  const [nodeColor, setNodeColor] = useState('#0EA5E9');
  
  // Update colors based on theme
  useEffect(() => {
    if (theme === 'dark') {
      setBgColor('transparent');
      setNodeColor('#1E90FF');
    } else {
      setBgColor('transparent');
      setNodeColor('#0EA5E9');
    }
  }, [theme]);
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.1} />
        <Constellation count={70} bounds={15} />
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
