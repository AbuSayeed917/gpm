import React, { useState, useEffect } from 'react';
import { LightMode, DarkMode, SettingsBrightness } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ 
  variant = 'icon', // 'icon', 'button', 'dropdown'
  size = 'medium',
  className = ''
}) => {
  const { theme, toggleTheme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (variant !== 'dropdown') return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.theme-dropdown')) {
        setDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [variant]);

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
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={buttonStyle}
          className="theme-dropdown-trigger"
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
          aria-label="Theme options"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          title="Theme options"
        >
          {theme === 'light' ? (
            <LightMode sx={{ fontSize: iconSize }} />
          ) : theme === 'dark' ? (
            <DarkMode sx={{ fontSize: iconSize }} />
          ) : (
            <SettingsBrightness sx={{ fontSize: iconSize }} />
          )}
        </button>
        
        {dropdownOpen && (
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
              zIndex: 1050,
              border: '1px solid var(--color-outline-variant)'
            }}
          >
            <button
              onClick={() => {
                setLightTheme();
                setDropdownOpen(false);
              }}
              style={{
                ...buttonStyle,
                width: '100%',
                justifyContent: 'flex-start',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                fontSize: 'var(--text-body-medium)',
                backgroundColor: theme === 'light' ? 'var(--color-primary-container)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (theme !== 'light') {
                  Object.assign(e.target.style, buttonHoverStyle);
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme === 'light' ? 'var(--color-primary-container)' : 'transparent';
              }}
            >
              <LightMode sx={{ fontSize: 18 }} />
              Light
            </button>
            
            <button
              onClick={() => {
                setDarkTheme();
                setDropdownOpen(false);
              }}
              style={{
                ...buttonStyle,
                width: '100%',
                justifyContent: 'flex-start',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                fontSize: 'var(--text-body-medium)',
                backgroundColor: theme === 'dark' ? 'var(--color-primary-container)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (theme !== 'dark') {
                  Object.assign(e.target.style, buttonHoverStyle);
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme === 'dark' ? 'var(--color-primary-container)' : 'transparent';
              }}
            >
              <DarkMode sx={{ fontSize: 18 }} />
              Dark
            </button>
            
            <button
              onClick={() => {
                setSystemTheme();
                setDropdownOpen(false);
              }}
              style={{
                ...buttonStyle,
                width: '100%',
                justifyContent: 'flex-start',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                fontSize: 'var(--text-body-medium)',
                backgroundColor: theme === 'system' ? 'var(--color-primary-container)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (theme !== 'system') {
                  Object.assign(e.target.style, buttonHoverStyle);
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme === 'system' ? 'var(--color-primary-container)' : 'transparent';
              }}
            >
              <SettingsBrightness sx={{ fontSize: 18 }} />
              System
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ThemeToggle;