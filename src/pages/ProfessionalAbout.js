import React from 'react';
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
  People,
  Assessment,
  TrendingUp,
  CheckCircle,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ProfessionalAbout = () => {
  // Add responsive styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 1024px) {
        .about-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 768px) {
        .about-cards-grid {
          grid-template-columns: 1fr !important;
        }
        .hero-title { font-size: clamp(32px, 8vw, 42px) !important; }
        .hero-subtitle { font-size: 18px !important; }
        .section-title { font-size: clamp(28px, 6vw, 36px) !important; }
      }
      @media (max-width: 480px) {
        .hero-buttons { flex-direction: column !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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

  const companyStats = [
    {
      icon: <People />,
      value: '500+',
      label: 'Successful Migrations',
      description: 'Completed across multiple industries',
    },
    {
      icon: <Public />,
      value: '14',
      label: 'Countries Served',
      description: 'Global reach with local expertise',
    },
    {
      icon: <Assessment />,
      value: '99.8%',
      label: 'Success Rate',
      description: 'Zero data loss guarantee',
    },
    {
      icon: <TrendingUp />,
      value: '8 Years',
      label: 'Industry Experience',
      description: 'Deep payroll migration expertise',
    },
  ];

  return (
    <AppleBackground variant='primary'>
      {/* Apple Hero Section */}
      <section
        style={{
          padding: '50px 20px 40px 20px',
          textAlign: 'center',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Apple-style floating background elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '15%',
            width: '300px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            {/* Apple-style eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: '17px',
                fontWeight: '700',
                color: '#007aff',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              About Global Payroll Migration
            </motion.div>

            <h1
              className='hero-title'
              style={{
                fontSize: 'clamp(38px, 4.5vw, 50px)',
                fontWeight: '700',
                lineHeight: '1.05',
                color: '#1a237e',
                marginBottom: '16px',
                letterSpacing: '-0.025em',
                textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Leading the{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  fontWeight: '700',
                  paddingBottom: '4px',
                  lineHeight: '1.2',
                }}
              >
                Future of Payroll
              </span>{' '}
              Migration
            </h1>

            <p
              className='hero-subtitle'
              style={{
                fontSize: '20px',
                lineHeight: '1.3',
                color: '#283593',
                fontWeight: '400',
                marginBottom: '32px',
                maxWidth: '640px',
                margin: '0 auto 32px auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              Trusted by organizations worldwide, we specialize in seamless payroll system migrations with zero data loss and complete compliance across all jurisdictions.
            </p>

            <div
              className='hero-buttons'
              style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}
            >
              <Link
                to='/contact'
                style={{
                  background: '#007AFF',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = '#0056CC';
                  e.target.style.boxShadow = '0 8px 24px rgba(0, 122, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = '#007AFF';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 122, 255, 0.3)';
                }}
              >
                Get Free Consultation
              </Link>

              <Link
                to='/quote'
                style={{
                  background: 'transparent',
                  color: '#007AFF',
                  padding: '14px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: '2px solid #007AFF',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#007AFF';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#007AFF';
                }}
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section
        style={{
          padding: '0px 20px 40px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
              className='section-title'
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.0625',
                letterSpacing: '-0.009em',
                textAlign: 'center',
              }}
            >
              Our Impact.
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Delivering exceptional results for organizations worldwide.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  borderRadius: '22px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow:
                      '0 8px 32px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {React.cloneElement(stat.icon, {
                    sx: {
                      fontSize: 32,
                      color: '#ccebff',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                    },
                  })}
                </div>

                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: '600',
                    background:
                      'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.0625',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {stat.value}
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.16667',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {stat.label}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: '#000000',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.47059',
                    letterSpacing: '-0.022em',
                    fontWeight: '400',
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: '40px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 122, 255, 0.03), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
              className='section-title'
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.0625',
                letterSpacing: '-0.009em',
              }}
            >
              Why organizations choose us.
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Four pillars of excellence that deliver results for global organizations.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxWidth: '1200px',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
          className='about-cards-grid'
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
            >
              <AppleFlipCard
                frontContent={
                  <div
                    style={{
                      background: '#e3f2fd',
                      borderRadius: '22px',
                      padding: '32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '22px',
                        background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                        boxShadow:
                          '0 8px 32px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        sx: {
                          fontSize: 32,
                          color: '#ccebff',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                        },
                      })}
                    </div>

                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '17px',
                        color: '#000000',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.47059',
                        letterSpacing: '-0.022em',
                        fontWeight: '400',
                        flex: 1,
                      }}
                    >
                      {feature.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 'auto',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '8px 16px',
                          borderRadius: '22px',
                          background: 'rgba(0, 122, 255, 0.1)',
                          color: '#007aff',
                          fontSize: '15px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        Hover to learn more
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                      borderRadius: '22px',
                      padding: '38px',
                      color: '#ccebff',
                      minHeight: '500px',
                      height: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 20px 64px rgba(0, 122, 255, 0.4)',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-30%',
                        right: '-20%',
                        width: '150px',
                        height: '150px',
                        background:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        pointerEvents: 'none',
                      }}
                    />

                    <div
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                      >
                        <h3
                          style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            color: '#ccebff',
                            marginBottom: '20px',
                            fontFamily:
                              'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          {feature.title}
                        </h3>

                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 20px 0',
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
                                gap: '10px',
                                fontSize: '15px',
                                color: 'rgba(255, 255, 255, 0.95)',
                                fontFamily:
                                  'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                                fontWeight: '400',
                                textAlign: 'left',
                              }}
                            >
                              <div
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                                  backdropFilter: 'blur(20px) saturate(200%)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  boxShadow:
                                    '0 2px 8px rgba(52, 199, 89, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                }}
                              >
                                <span
                                  style={{
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                                  }}
                                >
                                  ✓
                                </span>
                              </div>
                              {detailFeature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to='/contact'
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '18px',
                          color: '#ccebff',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          marginTop: 'auto',
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}
                      >
                        Get Started
                        <ArrowForward sx={{ fontSize: 14 }} />
                      </Link>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Operations Section */}
      <section
        style={{
          padding: '40px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2
              className='section-title'
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.0625',
                letterSpacing: '-0.009em',
              }}
            >
              Global Operations.
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Supporting payroll migrations across multiple countries with local compliance expertise.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {operationRegions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '16px',
                  padding: '16px 12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    boxShadow: '0 4px 16px rgba(0, 122, 255, 0.2)',
                  }}
                >
                  <Public sx={{ fontSize: 20, color: '#ccebff' }} />
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#000000',
                    margin: '0',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.3',
                  }}
                >
                  {region}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        style={{
          background: '#e3f2fd',
          padding: '40px 20px 60px 20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '95%',
            margin: '0 auto',
            padding: '0 22px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.1',
              }}
            >
              Ready to transform your payroll operations?
            </h2>

            <p
              style={{
                fontSize: '24px',
                color: '#283593',
                marginBottom: '64px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                lineHeight: '1.33',
                fontWeight: '400',
              }}
            >
              Join hundreds of organizations that have successfully migrated with our proven methodology. Zero downtime, maximum results.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/contact'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: '#007aff',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <Phone sx={{ fontSize: 18 }} />
                  Book Free Consultation
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/quote'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: 'transparent',
                    border: '2px solid #007aff',
                    borderRadius: '980px',
                    color: '#007aff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <Email sx={{ fontSize: 18 }} />
                  Get Custom Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default ProfessionalAbout;