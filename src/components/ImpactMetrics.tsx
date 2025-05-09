
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

interface MetricProps {
  value: string;
  label: string;
  duration?: number;
}

const Metric = ({ value, label, duration = 2 }: MetricProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
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

  return (
    <div id={`metric-${label.replace(/\s+/g, '-')}`} className="p-6 bg-white/5 backdrop-blur-md dark:bg-gray-800/30 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/30 transition-all duration-300">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center justify-center h-full"
      >
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-primary"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {value}
        </motion.h3>
        <motion.p 
          className="text-lg text-center mt-3 text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {label}
        </motion.p>
      </motion.div>
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Metric value="30+" label="Successful Implementations" />
      <Metric value="40%" label="Average Cost Reduction" />
      <Metric value="99.9%" label="Client Satisfaction" />
      <Metric value="3x" label="Efficiency Improvement" />
    </div>
  );
};

export default ImpactMetrics;
