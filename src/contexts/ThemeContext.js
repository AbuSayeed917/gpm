import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Always apply light theme to document
    document.documentElement.setAttribute('data-theme', 'light');
    // Clear any previous theme preference
    localStorage.removeItem('theme');
  }, []);

  const value = {
    theme: 'light',
    isDark: false,
    isLight: true,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
