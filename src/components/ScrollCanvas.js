import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values with spring physics
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const rotation = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), springConfig);

  // Canvas animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Particles system
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${210 + Math.random() * 60}, 70%, 60%)`;
      }

      update(progress) {
        this.x += this.vx * (1 + progress * 2);
        this.vy += this.vy * (1 + progress * 2);
        this.life -= 0.5;
        
        // Scroll-influenced movement
        this.x += Math.sin(progress * Math.PI * 2) * 0.2;
        this.y -= progress * 0.3;
      }

      draw(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    let particles = [];
    let animationId;
    let lastTime = 0;

    const animate = (currentTime) => {
      if (currentTime - lastTime > 16) { // ~60fps
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        
        const progress = scrollYProgress.get();
        
        // Add new particles based on scroll
        if (Math.random() < 0.1 + progress * 0.2) {
          particles.push(new Particle(
            Math.random() * dimensions.width,
            dimensions.height + 10
          ));
        }
        
        // Update and draw particles
        particles = particles.filter(particle => {
          particle.update(progress);
          particle.draw(ctx);
          return !particle.isDead() && particle.y > -10;
        });
        
        // Draw connecting lines between nearby particles
        ctx.strokeStyle = `rgba(0, 122, 255, ${0.1 + progress * 0.2})`;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.globalAlpha = (1 - distance / 100) * 0.3;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        
        ctx.globalAlpha = 1;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationId);
    };
  }, [dimensions.width, dimensions.height, scrollYProgress]);

  return (
    <div 
      ref={containerRef}
      className="scroll-canvas-container"
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          rotateZ: rotation,
          scale: scale,
          opacity: opacity
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />
        
        {/* Overlay gradient elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(0,122,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            scale: useSpring(useTransform(scrollYProgress, [0, 1], [0.5, 1.5]), springConfig)
          }}
        />
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(88,86,214,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            scale: useSpring(useTransform(scrollYProgress, [0, 1], [1.5, 0.5]), springConfig)
          }}
        />
      </motion.div>
      
      {/* Scroll progress indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #007AFF, #5856D6, #FF3B30)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 1000
        }}
      />
    </div>
  );
};

export default ScrollCanvas;