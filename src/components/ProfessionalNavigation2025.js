import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Language,
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown,
  Phone,
  Email,
  BusinessCenter
} from '@mui/icons-material';

const ProfessionalNavigation2025 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [successStoriesOpen, setSuccessStoriesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setSuccessStoriesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setSuccessStoriesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setServicesOpen(false);
        setSuccessStoriesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const services = [
    { 
      name: 'SME Solutions', 
      href: '/services/sme', 
      description: 'Payroll migration for small to medium enterprises',
      icon: <BusinessCenter sx={{ fontSize: 20 }} />
    },
    { 
      name: 'Large Enterprise', 
      href: '/services/large-enterprise', 
      description: 'Complex migrations for large organizations',
      icon: <Language sx={{ fontSize: 20 }} />
    },
    { 
      name: 'Expert Consultancy', 
      href: '/services/consultancy', 
      description: 'Strategic guidance and optimization',
      icon: <Phone sx={{ fontSize: 20 }} />
    }
  ];

  const successStories = [
    { name: 'SME Success Stories', href: '/success-stories/sme' },
    { name: 'Enterprise Stories', href: '/success-stories/large-enterprise' },
    { name: 'Consultancy Results', href: '/success-stories/consultancy' }
  ];

  const isActive = (path) => location.pathname === path;

  const navigationStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1020, // Fixed z-index instead of CSS variable
    backgroundColor: 'var(--color-surface-container)',
    borderBottom: '1px solid var(--color-outline-variant)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)'
  };

  const containerStyle = {
    maxWidth: 'var(--breakpoint-2xl)',
    margin: '0 auto',
    padding: '0 var(--container-padding-mobile)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '64px'
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    textDecoration: 'none',
    color: 'var(--color-on-surface)',
    fontSize: 'var(--text-title-large)',
    fontWeight: 'var(--weight-semibold)',
    transition: 'color var(--motion-duration-medium2) var(--motion-easing-standard)'
  };

  const navMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const navLinkStyle = {
    padding: 'var(--space-2) var(--space-4)',
    borderRadius: 'var(--shape-large)',
    textDecoration: 'none',
    color: 'var(--color-on-surface)',
    fontSize: 'var(--text-body-medium)',
    fontWeight: 'var(--weight-medium)',
    transition: 'all var(--motion-duration-medium2) var(--motion-easing-standard)',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-1)'
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: 'var(--color-secondary-container)',
    color: 'var(--color-on-secondary-container)'
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: 'var(--space-2)',
    backgroundColor: 'var(--color-surface-container-high)',
    borderRadius: 'var(--shape-medium)',
    boxShadow: 'var(--elevation-3)',
    padding: 'var(--space-2)',
    minWidth: '280px',
    zIndex: 1050, // Fixed z-index instead of CSS variable
    border: '1px solid var(--color-outline-variant)'
  };

  const dropdownItemStyle = {
    display: 'block',
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--shape-small)',
    textDecoration: 'none',
    color: 'var(--color-on-surface)',
    transition: 'all var(--motion-duration-medium2) var(--motion-easing-standard)',
    marginBottom: 'var(--space-1)'
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e5e5',
    zIndex: 1000,
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    border: '1px solid #e5e5e5',
    maxHeight: '500px', // Fixed height instead of vh
    overflowY: 'auto'
  };

  const mobileToggleStyle = {
    border: 'none',
    background: 'transparent',
    color: 'var(--color-on-surface)',
    padding: 'var(--space-3)', /* FIXED: Larger touch target */
    borderRadius: 'var(--shape-medium)',
    cursor: 'pointer',
    minHeight: '44px', /* FIXED: Proper touch target size */
    minWidth: '44px',  /* FIXED: Proper touch target size */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--motion-duration-medium2) var(--motion-easing-standard)'
  };

  return (
    <nav style={navigationStyle} role="navigation" aria-label="Main navigation">
      <div style={containerStyle}>
        {/* Brand */}
        <Link to="/" style={brandStyle} aria-label="Global Payroll Migration - Home">
          <Language sx={{ fontSize: 28, color: 'var(--color-primary)' }} />
          <span>Global Payroll Migration</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul style={navMenuStyle} role="menubar">
            {/* Services Dropdown */}
            <li style={{ position: 'relative' }} className="dropdown-container" role="none">
              <button
                style={servicesOpen ? activeNavLinkStyle : navLinkStyle}
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setSuccessStoriesOpen(false);
                }}
                onMouseEnter={(e) => {
                  if (!servicesOpen) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!servicesOpen) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Services
                <KeyboardArrowDown 
                  sx={{
                    transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform var(--motion-duration-medium2) var(--motion-easing-standard)'
                  }}
                />
              </button>
              {servicesOpen && (
                <div style={dropdownMenuStyle} role="menu" aria-label="Services menu">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-surface-container-highest)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        {service.icon}
                        <span className="title-medium font-medium">{service.name}</span>
                      </div>
                      <div className="body-small text-on-surface-variant pl-7">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Success Stories Dropdown */}
            <li style={{ position: 'relative' }} className="dropdown-container" role="none">
              <button
                style={successStoriesOpen ? activeNavLinkStyle : navLinkStyle}
                onClick={() => {
                  setSuccessStoriesOpen(!successStoriesOpen);
                  setServicesOpen(false);
                }}
                onMouseEnter={(e) => {
                  if (!successStoriesOpen) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!successStoriesOpen) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                aria-expanded={successStoriesOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Success Stories
                <KeyboardArrowDown 
                  sx={{
                    transform: successStoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform var(--motion-duration-medium2) var(--motion-easing-standard)'
                  }}
                />
              </button>
              {successStoriesOpen && (
                <div style={dropdownMenuStyle} role="menu" aria-label="Success Stories menu">
                  {successStories.map((story) => (
                    <Link
                      key={story.href}
                      to={story.href}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-surface-container-highest)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                      role="menuitem"
                      onClick={() => setSuccessStoriesOpen(false)}
                    >
                      <span className="title-medium">{story.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Static Navigation Items */}
            <li role="none">
              <Link 
                to="/about" 
                style={isActive('/about') ? activeNavLinkStyle : navLinkStyle}
                onMouseEnter={(e) => {
                  if (!isActive('/about')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/about')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                role="menuitem"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/faq" 
                style={isActive('/faq') ? activeNavLinkStyle : navLinkStyle}
                onMouseEnter={(e) => {
                  if (!isActive('/faq')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/faq')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                role="menuitem"
              >
                FAQ
              </Link>
            </li>
            <li role="none">
              <Link 
                to="/contact" 
                style={isActive('/contact') ? activeNavLinkStyle : navLinkStyle}
                onMouseEnter={(e) => {
                  if (!isActive('/contact')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/contact')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                role="menuitem"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <Link to="/quote" className="btn-primary">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            style={mobileToggleStyle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-surface-container-high)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div style={mobileMenuStyle} role="menu" aria-label="Mobile navigation">
          <div className="container">
            {/* Services Section */}
            <div className="mb-4">
              <div
                style={{
                  color: 'var(--color-on-surface)',
                  fontSize: 'var(--text-title-medium)',
                  fontWeight: 'var(--weight-semibold)',
                  padding: 'var(--space-3) 0 var(--space-2) 0',
                  borderBottom: '1px solid var(--color-outline-variant)',
                  marginBottom: 'var(--space-2)'
                }}
              >
                Services
              </div>
              <div style={{ paddingLeft: 'var(--space-2)' }}>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="mobile-menu-link"
                    style={{
                      display: 'block',
                      padding: 'var(--space-3)',
                      color: 'var(--color-on-surface-variant)',
                      fontSize: 'var(--text-body-medium)',
                      textDecoration: 'none',
                      borderRadius: 'var(--shape-small)',
                      minHeight: '44px',
                      marginBottom: 'var(--space-1)',
                      transition: 'all var(--motion-duration-short) var(--motion-easing-standard)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-surface-container-highest)';
                      e.target.style.color = 'var(--color-on-surface)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--color-on-surface-variant)';
                    }}
                    role="menuitem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Success Stories Section */}
            <div className="mb-4">
              <div
                style={{
                  color: 'var(--color-on-surface)',
                  fontSize: 'var(--text-title-medium)',
                  fontWeight: 'var(--weight-semibold)',
                  padding: 'var(--space-3) 0 var(--space-2) 0',
                  borderBottom: '1px solid var(--color-outline-variant)',
                  marginBottom: 'var(--space-2)'
                }}
              >
                Success Stories
              </div>
              <div style={{ paddingLeft: 'var(--space-2)' }}>
                {successStories.map((story) => (
                  <Link
                    key={story.href}
                    to={story.href}
                    className="mobile-menu-link"
                    style={{
                      display: 'block',
                      padding: 'var(--space-3)',
                      color: 'var(--color-on-surface-variant)',
                      fontSize: 'var(--text-body-medium)',
                      textDecoration: 'none',
                      borderRadius: 'var(--shape-small)',
                      minHeight: '44px',
                      marginBottom: 'var(--space-1)',
                      transition: 'all var(--motion-duration-short) var(--motion-easing-standard)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-surface-container-highest)';
                      e.target.style.color = 'var(--color-on-surface)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--color-on-surface-variant)';
                    }}
                    role="menuitem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {story.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Static Links */}
            <div className="space-y-1 mb-6" style={{ marginBottom: 'var(--space-6)' }}>
              <Link 
                to="/about" 
                className="mobile-static-link"
                style={{
                  display: 'block',
                  padding: 'var(--space-3)',
                  color: 'var(--color-on-surface)',
                  textDecoration: 'none',
                  borderRadius: 'var(--shape-medium)',
                  fontSize: 'var(--text-title-medium)',
                  fontWeight: 'var(--weight-medium)',
                  minHeight: '44px',
                  backgroundColor: isActive('/about') ? 'var(--color-surface-container-high)' : 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/about')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/about')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className="mobile-static-link"
                style={{
                  display: 'block',
                  padding: 'var(--space-3)',
                  color: 'var(--color-on-surface)',
                  textDecoration: 'none',
                  borderRadius: 'var(--shape-medium)',
                  fontSize: 'var(--text-title-medium)',
                  fontWeight: 'var(--weight-medium)',
                  minHeight: '44px',
                  backgroundColor: isActive('/faq') ? 'var(--color-surface-container-high)' : 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/faq')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/faq')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="mobile-static-link"
                style={{
                  display: 'block',
                  padding: 'var(--space-3)',
                  color: 'var(--color-on-surface)',
                  textDecoration: 'none',
                  borderRadius: 'var(--shape-medium)',
                  fontSize: 'var(--text-title-medium)',
                  fontWeight: 'var(--weight-medium)',
                  minHeight: '44px',
                  backgroundColor: isActive('/contact') ? 'var(--color-surface-container-high)' : 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/contact')) {
                    e.target.style.backgroundColor = 'var(--color-surface-container-high)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/contact')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-outline-variant" style={{ 
              paddingTop: 'var(--space-4)', 
              borderTop: '1px solid var(--color-outline-variant)',
              marginBottom: 'var(--space-4)'
            }}>
              <Link 
                to="/quote" 
                className="btn-primary" 
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: 'var(--space-4)',
                  padding: 'var(--space-3) var(--space-6)',
                  textDecoration: 'none',
                  borderRadius: 'var(--shape-large)',
                  minHeight: '44px',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:+44-20-7946-0958" 
                  className="flex items-center gap-2 p-2 rounded-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    fontSize: 'var(--text-body-small)'
                  }}
                >
                  <Phone sx={{ fontSize: 16 }} />
                  +44-20-7946-0958
                </a>
                <a 
                  href="mailto:info@globalpayrollmigration.com" 
                  className="flex items-center gap-2 p-2 rounded-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    fontSize: 'var(--text-body-small)'
                  }}
                >
                  <Email sx={{ fontSize: 16 }} />
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ProfessionalNavigation2025;