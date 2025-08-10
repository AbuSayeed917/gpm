import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowDown,
  ExpandLess,
  ExpandMore,
  Language
} from '@mui/icons-material';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppleNavigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [successStoriesAnchor, setSuccessStoriesAnchor] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSuccessStoriesOpen, setMobileSuccessStoriesOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleSuccessStoriesClick = (event) => {
    setSuccessStoriesAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchor(null);
    setSuccessStoriesAnchor(null);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSuccessStoriesOpen(false);
    handleClose();
  }, [location]);

  const servicesItems = [
    { name: 'SME Solutions', href: '/services/sme' },
    { name: 'Large Enterprise', href: '/services/large-enterprise' },
    { name: 'Expert Consultancy', href: '/services/consultancy' }
  ];

  const successStoriesItems = [
    { name: 'SME Success Stories', href: '/success-stories/sme' },
    { name: 'Enterprise Stories', href: '/success-stories/large-enterprise' },
    { name: 'Consultancy Results', href: '/success-stories/consultancy' }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
          Global Payroll Migration
        </Typography>
      </Box>
      <List>
        <ListItem button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
          <ListItemText primary="Services" />
          {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {servicesItems.map((item) => (
              <ListItem key={item.href} button sx={{ pl: 4 }} component={Link} to={item.href}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        
        <ListItem button onClick={() => setMobileSuccessStoriesOpen(!mobileSuccessStoriesOpen)}>
          <ListItemText primary="Success Stories" />
          {mobileSuccessStoriesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={mobileSuccessStoriesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {successStoriesItems.map((item) => (
              <ListItem key={item.href} button sx={{ pl: 4 }} component={Link} to={item.href}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/faq">
          <ListItemText primary="FAQ" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              {/* Logo */}
              <Box component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Language sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Global Payroll Migration
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Button
                  onClick={handleServicesClick}
                  endIcon={<KeyboardArrowDown />}
                  sx={{ color: 'text.primary' }}
                >
                  Services
                </Button>
                <Menu
                  anchorEl={servicesAnchor}
                  open={Boolean(servicesAnchor)}
                  onClose={handleClose}
                  sx={{ mt: 1 }}
                >
                  {servicesItems.map((item) => (
                    <MenuItem key={item.href} onClick={handleClose} component={Link} to={item.href}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Button
                  onClick={handleSuccessStoriesClick}
                  endIcon={<KeyboardArrowDown />}
                  sx={{ color: 'text.primary' }}
                >
                  Success Stories
                </Button>
                <Menu
                  anchorEl={successStoriesAnchor}
                  open={Boolean(successStoriesAnchor)}
                  onClose={handleClose}
                  sx={{ mt: 1 }}
                >
                  {successStoriesItems.map((item) => (
                    <MenuItem key={item.href} onClick={handleClose} component={Link} to={item.href}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Button component={Link} to="/about" sx={{ color: 'text.primary' }}>
                  About
                </Button>
                <Button component={Link} to="/faq" sx={{ color: 'text.primary' }}>
                  FAQ
                </Button>
                <Button component={Link} to="/contact" sx={{ color: 'text.primary' }}>
                  Contact
                </Button>

                <Button 
                  variant="contained" 
                  component={Link} 
                  to="/quote"
                  sx={{ ml: 2 }}
                >
                  Get Free Quote
                </Button>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 }
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default AppleNavigation;