import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <footer 
      style={{
        background: '#f5f5f7',
        borderTop: '0.5px solid rgba(0, 0, 0, 0.1)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Main Footer Content */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '32px 24px 0'
        }}
      >
        {/* Top Section */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '40px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          {/* Left: Company Info */}
          <div style={{ flex: '0 0 auto' }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}
            >
              <span 
                style={{
                  fontSize: '24px',
                  color: '#007AFF'
                }}
              >
                🌍
              </span>
              <h3 
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  margin: 0,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
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
              gap: '60px',
              flex: '1 1 auto',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >

            {/* Services */}
            <div>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
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
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  SME Solutions
                </Link>
                <Link 
                  to="/services/large-enterprise"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  Large Enterprise
                </Link>
                <Link 
                  to="/services/consultancy"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  Expert Consultancy
                </Link>
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
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
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  SME Case Studies
                </Link>
                <Link 
                  to="/success-stories/large-enterprise"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  Enterprise Stories
                </Link>
                <Link 
                  to="/success-stories/consultancy"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  Consultancy Results
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '12px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
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
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  About Us
                </Link>
                <Link 
                  to="/faq"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact"
                  style={{
                    fontSize: '13px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007AFF'}
                  onMouseLeave={(e) => e.target.style.color = '#86868b'}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Get Started */}
          <div style={{ flex: '0 0 auto', textAlign: 'right' }}>
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
                alignItems: 'flex-end'
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
                    color: '#86868b',
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
                    color: '#86868b',
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
                  color: '#86868b',
                  marginBottom: '4px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'
                }}
              >
                Copyright © {currentYear} Global Payroll Migration Ltd. All rights reserved.
              </p>
              <p 
                style={{
                  fontSize: '13px',
                  color: '#86868b',
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
                gap: '24px'
              }}
            >
              <Link 
                to="/privacy"
                style={{
                  fontSize: '13px',
                  color: '#86868b',
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
                  color: '#86868b',
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
                  color: '#86868b',
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
                gap: '12px'
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