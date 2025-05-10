
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Particle class
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
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const particleCount = 70; // Increased particle count for more connections
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Line connection function
    function connectParticles() {
      if (!ctx) return;
      
      const maxDistance = 180; // Increased max distance for more connections
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
    }
    
    // Animation loop
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
    
    // Mouse interaction to push particles
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
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', () => {});
      canvas.removeEventListener('mousemove', () => {});
      canvas.removeEventListener('mouseup', () => {});
      canvas.removeEventListener('mouseleave', () => {});
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 cursor-move"
      style={{ opacity: 0.9 }} // Increased opacity for better visibility
    />
  );
};

export default ParticlesBackground;
