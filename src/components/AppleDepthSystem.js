import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// Helper component for layered background items
const LayeredBackgroundItem = ({ layer, index, scrollYProgress, parallaxIntensity }) => {
  const depth = layer.depth || 1;
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-depth * parallaxIntensity * 50}%`, `${depth * parallaxIntensity * 50}%`]
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        y: yOffset,
        zIndex: layer.zIndex || -index,
        filter: `blur(${(depth - 1) * 2}px) brightness(${1 - (depth - 1) * 0.1})`,
        opacity: layer.opacity || (1 - (depth - 1) * 0.2),
        transform: `scale(${1 + (depth - 1) * 0.1})`,
        ...layer.style
      }}
    >
      {layer.content}
    </motion.div>
  );
};

// Apple-style layered background system with depth
export const AppleLayeredBackground = ({
  children,
  layers = [],
  className = '',
  style = {},
  parallaxIntensity = 0.5,
  ...props
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div 
      ref={containerRef}
      className={`apple-layered-background ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Background Layers */}
      {layers.map((layer, index) => (
        <LayeredBackgroundItem
          key={index}
          layer={layer}
          index={index}
          scrollYProgress={scrollYProgress}
          parallaxIntensity={parallaxIntensity}
        />
      ))}

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 100 }}>
        {children}
      </div>
    </div>
  );
};

// Apple-style glassmorphism card with advanced depth
export const AppleGlassCard = ({
  children,
  blur = 20,
  opacity = 0.15,
  borderOpacity = 0.2,
  shadowIntensity = 'medium',
  elevation = 1,
  interactive = false,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Shadow intensities
  const shadows = {
    none: 'none',
    light: `
      0 2px 8px rgba(0, 0, 0, 0.04),
      0 1px 4px rgba(0, 0, 0, 0.02)
    `,
    medium: `
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.04),
      0 2px 8px rgba(0, 0, 0, 0.02)
    `,
    heavy: `
      0 16px 64px rgba(0, 0, 0, 0.12),
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.04),
      0 2px 8px rgba(0, 0, 0, 0.02)
    `,
    colored: `
      0 16px 64px rgba(0, 122, 255, 0.15),
      0 8px 32px rgba(0, 122, 255, 0.1),
      0 4px 16px rgba(0, 122, 255, 0.05)
    `
  };

  // Elevation transforms
  const elevationTransforms = {
    1: 'translateZ(0px)',
    2: 'translateZ(4px)',
    3: 'translateZ(8px)',
    4: 'translateZ(16px)',
    5: 'translateZ(32px)'
  };

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      setMousePosition({ x: deltaX * 10, y: deltaY * 10 });
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, interactive]);

  return (
    <motion.div
      ref={cardRef}
      className={`apple-glass-card ${className}`}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px) saturate(1.2)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(1.2)`,
        border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
        borderRadius: '16px',
        boxShadow: shadows[shadowIntensity] || shadows.medium,
        transform: elevationTransforms[elevation] || elevationTransforms[1],
        transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        ...style
      }}
      animate={interactive ? {
        rotateX: mousePosition.y * -1,
        rotateY: mousePosition.x,
        scale: isHovered ? 1.02 : 1
      } : {}}
      whileHover={interactive ? {
        boxShadow: shadows.heavy,
        borderColor: 'rgba(255, 255, 255, 0.4)'
      } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Apple-style depth-aware modal
export const AppleDepthModal = ({
  isOpen,
  onClose,
  children,
  backgroundBlur = 40,
  overlayOpacity = 0.4,
  animationDuration = 0.4,
  className = '',
  style = {},
  ...props
}) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add blur to background content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.filter = `blur(${backgroundBlur}px)`;
        mainContent.style.transition = `filter ${animationDuration}s ease`;
      }
    } else {
      document.body.style.overflow = 'auto';
      // Remove blur from background content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
    };
  }, [isOpen, backgroundBlur, animationDuration]);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={backdropRef}
      className={`apple-depth-modal ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        ...style
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: animationDuration }}
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          onClose?.();
        }
      }}
      {...props}
    >
      {/* Backdrop overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(0, 0, 0, ${overlayOpacity})`,
          backdropFilter: `blur(${backgroundBlur * 0.5}px)`,
          WebkitBackdropFilter: `blur(${backgroundBlur * 0.5}px)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto',
          zIndex: 1
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.8, 
          y: 50,
          filter: 'blur(20px)'
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          filter: 'blur(0px)'
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.8, 
          y: 50,
          filter: 'blur(20px)'
        }}
        transition={{ 
          duration: animationDuration,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Apple-style layered navigation with depth
export const AppleDepthNavigation = ({
  items = [],
  activeIndex = 0,
  onItemClick,
  orientation = 'horizontal',
  className = '',
  style = {},
  ...props
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`apple-depth-navigation ${className}`}
      style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: '8px',
        padding: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
        ...style
      }}
      {...props}
    >
      {items.map((item, index) => (
        <motion.button
          key={index}
          style={{
            position: 'relative',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '12px',
            background: 'transparent',
            color: activeIndex === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
            zIndex: activeIndex === index ? 2 : 1
          }}
          animate={{
            background: activeIndex === index 
              ? 'rgba(255, 255, 255, 0.2)' 
              : hoveredIndex === index 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'transparent',
            boxShadow: activeIndex === index
              ? `
                0 4px 16px rgba(0, 0, 0, 0.15),
                0 2px 8px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
              : 'none',
            scale: activeIndex === index ? 1.02 : hoveredIndex === index ? 1.01 : 1
          }}
          whileTap={{ scale: 0.98 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onItemClick?.(index, item)}
        >
          {/* Background highlight for active state */}
          {activeIndex === index && (
            <motion.div
              layoutId="activeBackground"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
                borderRadius: '12px',
                zIndex: -1
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          
          {item.icon && (
            <span style={{ marginRight: '8px' }}>
              {item.icon}
            </span>
          )}
          {item.label}
        </motion.button>
      ))}
    </div>
  );
};

