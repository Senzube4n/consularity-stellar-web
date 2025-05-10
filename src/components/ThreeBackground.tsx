
import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

// Fallback component when WebGL isn't available
const FallbackBackground = ({ isDarkMode }) => {
  return (
    <div 
      className={`absolute inset-0 -z-10 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-sky-50 to-indigo-100'
      }`}
    >
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? 'bg-blue-400/20' : 'bg-blue-500/20'}`}
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-slow ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced orb component with glow effect
const Orb = ({ position, size = 0.08, color, speed = 1, glowColor }) => {
  const meshRef = useRef(null);
  const glowRef = useRef(null);
  const [baseSpeed] = useState(() => Math.random() * 0.7 + 0.5); // Random speed multiplier
  const [randomOffset] = useState(() => Math.random() * 1000); // Random offset for unique movement patterns
  
  useFrame(() => {
    if (meshRef.current) {
      // More complex movement for each orb
      meshRef.current.position.y += Math.sin(Date.now() * 0.0003 * baseSpeed * speed + randomOffset) * 0.003;
      meshRef.current.position.x += Math.cos(Date.now() * 0.0002 * baseSpeed * speed + randomOffset) * 0.002;
      meshRef.current.position.z += Math.sin(Date.now() * 0.0001 * baseSpeed * speed + randomOffset) * 0.001;
      
      // Slight rotation for more dynamism
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.001 * speed;
      
      // Update glow position to match the orb
      if (glowRef.current) {
        glowRef.current.position.copy(meshRef.current.position);
      }
    }
  });
  
  return (
    <group>
      {/* Main orb */}
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.2} 
          roughness={0.3} 
          emissive={glowColor} 
          emissiveIntensity={0.5} 
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[size * 1.4, 16, 16]} />
        <meshBasicMaterial 
          color={glowColor} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
};

// Enhanced line connecting two orbs
const ConnectionLine = ({ start, end, color, glowColor, opacity = 0.3 }) => {
  const ref = useRef();
  const glowRef = useRef();
  
  const points = useMemo(() => {
    return [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ];
  }, [start, end]);
  
  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);
  
  useFrame(() => {
    if (ref.current) {
      // Pulsing effect
      const pulse = (Math.sin(Date.now() * 0.001) * 0.2) + 0.8;
      ref.current.material.opacity = pulse * opacity;
      
      if (glowRef.current) {
        glowRef.current.material.opacity = pulse * opacity * 0.5;
      }
    }
  });
  
  return (
    <group>
      {/* Main line */}
      <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ 
        color: color, 
        transparent: true, 
        opacity: opacity 
      }))} ref={ref} />
      
      {/* Glow line */}
      <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ 
        color: glowColor, 
        transparent: true, 
        opacity: opacity * 0.5 
      }))} ref={glowRef} />
    </group>
  );
};

// Enhanced triangle with glowing effect
const Triangle = ({ points, color, glowColor, opacity = 0.15 }) => {
  const materialRef = useRef();
  const glowMaterialRef = useRef();
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(points[0].x, points[0].y);
    shape.lineTo(points[1].x, points[1].y);
    shape.lineTo(points[2].x, points[2].y);
    shape.lineTo(points[0].x, points[0].y);
    return new THREE.ShapeGeometry(shape);
  }, [points]);

  useFrame(() => {
    if (materialRef.current) {
      // Pulsing effect
      const pulse = (Math.sin(Date.now() * 0.0015) * 0.2) + 0.8;
      materialRef.current.opacity = pulse * opacity;
      
      if (glowMaterialRef.current) {
        glowMaterialRef.current.opacity = pulse * opacity * 0.6;
      }
    }
  });

  return (
    <group>
      {/* Main triangle */}
      <mesh rotation={[Math.PI / 2, 0, 0]} geometry={geometry}>
        <meshBasicMaterial 
          ref={materialRef}
          color={color} 
          transparent 
          opacity={opacity} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Glow triangle */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.001, 0]} geometry={geometry}>
        <meshBasicMaterial 
          ref={glowMaterialRef}
          color={glowColor} 
          transparent 
          opacity={opacity * 0.6} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Enhanced dynamic connections manager
const DynamicConnections = ({ nodes, colors, maxDistance = 5, triangleDistance = 3 }) => {
  const [connections, setConnections] = useState([]);
  const [triangles, setTriangles] = useState([]);
  
  useFrame(() => {
    const newConnections = [];
    const potentialTriangles = {};
    
    // Check distances between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = calculateDistance(nodes[i], nodes[j]);
        
        if (dist < maxDistance) {
          newConnections.push([i, j]);
          
          // Store connected pairs for triangle detection
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
    setTriangles(Object.values(potentialTriangles));
  });
  
  return (
    <>
      {connections.map(([i, j], index) => (
        <ConnectionLine 
          key={`line-${index}`}
          start={nodes[i]}
          end={nodes[j]}
          color={colors.lineColor}
          glowColor={colors.glowColor}
          opacity={0.4}
        />
      ))}
      
      {triangles.map((indices, index) => {
        const trianglePoints = indices.map(idx => new THREE.Vector3(...nodes[idx]));
        return (
          <Triangle 
            key={`triangle-${index}`}
            points={trianglePoints}
            color={colors.triangleColor}
            glowColor={colors.glowGlowColor || colors.glowColor}
            opacity={0.15}
          />
        );
      })}
    </>
  );
};

// Calculate distance between two 3D points
function calculateDistance(point1, point2) {
  return Math.sqrt(
    Math.pow(point1[0] - point2[0], 2) +
    Math.pow(point1[1] - point2[1], 2) +
    Math.pow(point1[2] - point2[2], 2)
  );
}

// Enhanced constellation component
const Constellation = ({ count = 50, bounds = 10, colors }) => {
  // Generate random nodes with varying speeds
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds,
      (Math.random() - 0.5) * bounds
    ]);
  }, [count, bounds]);
  
  const speeds = useMemo(() => {
    return Array.from({ length: count }, () => Math.random() * 2 + 0.5);
  }, [count]);
  
  return (
    <>
      {nodes.map((pos, i) => (
        <Orb 
          key={i} 
          position={pos} 
          speed={speeds[i]}
          color={colors.orbColor}
          glowColor={colors.glowColor}
          size={Math.random() * 0.04 + 0.04} // Varying sizes
        />
      ))}
      
      <DynamicConnections 
        nodes={nodes} 
        colors={colors}
        maxDistance={3.5} 
        triangleDistance={2.5} 
      />
    </>
  );
};

// Enhanced Scene component with proper theme integration
const Scene = ({ isDarkMode }) => {
  // Colors based on theme
  const colors = useMemo(() => ({
    orbColor: isDarkMode ? '#1E90FF' : '#0EA5E9',
    glowColor: isDarkMode ? '#4169E1' : '#38BDF8',
    lineColor: isDarkMode ? '#4682B4' : '#0EA5E9',
    glowGlowColor: isDarkMode ? '#1E90FF' : '#38BDF8',
    triangleColor: isDarkMode ? '#4169E1' : '#0EA5E9',
    glowTriangleColor: isDarkMode ? '#6495ED' : '#38BDF8',
    ambientLight: isDarkMode ? '#222233' : '#f0f8ff',
    pointLight: isDarkMode ? '#6495ED' : '#0EA5E9',
  }), [isDarkMode]);

  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.15 : 0.25} color={colors.ambientLight} />
      <pointLight position={[0, 0, 10]} intensity={isDarkMode ? 0.7 : 0.5} color={colors.pointLight} />
      <Constellation count={60} bounds={15} colors={colors} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.3}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
};

// Define props interface for ErrorBoundary
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple error boundary component for handling WebGL errors
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ThreeJS error:", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Main component with error boundary for WebGL
const ThreeBackground = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [hasWebGLError, setHasWebGLError] = useState(false);

  // Handle WebGL errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        (event.message && event.message.includes('WebGL')) || 
        (event.error && event.error.message && event.error.message.includes('WebGL'))
      ) {
        console.error('WebGL error detected:', event);
        setHasWebGLError(true);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasWebGLError) {
    return <FallbackBackground isDarkMode={isDarkMode} />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <ErrorBoundary fallback={<FallbackBackground isDarkMode={isDarkMode} />}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 50 }}
          style={{ background: isDarkMode ? '#121212' : '#f8fafc' }}
          onCreated={({ gl }) => {
            gl.setClearColor(isDarkMode ? '#121212' : '#f8fafc');
          }}
          shadows
          dpr={[1, 1.5]} // Limit DPR for better performance
        >
          <Suspense fallback={null}>
            <Scene isDarkMode={isDarkMode} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeBackground;

