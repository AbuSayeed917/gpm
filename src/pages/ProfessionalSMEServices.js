import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MonetizationOn,
  Speed,
  Support,
  Security,
  CheckCircle,
  ArrowForward,
  Assessment,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ProfessionalSMEServices = () => {
  const features = [
    {
      icon: <MonetizationOn />,
      title: 'Cost-Effective Solutions',
      description:
        'Affordable migration packages designed for SME budgets without compromising on quality or security.',
      features: [
        'Transparent pricing structure',
        'No hidden fees or costs',
        'Flexible payment options',
        'ROI-focused solutions',
      ],
    },
    {
      icon: <Speed />,
      title: 'Quick Implementation',
      description:
        'Streamlined processes ensure minimal downtime and faster go-live timelines for your business operations.',
      features: [
        '4-8 week implementation',
        'Minimal business disruption',
        'Parallel system testing',
        'Go-live support included',
      ],
    },
    {
      icon: <Support />,
      title: 'Dedicated Support',
      description:
        'Personal migration specialist assigned to guide you through every step of the process.',
      features: [
        'Dedicated project manager',
        '24/7 emergency support',
        'Regular progress updates',
        'Post-migration assistance',
      ],
    },
    {
      icon: <Security />,
      title: 'Data Security',
      description:
        'Enterprise-grade security protocols to protect your sensitive payroll data throughout migration.',
      features: [
        'GDPR compliant processes',
        'Encrypted data transfer',
        'Audit trail logging',
        'Risk assessment included',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery Call',
      duration: '1 week',
      description: 'Understanding your current setup and requirements',
    },
    {
      step: 2,
      title: 'System Analysis',
      duration: '1-2 weeks',
      description: 'Detailed analysis of your existing payroll data and processes',
    },
    {
      step: 3,
      title: 'Migration Planning',
      duration: '1 week',
      description: 'Creating detailed migration plan and timeline',
    },
    {
      step: 4,
      title: 'Data Migration',
      duration: '2-4 weeks',
      description: 'Secure transfer and validation of your payroll data',
    },
    {
      step: 5,
      title: 'Testing & Go-Live',
      duration: '1 week',
      description: 'Comprehensive testing and smooth transition to new system',
    },
  ];

  return (
    <AppleBackground variant='primary'>
      {/* Hero Section - Homepage Style */}
      <section
        style={{
          padding: '50px 20px 40px 20px',
          textAlign: 'center',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating Background Elements - Homepage Style */}
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
            animation: 'float 10s ease-in-out infinite',
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
              SME Solutions
            </motion.div>

            <h1
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
              UK Based{' '}
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
                SME Solutions
              </span>{' '}
              Experts.
            </h1>

            <p
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
              Transform your business with zero-downtime migration. Enterprise-grade security meets
              SME simplicity.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
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
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: '0px 20px 40px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header - Centered */}
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
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
              Our Services.
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
              Seamless integrations between all major accounting and payroll systems.
            </p>
          </motion.div>
        </div>

        {/* Apple Product Grid - Responsive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {/* QuickBooks ↔ Xero */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AppleFlipCard
              frontContent={
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#000000',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {/* Apple Glass Morphism */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(135deg, rgba(0, 122, 255, 0.025) 0%, rgba(88, 86, 214, 0.025) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      borderRadius: '22px',
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {/* System Icons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        marginBottom: '40px',
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          position: 'relative',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          QB
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: '22px',
                          color: '#007aff',
                          fontWeight: '300',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        ↔
                      </div>

                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '22px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        X
                      </div>
                    </div>

                    {/* Typography */}
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.07143',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      QuickBooks ↔ Xero
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#283593',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.42105',
                        letterSpacing: '.012em',
                        fontWeight: '400',
                        margin: '0',
                        maxWidth: '280px',
                      }}
                    >
                      Complete accounting system migration with enterprise-grade security
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div
                  style={{
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 64px rgba(0, 122, 255, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Apple Ambient Lighting */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-20%',
                      left: '-20%',
                      width: '150px',
                      height: '150px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#ccebff',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '.009em',
                      }}
                    >
                      Migration Includes
                    </h4>

                    <div style={{ marginBottom: '0' }}>
                      {[
                        'Complete transaction history',
                        'Chart of accounts mapping',
                        'Customer & vendor data',
                        'Zero downtime migration',
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px',
                            marginBottom: '16px',
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: '1.47059',
                            letterSpacing: '-0.022em',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400',
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 20,
                              marginTop: '2px',
                              flexShrink: 0,
                              color: 'rgba(255, 255, 255, 0.9)',
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                            }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>

          {/* Iris ↔ QuickBooks */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AppleFlipCard
              frontContent={
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#000000',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                        'linear-gradient(135deg, rgba(48, 209, 88, 0.025) 0%, rgba(50, 215, 75, 0.025) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      borderRadius: '22px',
                    }}
                  />

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        marginBottom: '40px',
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(48, 209, 88, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        IRIS
                      </div>

                      <div
                        style={{
                          fontSize: '22px',
                          color: '#30d158',
                          fontWeight: '300',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        ↔
                      </div>

                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(48, 209, 88, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        QB
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.07143',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Iris ↔ QuickBooks
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#283593',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.42105',
                        letterSpacing: '.012em',
                        fontWeight: '400',
                        margin: '0',
                        maxWidth: '280px',
                      }}
                    >
                      UK payroll system migration with HMRC compliance
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div
                  style={{
                    background: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 64px rgba(48, 209, 88, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#ccebff',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '.009em',
                      }}
                    >
                      Migration Includes
                    </h4>

                    <div style={{ marginBottom: '0' }}>
                      {[
                        'Employee payroll records',
                        'HMRC RTI compliance',
                        'Pension scheme data',
                        'Historical P45/P60 data',
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px',
                            marginBottom: '16px',
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: '1.47059',
                            letterSpacing: '-0.022em',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400',
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 20,
                              marginTop: '2px',
                              flexShrink: 0,
                              color: 'rgba(255, 255, 255, 0.9)',
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                            }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>

          {/* ADP ↔ Any System */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AppleFlipCard
              frontContent={
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#000000',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                        'linear-gradient(135deg, rgba(255, 59, 48, 0.025) 0%, rgba(255, 149, 0, 0.025) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      borderRadius: '22px',
                    }}
                  />

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        marginBottom: '40px',
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(255, 59, 48, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        ADP
                      </div>

                      <div
                        style={{
                          fontSize: '22px',
                          color: '#ff3b30',
                          fontWeight: '300',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        ↔
                      </div>

                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(255, 59, 48, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        ANY
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.07143',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      ADP ↔ Any System
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#283593',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.42105',
                        letterSpacing: '.012em',
                        fontWeight: '400',
                        margin: '0',
                        maxWidth: '280px',
                      }}
                    >
                      Enterprise payroll migration with multi-country support
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div
                  style={{
                    background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 64px rgba(255, 59, 48, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#ccebff',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '.009em',
                      }}
                    >
                      Migration Includes
                    </h4>

                    <div style={{ marginBottom: '0' }}>
                      {[
                        'Enterprise payroll data',
                        'Benefits & compensation',
                        'Custom data mapping',
                        'Multi-country support',
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px',
                            marginBottom: '16px',
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: '1.47059',
                            letterSpacing: '-0.022em',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400',
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 20,
                              marginTop: '2px',
                              flexShrink: 0,
                              color: 'rgba(255, 255, 255, 0.9)',
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                            }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>

          {/* Any ↔ Any Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AppleFlipCard
              frontContent={
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#000000',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                        'linear-gradient(135deg, rgba(88, 86, 214, 0.025) 0%, rgba(175, 82, 222, 0.025) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      borderRadius: '22px',
                    }}
                  />

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        marginBottom: '40px',
                      }}
                    >
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #5856d6 0%, #af52de 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(88, 86, 214, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        ANY
                      </div>

                      <div
                        style={{
                          fontSize: '22px',
                          color: '#5856d6',
                          fontWeight: '300',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        ↔
                      </div>

                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          background: 'linear-gradient(135deg, #5856d6 0%, #af52de 100%)',
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow:
                            '0 8px 32px rgba(88, 86, 214, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        ANY
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.07143',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Any ↔ Any System
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#283593',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.42105',
                        letterSpacing: '.012em',
                        fontWeight: '400',
                        margin: '0',
                        maxWidth: '280px',
                      }}
                    >
                      Universal migration solution for all major payroll systems
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div
                  style={{
                    background: 'linear-gradient(135deg, #5856d6 0%, #af52de 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 64px rgba(88, 86, 214, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#ccebff',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '.009em',
                      }}
                    >
                      Popular Combinations
                    </h4>

                    <div style={{ marginBottom: '0' }}>
                      {[
                        'Paychex ↔ QuickBooks',
                        'Gusto ↔ Xero',
                        'BambooHR ↔ NetSuite',
                        'Workday ↔ Sage',
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '16px',
                            marginBottom: '16px',
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: '1.47059',
                            letterSpacing: '-0.022em',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400',
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 20,
                              marginTop: '2px',
                              flexShrink: 0,
                              color: 'rgba(255, 255, 255, 0.9)',
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                            }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </section>

      {/* Why SMEs Choose Us Section */}
      <section
        style={{
          padding: '80px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background gradient - Apple style */}
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

        {/* Header - Centered */}
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                background:
                  'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Why SMEs Choose Us
            </h2>
            <p
              style={{
                fontSize: '21px',
                color: '#000000',
                maxWidth: '650px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Four pillars of excellence that make the difference for growing businesses.
            </p>
          </motion.div>
        </div>

        {/* Apple Product Grid - Responsive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {features.map((feature, index) => (
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
                      background: 'rgba(255, 255, 255, 0.72)',
                      borderRadius: '22px',
                      padding: '32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {/* Apple-style Icon Container */}
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
                        fontSize: '22px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '16px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#1a237e',
                        marginBottom: '24px',
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
                          borderRadius: '20px',
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
                      padding: '32px',
                      color: '#ccebff',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 20px 64px rgba(0, 122, 255, 0.4)',
                    }}
                  >
                    {/* Apple Ambient Effects */}
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
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '22px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 24px',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
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
                          fontSize: '22px',
                          fontWeight: '700',
                          color: '#ccebff',
                          marginBottom: '20px',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        {feature.title}
                      </h3>

                      {/* Features List */}
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '0 0 24px 0',
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '12px',
                        }}
                      >
                        {feature.features.map((detailFeature, fIndex) => (
                          <li
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              fontSize: '15px',
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                            }}
                          >
                            <div
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.8)',
                                flexShrink: 0,
                              }}
                            />
                            {detailFeature}
                          </li>
                        ))}
                      </ul>

                      {/* Apple Button */}
                      <Link
                        to='/quote'
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '20px',
                          color: '#ccebff',
                          textDecoration: 'none',
                          fontSize: '15px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}
                      >
                        Get Started
                        <ArrowForward sx={{ fontSize: 16 }} />
                      </Link>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        style={{
          padding: '40px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className='container' style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2
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
              How it works.
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
              Five steps to transformation. Zero downtime. Maximum impact.
            </p>
          </motion.div>

          {/* Apple Timeline Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '95%',
              margin: '0 auto',
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: '20px',
                  },
                }}
                className={`migration-step-${index % 2 === 0 ? 'left' : 'right'}`}
              >
                {/* Step Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='migration-step-circle'
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#ccebff',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    {step.step}
                  </span>
                </motion.div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '40px',
                      top: '120px',
                      width: '2px',
                      height: '80px',
                      background: 'linear-gradient(to bottom, #007aff, rgba(0, 122, 255, 0.2))',
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Content Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.72)',
                    borderRadius: '18px',
                    padding: '32px 40px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background decoration */}
                  <div
                    style={{
                      position: 'absolute',
                      top: index % 2 === 0 ? '-30px' : 'auto',
                      bottom: index % 2 === 0 ? 'auto' : '-30px',
                      right: index % 2 === 0 ? '-30px' : 'auto',
                      left: index % 2 === 0 ? 'auto' : '-30px',
                      width: '100px',
                      height: '100px',
                      background:
                        'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '16px',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          background:
                            'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          margin: 0,
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        {step.title}
                      </h3>

                      <div
                        style={{
                          background: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
                          color: '#ccebff',
                          padding: '6px 16px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {step.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#1a237e',
                        margin: 0,
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div
                      style={{
                        marginTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: '4px',
                          background: 'rgba(0, 122, 255, 0.1)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${(step.step / processSteps.length) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          style={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                            borderRadius: '2px',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#1a237e',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        Step {step.step} of {processSteps.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section
        style={{
          padding: '80px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Testimonial Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 36px)',
                  fontWeight: '700',
                  color: '#000000',
                  marginBottom: '24px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.08349',
                  letterSpacing: '-0.003em',
                }}
              >
                UK Care Home Provider
              </h2>

              <blockquote
                style={{
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: '#000000',
                  marginBottom: '32px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.4705882353',
                  fontWeight: '400',
                  letterSpacing: '-0.008em',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    content: '""',
                    position: 'absolute',
                    left: '-24px',
                    top: '0',
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #007aff 0%, #5856d6 100%)',
                    borderRadius: '2px',
                  }}
                />
                "The migration was handled professionally and smoothly. We now have a modern payroll
                system that's much easier to use."
              </blockquote>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#ccebff',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  CM
                </motion.div>
                <div>
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#000000',
                      marginBottom: '4px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Care Home Manager
                  </h4>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#000000',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '400',
                    }}
                  >
                    Operations Manager
                  </p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/success-stories/sme'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 0px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '0px',
                    color: '#007aff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    lineHeight: '1.23536',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  Read Full Case Study
                  <ArrowForward sx={{ fontSize: 16, marginLeft: '4px' }} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Results Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, #87CEEB 0%, #87CEFA 50%, #ADD8E6 100%)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  color: '#1a237e',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 32px rgba(135, 206, 235, 0.4)',
                }}
              >
                {/* Background decoration */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Icon and Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '32px',
                    }}
                  >
                    <Assessment sx={{ fontSize: 40, color: '#1a237e', opacity: 0.9 }} />
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: '#1a237e',
                        margin: 0,
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Migration Results
                    </h3>
                  </div>

                  {/* Results List */}
                  <div style={{ flex: 1 }}>
                    {[
                      'Successful migration from Moneysoft to BrightPay',
                      'Maintained full payroll compliance during transition',
                      'Delivered modern, user-friendly payroll environment',
                      'Completed migration without any disruptions',
                      'Provided training and ongoing support',
                    ].map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '16px',
                          fontSize: '15px',
                          color: '#1a237e',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '400',
                        }}
                      >
                        <CheckCircle
                          sx={{
                            fontSize: 20,
                            marginTop: '2px',
                            flexShrink: 0,
                            color: '#30d158',
                          }}
                        />
                        <span>{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '80px 20px',
          background: '#e3f2fd',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Elements */}
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

        <div className='container' style={{ position: 'relative', zIndex: 1 }}>
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
                fontWeight: '600',
                color: '#1a237e',
                marginBottom: '20px',
                letterSpacing: '-0.025em',
                lineHeight: '1.05',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Ready to migrate your SME payroll?
            </h2>
            <p
              style={{
                fontSize: '24px',
                color: '#283593',
                lineHeight: '1.33',
                marginBottom: '64px',
                fontWeight: '400',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              Join hundreds of SMEs who've successfully migrated with zero downtime.
            </p>

            <div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/quote'
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
                  Get Free Consultation
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/quote'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: '#007AFF',
                    border: 'none',
                    borderRadius: '980px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '17px',
                    fontWeight: '400',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    userSelect: 'none',
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
                  Get Custom Quote
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default ProfessionalSMEServices;
