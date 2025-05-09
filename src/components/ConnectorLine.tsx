
import React, { useEffect, useRef } from 'react';

interface ConnectorLineProps {
  active: boolean;
}

const ConnectorLine = ({ active }: ConnectorLineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current && active) {
      ref.current.style.opacity = '1';
      ref.current.style.height = '90%';
    } else if (ref.current) {
      ref.current.style.opacity = '0.3';
      ref.current.style.height = '70%';
    }
  }, [active]);
  
  return (
    <div 
      ref={ref}
      className="connector-line animate-connector-pulse transition-all duration-700"
      style={{ height: '70%', opacity: 0.3 }}
    />
  );
};

export default ConnectorLine;
