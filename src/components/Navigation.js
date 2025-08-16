import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const location = useLocation();

  // Enhanced mobile detection with device type and screen size
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      const mobile =
        width <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const smallMobile = width <= 375;
      setIsMobile(mobile);
      setIsSmallMobile(smallMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch interactions for mobile menu
  const handleTouchStart = (e) => {
    if (isMobile) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = (e) => {
    if (isMobile && touchStartY) {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      // If swipe up gesture and menu is open, close it
      if (diff > 50 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      setTouchStartY(null);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Industry-Grade Mobile-First CSS */}
      <style jsx>{`
        /* Mobile-First CSS with Industry Standard Breakpoints */
        .nav-mobile-optimized {
          /* Base styles for mobile (320px and up) */
        }

        /* Small Mobile */
        @media (max-width: 375px) {
          .nav-brand {
            font-size: 14px !important;
            max-width: 200px !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }
          .nav-toolbar {
            padding: 8px 12px !important;
            min-height: 56px !important;
          }
          .nav-menu-button {
            padding: 8px !important;
            margin-right: -8px !important;
          }
        }

        /* Mobile Portrait */
        @media (max-width: 480px) {
          .nav-brand {
            font-size: 15px !important;
            max-width: 240px !important;
          }
          .nav-toolbar {
            padding: 10px 16px !important;
            min-height: 64px !important;
          }
        }

        /* Mobile Landscape / Small Tablet */
        @media (min-width: 481px) and (max-width: 768px) {
          .nav-brand {
            font-size: 16px !important;
          }
          .nav-toolbar {
            padding: 12px 20px !important;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-brand {
            font-size: 17px !important;
          }
        }

        /* Touch-friendly interactions */
        .touch-nav-button {
          min-height: 44px !important;
          min-width: 44px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .touch-nav-button:active {
          transform: scale(0.95) !important;
          background-color: rgba(0, 122, 255, 0.1) !important;
        }

        /* Mobile menu optimizations */
        .mobile-menu-item {
          min-height: 56px !important;
          padding: 16px 24px !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        }

        .mobile-menu-item:active {
          background-color: rgba(0, 122, 255, 0.1) !important;
        }

        /* Smooth scrolling for mobile menu */
        .mobile-menu-container {
          scroll-behavior: smooth !important;
          -webkit-overflow-scrolling: touch !important;
        }

        /* Focus styles for accessibility */
        .nav-focus:focus {
          outline: 2px solid #00bfff !important;
          outline-offset: 2px !important;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .nav-high-contrast {
            border: 2px solid currentColor !important;
          }
        }

        /* Safe area insets for notched devices */
        .nav-safe-area {
          padding-left: env(safe-area-inset-left) !important;
          padding-right: env(safe-area-inset-right) !important;
        }

        /* Mobile navigation spacing */
        @media (max-width: 768px) {
          .nav-mobile-spacing {
            height: 64px !important;
          }
        }

        /* Tablet navigation spacing */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-tablet-spacing {
            height: 70px !important;
          }
        }
      `}</style>

      <AppBar
        position='fixed'
        className='nav-mobile-optimized'
        sx={{
          background: 'rgba(248, 248, 248, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 20px rgba(0, 0, 0, 0.05)',
          zIndex: 1300,
        }}
      >
        <Toolbar
          className={`nav-toolbar nav-safe-area ${isMobile ? 'nav-mobile' : ''}`}
          sx={{
            justifyContent: 'space-between',
            py: isMobile ? 0.5 : 1,
            px: isMobile ? (isSmallMobile ? 1 : 2) : 3,
            minHeight: isMobile ? (isSmallMobile ? '56px' : '64px') : '70px',
          }}
        >
          <Typography
            variant='h6'
            component={Link}
            to='/'
            className={`nav-brand nav-focus ${isMobile ? 'nav-mobile-brand' : ''}`}
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: isMobile ? (isSmallMobile ? '0.875rem' : '0.9rem') : '1.1rem',
              textDecoration: 'none',
              maxWidth: isMobile ? (isSmallMobile ? '200px' : '240px') : 'none',
              overflow: isMobile ? 'hidden' : 'visible',
              textOverflow: isMobile ? 'ellipsis' : 'clip',
              whiteSpace: isMobile ? 'nowrap' : 'normal',
              '&:hover': {
                color: 'primary.dark',
              },
              '&:focus': {
                outline: '2px solid #00bfff',
                outlineOffset: '2px',
              },
            }}
          >
{isMobile ? 'GPM' : 'GlobalPayrollMigration.com'}
          </Typography>

          {!isMobile ? (
            <Stack direction='row' spacing={3} alignItems='center'>
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color='inherit'
                  className='nav-focus'
                  sx={{
                    color: isActiveLink(item.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActiveLink(item.path) ? 600 : 500,
                    position: 'relative',
                    minHeight: '44px',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    '&:focus': {
                      outline: '2px solid #00bfff',
                      outlineOffset: '2px',
                    },
                    '&::after': isActiveLink(item.path)
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60%',
                          height: 2,
                          background: 'primary.main',
                          borderRadius: 1,
                        }
                      : {},
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant='contained'
                size='small'
                component={Link}
                to='/quote'
                className='nav-focus'
                sx={{
                  px: 3,
                  minHeight: '44px',
                  '&:focus': {
                    outline: '2px solid #ffffff',
                    outlineOffset: '2px',
                  },
                }}
              >
                Get a Quote
              </Button>
            </Stack>
          ) : (
            <Stack direction='row' spacing={1} alignItems='center'>
              <Button
                variant='contained'
                size='small'
                component={Link}
                to='/quote'
                className='nav-focus'
                sx={{
                  px: 2,
                  minHeight: '36px',
                  fontSize: '14px',
                  fontWeight: 600,
                  '&:focus': {
                    outline: '2px solid #ffffff',
                    outlineOffset: '2px',
                  },
                }}
              >
                Get Quote
              </Button>
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={`nav-menu-button touch-nav-button nav-focus ${isMobile ? 'nav-mobile-menu' : ''}`}
                sx={{
                  padding: isSmallMobile ? '8px' : '12px',
                  marginRight: isSmallMobile ? '-8px' : '-12px',
                  minHeight: '44px',
                  minWidth: '44px',
                  '&:focus': {
                    outline: '2px solid #00bfff',
                    outlineOffset: '2px',
                  },
                }}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <Close sx={{ fontSize: isSmallMobile ? 20 : 24 }} />
                ) : (
                  <MenuIcon sx={{ fontSize: isSmallMobile ? 20 : 24 }} />
                )}
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Enhanced Mobile Drawer with Touch Gestures */}
      <Drawer
        anchor='top'
        open={isMobile && mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className='mobile-menu-container'
        sx={{
          '& .MuiDrawer-paper': {
            top: isMobile ? (isSmallMobile ? 56 : 64) : 70,
            background: 'rgba(248, 248, 248, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          },
        }}
        SlideProps={{
          onTouchStart: handleTouchStart,
          onTouchEnd: handleTouchEnd,
        }}
      >
        <Box
          sx={{
            width: 'auto',
            py: isMobile ? 1 : 2,
            paddingLeft: 'env(safe-area-inset-left)',
            paddingRight: 'env(safe-area-inset-right)',
          }}
        >
          <List sx={{ padding: 0 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-menu-item nav-focus ${isActiveLink(item.path) ? 'active' : ''}`}
                  sx={{
                    color: isActiveLink(item.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActiveLink(item.path) ? 600 : 500,
                    minHeight: '56px',
                    padding: isMobile ? '16px 24px' : '12px 24px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    backgroundColor: isActiveLink(item.path)
                      ? 'rgba(0, 122, 255, 0.05)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    },
                    '&:active': {
                      backgroundColor: 'rgba(0, 122, 255, 0.15)',
                      transform: 'scale(0.98)',
                    },
                    '&:focus': {
                      outline: '2px solid #00bfff',
                      outlineOffset: '2px',
                    },
                    transition: 'all 0.2s ease',
                  }}
                  aria-current={isActiveLink(item.path) ? 'page' : undefined}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      textAlign: 'center',
                      '& .MuiTypography-root': {
                        fontWeight: 'inherit',
                        fontSize: isMobile ? '16px' : '15px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      },
                    }}
                  />
                  {isActiveLink(item.path) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#007AFF',
                        marginLeft: '8px',
                      }}
                    />
                  )}
                </ListItem>
              </motion.div>
            ))}

            {/* Mobile CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <ListItem
                sx={{
                  padding: '16px 24px',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant='contained'
                  component={Link}
                  to='/quote'
                  onClick={() => setMobileMenuOpen(false)}
                  className='touch-nav-button nav-focus'
                  sx={{
                    width: '100%',
                    maxWidth: '280px',
                    minHeight: '44px',
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '12px',
                    textTransform: 'none',
                    '&:focus': {
                      outline: '2px solid #ffffff',
                      outlineOffset: '2px',
                    },
                  }}
                >
                  Get a Quote
                </Button>
              </ListItem>
            </motion.div>
          </List>
        </Box>
      </Drawer>

      {/* Dynamic Spacer for fixed navigation */}
      <Box
        className={`${isMobile ? 'nav-mobile-spacing' : ''} ${!isMobile ? 'nav-tablet-spacing' : ''}`}
        sx={{
          height: isMobile ? (isSmallMobile ? 56 : 64) : 70,
          transition: 'height 0.3s ease',
        }}
      />
    </>
  );
};

export default Navigation;
