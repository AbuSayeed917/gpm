import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  Public,
  Shield,
  Speed,
  Support
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ProfessionalAbout = () => {
  const teamMembers = [
    {
      name: "Azizul Karim",
      role: "Operations Director & Payroll Migration Consultant",
      experience: "10+ years",
      description: "Aziz brings over a decade of hands-on international payroll experience across multiple platforms and regions.",
      specialties: ["Multi-country implementations", "System architecture", "Project management"]
    },
    {
      name: "Misbahul Karim",
      role: "Chartered Accountant (FCCA), Senior Migration Advisor",
      experience: "19+ years",
      description: "Misbahul holds the FCCA qualification and brings extensive experience in payroll compliance and financial systems.",
      specialties: ["Compliance frameworks", "Financial reconciliation", "Risk management"]
    }
  ];

  const operationRegions = [
    "United Kingdom", "United States", "Germany", "France", "Spain", "Netherlands", 
    "UAE", "Saudi Arabia", "Italy", "Belgium", "Switzerland", "Austria", 
    "Sweden", "Qatar"
  ];

  const whyChooseUs = [
    {
      icon: <Shield />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC2 compliance protect your sensitive payroll data throughout migration.",
      features: [
        "End-to-end encryption",
        "SOC2 Type II certified",
        "GDPR compliant processes",
        "Multi-factor authentication"
      ]
    },
    {
      icon: <Speed />,
      title: "Zero Downtime",
      description: "Seamless transitions with parallel processing ensure your payroll operations never stop.",
      features: [
        "Parallel system testing",
        "24/7 monitoring",
        "Instant rollback capability",
        "Real-time validation"
      ]
    },
    {
      icon: <Support />,
      title: "Expert Support",
      description: "Dedicated migration specialists guide you through every step with round-the-clock assistance.",
      features: [
        "Dedicated project manager",
        "24/7 emergency support",
        "Multi-timezone coverage",
        "Executive escalation"
      ]
    },
    {
      icon: <Public />,
      title: "Global Reach",
      description: "Supporting payroll migrations across 14 countries with local compliance expertise.",
      features: [
        "Multi-country expertise",
        "Local compliance knowledge",
        "Regional tax regulations",
        "Cross-border coordination"
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
      
    <AppleBackground variant="primary">
      {/* Apple Hero Section - 100% Authentic */}
      <section style={{ 
        background: '#F5F5F7',
        padding: '80px 0 60px 0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Apple-style ambient lighting */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        
        {/* Content Container - Apple's signature max-width */}
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '95%', 
          margin: '0 auto', 
          padding: '0 22px',
          width: '100%'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', maxWidth: '95%', margin: '0 auto' }}
          >
            {/* Apple-style eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: '17px',
                fontWeight: '600',
                color: '#007AFF',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
            >
              About GlobalPayrollMigration.com
            </motion.div>

            {/* Apple-style hero title */}
            <motion.h1 
              style={{
                fontSize: 'clamp(48px, 5vw, 64px)',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '20px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.1',
                letterSpacing: '-0.015em',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              Payroll migration.
              <br />
              <span style={{ 
                background: 'linear-gradient(90deg, #007AFF 0%, #5AC8FA 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Remarkably simple.
              </span>
            </motion.h1>
            
            {/* Apple-style subtitle */}
            <motion.p 
              style={{
                fontSize: '18px',
                color: '#6b7280',
                marginBottom: '32px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.5',
                fontWeight: '400',
                letterSpacing: '.011em',
                maxWidth: '95%',
                margin: '0 auto 32px auto',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              UK-based payroll migration specialists trusted by companies across the globe. 
              We make complex transitions feel effortless.
            </motion.p>
            
            {/* Apple-style CTA buttons */}
            <motion.div 
              style={{ 
                display: 'flex', 
                gap: '16px', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              {/* Primary CTA - Apple Blue */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)'
                  }}
                >
                  Get started
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
              
              {/* Secondary CTA - Apple Link Style */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '14px 8px',
                    background: 'transparent',
                    border: 'none',
                    color: '#007AFF',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  Learn more
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Apple-style scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(to bottom, transparent, #a1a1a6, transparent)',
                opacity: 0.6
              }} />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#007AFF',
                  opacity: 0.6
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple About Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#FFFFFF', position: 'relative' }}>
        {/* Apple-style subtle background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.02) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Our story.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#86868b',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              When your business outgrows outdated systems, migration becomes essential. 
              But it doesn't have to be complex.
            </p>
          </motion.div>
        </div>

        {/* Apple Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            maxWidth: '95%',
            margin: '0 auto',
            padding: '0 22px'
          }}
        >
          <motion.div
            whileHover={{
              y: -8,
              boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)'
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              padding: '60px 50px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              backdropFilter: 'saturate(180%) blur(20px)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.6',
                color: '#1d1d1f',
                marginBottom: '30px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '400'
              }}>
                Every payroll migration is a{' '}
                <strong style={{ 
                  color: '#1d1d1f',
                  fontWeight: '600'
                }}>
                  high-stakes event
                </strong>
                {' '}— and mistakes can cost you compliance penalties, employee trust, and sleepless nights.
              </p>
              
              <p style={{
                fontSize: '19px',
                lineHeight: '1.6',
                color: '#1d1d1f',
                marginBottom: '30px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '400'
              }}>
                At GlobalPayrollMigration.com, we{' '}
                <strong style={{ 
                  color: '#007AFF',
                  fontWeight: '600'
                }}>
                  remove that risk entirely
                </strong>
                . Our expert UK-based team takes full ownership of your migration, from cleansing and validating your data to configuring statutory rules, running test cycles, reconciling results, and guiding you through go-live.
              </p>
              
              <p style={{
                fontSize: '19px',
                lineHeight: '1.6',
                color: '#1d1d1f',
                marginBottom: '30px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '400'
              }}>
                Whether you're moving to Dayforce, Workday, ADP, or another payroll platform, we deliver an{' '}
                <strong style={{ 
                  color: '#1d1d1f',
                  fontWeight: '600'
                }}>
                  audit-ready, compliant, and disruption-free
                </strong>
                {' '}transition — so your people get paid{' '}
                <strong style={{
                  color: '#1d1d1f',
                  fontWeight: '600'
                }}>
                  right, on time, every time
                </strong>
                .
              </p>
              
              <p style={{
                fontSize: '19px',
                lineHeight: '1.6',
                color: '#1d1d1f',
                margin: '0',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '400'
              }}>
                We've successfully migrated payrolls for SMEs and multinationals across every sector, tailoring our approach to your size, structure, and strategic goals. With a proven track record of{' '}
                <strong style={{ 
                  color: '#007AFF',
                  fontWeight: '600'
                }}>
                  zero compliance failures
                </strong>
                , we make payroll migration not just stress-free — but a{' '}
                <strong style={{ 
                  color: '#1d1d1f',
                  fontWeight: '600'
                }}>
                  competitive advantage
                </strong>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Apple "Why Choose Us" Section */}
      <section style={{ 
        padding: '80px 0 60px 0', 
        background: '#ffffff', 
        position: 'relative',
        overflow: 'hidden'
      }}>

        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Why choose us.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#86868b',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Four pillars of excellence that make migration effortless.
            </p>
          </motion.div>
        </div>
          
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px',
          width: '95%',
          margin: '0 auto'
        }}>
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <AppleFlipCard
                frontContent={
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: '#ffffff',
                      borderRadius: '22px',
                      padding: '32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      backdropFilter: 'saturate(180%) blur(20px)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-20%',
                      right: '-20%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)',
                      filter: 'blur(40px)'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '22px',
                      background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}>
                      {React.cloneElement(feature.icon, { 
                        sx: { 
                          fontSize: 32, 
                          color: '#ffffff',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                        } 
                      })}
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '16px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.16667',
                      letterSpacing: '-0.005em'
                    }}>
                      {feature.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '16px',
                      color: '#86868b',
                      marginBottom: '24px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.47059',
                      letterSpacing: '-0.022em',
                      fontWeight: '400',
                      flex: 1
                    }}>
                      {feature.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 'auto'
                    }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        color: '#007AFF',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        Hover to learn more
                      </div>
                    </div>
                    </div>
                  </motion.div>
                }
                
                backContent={
                  <div style={{
                    background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                    borderRadius: '22px',
                    padding: '32px',
                    color: '#ffffff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 64px rgba(168, 85, 247, 0.4)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-20%',
                      width: '150px',
                      height: '150px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{
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
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                      }}>
                        {React.cloneElement(feature.icon, { 
                          sx: { 
                            fontSize: 32, 
                            color: '#ffffff',
                            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                          } 
                        })}
                      </div>
                      
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '20px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}>
                        {feature.title}
                      </h3>
                      
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 24px 0',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '12px'
                      }}>
                        {feature.features.map((detailFeature, fIndex) => (
                          <li key={fIndex} style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400'
                          }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.8)',
                              flexShrink: 0
                            }} />
                            {detailFeature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to="/quote"
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
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          userSelect: 'none'
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

      {/* Apple Team Section */}
      <section style={{ 
        padding: '80px 0 60px 0', 
        background: '#F5F5F7', 
        position: 'relative' 
      }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Meet our team.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#86868b',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Expert migration specialists with decades of combined experience.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px',
            maxWidth: '95%',
            margin: '0 auto'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 64px rgba(0, 0, 0, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '22px',
                    padding: '40px 32px',
                    color: '#1d1d1f',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(0, 122, 255, 0.02)' : 'rgba(48, 209, 88, 0.02)'} 0%, ${index % 2 === 0 ? 'rgba(88, 86, 214, 0.02)' : 'rgba(50, 215, 75, 0.02)'} 100%)`,
                    borderRadius: '22px'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {member.name}
                    </h3>
                    
                    <p style={{
                      fontSize: '16px',
                      color: '#007AFF',
                      fontWeight: '500',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {member.role}
                    </p>
                    
                    <p style={{
                      fontSize: '15px',
                      color: '#86868b',
                      marginBottom: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {member.experience} experience
                    </p>
                    
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#1d1d1f',
                      marginBottom: '20px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {member.description}
                    </p>
                    
                    <div>
                      <p style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#1d1d1f',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        Specialties:
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {member.specialties.map((specialty, sIndex) => (
                          <span
                            key={sIndex}
                            style={{
                              background: '#007AFF',
                              color: '#ffffff',
                              padding: '6px 12px',
                              borderRadius: '12px',
                              fontSize: '13px',
                              fontWeight: '500',
                              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                            }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Global Reach Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Global reach.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#86868b',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Supporting payroll transformations across 14 countries and counting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              background: 'linear-gradient(135deg, #fbfbfd 0%, #f5f5f7 100%)',
              borderRadius: '22px',
              padding: '50px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center'
            }}>
              {operationRegions.map((country, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    background: '#ffffff',
                    color: '#1d1d1f',
                    padding: '12px 20px',
                    borderRadius: '20px',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    cursor: 'default',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {country}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple CTA Section */}
      <section style={{ 
        background: '#1d1d1f', 
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Apple-style subtle background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '95%', margin: '0 auto' }}
          >
            <h2 style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '24px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.015em'
            }}>
              Ready to migrate?
            </h2>
            
            <p style={{
              fontSize: '21px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381'
            }}>
              Let's discuss how we can support your payroll transformation — 
              whether you're just starting out or ready to move.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 36px',
                    background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 8px 32px rgba(0, 122, 255, 0.4)'
                  }}
                >
                  Book a Free Discovery Call
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '18px 36px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '980px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none'
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