import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as MuiIcons from '@mui/icons-material';

// Stable animation variants defined outside component to avoid re-creation on each render
const ANIMATION_VARIANTS = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  bounce: {
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
  draw: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  variable: {
    scale: [0.8, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  replace: {
    scale: [1, 0, 1],
    rotate: [0, 90, 180],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  appear: {
    scale: [0, 1.1, 1],
    opacity: [0, 0.8, 1],
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  disappear: {
    scale: [1, 0.8, 0],
    opacity: [1, 0.5, 0],
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Apple-style icon component with SF Symbols-inspired animations and variable rendering
const AppleIcon = ({
  icon,
  size = 24,
  weight = 'regular', // ultralight, thin, light, regular, medium, semibold, bold, heavy, black
  fill = 'none', // none, monochrome, hierarchical, palette, multicolor
  animation = 'none', // none, pulse, bounce, draw, variable, replace, appear, disappear
  interactive = false,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const controls = useAnimation();
  const iconRef = useRef(null);

  // Convert MUI icon name to component
  const IconComponent = MuiIcons[icon] || MuiIcons.QuestionMark;

  // Apple-style size mapping
  const sizeMap = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 64,
  };

  const iconSize = typeof size === 'string' ? sizeMap[size] : size;

  // Apple-style weight mapping to font weights
  const weightMap = {
    ultralight: 100,
    thin: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  };

  // Apple-style fill variations
  const fillStyles = {
    none: {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5px',
    },
    monochrome: {
      fill: 'currentColor',
      stroke: 'none',
    },
    hierarchical: {
      fill: 'currentColor',
      opacity: 0.8,
      stroke: 'currentColor',
      strokeWidth: '0.5px',
    },
    palette: {
      fill: 'url(#appleGradient)',
      stroke: 'none',
    },
    multicolor: {
      fill: 'currentColor',
      filter: 'hue-rotate(0deg) saturate(1.2) brightness(1.1)',
    },
  };

  // Animation variants moved to module scope (see ANIMATION_VARIANTS)

  // Interactive states
  const interactiveVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      filter: 'brightness(1) saturate(1)',
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      filter: 'brightness(1.1) saturate(1.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    pressed: {
      scale: 0.95,
      rotate: -1,
      filter: 'brightness(0.9) saturate(1.3)',
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 30,
      },
    },
  };

  // Apple-style magnetic effect
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (interactive && isHovered) {
      const handleMouseMove = (e) => {
        if (!iconRef.current) return;

        const rect = iconRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;

        setMagneticOffset({ x: deltaX, y: deltaY });
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    } else {
      setMagneticOffset({ x: 0, y: 0 });
    }
  }, [interactive, isHovered]);

  // Animation control
  useEffect(() => {
    if (animation && animation !== 'none' && ANIMATION_VARIANTS[animation]) {
      controls.start(ANIMATION_VARIANTS[animation]);
    }
  }, [animation, controls]);

  const currentVariant = isPressed ? 'pressed' : isHovered ? 'hover' : 'idle';

  return (
    <motion.div
      ref={iconRef}
      className={`apple-icon ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      variants={interactive ? interactiveVariants : {}}
      animate={interactive ? currentVariant : animation !== 'none' ? controls : 'idle'}
      onMouseEnter={() => {
        if (interactive) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (interactive) {
          setIsHovered(false);
          setIsPressed(false);
        }
      }}
      onMouseDown={() => {
        if (interactive) setIsPressed(true);
      }}
      onMouseUp={() => {
        if (interactive) setIsPressed(false);
      }}
      whileTap={interactive ? { scale: 0.95 } : {}}
      {...props}
    >
      {/* Apple gradient definitions */}
      <svg width='0' height='0' style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id='appleGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
            <stop offset='50%' style={{ stopColor: '#5856D6', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#AF52DE', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id='appleBluePurple' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#5856D6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id='appleGreenBlue' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#30D158', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id='appleOrangePink' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#FF9F0A', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#FF375F', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        style={{
          x: magneticOffset.x,
          y: magneticOffset.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        <IconComponent
          style={{
            fontSize: iconSize,
            fontWeight: weightMap[weight],
            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
            ...fillStyles[fill],
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Apple Icon Gallery component for showcasing all available icons
export const AppleIconGallery = ({
  icons = [],
  size = 'md',
  animation = 'none',
  interactive = true,
  className = '',
}) => {
  const popularIcons = [
    'Home',
    'Search',
    'Settings',
    'Person',
    'Notifications',
    'Mail',
    'Phone',
    'Message',
    'Camera',
    'Photo',
    'Video',
    'Music',
    'Download',
    'Upload',
    'Share',
    'Favorite',
    'Star',
    'Bookmark',
    'Add',
    'Remove',
    'Edit',
    'Delete',
    'ArrowForward',
    'ArrowBack',
    'ArrowUpward',
    'ArrowDownward',
    'Close',
    'Menu',
    'MoreHoriz',
    'MoreVert',
    'Check',
    'Clear',
    'Refresh',
    'Sync',
    'Cloud',
    'CloudDownload',
    'CloudUpload',
    'Folder',
    'FolderOpen',
    'Insert',
    'AttachFile',
    'Link',
    'Print',
    'Save',
    'Security',
    'Visibility',
    'Lock',
    'LockOpen',
    'AccountCircle',
    'Dashboard',
    'Timeline',
    'TrendingUp',
    'Analytics',
  ];

  const iconsToShow = icons.length > 0 ? icons : popularIcons;

  return (
    <div className={`apple-icon-gallery ${className}`}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '16px',
          padding: '24px',
        }}
      >
        {iconsToShow.map((iconName, index) => (
          <motion.div
            key={iconName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <AppleIcon
              icon={iconName}
              size={size}
              animation={animation}
              interactive={interactive}
              fill='hierarchical'
              weight='medium'
            />
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              {iconName}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Apple Icon Button component
export const AppleIconButton = ({
  icon,
  children,
  variant = 'primary', // primary, secondary, tertiary, danger
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const variants = {
    primary: {
      backgroundColor: '#007AFF',
      color: '#FFFFFF',
      border: 'none',
      '&:hover': {
        backgroundColor: '#0056CC',
      },
    },
    secondary: {
      backgroundColor: 'rgba(120, 120, 128, 0.16)',
      color: '#007AFF',
      border: '1px solid rgba(120, 120, 128, 0.24)',
      '&:hover': {
        backgroundColor: 'rgba(120, 120, 128, 0.24)',
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#007AFF',
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
      },
    },
    danger: {
      backgroundColor: '#FF3B30',
      color: '#FFFFFF',
      border: 'none',
      '&:hover': {
        backgroundColor: '#D12B20',
      },
    },
  };

  const sizeMap = {
    sm: { padding: '8px 16px', fontSize: '14px', iconSize: 'sm' },
    md: { padding: '12px 24px', fontSize: '16px', iconSize: 'md' },
    lg: { padding: '16px 32px', fontSize: '18px', iconSize: 'lg' },
  };

  return (
    <motion.button
      className={`apple-icon-button ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        fontWeight: '500',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
        ...variants[variant],
        ...sizeMap[size],
      }}
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <AppleIcon
          icon={icon}
          size={sizeMap[size].iconSize}
          interactive={false}
          weight='medium'
          fill='monochrome'
        />
      )}
      {children}
    </motion.button>
  );
};

export default AppleIcon;
