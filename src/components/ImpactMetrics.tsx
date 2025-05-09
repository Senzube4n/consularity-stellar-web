
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useTheme } from '@/hooks/useTheme';

interface MetricProps {
  value: string;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
}

const Metric = ({ value, label, duration = 2, icon }: MetricProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState("0");
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`metric-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [label]);
  
  // Animate the number counting up
  useEffect(() => {
    if (!isVisible) return;
    
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentValue = Math.floor(progress * numericValue);
      setAnimatedValue(`${currentValue}${suffix}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setAnimatedValue(value); // Ensure final value is exactly as provided
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, value]);

  return (
    <motion.div 
      id={`metric-${label.replace(/\s+/g, '-')}`}
      className={`p-6 ${isDarkMode ? 'bg-gray-800/30' : 'bg-white/5'} backdrop-blur-md rounded-xl shadow-lg border 
        ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} 
        hover:border-primary/50 dark:hover:border-primary/30 transition-all duration-300`}
      initial={{ y: 20, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: isDarkMode 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.4)" 
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full"
      >
        {icon && (
          <motion.div
            className="text-primary mb-2 text-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.div 
          className="relative w-full flex justify-center overflow-hidden"
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-primary tracking-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {animatedValue}
          </motion.h3>
          
          {/* Glow effect */}
          {isVisible && (
            <motion.div 
              className="absolute inset-0 bg-primary/10 blur-xl rounded-full"
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}
        </motion.div>
        
        <motion.p 
          className="text-lg text-center mt-3 text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {label}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const ImpactMetrics = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Add some simple SVG icons using JSX
  const icons = {
    implementation: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <path d="M13 8l4 4-4 4"></path>
      </svg>
    ),
    cost: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    satisfaction: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.9 13.5a9 9 0 1 1-1.9-8.9"></path>
        <path d="M22 12l-3-3-3 3"></path>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      </svg>
    ),
    efficiency: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    )
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Metric 
        value="30+" 
        label="Successful Implementations" 
        icon={icons.implementation}
      />
      <Metric 
        value="40%" 
        label="Average Cost Reduction" 
        icon={icons.cost}
      />
      <Metric 
        value="99.9%" 
        label="Client Satisfaction" 
        icon={icons.satisfaction}
      />
      <Metric 
        value="3x" 
        label="Efficiency Improvement" 
        icon={icons.efficiency}
      />
    </div>
  );
};

export default ImpactMetrics;
