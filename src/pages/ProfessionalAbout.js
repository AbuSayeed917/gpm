import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  Public,
  Shield,
  Speed,
  Support,
  Phone,
  Email,
  ExpandMore,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';

const ProfessionalAbout = () => {
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

  const operationRegions = [
    'United Kingdom',
    'United States',
    'Germany',
    'France',
    'Spain',
    'Netherlands',
    'UAE',
    'Saudi Arabia',
    'Italy',
    'Belgium',
    'Switzerland',
    'Austria',
    'Sweden',
    'Qatar',
  ];

  const whyChooseUs = [
    {
      icon: <Shield />,
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption and SOC2 compliance protect your sensitive payroll data throughout migration.',
      features: [
        'End-to-end encryption',
        'SOC2 Type II certified',
        'GDPR compliant processes',
        'Multi-factor authentication',
      ],
    },
    {
      icon: <Speed />,
      title: 'Zero Downtime',
      description:
        'Seamless transitions with parallel processing ensure your payroll operations never stop.',
      features: [
        'Parallel system testing',
        '24/7 monitoring',
        'Instant rollback capability',
        'Real-time validation',
      ],
    },
    {
      icon: <Support />,
      title: 'Expert Support',
      description:
        'Dedicated migration specialists guide you through every step with round-the-clock assistance.',
      features: [
        'Dedicated project manager',
        '24/7 emergency support',
        'Multi-timezone coverage',
        'Executive escalation',
      ],
    },
    {
      icon: <Public />,
      title: 'Global Reach',
      description:
        'Supporting payroll migrations across 14 countries with local compliance expertise.',
      features: [
        'Multi-country expertise',
        'Local compliance knowledge',
        'Regional tax regulations',
        'Cross-border coordination',
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
          .cta-buttons {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: stretch !important;
          }
          .cta-button {
            width: 100% !important;
            text-align: center !important;
            padding: 16px 24px !important;
          }
          .feature-grid {
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
          .feature-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .regions-grid {
            gap: 12px !important;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .feature-grid {
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
      `}</style>

      <AppleBackground variant='primary'>
        {/* Mobile-Optimized Hero Section */}
        <section
          className='hero-section section-snap-item'
          style={{
            background: '#f0f9ff',
            padding: isMobile ? '60px 0 40px 0' : '80px 0 60px 0',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? '80vh' : 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Optimized background for mobile performance */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '100%' : '80%',
              height: isMobile ? '400px' : '600px',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <div
            className='container-mobile'
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
              width: '100%',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}
            >
              {/* Mobile-optimized eyebrow text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  fontSize: isMobile ? '15px' : '17px',
                  fontWeight: '600',
                  color: '#00bfff',
                  marginBottom: isMobile ? '12px' : '16px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.022em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                About GlobalPayrollMigration.com
              </motion.div>

              {/* Responsive hero title with better mobile sizing */}
              <motion.h1
                className='hero-title'
                style={{
                  fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(48px, 5vw, 64px)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: isMobile ? '16px' : '20px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.1',
                  letterSpacing: '-0.015em',
                  textAlign: 'center',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2 }}
              >
                Payroll migration.
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #00bfff 0%, #87ceeb 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  Remarkably simple.
                </span>
              </motion.h1>

              {/* Mobile-optimized subtitle */}
              <motion.p
                className='hero-subtitle'
                style={{
                  fontSize: isMobile ? '16px' : '18px',
                  color: '#000000',
                  marginBottom: isMobile ? '24px' : '32px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.5',
                  fontWeight: '400',
                  letterSpacing: '.011em',
                  maxWidth: '100%',
                  margin: isMobile ? '0 auto 24px auto' : '0 auto 32px auto',
                  textAlign: 'center',
                  padding: isMobile ? '0 10px' : '0',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4 }}
              >
                UK-based payroll migration specialists trusted by companies across the globe. We
                make complex transitions feel effortless.
              </motion.p>

              {/* Mobile-first CTA buttons */}
              <motion.div
                className='cta-buttons'
                style={{
                  display: 'flex',
                  gap: isMobile ? '12px' : '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.6 }}
              >
                {/* Primary CTA - Touch optimized */}
                <motion.div
                  whileHover={!isMobile ? { scale: 1.02, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className='touch-target'
                >
                  <Link
                    to='/quote'
                    className='cta-button touch-target'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: isMobile ? '16px 32px' : '14px 28px',
                      background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                      border: 'none',
                      borderRadius: '980px',
                      color: '#ccebff',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '-0.022em',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      userSelect: 'none',
                      boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)',
                      minHeight: '44px',
                      width: isMobile ? '100%' : 'auto',
                      maxWidth: isMobile ? '280px' : 'none',
                    }}
                  >
                    Get started
                    <ArrowForward sx={{ fontSize: 16 }} />
                  </Link>
                </motion.div>

                {/* Secondary CTA - Touch optimized */}
                <motion.div
                  whileHover={!isMobile ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className='touch-target'
                >
                  <Link
                    to='/quote'
                    className='cta-button touch-target'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: isMobile ? '16px 32px' : '14px 8px',
                      background: 'transparent',
                      border: isMobile ? '2px solid #00bfff' : 'none',
                      borderRadius: isMobile ? '980px' : '0',
                      color: '#00bfff',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '-0.022em',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      userSelect: 'none',
                      minHeight: '44px',
                      width: isMobile ? '100%' : 'auto',
                      maxWidth: isMobile ? '280px' : 'none',
                    }}
                  >
                    Learn more
                    <ArrowForward sx={{ fontSize: 16 }} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mobile-Optimized Story Section */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '80px 0 60px 0',
            background: '#e6f7ff',
            position: 'relative',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
              marginBottom: isMobile ? '30px' : '50px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ textAlign: 'center' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(40px, 5vw, 56px)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.0625',
                  letterSpacing: '-0.009em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Our story.
              </h2>
              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '18px' : '21px',
                  color: '#000000',
                  maxWidth: '100%',
                  margin: '0 auto',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  letterSpacing: '.011em',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                When your business outgrows outdated systems, migration becomes essential. But it
                doesn't have to be complex.
              </p>
            </motion.div>
          </div>

          {/* Mobile-optimized story card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
            }}
          >
            <motion.div
              whileHover={
                !isMobile
                  ? {
                      y: -8,
                      boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              style={{
                background: '#ccebff',
                borderRadius: isMobile ? '16px' : '22px',
                padding: isMobile ? '40px 24px' : '60px 50px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                backdropFilter: 'saturate(180%) blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p
                  style={{
                    fontSize: isMobile ? '16px' : '19px',
                    lineHeight: '1.6',
                    color: '#000000',
                    marginBottom: isMobile ? '20px' : '30px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                  }}
                >
                  Every payroll migration is a{' '}
                  <strong style={{ color: '#000000', fontWeight: '600' }}>high-stakes event</strong>{' '}
                  — and mistakes can cost you compliance penalties, employee trust, and sleepless
                  nights.
                </p>

                <p
                  style={{
                    fontSize: isMobile ? '16px' : '19px',
                    lineHeight: '1.6',
                    color: '#000000',
                    marginBottom: isMobile ? '20px' : '30px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                  }}
                >
                  At GlobalPayrollMigration.com, we{' '}
                  <strong style={{ color: '#00bfff', fontWeight: '600' }}>
                    remove that risk entirely
                  </strong>
                  . Our expert UK-based team takes full ownership of your migration, from cleansing
                  and validating your data to configuring statutory rules, running test cycles,
                  reconciling results, and guiding you through go-live.
                </p>

                <p
                  style={{
                    fontSize: isMobile ? '16px' : '19px',
                    lineHeight: '1.6',
                    color: '#000000',
                    marginBottom: isMobile ? '20px' : '30px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                  }}
                >
                  Whether you're moving to Dayforce, Workday, ADP, or another payroll platform, we
                  deliver an{' '}
                  <strong style={{ color: '#000000', fontWeight: '600' }}>
                    audit-ready, compliant, and disruption-free
                  </strong>{' '}
                  transition — so your people get paid{' '}
                  <strong style={{ color: '#000000', fontWeight: '600' }}>
                    right, on time, every time
                  </strong>
                  .
                </p>

                <p
                  style={{
                    fontSize: isMobile ? '16px' : '19px',
                    lineHeight: '1.6',
                    color: '#000000',
                    margin: '0',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                  }}
                >
                  We've successfully migrated payrolls for SMEs and multinationals across every
                  sector, tailoring our approach to your size, structure, and strategic goals. With
                  a proven track record of{' '}
                  <strong style={{ color: '#00bfff', fontWeight: '600' }}>
                    zero compliance failures
                  </strong>
                  , we make payroll migration not just stress-free — but a{' '}
                  <strong style={{ color: '#000000', fontWeight: '600' }}>
                    competitive advantage
                  </strong>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Mobile-Optimized Features Section with Touch Interactions */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '80px 0 60px 0',
            background: '#ccebff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px 30px 20px' : '0 22px 50px 22px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ textAlign: 'center' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(40px, 5vw, 56px)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.0625',
                  letterSpacing: '-0.009em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Why choose us.
              </h2>
              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '18px' : '21px',
                  color: '#000000',
                  maxWidth: '100%',
                  margin: '0 auto',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  letterSpacing: '.011em',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Four pillars of excellence that make migration effortless.
              </p>
            </motion.div>
          </div>

          <div
            className='feature-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '16px' : '20px',
              width: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0',
            }}
          >
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: '-50px' }}
                className={`touch-card ${expandedCard === index ? 'expanded-card' : ''}`}
                onTouchStart={(e) => handleTouchStart(e, index)}
                onTouchEnd={(e) => handleTouchEnd(e, index)}
                onClick={() => isMobile && setExpandedCard(expandedCard === index ? null : index)}
                style={{
                  background: '#ccebff',
                  borderRadius: isMobile ? '16px' : '22px',
                  padding: isMobile ? '24px 20px' : '32px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  backdropFilter: 'saturate(180%) blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: isMobile ? 'pointer' : 'default',
                  minHeight: isMobile ? 'auto' : '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                  <div
                    style={{
                      width: isMobile ? '60px' : '72px',
                      height: isMobile ? '60px' : '72px',
                      borderRadius: isMobile ? '16px' : '22px',
                      background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: isMobile ? '20px' : '24px',
                      boxShadow:
                        '0 8px 32px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {React.cloneElement(feature.icon, {
                      sx: {
                        fontSize: isMobile ? 24 : 32,
                        color: '#ccebff',
                        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                      },
                    })}
                  </div>

                  <h3
                    style={{
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: isMobile ? '12px' : '16px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.16667',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#000000',
                      marginBottom: isMobile ? '16px' : '24px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.47059',
                      letterSpacing: '-0.022em',
                      fontWeight: '400',
                      flex: 1,
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Mobile: Show features when expanded, Desktop: Show on hover via separate component */}
                  {isMobile && expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        marginTop: '16px',
                        padding: '16px',
                        background: 'rgba(0, 191, 255, 0.1)',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 191, 255, 0.2)',
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
                        {feature.features.map((detailFeature, fIndex) => (
                          <li
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              color: '#000000',
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
                                background: '#00bfff',
                                flexShrink: 0,
                              }}
                            />
                            {detailFeature}
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
                        color: '#00bfff',
                        fontSize: '12px',
                        fontWeight: '500',
                        gap: '4px',
                      }}
                    >
                      {expandedCard === index ? 'Tap to collapse' : 'Tap to expand'}
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
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                      <Link
                        to='/quote'
                        className='touch-target'
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          background: 'rgba(0, 191, 255, 0.1)',
                          border: '1px solid rgba(0, 191, 255, 0.2)',
                          borderRadius: '20px',
                          color: '#00bfff',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          userSelect: 'none',
                          minHeight: '44px',
                        }}
                      >
                        Learn More
                        <ArrowForward sx={{ fontSize: 14 }} />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mobile-Optimized Global Reach Section */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '80px 0 60px 0',
            background: '#ccebff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(40px, 5vw, 56px)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.0625',
                  letterSpacing: '-0.009em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Global reach.
              </h2>
              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '18px' : '21px',
                  color: '#000000',
                  maxWidth: '100%',
                  margin: '0 auto',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  letterSpacing: '.011em',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Supporting payroll transformations across 14 countries and counting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                background: 'linear-gradient(135deg, #fbfbfd 0%, #f5f5f7 100%)',
                borderRadius: isMobile ? '16px' : '22px',
                padding: isMobile ? '30px 20px' : '50px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div
                className='regions-grid'
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: isMobile ? '8px' : '16px',
                  justifyContent: 'center',
                }}
              >
                {operationRegions.map((country, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
                    whileTap={isMobile ? { scale: 0.95 } : {}}
                    style={{
                      background: '#ccebff',
                      color: '#000000',
                      padding: isMobile ? '8px 12px' : '12px 20px',
                      borderRadius: isMobile ? '16px' : '20px',
                      fontSize: isMobile ? '13px' : '15px',
                      fontWeight: '500',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                      cursor: 'default',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      userSelect: 'none',
                    }}
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile-Optimized Contact Section */}
        <section
          className='section-padding section-snap-item'
          style={{
            padding: isMobile ? '60px 0 40px 0' : '80px 0 60px 0',
            background: '#e6f7ff',
            position: 'relative',
          }}
        >
          <div
            className='container-mobile'
            style={{
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}
            >
              <h2
                className='mobile-h2'
                style={{
                  fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(40px, 5vw, 56px)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.0625',
                  letterSpacing: '-0.009em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Get in touch.
              </h2>
              <p
                className='mobile-p'
                style={{
                  fontSize: isMobile ? '18px' : '21px',
                  color: '#000000',
                  maxWidth: '100%',
                  margin: '0 auto',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  letterSpacing: '.011em',
                  fontWeight: '400',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Ready to discuss your payroll migration? We're here to help.
              </p>
            </motion.div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: isMobile ? '16px' : '24px',
                maxWidth: isMobile ? '100%' : '800px',
                margin: '0 auto',
              }}
            >
              {/* Phone Contact - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={
                  !isMobile
                    ? {
                        y: -8,
                        boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                      }
                    : {}
                }
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href='tel:+447432665514'
                  className='touch-target'
                  style={{
                    display: 'block',
                    background: '#ccebff',
                    borderRadius: isMobile ? '16px' : '22px',
                    padding: isMobile ? '32px 24px' : '40px 32px',
                    textDecoration: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '44px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? '60px' : '72px',
                        height: isMobile ? '60px' : '72px',
                        borderRadius: isMobile ? '16px' : '22px',
                        background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: isMobile ? '20px' : '24px',
                        boxShadow: '0 8px 32px rgba(0, 191, 255, 0.3)',
                      }}
                    >
                      <Phone
                        sx={{
                          fontSize: isMobile ? 24 : 32,
                          color: '#ccebff',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: isMobile ? '20px' : '24px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: isMobile ? '8px' : '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Call Us
                    </h3>

                    <p
                      style={{
                        fontSize: isMobile ? '18px' : '20px',
                        fontWeight: '500',
                        color: '#00bfff',
                        marginBottom: '8px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      +44 7432 665514
                    </p>

                    <p
                      className='mobile-small'
                      style={{
                        fontSize: isMobile ? '13px' : '15px',
                        color: '#666666',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Available Mon-Fri 9AM-6PM GMT
                    </p>
                  </div>
                </a>
              </motion.div>

              {/* Email Contact - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={
                  !isMobile
                    ? {
                        y: -8,
                        boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                      }
                    : {}
                }
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href='mailto:info@globalpayrollmigration.com'
                  className='touch-target'
                  style={{
                    display: 'block',
                    background: '#ccebff',
                    borderRadius: isMobile ? '16px' : '22px',
                    padding: isMobile ? '32px 24px' : '40px 32px',
                    textDecoration: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    minHeight: '44px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? '60px' : '72px',
                        height: isMobile ? '60px' : '72px',
                        borderRadius: isMobile ? '16px' : '22px',
                        background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: isMobile ? '20px' : '24px',
                        boxShadow: '0 8px 32px rgba(0, 191, 255, 0.3)',
                      }}
                    >
                      <Email
                        sx={{
                          fontSize: isMobile ? 24 : 32,
                          color: '#ccebff',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: isMobile ? '20px' : '24px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: isMobile ? '8px' : '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Email Us
                    </h3>

                    <p
                      style={{
                        fontSize: isMobile ? '16px' : '18px',
                        fontWeight: '500',
                        color: '#00bfff',
                        marginBottom: '8px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        wordBreak: 'break-word',
                      }}
                    >
                      info@globalpayrollmigration.com
                    </p>

                    <p
                      className='mobile-small'
                      style={{
                        fontSize: isMobile ? '13px' : '15px',
                        color: '#666666',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Response within 2 hours
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile-Optimized CTA Section */}
        <section
          className='section-snap-item'
          style={{
            background: '#000000',
            padding: isMobile ? '60px 0' : '100px 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className='container-mobile'
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: isMobile ? '100%' : '95%',
              margin: '0 auto',
              padding: isMobile ? '0 20px' : '0 22px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}
            >
              <h2
                style={{
                  fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(48px, 6vw, 72px)',
                  fontWeight: '600',
                  color: '#ccebff',
                  marginBottom: isMobile ? '20px' : '24px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.1',
                  letterSpacing: '-0.015em',
                }}
              >
                Ready to migrate?
              </h2>

              <p
                style={{
                  fontSize: isMobile ? '18px' : '21px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: isMobile ? '32px' : '48px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  padding: isMobile ? '0 10px' : '0',
                }}
              >
                Let's discuss how we can support your payroll transformation — whether you're just
                starting out or ready to move.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: isMobile ? '12px' : '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                }}
              >
                <motion.div
                  whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className='touch-target'
                >
                  <Link
                    to='/quote'
                    className='touch-target'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: isMobile ? '16px 32px' : '18px 36px',
                      background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                      border: 'none',
                      borderRadius: '980px',
                      color: '#ccebff',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '-0.022em',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      userSelect: 'none',
                      boxShadow: '0 8px 32px rgba(0, 122, 255, 0.4)',
                      minHeight: '44px',
                      width: isMobile ? '100%' : 'auto',
                      maxWidth: isMobile ? '300px' : 'none',
                    }}
                  >
                    Book a Free Discovery Call
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className='touch-target'
                >
                  <Link
                    to='/quote'
                    className='touch-target'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: isMobile ? '16px 32px' : '18px 36px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '980px',
                      color: '#ccebff',
                      textDecoration: 'none',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '-0.022em',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      userSelect: 'none',
                      minHeight: '44px',
                      width: isMobile ? '100%' : 'auto',
                      maxWidth: isMobile ? '300px' : 'none',
                    }}
                  >
                    Request a Custom Quote
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </AppleBackground>
    </>
  );
};

export default ProfessionalAbout;
