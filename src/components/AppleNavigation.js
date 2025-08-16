import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppleNavigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [successStoriesOpen, setSuccessStoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle responsive breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileNow = window.innerWidth < 1024;
      const wasMobile = isMobile;
      setIsMobile(isMobileNow);
      
      // Close mobile menu when switching from mobile to desktop
      if (wasMobile && !isMobileNow && mobileOpen) {
        setMobileOpen(false);
        setServicesOpen(false);
        setSuccessStoriesOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMobile, mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSuccessStoriesOpen(false);
  }, [location]);

  const servicesItems = [
    {
      name: 'SME Solutions',
      path: '/services/sme',
      description: 'Specialized solutions for small and medium enterprises',
    },
    {
      name: 'Large Enterprise',
      path: '/services/large-enterprise',
      description: 'Comprehensive services for enterprise organizations',
    },
    {
      name: 'Expert Consultancy',
      path: '/services/consultancy',
      description: 'Professional guidance and strategic planning',
    },
  ];

  const successStoriesItems = [
    {
      name: 'SME Success Stories',
      path: '/success-stories/sme',
      description: 'Real results from small business migrations',
    },
    {
      name: 'Enterprise Stories',
      path: '/success-stories/large-enterprise',
      description: 'Large-scale transformation case studies',
    },
    {
      name: 'Consultancy Results',
      path: '/success-stories/consultancy',
      description: 'Strategic consulting outcomes',
    },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>

      {/* Apple Navigation Bar */}
      <nav
        className={`apple-navigation ${scrolled ? 'apple-navigation-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(227, 242, 253, 0.95)' : 'rgba(227, 242, 253, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `0.5px solid ${scrolled ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`,
          transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <div
          className='apple-navigation-content'
          style={{
            width: '100%',
            margin: '0 auto',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to='/'
            className='apple-navigation-logo'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 700,
              color: '#1a237e',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src='/images/gpm-logo.png'
              alt='GPM Logo'
              className='apple-navigation-logo-icon'
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
              }}
            />
            <span className='apple-navigation-logo-text'>{isMobile ? 'GPM' : 'Global Payroll Migration'}</span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className='apple-navigation-desktop'
            style={{
              display: !isMobile ? 'flex' : 'none',
              alignItems: 'center',
              gap: '48px',
            }}
          >
            <ul
              className='apple-navigation-menu'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {/* Home Link - First */}
              <li className='apple-navigation-item'>
                <Link
                  to='/'
                  className={`apple-navigation-link ${isActiveLink('/') ? 'apple-navigation-link-active' : ''}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActiveLink('/') ? '#007AFF' : '#1a237e',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    background: isActiveLink('/') ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/')) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      e.target.style.color = '#007AFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/')) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1a237e';
                    }
                  }}
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className='apple-navigation-item apple-navigation-dropdown'
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`apple-navigation-link ${isActiveLink('/services') ? 'apple-navigation-link-active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActiveLink('/services') ? '#007AFF' : '#1a237e',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  Services
                  <svg
                    className='apple-navigation-chevron'
                    style={{
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      color: '#86868b',
                    }}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>

                {/* Services Dropdown Menu */}
                <div
                  className={`apple-navigation-dropdown-menu ${servicesOpen ? 'apple-navigation-dropdown-menu-open' : ''}`}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    background: 'rgba(227, 242, 253, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
                    border: '0.5px solid rgba(0, 0, 0, 0.1)',
                    minWidth: '280px',
                    padding: '8px',
                    opacity: servicesOpen ? 1 : 0,
                    visibility: servicesOpen ? 'visible' : 'hidden',
                    transform: servicesOpen
                      ? 'translateX(-50%) translateY(0)'
                      : 'translateX(-50%) translateY(-10px)',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='apple-navigation-dropdown-item'
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: '#1a237e',
                        transition: 'all 0.2s ease',
                        marginBottom: '4px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      <div
                        className='apple-navigation-dropdown-item-name'
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          marginBottom: '2px',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className='apple-navigation-dropdown-item-description'
                        style={{
                          fontSize: '14px',
                          color: '#86868b',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </li>

              {/* Success Stories Dropdown */}
              <li
                className='apple-navigation-item apple-navigation-dropdown'
                style={{ position: 'relative' }}
                onMouseEnter={() => setSuccessStoriesOpen(true)}
                onMouseLeave={() => setSuccessStoriesOpen(false)}
              >
                <button
                  className={`apple-navigation-link ${isActiveLink('/success-stories') ? 'apple-navigation-link-active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActiveLink('/success-stories') ? '#007AFF' : '#1a237e',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  Success Stories
                  <svg
                    className='apple-navigation-chevron'
                    style={{
                      transform: successStoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      color: '#86868b',
                    }}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>

                {/* Success Stories Dropdown Menu */}
                <div
                  className={`apple-navigation-dropdown-menu ${successStoriesOpen ? 'apple-navigation-dropdown-menu-open' : ''}`}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    background: 'rgba(227, 242, 253, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
                    border: '0.5px solid rgba(0, 0, 0, 0.1)',
                    minWidth: '280px',
                    padding: '8px',
                    opacity: successStoriesOpen ? 1 : 0,
                    visibility: successStoriesOpen ? 'visible' : 'hidden',
                    transform: successStoriesOpen
                      ? 'translateX(-50%) translateY(0)'
                      : 'translateX(-50%) translateY(-10px)',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                >
                  {successStoriesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='apple-navigation-dropdown-item'
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: '#1a237e',
                        transition: 'all 0.2s ease',
                        marginBottom: '4px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                      }}
                    >
                      <div
                        className='apple-navigation-dropdown-item-name'
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          marginBottom: '2px',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className='apple-navigation-dropdown-item-description'
                        style={{
                          fontSize: '14px',
                          color: '#86868b',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </li>

              {/* Direct Links */}

              <li className='apple-navigation-item'>
                <Link
                  to='/about'
                  className={`apple-navigation-link ${isActiveLink('/about') ? 'apple-navigation-link-active' : ''}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActiveLink('/about') ? '#007AFF' : '#1a237e',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    background: isActiveLink('/about') ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/about')) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      e.target.style.color = '#007AFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/about')) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1d1d1f';
                    }
                  }}
                >
                  About
                </Link>
              </li>

              <li className='apple-navigation-item'>
                <Link
                  to='/contact'
                  className={`apple-navigation-link ${isActiveLink('/contact') ? 'apple-navigation-link-active' : ''}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: isActiveLink('/contact') ? '#007AFF' : '#1a237e',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    background: isActiveLink('/contact') ? 'rgba(0, 122, 255, 0.1)' : 'transparent',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveLink('/contact')) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      e.target.style.color = '#007AFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveLink('/contact')) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1a237e';
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <div className='apple-navigation-actions'>
              <Link
                to='/contact'
                className='apple-navigation-cta'
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: '#007AFF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#0056CC';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#007AFF';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile Navigation (Quote Button + Menu Toggle) */}
          <div
            className='apple-navigation-mobile-section'
            style={{
              display: isMobile ? 'flex' : 'none',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* Mobile Consultation Button */}
            <Link
              to='/contact'
              className='apple-navigation-mobile-cta'
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: '#007AFF',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0056CC';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#007AFF';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Free Consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`apple-navigation-mobile-toggle ${mobileOpen ? 'apple-navigation-mobile-toggle-open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '24px',
                height: '24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
            <span
              className='apple-navigation-mobile-line'
              style={{
                width: '18px',
                height: '2px',
                background: '#1d1d1f',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: mobileOpen
                  ? 'rotate(45deg) translateY(6px)'
                  : 'rotate(0deg) translateY(0)',
                marginBottom: mobileOpen ? 0 : '4px',
              }}
            />
            <span
              className='apple-navigation-mobile-line'
              style={{
                width: '18px',
                height: '2px',
                background: '#1d1d1f',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                opacity: mobileOpen ? 0 : 1,
                marginBottom: mobileOpen ? 0 : '4px',
              }}
            />
            <span
              className='apple-navigation-mobile-line'
              style={{
                width: '18px',
                height: '2px',
                background: '#1d1d1f',
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: mobileOpen
                  ? 'rotate(-45deg) translateY(-6px)'
                  : 'rotate(0deg) translateY(0)',
              }}
            />
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`apple-navigation-mobile ${mobileOpen ? 'apple-navigation-mobile-open' : ''}`}
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(227, 242, 253, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
          zIndex: 999,
          maxHeight: 'calc(100dvh - 64px)',
          overflowY: 'auto',
        }}
      >
        <div
          className='apple-navigation-mobile-content'
          style={{
            padding: '20px 24px',
          }}
        >
          <ul
            className='apple-navigation-mobile-menu'
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {/* Home - First */}
            <li className='apple-navigation-mobile-item' style={{ marginBottom: '12px' }}>
              <Link
                to='/'
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a237e',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                }}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services */}
            <li className='apple-navigation-mobile-item' style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1a237e',
                  marginBottom: '8px',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                }}
              >
                Services
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {servicesItems.map((item) => (
                  <li key={item.path} style={{ marginBottom: '8px' }}>
                    <Link
                      to={item.path}
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        color: '#1a237e',
                        textDecoration: 'none',
                        padding: '8px 0',
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Success Stories */}
            <li className='apple-navigation-mobile-item' style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1a237e',
                  marginBottom: '8px',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                }}
              >
                Success Stories
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {successStoriesItems.map((item) => (
                  <li key={item.path} style={{ marginBottom: '8px' }}>
                    <Link
                      to={item.path}
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        color: '#1a237e',
                        textDecoration: 'none',
                        padding: '8px 0',
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className='apple-navigation-mobile-item' style={{ marginBottom: '12px' }}>
              <Link
                to='/about'
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a237e',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                }}
              >
                About
              </Link>
            </li>

            <li className='apple-navigation-mobile-item' style={{ marginBottom: '12px' }}>
              <Link
                to='/faq'
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a237e',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                }}
              >
                FAQ
              </Link>
            </li>

            {/* Mobile CTA */}
            <li className='apple-navigation-mobile-item' style={{ marginTop: '24px' }}>
              <Link
                to='/contact'
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: '#007AFF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                }}
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div style={{ height: '64px' }} />
    </>
  );
};

export default AppleNavigation;
