
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * ParticlesBackground Component
 * 
 * Creates an interactive animated background with connected particles.
 * The particles move randomly and form connections (lines) when they are close to each other.
 * When three particles are close enough, triangles are formed and filled.
 * 
 * Features:
 * - Responsive canvas that adapts to window size
 * - Theme-aware rendering (adapts to light/dark mode)
 * - Mobile optimization with reduced particle count
 * - Interactive mouse control to move particles
 * - Triangle filling between connected particles
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API - Canvas API documentation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D - Canvas 2D context
 */
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /**
     * Handle window resize events
     * Updates canvas dimensions to match window size
     */
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    /**
     * Particle class
     * 
     * Defines properties and methods for individual particles
     */
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.color = '#0EA5E9'; // Consistent aquamarine color in both modes
      }
      
      /**
       * Update particle position and handle boundary conditions
       */
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap particles around screen edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      /**
       * Draw particle on canvas
       */
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles - use fewer particles on mobile
    const particleCount = isMobile ? 25 : 70; // Reduce particle count on mobile devices
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    /**
     * Connect particles with lines and fill triangles
     * 
     * Draws lines between particles that are within maxDistance of each other
     * Fills triangles when three particles form a triangle within maxDistance
     * 
     * @see https://en.wikipedia.org/wiki/Delaunay_triangulation - Concept of triangulation
     */
    function connectParticles() {
      if (!ctx) return;
      
      const maxDistance = isMobile ? 120 : 180; // Reduced connection distance for mobile
      
      // First draw lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Increased opacity for better visibility
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.5})`; // Consistent with brand color
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      // Now find and fill triangles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist1 = getDistance(particles[i], particles[j]);
          if (dist1 < maxDistance) {
            for (let k = j + 1; k < particles.length; k++) {
              const dist2 = getDistance(particles[j], particles[k]);
              const dist3 = getDistance(particles[i], particles[k]);
              
              // If all three particles are within range of each other, draw a triangle
              if (dist2 < maxDistance && dist3 < maxDistance) {
                // Calculate average distance for opacity
                const avgDist = (dist1 + dist2 + dist3) / 3;
                const opacity = (1 - avgDist / maxDistance) * 0.15; // Lower opacity for the fills
                
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.lineTo(particles[k].x, particles[k].y);
                ctx.closePath();
                
                ctx.fillStyle = `rgba(14, 165, 233, ${opacity})`; // Consistent with brand color, semi-transparent
                ctx.fill();
              }
            }
          }
        }
      }
    }
    
    /**
     * Helper function to calculate distance between particles
     * 
     * @param p1 - First particle
     * @param p2 - Second particle
     * @returns Distance between particles
     */
    function getDistance(p1: Particle, p2: Particle) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    
    /**
     * Animation loop
     * 
     * Clear canvas, update and draw particles, connect particles
     * Runs recursively using requestAnimationFrame for smooth animation
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
     */
    function animate() {
      if (!ctx) return;
      
      // Set background color based on theme
      ctx.fillStyle = theme === 'dark' ? '#121212' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Add interactive functionality
    let isMouseDown = false;
    let lastX = 0;
    let lastY = 0;
    
    /**
     * Mouse interaction to push particles
     * 
     * Allows user to interact with particles by dragging mouse
     */
    canvas.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      
      const dx = e.offsetX - lastX;
      const dy = e.offsetY - lastY;
      
      // Move particles based on mouse movement
      particles.forEach(particle => {
        particle.x += dx * 0.05;
        particle.y += dy * 0.05;
      });
      
      lastX = e.offsetX;
      lastY = e.offsetY;
    });
    
    canvas.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
    
    canvas.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });
    
    // Touch events for mobile devices
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        isMouseDown = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    });
    
    canvas.addEventListener('touchmove', (e) => {
      if (!isMouseDown || e.touches.length === 0) return;
      
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      
      // Move particles based on touch movement
      particles.forEach(particle => {
        particle.x += dx * 0.05;
        particle.y += dy * 0.05;
      });
      
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    });
    
    canvas.addEventListener('touchend', () => {
      isMouseDown = false;
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', () => {});
      canvas.removeEventListener('mousemove', () => {});
      canvas.removeEventListener('mouseup', () => {});
      canvas.removeEventListener('mouseleave', () => {});
      canvas.removeEventListener('touchstart', () => {});
      canvas.removeEventListener('touchmove', () => {});
      canvas.removeEventListener('touchend', () => {});
    };
  }, [theme, isMobile]); // Added isMobile as dependency
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 cursor-move"
      style={{ opacity: 0.9 }} // Increased opacity for better visibility
      aria-hidden="true" // Improve accessibility by marking as decorative
    />
  );
};

export default ParticlesBackground;
