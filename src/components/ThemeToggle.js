import React from 'react';
import { LightMode, DarkMode, SettingsBrightness } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ 
  variant = 'icon', // 'icon', 'button', 'dropdown'
  size = 'medium',
  className = ''
}) => {
  const { theme, toggleTheme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();

  const iconSize = {
    small: 20,
    medium: 24,
    large: 32
  }[size];

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 'var(--space-2)',
    borderRadius: 'var(--shape-medium)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--motion-duration-medium2) var(--motion-easing-standard)',
    color: 'var(--color-on-surface)',
    minWidth: '40px',
    minHeight: '40px'
  };

  const buttonHoverStyle = {
    backgroundColor: 'var(--color-surface-container)'
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        style={buttonStyle}
        className={`theme-toggle ${className}`}
        onMouseEnter={(e) => {
          Object.assign(e.target.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? (
          <DarkMode sx={{ fontSize: iconSize }} />
        ) : (
          <LightMode sx={{ fontSize: iconSize }} />
        )}
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`btn btn-outlined ${className}`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? (
          <>
            <DarkMode sx={{ fontSize: iconSize }} />
            Dark Mode
          </>
        ) : (
          <>
            <LightMode sx={{ fontSize: iconSize }} />
            Light Mode
          </>
        )}
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={`theme-dropdown ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={toggleTheme}
          style={buttonStyle}
          className="theme-dropdown-trigger"
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
          aria-label="Theme options"
          title="Theme options"
        >
          {theme === 'light' ? (
            <LightMode sx={{ fontSize: iconSize }} />
          ) : (
            <DarkMode sx={{ fontSize: iconSize }} />
          )}
        </button>
        
        <div 
          className="theme-dropdown-menu"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 'var(--space-1)',
            backgroundColor: 'var(--color-surface-container)',
            borderRadius: 'var(--shape-medium)',
            boxShadow: 'var(--elevation-3)',
            padding: 'var(--space-2)',
            minWidth: '160px',
            zIndex: 'var(--z-dropdown)',
            opacity: 0,
            visibility: 'hidden',
            transform: 'translateY(-8px)',
            transition: 'all var(--motion-duration-medium2) var(--motion-easing-standard)'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
            e.target.style.visibility = 'visible';
            e.target.style.transform = 'translateY(0)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0';
            e.target.style.visibility = 'hidden';
            e.target.style.transform = 'translateY(-8px)';
          }}
        >
          <button
            onClick={setLightTheme}
            style={{
              ...buttonStyle,
              width: '100%',
              justifyContent: 'flex-start',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-3)',
              fontSize: 'var(--text-body-medium)'
            }}
            className={theme === 'light' ? 'active' : ''}
          >
            <LightMode sx={{ fontSize: 18 }} />
            Light
          </button>
          
          <button
            onClick={setDarkTheme}
            style={{
              ...buttonStyle,
              width: '100%',
              justifyContent: 'flex-start',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-3)',
              fontSize: 'var(--text-body-medium)'
            }}
            className={theme === 'dark' ? 'active' : ''}
          >
            <DarkMode sx={{ fontSize: 18 }} />
            Dark
          </button>
          
          <button
            onClick={setSystemTheme}
            style={{
              ...buttonStyle,
              width: '100%',
              justifyContent: 'flex-start',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-3)',
              fontSize: 'var(--text-body-medium)'
            }}
          >
            <SettingsBrightness sx={{ fontSize: 18 }} />
            System
          </button>
        </div>
        
        <style jsx>{`
          .theme-dropdown:hover .theme-dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </div>
    );
  }

  return null;
};

export default ThemeToggle;