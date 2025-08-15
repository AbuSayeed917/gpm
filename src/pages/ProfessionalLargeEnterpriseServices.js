import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  Public,
  Shield,
  Support,
  Speed,
  Analytics,
  Cloud,
  Business,
  AccountTree,
  Assessment,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ProfessionalLargeEnterpriseServices = () => {
  // Add responsive styles for the enterprise cards grid
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 1024px) {
        .enterprise-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 768px) {
        .enterprise-cards-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const migrationTypes = [
    {
      icon: <AccountTree />,
      title: 'System-to-System Migration',
      description:
        'Switch payroll platforms without losing accuracy or compliance. Seamlessly move from one payroll system to another (e.g., SAP → Dayforce, Workday → ADP).',
      platforms: 'Dayforce, ADP, Workday, SAP, CloudPay, Xero, BrightPay, Sage, Iris',
    },
    {
      icon: <Business />,
      title: 'In-House to Outsourced Migration',
      description:
        'Reduce overhead and improve efficiency. Transition from internal payroll team to managed service provider.',
      platforms: 'ADP, CloudPay, Dayforce, Workday, SAP',
    },
    {
      icon: <Shield />,
      title: 'Outsourced to In-House Migration',
      description:
        'Gain direct control over your payroll. Bring payroll operations back in-house with complete system setup and team training.',
      platforms: 'Dayforce, Xero, BrightPay, Sage, Workday, SAP',
    },
    {
      icon: <Public />,
      title: 'Multi-Country Consolidation',
      description:
        'One unified payroll view across the globe. Integrate multiple country payrolls into a single global platform.',
      platforms: 'ADP, CloudPay, Dayforce, Workday, SAP',
    },
    {
      icon: <Analytics />,
      title: 'Vendor-to-Vendor Migration',
      description:
        'Change payroll providers without downtime. Move between third-party vendors with clean data transfer.',
      platforms: 'ADP, CloudPay, Dayforce, Workday, SAP',
    },
    {
      icon: <Cloud />,
      title: 'Cloud Migration',
      description:
        'Modernise your payroll technology. Upgrade from legacy on-premise systems to secure, scalable cloud platforms.',
      platforms: 'Dayforce, ADP, Workday, SAP, CloudPay, Xero, BrightPay, Sage, Iris',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery Call',
      duration: '1 week',
      description:
        'Understanding your current enterprise setup and complex requirements across all jurisdictions',
    },
    {
      step: 2,
      title: 'System Analysis',
      duration: '2-3 weeks',
      description:
        'Detailed analysis of your existing multi-country payroll data and complex processes',
    },
    {
      step: 3,
      title: 'Migration Planning',
      duration: '2 weeks',
      description:
        'Creating detailed enterprise migration plan with parallel country deployment timeline',
    },
    {
      step: 4,
      title: 'Data Migration',
      duration: '4-8 weeks',
      description:
        'Secure transfer and validation of your global payroll data with compliance checks',
    },
    {
      step: 5,
      title: 'Testing & Go-Live',
      duration: '2-3 weeks',
      description: 'Comprehensive multi-country testing and coordinated transition to new systems',
    },
  ];

  return (
    <AppleBackground variant='primary'>
      {/* Apple Hero Section */}
      <section
        style={{
          background: '#e3f2fd',
          padding: '50px 20px 40px 20px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Apple-style ambient lighting */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 65%)',
            filter: 'blur(120px)',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(88, 86, 214, 0.06) 0%, transparent 65%)',
            filter: 'blur(100px)',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '95%',
            margin: '0 auto',
            padding: '0 22px',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: '17px',
                fontWeight: '600',
                color: '#007aff',
                marginBottom: '12px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Large Enterprise Solutions
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(38px, 4.5vw, 50px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.05',
                letterSpacing: '-0.015em',
                textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              Payroll migration.{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #007aff 0%, #5856d6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Enterprise scale.
              </span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '20px',
                color: '#283593',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.3',
                fontWeight: '400',
                maxWidth: '640px',
                margin: '0 auto 32px auto',
                textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              Complex, multi-system payroll migrations for large enterprises. Global compliance,
              zero downtime, and enterprise-grade security guaranteed.
            </motion.p>

            <motion.div
              style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to='/quote'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 32px',
                    background: '#007aff',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#283593',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
                  }}
                >
                  Get free quote
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to='/success-stories/large-enterprise'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '17px 8px',
                    background: 'transparent',
                    border: 'none',
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
                  View success stories
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple Services Section */}
      <section
        style={{ padding: '40px 20px 60px 20px', background: '#e3f2fd', position: 'relative' }}
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
              Enterprise payroll migrations across countries, platforms, and delivery models.
            </p>
          </motion.div>
        </div>

        {/* Apple Product Grid - Responsive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            maxWidth: '1200px',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {migrationTypes.map((type, index) => (
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
                      height: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      backdropFilter: 'saturate(180%) blur(20px)',
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
                        background: `linear-gradient(135deg, ${index % 4 === 0 ? 'rgba(0, 122, 255, 0.025)' : index % 4 === 1 ? 'rgba(48, 209, 88, 0.025)' : index % 4 === 2 ? 'rgba(255, 59, 48, 0.025)' : 'rgba(88, 86, 214, 0.025)'} 0%, ${index % 4 === 0 ? 'rgba(88, 86, 214, 0.025)' : index % 4 === 1 ? 'rgba(50, 215, 75, 0.025)' : index % 4 === 2 ? 'rgba(255, 149, 0, 0.025)' : 'rgba(175, 82, 222, 0.025)'} 100%)`,
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
                          width: '72px',
                          height: '72px',
                          background: `linear-gradient(135deg, ${index % 4 === 0 ? '#007aff' : index % 4 === 1 ? '#30d158' : index % 4 === 2 ? '#ff3b30' : '#5856d6'} 0%, ${index % 4 === 0 ? '#5856d6' : index % 4 === 1 ? '#32d74b' : index % 4 === 2 ? '#ff9500' : '#af52de'} 100%)`,
                          borderRadius: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 24px',
                          boxShadow: `0 8px 32px ${index % 4 === 0 ? 'rgba(0, 122, 255, 0.3)' : index % 4 === 1 ? 'rgba(48, 209, 88, 0.3)' : index % 4 === 2 ? 'rgba(255, 59, 48, 0.3)' : 'rgba(88, 86, 214, 0.3)'}, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                        }}
                      >
                        {React.cloneElement(type.icon, { sx: { fontSize: 32, color: '#ccebff' } })}
                      </div>

                      <h3
                        style={{
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#000000',
                          marginBottom: '0',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          lineHeight: '1.07143',
                          letterSpacing: '-0.005em',
                          textAlign: 'center',
                        }}
                      >
                        {type.title}
                      </h3>
                    </div>
                  </div>
                }
                backContent={
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${index % 3 === 0 ? '#007aff' : index % 3 === 1 ? '#30d158' : '#ff3b30'} 0%, ${index % 3 === 0 ? '#5856d6' : index % 3 === 1 ? '#32d74b' : '#ff9500'} 100%)`,
                      borderRadius: '22px',
                      padding: '48px 32px',
                      color: '#283593',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: `0 20px 64px ${index % 4 === 0 ? 'rgba(0, 122, 255, 0.4)' : index % 4 === 1 ? 'rgba(48, 209, 88, 0.4)' : index % 4 === 2 ? 'rgba(255, 59, 48, 0.4)' : 'rgba(88, 86, 214, 0.4)'}`,
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
                          marginBottom: '24px',
                          textAlign: 'center',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        {type.title}
                      </h4>

                      <p
                        style={{
                          fontSize: '17px',
                          color: 'rgba(255, 255, 255, 0.95)',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          lineHeight: '1.47059',
                          letterSpacing: '.011em',
                          fontWeight: '400',
                          margin: '0',
                          textAlign: 'center',
                        }}
                      >
                        {type.description}
                      </p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team Platforms Section */}
      <section
        style={{
          padding: '60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#1a237e',
                marginBottom: '24px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
              }}
            >
              Our Team Has Delivered Migrations On:
            </h2>

            <p
              style={{
                fontSize: '28px',
                background:
                  'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.3',
                fontWeight: '800',
                margin: '0',
                maxWidth: '900px',
                marginLeft: 'auto',
                marginRight: 'auto',
                letterSpacing: '-0.01em',
              }}
            >
              Dayforce, ADP, Workday, SAP, CloudPay, Xero, BrightPay, Sage, Iris
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apple "Why Large Enterprises Choose Us" Section */}
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
              Why large enterprises choose us.
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
          className='enterprise-cards-grid'
        >
          {[
            {
              icon: <Shield />,
              title: 'Enterprise Security',
              description:
                'SOC2, GDPR, and enterprise-grade security protocols for global compliance.',
              features: [
                'Multi-layered security architecture',
                'Global compliance frameworks',
                'Encrypted data transfer protocols',
                'Audit trail documentation',
              ],
            },
            {
              icon: <Analytics />,
              title: 'Advanced Analytics',
              description:
                'Real-time migration tracking and detailed reporting across all jurisdictions.',
              features: [
                'Live migration dashboards',
                'Cross-country reporting',
                'Risk assessment metrics',
                'Performance optimization',
              ],
            },
            {
              icon: <Support />,
              title: '24/7 Global Support',
              description:
                'Dedicated enterprise support team available around the clock worldwide.',
              features: [
                'Dedicated project managers',
                '24/7 emergency response',
                'Multi-timezone coverage',
                'Executive escalation path',
              ],
            },
            {
              icon: <Speed />,
              title: 'Rapid Deployment',
              description:
                'Streamlined processes for rapid enterprise deployment across multiple countries.',
              features: [
                'Parallel country deployments',
                'Accelerated testing cycles',
                'Automated validation tools',
                'Zero-downtime transitions',
              ],
            },
          ].map((feature, index) => (
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
                          color: '#283593',
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
                      color: '#283593',
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
                            color: '#283593',
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
                        to='/quote'
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
                          color: '#283593',
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

      {/* Apple Process Section */}
      <section
        style={{ padding: '40px 20px 60px 20px', background: '#e3f2fd', position: 'relative' }}
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
              Five steps to enterprise transformation. Zero downtime. Global impact.
            </p>
          </motion.div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '980px',
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
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: 'white',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                    }}
                  >
                    {step.step}
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    flex: 1,
                    background: '#e3f2fd',
                    borderRadius: '18px',
                    padding: '32px 40px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
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
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#000000',
                        margin: 0,
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      {step.title}
                    </h3>

                    <div
                      style={{
                        background: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
                        color: '#283593',
                        padding: '6px 16px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {step.duration}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#000000',
                      margin: 0,
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Success Story Section */}
      <section style={{ padding: '40px 20px 60px 20px', background: '#e3f2fd' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
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
                  color: '#1a237e',
                  marginBottom: '12px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.08349',
                  letterSpacing: '-0.003em',
                }}
              >
                Enterprise Success Stories
              </h2>

              <blockquote
                style={{
                  fontSize: '22px',
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
                "We've successfully migrated payroll operations across 15 countries with zero
                disruption. The team's expertise in handling complex compliance requirements was
                exceptional."
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
                    fontWeight: '600',
                    color: '#283593',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  S
                </motion.div>
                <div>
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '4px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Sarah Mitchell
                  </h4>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#000000',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '400',
                    }}
                  >
                    Global HR Director, TechGlobal Manufacturing
                  </p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/success-stories/large-enterprise'
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
                  View all success stories
                  <ArrowForward sx={{ fontSize: 16, marginLeft: '4px' }} />
                </Link>
              </motion.div>
            </motion.div>

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
                  borderRadius: '22px',
                  padding: '48px 32px',
                  color: '#1a237e',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 32px rgba(135, 206, 235, 0.3)',
                }}
              >
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
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#1a237e',
                        margin: 0,
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Enterprise Results
                    </h3>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '24px',
                      flex: 1,
                    }}
                  >
                    {[
                      { value: '15', label: 'Countries' },
                      { value: '2.5K', label: 'Employees' },
                      { value: '85%', label: 'Cost Reduction' },
                      { value: '12 weeks', label: 'Timeline' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          textAlign: 'center',
                          padding: '20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '40px',
                            fontWeight: '600',
                            background:
                              'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontFamily:
                              'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            marginBottom: '8px',
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                          }}
                        >
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple CTA Section */}
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
              Ready to transform?
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
              Join 500+ large enterprises that have successfully migrated with our proven
              methodology. Zero downtime, maximum results.
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

export default ProfessionalLargeEnterpriseServices;
