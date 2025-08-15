import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <footer 
      style={{
        background: '#e3f2fd',
        borderTop: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%) 1',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '300px',
        height: '250px',
        background: 'radial-gradient(ellipse, rgba(0, 122, 255, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '20%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(26, 35, 126, 0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }} />
      {/* Main Footer Content */}
      <div 
        style={{
          width: '90%',
          margin: '0 auto',
          padding: '32px 24px 0',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Top Section */}
        <div 
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
            alignItems: 'flex-start',
            gap: isMobile ? '32px' : '40px',
            marginBottom: '32px',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          {/* Left: Company Info */}
          <div style={{ flex: isMobile ? '1 1 100%' : '0 0 auto' }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}
            >
              <img 
                src="/images/gpm-logo.png"
                alt="GPM Logo"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                }}
              />
              <h3 
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#1a237e',
                  margin: 0,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Global Payroll Migration
              </h3>
            </div>
            <p 
              style={{
                fontSize: '15px',
                lineHeight: '22px',
                color: '#86868b',
                marginBottom: '16px',
                maxWidth: '300px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
              }}
            >
              UK-based payroll migration specialists trusted by Fortune 500 companies worldwide.
            </p>
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '0.5px solid rgba(0, 122, 255, 0.2)'
                }}
              >
                <span 
                  style={{
                    fontSize: '12px',
                    color: '#007AFF'
                  }}
                >
                  🔒
                </span>
                <span 
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#007AFF',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  ISO Certified
                </span>
              </div>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  background: 'rgba(52, 199, 89, 0.1)',
                  border: '0.5px solid rgba(52, 199, 89, 0.2)'
                }}
              >
                <span 
                  style={{
                    fontSize: '12px',
                    color: '#34C759'
                  }}
                >
                  🌐
                </span>
                <span 
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#34C759',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  Global
                </span>
              </div>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  background: 'rgba(255, 149, 0, 0.1)',
                  border: '0.5px solid rgba(255, 149, 0, 0.2)'
                }}
              >
                <span 
                  style={{
                    fontSize: '12px',
                    color: '#FF9500'
                  }}
                >
                  ⚡
                </span>
                <span 
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#FF9500',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div 
            style={{
              display: 'flex',
              gap: isMobile ? '32px' : '60px',
              flex: isMobile ? '1 1 100%' : '1 1 auto',
              justifyContent: isMobile ? 'flex-start' : 'center',
              flexWrap: 'wrap'
            }}
          >

            {/* Services */}
            <div style={{ minWidth: isMobile ? 'auto' : '120px' }}>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a237e',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Services
              </h4>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <Link 
                  to="/services/sme"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  SME Solutions
                </Link>
                <Link 
                  to="/services/large-enterprise"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  Large Enterprise
                </Link>
                <Link 
                  to="/services/consultancy"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  Expert Consultancy
                </Link>
              </div>
            </div>

            {/* Success Stories */}
            <div style={{ minWidth: isMobile ? 'auto' : '120px' }}>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a237e',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Success Stories
              </h4>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <Link 
                  to="/success-stories/sme"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  SME Case Studies
                </Link>
                <Link 
                  to="/success-stories/large-enterprise"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  Enterprise Stories
                </Link>
                <Link 
                  to="/success-stories/consultancy"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  Consultancy Results
                </Link>
              </div>
            </div>

            {/* Company */}
            <div style={{ minWidth: isMobile ? 'auto' : '120px' }}>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a237e',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Company
              </h4>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <Link 
                  to="/about"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  About Us
                </Link>
                <Link 
                  to="/faq"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact"
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#283593'}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Get Started */}
          <div style={{ flex: isMobile ? '1 1 100%' : '0 0 auto', textAlign: isMobile ? 'left' : 'right' }}>
            <Link 
              to="/quote"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#007AFF',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '20px',
                fontSize: '15px',
                fontWeight: 500,
                marginBottom: '16px',
                transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
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
              Get Free Quote
            </Link>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                alignItems: isMobile ? 'flex-start' : 'flex-end'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span 
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  +44 20 1234 5678
                </span>
                <span 
                  style={{
                    fontSize: '14px',
                    color: '#86868b'
                  }}
                >
                  📞
                </span>
              </div>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span 
                  style={{
                    fontSize: '13px',
                    color: '#283593',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  hello@gpm.co.uk
                </span>
                <span 
                  style={{
                    fontSize: '14px',
                    color: '#86868b'
                  }}
                >
                  ✉️
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          style={{
            height: '0.5px',
            background: 'rgba(0, 0, 0, 0.1)',
            margin: '32px 0 20px'
          }}
        />

        {/* Bottom Section */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingBottom: '32px'
          }}
        >
          <div 
            style={{
              display: 'flex',
              flexDirection: !isMobile ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: !isMobile ? 'center' : 'flex-start',
              gap: '16px'
            }}
          >
            {/* Copyright */}
            <div>
              <p 
                style={{
                  fontSize: '13px',
                  color: '#283593',
                  marginBottom: '4px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
              >
                Copyright © {currentYear} Global Payroll Migration Ltd. All rights reserved.
              </p>
              <p 
                style={{
                  fontSize: '13px',
                  color: '#283593',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
              >
                Registered in England & Wales. Company No: 12345678
              </p>
            </div>

            {/* Legal Links */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '16px' : '24px',
                justifyContent: isMobile ? 'flex-start' : 'flex-end'
              }}
            >
              <Link 
                to="/privacy"
                style={{
                  fontSize: '13px',
                  color: '#283593',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                onMouseLeave={(e) => e.target.style.color = '#86868b'}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                style={{
                  fontSize: '13px',
                  color: '#283593',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                onMouseLeave={(e) => e.target.style.color = '#86868b'}
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies"
                style={{
                  fontSize: '13px',
                  color: '#283593',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                onMouseLeave={(e) => e.target.style.color = '#86868b'}
              >
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div 
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: isMobile ? 'flex-start' : 'flex-end'
              }}
            >
              <a 
                href="https://linkedin.com/company/globalpayrollmigration"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '22px',
                  background: 'rgba(0, 0, 0, 0.04)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 122, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.04)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span 
                  style={{
                    fontSize: '20px',
                    color: '#86868b'
                  }}
                >
                  💼
                </span>
              </a>
              <a 
                href="https://twitter.com/globalpayrollmigration"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '22px',
                  background: 'rgba(0, 0, 0, 0.04)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 122, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.04)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span 
                  style={{
                    fontSize: '20px',
                    color: '#86868b'
                  }}
                >
                  🐦
                </span>
              </a>
              <a 
                href="https://youtube.com/@globalpayrollmigration"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '22px',
                  background: 'rgba(0, 0, 0, 0.04)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 122, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.04)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span 
                  style={{
                    fontSize: '20px',
                    color: '#86868b'
                  }}
                >
                  📺
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;