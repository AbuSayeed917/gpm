import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

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
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(248, 248, 248, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 1px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography 
            variant="h6" 
            component={Link}
            to="/"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              fontSize: '1.1rem',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.dark'
              }
            }}
          >
            GlobalPayrollMigration.com
          </Typography>
          
          {!isMobile ? (
            <Stack direction="row" spacing={3} alignItems="center">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: isActiveLink(item.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActiveLink(item.path) ? 600 : 500,
                    position: 'relative',
                    '&:hover': {
                      color: 'primary.main'
                    },
                    '&::after': isActiveLink(item.path) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: 2,
                      background: 'primary.main',
                      borderRadius: 1
                    } : {}
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                variant="contained" 
                size="small" 
                component={Link}
                to="/contact"
                sx={{ px: 3 }}
              >
                Get Started
              </Button>
            </Stack>
          ) : (
            <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <Close /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={isMobile && mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            top: 70,
            background: 'rgba(248, 248, 248, 0.95)',
            backdropFilter: 'blur(20px)',
          }
        }}
      >
        <Box sx={{ width: 'auto', py: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.name}
                component={Link}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  color: isActiveLink(item.path) ? 'primary.main' : 'text.primary',
                  fontWeight: isActiveLink(item.path) ? 600 : 500,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 122, 255, 0.1)'
                  }
                }}
              >
                <ListItemText 
                  primary={item.name}
                  sx={{
                    textAlign: 'center',
                    '& .MuiTypography-root': {
                      fontWeight: 'inherit'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed navigation */}
      <Box sx={{ height: 70 }} />
    </>
  );
};

export default Navigation;