
import React, { useEffect, useState } from 'react';

interface ParallaxElement {
  id: string;
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  speed: number;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
  animation: 'float' | 'drift' | 'rotate';
}

interface ParallaxHeroProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ children, className = '' }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxElements: ParallaxElement[] = [
    {
      id: 'element-1',
      size: 20,
      color: 'hsl(var(--primary) / 0.1)',
      initialX: 10,
      initialY: 20,
      speed: 0.2,
      shape: 'circle',
      animation: 'float'
    },
    {
      id: 'element-2',
      size: 15,
      color: 'hsl(var(--primary) / 0.15)',
      initialX: 80,
      initialY: 15,
      speed: 0.3,
      shape: 'square',
      animation: 'drift'
    },
    {
      id: 'element-3',
      size: 25,
      color: 'hsl(var(--primary) / 0.08)',
      initialX: 70,
      initialY: 60,
      speed: 0.15,
      shape: 'hexagon',
      animation: 'rotate'
    },
    {
      id: 'element-4',
      size: 12,
      color: 'hsl(var(--primary) / 0.2)',
      initialX: 20,
      initialY: 70,
      speed: 0.25,
      shape: 'triangle',
      animation: 'float'
    },
    {
      id: 'element-5',
      size: 18,
      color: 'hsl(var(--primary) / 0.12)',
      initialX: 90,
      initialY: 40,
      speed: 0.18,
      shape: 'circle',
      animation: 'drift'
    }
  ];

  const getShapeClipPath = (shape: string) => {
    switch (shape) {
      case 'triangle':
        return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      case 'hexagon':
        return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
      case 'square':
        return 'none';
      default:
        return 'none';
    }
  };

  return (
    <div className={`parallax-hero ${className}`}>
      {/* Parallax floating elements */}
      {parallaxElements.map((element) => (
        <div
          key={element.id}
          className={`parallax-element animate-${element.animation === 'rotate' ? 'pattern-rotate' : `parallax-${element.animation}`}`}
          style={{
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.shape === 'circle' ? element.color : element.shape === 'square' ? element.color : 'transparent',
            borderRadius: element.shape === 'circle' ? '50%' : '0',
            clipPath: element.shape === 'triangle' || element.shape === 'hexagon' ? getShapeClipPath(element.shape) : 'none',
            border: element.shape === 'triangle' || element.shape === 'hexagon' ? `2px solid ${element.color}` : 'none',
            transform: `translateY(${scrollY * element.speed}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 1
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
