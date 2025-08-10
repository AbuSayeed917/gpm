import React from 'react';

const AppleBackground = ({ children, variant = 'default', className = '', style = {} }) => {
  const backgroundVariants = {
    default: '#f8fafc',
    primary: '#ffffff',
    secondary: '#f1f5f9',
    dark: '#1f2937',
    light: '#ffffff'
  };

  return (
    <div 
      className={`apple-background ${className}`}
      style={{
        minHeight: '100vh',
        background: backgroundVariants[variant] || backgroundVariants.default,
        position: 'relative',
        ...style
      }}
    >
      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        minHeight: '100vh'
      }}>
        {children}
      </div>
    </div>
  );
};

export default AppleBackground;