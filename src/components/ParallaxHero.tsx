
import React, { useEffect, useState, ReactNode } from 'react';

interface ParallaxHeroProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxHero = ({ children, className = '', speed = 0.5 }: ParallaxHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxHero;