// Apple-style depth-aware tooltip
export const AppleDepthTooltip = ({
  content,
  children,
  position = 'top',
  delay = 500,
  className = '',
  style = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const triggerRef = useRef(null);

  const positionStyles = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px'
    },
    follow: {
      position: 'fixed',
      left: mousePosition.x + 10,
      top: mousePosition.y - 40,
      transform: 'none'
    }
  };

  const handleMouseEnter = (e) => {
    if (position === 'follow') {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleMouseMove = (e) => {
    if (position === 'follow' && isVisible) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div
      ref={triggerRef}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
      
      {isVisible && (
        <motion.div
          className={`apple-depth-tooltip ${className}`}
          style={{
            position: position === 'follow' ? 'fixed' : 'absolute',
            zIndex: 10001,
            pointerEvents: 'none',
            ...positionStyles[position],
            ...style
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.8, 
            filter: 'blur(4px)',
            y: position === 'top' ? 10 : position === 'bottom' ? -10 : 0,
            x: position === 'left' ? 10 : position === 'right' ? -10 : 0
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            y: 0,
            x: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8, 
            filter: 'blur(4px)'
          }}
          transition={{ 
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(20px)',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                0 4px 16px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {content}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Utility hook for depth-based interactions
export const useAppleDepth = ({ 
  layers = 5, 
  baseTransform = 0,
  intensity = 1 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX.set((clientX / innerWidth - 0.5) * intensity);
      mouseY.set((clientY / innerHeight - 0.5) * intensity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, intensity]);

  // Create transforms for up to 5 layers (fixed number to avoid hooks in loops)
  const layer0Transform = {
    x: useTransform(mouseX, [-0.5, 0.5], [-(baseTransform || 10), (baseTransform || 10)]),
    y: useTransform(mouseY, [-0.5, 0.5], [-(baseTransform || 10), (baseTransform || 10)])
  };
  
  const layer1Transform = {
    x: useTransform(mouseX, [-0.5, 0.5], [-2 * (baseTransform || 10), 2 * (baseTransform || 10)]),
    y: useTransform(mouseY, [-0.5, 0.5], [-2 * (baseTransform || 10), 2 * (baseTransform || 10)])
  };
  
  const layer2Transform = {
    x: useTransform(mouseX, [-0.5, 0.5], [-3 * (baseTransform || 10), 3 * (baseTransform || 10)]),
    y: useTransform(mouseY, [-0.5, 0.5], [-3 * (baseTransform || 10), 3 * (baseTransform || 10)])
  };
  
  const layer3Transform = {
    x: useTransform(mouseX, [-0.5, 0.5], [-4 * (baseTransform || 10), 4 * (baseTransform || 10)]),
    y: useTransform(mouseY, [-0.5, 0.5], [-4 * (baseTransform || 10), 4 * (baseTransform || 10)])
  };
  
  const layer4Transform = {
    x: useTransform(mouseX, [-0.5, 0.5], [-5 * (baseTransform || 10), 5 * (baseTransform || 10)]),
    y: useTransform(mouseY, [-0.5, 0.5], [-5 * (baseTransform || 10), 5 * (baseTransform || 10)])
  };

  const layerTransforms = [
    layer0Transform,
    layer1Transform,
    layer2Transform,
    layer3Transform,
    layer4Transform
  ];
  
  const createLayerTransform = (layer) => {
    if (layer < layerTransforms.length) {
      return layerTransforms[layer];
    }
    return { x: 0, y: 0 };
  };

  return { createLayerTransform, mouseX, mouseY };
};

const AppleDepthSystemComponents = {
  AppleLayeredBackground,
  AppleGlassCard,
  AppleDepthModal,
  AppleDepthNavigation,
  AppleDepthTooltip,
  useAppleDepth
};

export default AppleDepthSystemComponents;