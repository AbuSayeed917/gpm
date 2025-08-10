import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// Helper component to avoid hooks in map callbacks
const BackgroundElement = ({ element, yTransform, xTransform }) => {
  const bgY = useTransform(yTransform, [0, 1], [0, element.speed || 1]);
  const bgX = useTransform(xTransform, [0, 1], [0, element.speed || 1]);
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        y: bgY,
        x: bgX,
        ...element.style
      }}
      className={element.className || ''}
    >
      {element.content}
    </motion.div>
  );
};

// Helper component for layer elements
const LayerElement = ({ layer, index, scrollYProgress }) => {
  const layerY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${(layer.speed || 1) * -50}%`, `${(layer.speed || 1) * 50}%`]
  );
  
  return (
    <motion.div
      style={{
        position: layer.absolute !== false ? 'absolute' : 'relative',
        inset: layer.absolute !== false ? 0 : 'auto',
        y: layerY,
        zIndex: layer.zIndex || index,
        ...layer.style
      }}
      className={layer.className || ''}
    >
      {layer.content}
    </motion.div>
  );
};

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = '',
  backgroundElements = [],
  threshold = 0.1 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: false });
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Calculate initial position
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onResize = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Advanced parallax transforms with bidirectional control
  const elementHeight = ref.current?.offsetHeight || 0;
  
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + elementHeight],
    direction === 'vertical' 
      ? [`-${speed * 100}%`, `${speed * 100}%`]
      : ['0%', '0%']
  );

  const x = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + elementHeight],
    direction === 'horizontal' 
      ? [`-${speed * 100}%`, `${speed * 100}%`]
      : ['0%', '0%']
  );

  const opacity = useTransform(
    scrollY,
    [
      elementTop - clientHeight,
      elementTop - clientHeight * 0.5,
      elementTop + elementHeight * 0.5,
      elementTop + elementHeight
    ],
    [0, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + elementHeight],
    [0.8, 1.1]
  );

  // Spring physics for smooth animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const xSpring = useSpring(x, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  return (
    <motion.section
      ref={ref}
      className={`parallax-section ${className}`}
      style={{
        opacity: opacitySpring,
        scale: scaleSpring,
        willChange: 'transform, opacity'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background parallax elements */}
      {backgroundElements.map((element, index) => (
        <BackgroundElement
          key={index}
          element={element}
          yTransform={y}
          xTransform={x}
        />
      ))}

      {/* Foreground content */}
      <motion.div
        style={{
          y: ySpring,
          x: xSpring
        }}
        className="parallax-content"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

// Higher-order component for enhanced parallax containers
export const ParallaxContainer = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Layered parallax component for depth effects
export const LayeredParallax = ({ layers = [], className = '' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div 
      ref={containerRef} 
      className={`layered-parallax ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {layers.map((layer, index) => (
        <LayerElement
          key={index}
          layer={layer}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

// Apple-style magnetic scroll sections
export const MagneticSection = ({ children, magneticForce = 0.1, className = '' }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) * magneticForce,
        y: (e.clientY - centerY) * magneticForce
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [magneticForce]);

  return (
    <motion.div
      ref={ref}
      className={`magnetic-section ${className}`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
      style={{
        cursor: isHovering ? 'pointer' : 'default'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;