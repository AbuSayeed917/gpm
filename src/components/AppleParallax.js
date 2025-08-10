import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Simple parallax component that follows Apple's design principles
const AppleParallax = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}%`, `${speed * 50}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`apple-parallax ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Enhanced parallax with multiple layers - Apple style
export const AppleLayeredParallax = ({ children, layers = [], className = '' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create individual transforms for each layer (max 5 layers for performance)
  const layer0Transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${((layers[0]?.speed || 0.5) * -50)}%`, `${((layers[0]?.speed || 0.5) * 50)}%`]
  );
  const layer1Transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${((layers[1]?.speed || 0.5) * -50)}%`, `${((layers[1]?.speed || 0.5) * 50)}%`]
  );
  const layer2Transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${((layers[2]?.speed || 0.5) * -50)}%`, `${((layers[2]?.speed || 0.5) * 50)}%`]
  );
  const layer3Transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${((layers[3]?.speed || 0.5) * -50)}%`, `${((layers[3]?.speed || 0.5) * 50)}%`]
  );
  const layer4Transform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${((layers[4]?.speed || 0.5) * -50)}%`, `${((layers[4]?.speed || 0.5) * 50)}%`]
  );

  const layerTransforms = [layer0Transform, layer1Transform, layer2Transform, layer3Transform, layer4Transform];

  return (
    <div 
      ref={containerRef} 
      className={`apple-layered-parallax ${className}`}
      style={{ position: 'relative' }}
    >
      {/* Background layers */}
      {layers.map((layer, index) => (
        <motion.div
          key={`layer-${index}`}
          style={{
            position: 'absolute',
            inset: 0,
            y: layerTransforms[index],
            zIndex: layer.zIndex || index,
            ...layer.style
          }}
          className={layer.className || ''}
        >
          {layer.content}
        </motion.div>
      ))}
      
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 100 }}>
        {children}
      </div>
    </div>
  );
};

// Magnetic effect component - Apple style
export const AppleMagnetic = ({ children, strength = 0.3, className = '' }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current || !isHovering) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      setMousePosition({
        x: deltaX * strength,
        y: deltaY * strength
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [strength, isHovering]);

  return (
    <motion.div
      ref={ref}
      className={`apple-magnetic ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
        mass: 0.5
      }}
    >
      {children}
    </motion.div>
  );
};

export default AppleParallax;