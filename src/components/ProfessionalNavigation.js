import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Language,
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown,
  Phone,
  Email
} from '@mui/icons-material';

const ProfessionalNavigation = () => {
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
    { name: 'SME Solutions', href: '/services/sme', description: 'Payroll migration for small to medium enterprises' },
    { name: 'Large Enterprise', href: '/services/large-enterprise', description: 'Complex migrations for large organizations' },
    { name: 'Expert Consultancy', href: '/services/consultancy', description: 'Strategic guidance and optimization' }
  ];

  const successStories = [
    { name: 'SME Success Stories', href: '/success-stories/sme' },
    { name: 'Enterprise Stories', href: '/success-stories/large-enterprise' },
    { name: 'Consultancy Results', href: '/success-stories/consultancy' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          {/* Brand */}
          <Link to="/" className="nav-brand" aria-label="Global Payroll Migration - Home">
            <Language aria-hidden="true" />
            <span>Global Payroll Migration</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden-mobile">
            <ul className="nav-menu" role="menubar">
              {/* Services Dropdown */}
              <li className="dropdown-container" role="none">
                <button
                  className={`nav-link dropdown-trigger ${servicesOpen ? 'active' : ''}`}
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setSuccessStoriesOpen(false);
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  Services
                  <KeyboardArrowDown 
                    style={{ 
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 150ms ease'
                    }}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <div 
                    className="dropdown-menu" 
                    role="menu"
                    aria-label="Services menu"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div>
                          <div className="dropdown-item-title">{service.name}</div>
                          <div className="dropdown-item-description">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Success Stories Dropdown */}
              <li className="dropdown-container" role="none">
                <button
                  className={`nav-link dropdown-trigger ${successStoriesOpen ? 'active' : ''}`}
                  onClick={() => {
                    setSuccessStoriesOpen(!successStoriesOpen);
                    setServicesOpen(false);
                  }}
                  aria-expanded={successStoriesOpen}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  Success Stories
                  <KeyboardArrowDown 
                    style={{ 
                      transform: successStoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 150ms ease'
                    }}
                    aria-hidden="true"
                  />
                </button>
                {successStoriesOpen && (
                  <div 
                    className="dropdown-menu" 
                    role="menu"
                    aria-label="Success Stories menu"
                  >
                    {successStories.map((story) => (
                      <Link
                        key={story.href}
                        to={story.href}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => setSuccessStoriesOpen(false)}
                      >
                        <div className="dropdown-item-title">{story.name}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Static Navigation Items */}
              <li role="none">
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  role="menuitem"
                >
                  About
                </Link>
              </li>
              <li role="none">
                <Link 
                  to="/faq" 
                  className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
                  role="menuitem"
                >
                  FAQ
                </Link>
              </li>
              <li role="none">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  role="menuitem"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <Link to="/quote" className="btn btn-primary">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="nav-toggle hidden-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" role="menu" aria-label="Mobile navigation">
            <div className="container">
              {/* Services Section */}
              <div className="mobile-menu-section">
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <KeyboardArrowDown 
                    style={{ 
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 150ms ease'
                    }}
                  />
                </button>
                {servicesOpen && (
                  <div className="mobile-submenu">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="mobile-menu-link"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Success Stories Section */}
              <div className="mobile-menu-section">
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setSuccessStoriesOpen(!successStoriesOpen)}
                  aria-expanded={successStoriesOpen}
                >
                  Success Stories
                  <KeyboardArrowDown 
                    style={{ 
                      transform: successStoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 150ms ease'
                    }}
                  />
                </button>
                {successStoriesOpen && (
                  <div className="mobile-submenu">
                    {successStories.map((story) => (
                      <Link
                        key={story.href}
                        to={story.href}
                        className="mobile-menu-link"
                        role="menuitem"
                      >
                        {story.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Static Links */}
              <Link to="/about" className="mobile-menu-link" role="menuitem">About</Link>
              <Link to="/faq" className="mobile-menu-link" role="menuitem">FAQ</Link>
              <Link to="/contact" className="mobile-menu-link" role="menuitem">Contact</Link>
              
              {/* Mobile CTA */}
              <div className="mobile-menu-cta">
                <Link to="/quote" className="btn btn-primary w-full">
                  Get Free Quote
                </Link>
                <div className="mobile-contact-info">
                  <a href="tel:+44-20-7946-0958" className="mobile-contact-link">
                    <Phone size={16} />
                    +44-20-7946-0958
                  </a>
                  <a href="mailto:info@globalpayrollmigration.com" className="mobile-contact-link">
                    <Email size={16} />
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ProfessionalNavigation;