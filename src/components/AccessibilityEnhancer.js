import React, { useEffect, useState } from 'react';
import {
  Box,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
  Slider,
  Typography,
} from '@mui/material';
import { Accessibility, Contrast, TextIncrease, Hearing, VisibilityOff } from '@mui/icons-material';

const AccessibilityEnhancer = () => {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusVisible: true,
    screenReaderOptimized: false,
    fontSize: 16,
  });

  // Apply accessibility preferences
  useEffect(() => {
    const root = document.documentElement;

    // High contrast mode
    if (preferences.highContrast) {
      root.style.setProperty('--color-bg-primary', '#ffffff');
      root.style.setProperty('--color-text-primary', '#000000');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.95)');
      root.style.setProperty('--glass-border', '2px solid #000000');
      document.body.classList.add('high-contrast');
    } else {
      root.style.removeProperty('--color-bg-primary');
      root.style.removeProperty('--color-text-primary');
      root.style.removeProperty('--glass-bg');
      root.style.removeProperty('--glass-border');
      document.body.classList.remove('high-contrast');
    }

    // Reduced motion
    if (preferences.reducedMotion) {
      root.style.setProperty('--duration-base', '0s');
      root.style.setProperty('--duration-fast', '0s');
      root.style.setProperty('--duration-slow', '0s');
      document.body.classList.add('reduce-motion');
    } else {
      root.style.removeProperty('--duration-base');
      root.style.removeProperty('--duration-fast');
      root.style.removeProperty('--duration-slow');
      document.body.classList.remove('reduce-motion');
    }

    // Large text
    if (preferences.largeText) {
      root.style.setProperty('--text-base', '1.125rem');
      root.style.setProperty('--text-lg', '1.25rem');
      root.style.setProperty('--text-xl', '1.5rem');
      document.body.classList.add('large-text');
    } else {
      root.style.removeProperty('--text-base');
      root.style.removeProperty('--text-lg');
      root.style.removeProperty('--text-xl');
      document.body.classList.remove('large-text');
    }

    // Enhanced focus visibility
    if (preferences.focusVisible) {
      document.body.classList.add('enhanced-focus');
    } else {
      document.body.classList.remove('enhanced-focus');
    }

    // Screen reader optimization
    if (preferences.screenReaderOptimized) {
      document.body.classList.add('screen-reader-optimized');
    } else {
      document.body.classList.remove('screen-reader-optimized');
    }

    // Font size adjustment
    root.style.setProperty('--base-font-size', `${preferences.fontSize}px`);
  }, [preferences]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip links navigation
      if (e.key === 'Tab' && e.shiftKey && e.ctrlKey) {
        e.preventDefault();
        const skipLink = document.querySelector('.skip-to-content');
        if (skipLink) skipLink.focus();
      }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        setOpen(false);
        // Close any open dropdowns
        const activeElement = document.activeElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    // Enhanced focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .enhanced-focus *:focus {
        outline: 3px solid var(--color-blue-500) !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
        box-shadow: 0 0 0 1px white, 0 0 0 4px var(--color-blue-500) !important;
      }

      .enhanced-focus .MuiButton-root:focus {
        transform: scale(1.05) !important;
      }

      .high-contrast *:focus {
        outline: 4px solid #000000 !important;
        background-color: #ffff00 !important;
        color: #000000 !important;
      }

      .reduce-motion * {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }

      .screen-reader-optimized .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      .screen-reader-optimized .sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
        background: var(--color-blue-500);
        color: white;
        z-index: 9999;
      }

      /* WCAG 2.2 Focus Not Obscured */
      .focus-not-obscured {
        scroll-margin: 100px;
        scroll-padding: 100px;
      }

      /* Enhanced focus appearance for WCAG 2.2 */
      .enhanced-focus-appearance *:focus {
        outline: 2px solid currentColor !important;
        outline-offset: 2px !important;
        box-shadow: 
          0 0 0 4px white,
          0 0 0 6px currentColor !important;
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [preferences.focusVisible, preferences.highContrast]);

  const handlePreferenceChange = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Save to localStorage
    localStorage.setItem(
      'accessibilityPreferences',
      JSON.stringify({
        ...preferences,
        [key]: value,
      })
    );

    // Announce change to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };

  // Load preferences on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('accessibilityPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    // Detect system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    if (prefersReducedMotion || prefersHighContrast) {
      setPreferences((prev) => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
      }));
    }
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        href='#main-content'
        className='skip-to-content sr-only focus:not-sr-only'
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: 'var(--color-blue-500)',
          color: 'white',
          padding: '8px',
          textDecoration: 'none',
          borderRadius: '4px',
          zIndex: 9999,
          transition: 'top 0.3s ease',
        }}
        onFocus={(e) => {
          e.target.style.top = '6px';
        }}
        onBlur={(e) => {
          e.target.style.top = '-40px';
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility Settings FAB */}
      <Fab
        color='primary'
        aria-label='Open accessibility settings'
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: 'var(--glass-bg-strong)',
          backdropFilter: 'var(--glass-blur)',
          border: 'var(--glass-border)',
          color: 'var(--color-blue-600)',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: 'var(--glass-shadow-lg)',
          },
          '&:focus': {
            outline: '3px solid var(--color-blue-500)',
            outlineOffset: '2px',
          },
        }}
      >
        <Accessibility />
      </Fab>

      {/* Accessibility Settings Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='md'
        fullWidth
        aria-labelledby='accessibility-dialog-title'
        aria-describedby='accessibility-dialog-description'
      >
        <DialogTitle id='accessibility-dialog-title'>
          <Box display='flex' alignItems='center' gap={1}>
            <Accessibility />
            Accessibility Settings
          </Box>
        </DialogTitle>

        <DialogContent id='accessibility-dialog-description'>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
            Customize your experience with these accessibility options. Changes are saved
            automatically.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* High Contrast */}
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.highContrast}
                  onChange={(e) => handlePreferenceChange('highContrast', e.target.checked)}
                  aria-describedby='high-contrast-description'
                />
              }
              label={
                <Box>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Contrast fontSize='small' />
                    High Contrast Mode
                  </Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    id='high-contrast-description'
                  >
                    Increases contrast between text and background for better visibility
                  </Typography>
                </Box>
              }
            />

            {/* Reduced Motion */}
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.reducedMotion}
                  onChange={(e) => handlePreferenceChange('reducedMotion', e.target.checked)}
                  aria-describedby='reduced-motion-description'
                />
              }
              label={
                <Box>
                  <Box display='flex' alignItems='center' gap={1}>
                    <VisibilityOff fontSize='small' />
                    Reduced Motion
                  </Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    id='reduced-motion-description'
                  >
                    Reduces or removes animations and transitions
                  </Typography>
                </Box>
              }
            />

            {/* Large Text */}
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.largeText}
                  onChange={(e) => handlePreferenceChange('largeText', e.target.checked)}
                  aria-describedby='large-text-description'
                />
              }
              label={
                <Box>
                  <Box display='flex' alignItems='center' gap={1}>
                    <TextIncrease fontSize='small' />
                    Large Text
                  </Box>
                  <Typography variant='caption' color='text.secondary' id='large-text-description'>
                    Increases text size for better readability
                  </Typography>
                </Box>
              }
            />

            {/* Enhanced Focus */}
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.focusVisible}
                  onChange={(e) => handlePreferenceChange('focusVisible', e.target.checked)}
                  aria-describedby='focus-visible-description'
                />
              }
              label={
                <Box>
                  Enhanced Focus Indicators
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    id='focus-visible-description'
                    display='block'
                  >
                    Makes keyboard focus more visible (WCAG 2.2 AA compliant)
                  </Typography>
                </Box>
              }
            />

            {/* Screen Reader Optimization */}
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.screenReaderOptimized}
                  onChange={(e) =>
                    handlePreferenceChange('screenReaderOptimized', e.target.checked)
                  }
                  aria-describedby='screen-reader-description'
                />
              }
              label={
                <Box>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Hearing fontSize='small' />
                    Screen Reader Optimized
                  </Box>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    id='screen-reader-description'
                  >
                    Optimizes the interface for screen readers
                  </Typography>
                </Box>
              }
            />

            {/* Font Size Slider */}
            <Box>
              <Typography gutterBottom>Font Size: {preferences.fontSize}px</Typography>
              <Slider
                value={preferences.fontSize}
                onChange={(_, value) => handlePreferenceChange('fontSize', value)}
                min={12}
                max={24}
                step={1}
                marks={[
                  { value: 12, label: '12px' },
                  { value: 16, label: '16px' },
                  { value: 20, label: '20px' },
                  { value: 24, label: '24px' },
                ]}
                aria-label='Font size adjustment'
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AccessibilityEnhancer;
