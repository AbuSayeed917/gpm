import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Email,
  CalendarToday,
  CheckCircle,
  Speed,
  Groups,
  Public,
  ExpandMore,
} from '@mui/icons-material';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);

  // Detect mobile devices and screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch interactions for mobile
  const handleTouchStart = (e, cardIndex) => {
    if (isMobile) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = (e, cardIndex) => {
    if (isMobile && touchStartY) {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      // If minimal swipe, treat as tap to expand/collapse
      if (Math.abs(diff) < 10) {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
      }
      setTouchStartY(null);
    }
  };

  const contactMethods = [
    {
      icon: <Phone />,
      title: 'Phone',
      primary: '+44 7432 665514',
      secondary: 'Available Mon-Fri 9AM-6PM GMT',
      description: 'Speak directly with a migration expert',
      href: 'tel:+447432665514',
      features: [
        'Immediate support',
        'Expert consultation',
        'Project planning',
        'Technical guidance',
      ],
    },
    {
      icon: <Email />,
      title: 'Email',
      primary: 'info@globalpayrollmigration.com',
      secondary: 'Response within 2 hours',
      description: 'Send us your requirements',
      href: 'mailto:info@globalpayrollmigration.com',
      features: [
        'Detailed project scope',
        'Document sharing',
        'Formal quotes',
        'Technical specifications',
      ],
    },
    {
      icon: <CalendarToday />,
      title: 'Book Discovery Call',
      primary: 'Free 30-minute consultation',
      secondary: 'No obligation, just insight',
      description: 'Schedule directly with an expert',
      href: 'mailto:info@globalpayrollmigration.com?subject=Discovery Call Request',
      features: ['Project assessment', 'Timeline planning', 'Cost estimation', 'Risk evaluation'],
    },
  ];

  const whyContact = [
    {
      icon: <CheckCircle />,
      title: 'Free Consultation',
      description:
        'No-obligation discussion about your payroll migration needs with detailed project assessment',
      features: [
        'Project scope analysis',
        'Risk assessment',
        'Timeline estimation',
        'Resource planning',
      ],
    },
    {
      icon: <Speed />,
      title: 'Quick Response',
      description:
        'We respond to all inquiries within 2 hours during business hours with personalized recommendations',
      features: [
        '24/7 monitoring',
        'Emergency support',
        'Escalation procedures',
        'Multi-channel access',
      ],
    },
    {
      icon: <Groups />,
      title: 'Expert Team',
      description: 'Speak directly with experienced payroll migration specialists, not salespeople',
      features: [
        'Certified professionals',
        'Years of experience',
        'Industry expertise',
        'Proven track record',
      ],
    },
    {
      icon: <Public />,
      title: 'Global Experience',
      description:
        'Deep knowledge of payroll systems across 14+ countries and regulatory frameworks',
      features: [
        'Multi-country compliance',
        'Local regulations',
        'Cross-border coordination',
        'Regional expertise',
      ],
    },
  ];

  return (
    <>
      <style jsx>{`
        /* Mobile-First CSS with Industry Standard Breakpoints */
        .mobile-optimized {
          /* Base styles for mobile (320px and up) */
        }

        /* Small Mobile */
        @media (max-width: 375px) {
          .hero-title {
            font-size: 32px !important;
            line-height: 1.1 !important;
            margin-bottom: 16px !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
            margin-bottom: 24px !important;
          }
          .section-padding {
            padding: 40px 0 30px 0 !important;
          }
          .container-mobile {
            padding: 0 16px !important;
          }
        }

        /* Mobile Portrait */
        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 0 40px 0 !important;
            min-height: 70vh !important;
          }
          .hero-title {
            font-size: 36px !important;
            margin-bottom: 18px !important;
          }
          .hero-subtitle {
            font-size: 17px !important;
            line-height: 1.4 !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .card-padding {
            padding: 24px 20px !important;
          }
        }

        /* Mobile Landscape / Small Tablet */
        @media (min-width: 481px) and (max-width: 768px) {
          .hero-section {
            padding: 70px 0 50px 0 !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 24px !important;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .container-tablet {
            max-width: 90% !important;
          }
        }

        /* Touch-friendly interactions */
        .touch-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
        }

        .touch-card:active {
          transform: scale(0.98) !important;
        }

        .expanded-card {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15) !important;
        }

        /* Improved touch targets */
        .touch-target {
          min-height: 44px !important;
          min-width: 44px !important;
        }

        /* Mobile typography optimization */
        @media (max-width: 768px) {
          .mobile-h1 {
            font-size: clamp(32px, 8vw, 48px) !important;
          }
          .mobile-h2 {
            font-size: clamp(28px, 6vw, 40px) !important;
          }
          .mobile-p {
            font-size: 16px !important;
            line-height: 1.5 !important;
          }
          .mobile-small {
            font-size: 14px !important;
          }
        }

        /* Contact method specific styling */
        .contact-method-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .contact-method-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 64px rgba(135, 206, 235, 0.25) !important;
        }

        /* Mobile contact card styling */
        @media (max-width: 768px) {
          .contact-method-card:active {
            transform: scale(0.98) !important;
          }
        }

        /* Scroll snap for mobile sections */
        @media (max-width: 768px) {
          .section-scroll-snap {
            scroll-snap-type: y mandatory;
          }
          .section-snap-item {
            scroll-snap-align: start;
          }
        }

        /* Mobile navigation spacing */
        @media (max-width: 768px) {
          .mobile-nav-spacing {
            margin-top: 60px !important;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .high-contrast {
            border: 2px solid currentColor !important;
          }
        }

        /* Dark mode considerations */
        @media (prefers-color-scheme: dark) {
          .dark-mode-text {
            color: #ffffff !important;
          }
        }

        /* Focus styles for accessibility */
        .touch-target:focus {
          outline: 2px solid #00bfff !important;
          outline-offset: 2px !important;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #E8F6FF 0%, #F0FAFF 50%, #ccebff 100%)',
          fontFamily:
            '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Mobile-Optimized Hero Section */}
        <section
          className='hero-section section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '8rem 0 6rem 0',
            background:
              'linear-gradient(135deg, rgba(135, 206, 235, 0.15) 0%, rgba(173, 216, 230, 0.1) 50%, rgba(240, 248, 255, 0.05) 100%)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? '80vh' : 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: isMobile ? '10px 20px' : '12px 24px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(135, 206, 235, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(135, 206, 235, 0.2)',
                  marginBottom: isMobile ? '16px' : '2rem',
                }}
              >
                <span style={{ fontSize: isMobile ? '16px' : '1.2rem' }}>📞</span>
                <span
                  style={{
                    fontSize: isMobile ? '14px' : '0.875rem',
                    fontWeight: '600',
                    color: '#1976d2',
                    letterSpacing: '0.025em',
                  }}
                >
                  Free Consultation Available
                </span>
              </div>

              <h1
                className='mobile-h1'
                style={{
                  fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  color: '#1a1a1a',
                  marginBottom: isMobile ? '16px' : '2rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Get Started with Your <span style={{ color: '#87ceeb' }}>Payroll Migration</span>
              </h1>

              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '16px' : '1.25rem',
                  lineHeight: '1.6',
                  color: '#4a4a4a',
                  maxWidth: isMobile ? '100%' : '48rem',
                  margin: '0 auto',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Ready to migrate without the stress? Let's discuss how we can support your payroll
                migration — whether you're just starting out or ready to move forward immediately.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile-Optimized Contact Methods */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '4rem 0',
            backgroundColor: 'rgba(135, 206, 235, 0.08)',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 2rem',
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '4rem' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  marginBottom: isMobile ? '12px' : '1.5rem',
                  color: '#1a1a1a',
                  letterSpacing: '-0.02em',
                }}
              >
                How to <span style={{ color: '#87ceeb' }}>Reach Us</span>
              </h2>
              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '16px' : '1.125rem',
                  color: '#4a4a4a',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Choose the method that works best for you
              </p>
            </motion.div>

            <div
              className='contact-grid'
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: isMobile ? '16px' : '2rem',
                marginBottom: isMobile ? '30px' : '4rem',
              }}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`contact-method-card touch-card ${expandedCard === index ? 'expanded-card' : ''}`}
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchEnd={(e) => handleTouchEnd(e, index)}
                  onClick={() =>
                    !isMobile
                      ? (window.location.href = method.href)
                      : setExpandedCard(expandedCard === index ? null : index)
                  }
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(135, 206, 235, 0.2)',
                    borderRadius: isMobile ? '16px' : '20px',
                    padding: isMobile ? '24px 20px' : '2rem',
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: isMobile ? 'auto' : '100%',
                  }}
                  whileHover={
                    !isMobile
                      ? {
                          y: -5,
                          scale: 1.02,
                          boxShadow: '0 20px 40px rgba(135, 206, 235, 0.25)',
                        }
                      : {}
                  }
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: isMobile ? '16px' : '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? '60px' : '80px',
                        height: isMobile ? '60px' : '80px',
                        backgroundColor: 'rgba(135, 206, 235, 0.15)',
                        borderRadius: isMobile ? '16px' : '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(135, 206, 235, 0.2)',
                      }}
                    >
                      {React.cloneElement(method.icon, {
                        sx: {
                          fontSize: isMobile ? 24 : 32,
                          color: '#87ceeb',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                        },
                      })}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: isMobile ? '20px' : '1.5rem',
                      fontWeight: '700',
                      marginBottom: isMobile ? '8px' : '0.75rem',
                      color: '#1a1a1a',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {method.title}
                  </h3>

                  <p
                    style={{
                      fontSize: isMobile ? '16px' : '1.125rem',
                      color: '#87ceeb',
                      fontWeight: '600',
                      marginBottom: isMobile ? '6px' : '0.5rem',
                      wordBreak: method.title === 'Email' ? 'break-word' : 'normal',
                    }}
                  >
                    {method.primary}
                  </p>

                  <p
                    className='mobile-small'
                    style={{
                      fontSize: isMobile ? '14px' : '1rem',
                      color: '#666',
                      marginBottom: isMobile ? '8px' : '1rem',
                      fontWeight: '400',
                    }}
                  >
                    {method.secondary}
                  </p>

                  <p
                    className='mobile-small'
                    style={{
                      fontSize: isMobile ? '13px' : '0.875rem',
                      color: '#666',
                      marginBottom: isMobile ? '16px' : '1.5rem',
                      fontWeight: '400',
                      flex: 1,
                    }}
                  >
                    {method.description}
                  </p>

                  {/* Mobile: Show features when expanded */}
                  {isMobile && expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        marginTop: '16px',
                        padding: '16px',
                        background: 'rgba(135, 206, 235, 0.1)',
                        borderRadius: '12px',
                        border: '1px solid rgba(135, 206, 235, 0.2)',
                      }}
                    >
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {method.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              color: '#1a1a1a',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                            }}
                          >
                            <div
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: '#87ceeb',
                                flexShrink: 0,
                              }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Touch indicator for mobile */}
                  {isMobile && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '12px',
                        padding: '8px',
                        color: '#87ceeb',
                        fontSize: '12px',
                        fontWeight: '500',
                        gap: '4px',
                      }}
                    >
                      {expandedCard === index ? 'Tap to contact' : 'Tap to expand'}
                      <ExpandMore
                        sx={{
                          fontSize: 16,
                          transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>
                  )}

                  {/* Desktop: Show CTA button */}
                  {!isMobile && (
                    <a
                      href={method.href}
                      className='touch-target'
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '14px 24px',
                        backgroundColor: 'transparent',
                        border: '2px solid #00bfff',
                        borderRadius: '12px',
                        color: '#87ceeb',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'inherit',
                        textDecoration: 'none',
                        marginTop: 'auto',
                        minHeight: '44px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00bfff';
                        e.target.style.color = '#ccebff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#87ceeb';
                      }}
                    >
                      Contact Now
                    </a>
                  )}

                  {/* Mobile: Direct contact action when expanded */}
                  {isMobile && expandedCard === index && (
                    <motion.a
                      href={method.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className='touch-target'
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '16px 24px',
                        backgroundColor: '#00bfff',
                        border: 'none',
                        borderRadius: '12px',
                        color: '#ccebff',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        textDecoration: 'none',
                        marginTop: '16px',
                        minHeight: '44px',
                        boxShadow: '0 4px 16px rgba(0, 191, 255, 0.3)',
                      }}
                    >
                      {method.title === 'Phone'
                        ? 'Call Now'
                        : method.title === 'Email'
                          ? 'Send Email'
                          : 'Schedule Call'}
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile-Optimized Why Contact Us Section */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '5rem 0',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 2rem',
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '4rem' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  marginBottom: isMobile ? '12px' : '1.5rem',
                  color: '#1a1a1a',
                  letterSpacing: '-0.02em',
                }}
              >
                Why <span style={{ color: '#87ceeb' }}>Contact Us</span>?
              </h2>
            </motion.div>

            <div
              className='why-grid'
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: isMobile ? '16px' : '2rem',
              }}
            >
              {whyContact.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`touch-card ${expandedCard === `why-${index}` ? 'expanded-card' : ''}`}
                  onTouchStart={(e) => handleTouchStart(e, `why-${index}`)}
                  onTouchEnd={(e) => handleTouchEnd(e, `why-${index}`)}
                  onClick={() =>
                    isMobile &&
                    setExpandedCard(expandedCard === `why-${index}` ? null : `why-${index}`)
                  }
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                    borderRadius: isMobile ? '16px' : '24px',
                    padding: isMobile ? '24px 20px' : '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(135, 206, 235, 0.15)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isMobile ? 'pointer' : 'default',
                    minHeight: isMobile ? 'auto' : '300px',
                  }}
                  whileHover={
                    !isMobile
                      ? {
                          y: -8,
                          boxShadow: '0 20px 64px rgba(135, 206, 235, 0.25)',
                        }
                      : {}
                  }
                  whileTap={isMobile ? { scale: 0.98 } : {}}
                >
                  <div
                    style={{
                      width: isMobile ? '60px' : '80px',
                      height: isMobile ? '60px' : '80px',
                      backgroundColor: 'rgba(135, 206, 235, 0.2)',
                      borderRadius: isMobile ? '16px' : '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: isMobile ? '16px' : '1.5rem',
                      border: '2px solid rgba(135, 206, 235, 0.3)',
                      boxShadow: '0 8px 32px rgba(135, 206, 235, 0.2)',
                    }}
                  >
                    {React.cloneElement(reason.icon, {
                      sx: {
                        fontSize: isMobile ? 24 : 32,
                        color: '#87ceeb',
                        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                      },
                    })}
                  </div>

                  <h3
                    style={{
                      fontSize: isMobile ? '20px' : '1.5rem',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.2',
                      marginBottom: isMobile ? '12px' : '1rem',
                    }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    style={{
                      fontSize: isMobile ? '14px' : '1rem',
                      color: '#1a1a1a',
                      lineHeight: '1.6',
                      fontWeight: '400',
                      marginBottom: isMobile ? '16px' : '1.5rem',
                      flex: 1,
                    }}
                  >
                    {reason.description}
                  </p>

                  {/* Mobile: Show features when expanded */}
                  {isMobile && expandedCard === `why-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '100%',
                        marginTop: '16px',
                        padding: '16px',
                        background: 'rgba(135, 206, 235, 0.1)',
                        borderRadius: '12px',
                        border: '1px solid rgba(135, 206, 235, 0.2)',
                      }}
                    >
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {reason.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              color: '#1a1a1a',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                              textAlign: 'left',
                            }}
                          >
                            <div
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: '#87ceeb',
                                flexShrink: 0,
                              }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Touch indicator for mobile */}
                  {isMobile && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '12px',
                        padding: '8px',
                        color: '#87ceeb',
                        fontSize: '12px',
                        fontWeight: '500',
                        gap: '4px',
                      }}
                    >
                      {expandedCard === `why-${index}` ? 'Tap to collapse' : 'Tap to expand'}
                      <ExpandMore
                        sx={{
                          fontSize: 16,
                          transform:
                            expandedCard === `why-${index}` ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
