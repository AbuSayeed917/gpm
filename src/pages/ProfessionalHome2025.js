import React from 'react';
import { Link } from 'react-router-dom';
import {
  Speed,
  Analytics,
  Business,
  People,
  Shield,
  Timeline
} from '@mui/icons-material';

const ProfessionalHome2025 = () => {
  const services = [
    {
      id: 'sme',
      title: 'SME Payroll Migration',
      description: 'Complete payroll system migration for small to medium businesses with minimal disruption.',
      icon: <Business sx={{ fontSize: 24, color: '#5DADE2' }} />,
      href: '/services/sme',
      features: [
        '4-8 week implementation',
        'Affordable migration packages',
        'Dedicated project manager',
        'Zero downtime guarantee'
      ],
      timeline: '4-8 weeks',
      subtitle: 'Cost-effective solutions for growing businesses'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Large-scale payroll migrations with complex integrations and multi-jurisdictional support.',
      icon: <People sx={{ fontSize: 24, color: '#5DADE2' }} />,
      href: '/services/large-enterprise',
      features: [
        'Multi-country deployments',
        'Enterprise-grade security',
        '24/7 global support',
        'Complex system integrations'
      ],
      timeline: '8-16 weeks',
      subtitle: 'Global payroll transformations at scale'
    },
    {
      id: 'consultancy',
      title: 'Payroll Consultancy',
      description: 'Expert advisory services for payroll optimization and compliance requirements.',
      icon: <Timeline sx={{ fontSize: 24, color: '#5DADE2' }} />,
      href: '/services/consultancy',
      features: [
        'Strategic payroll planning',
        'Compliance assessments',
        'System optimization',
        'Expert advisory services'
      ],
      timeline: '2-6 weeks',
      subtitle: 'Strategic guidance for payroll excellence'
    }
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 32 }} />,
      title: 'UK Compliance Experts',
      description: 'Deep expertise in UK payroll regulations, HMRC requirements, and auto-enrolment compliance.'
    },
    {
      icon: <Speed sx={{ fontSize: 32 }} />,
      title: 'Zero Downtime Migration',
      description: 'Seamless transitions with parallel running periods to ensure continuous payroll operations.'
    },
    {
      icon: <Analytics sx={{ fontSize: 32 }} />,
      title: '500+ Successful Migrations',
      description: 'Proven track record across all major payroll systems including ADP, Workday, SAP, and Sage.'
    }
  ];



  return (
    <div style={{ 
      backgroundColor: '#F0F8FF', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      color: '#1d1d1f'
    }}>
      {/* Hero Section - Apple Style */}
      <section style={{ 
        padding: '120px 20px', 
        textAlign: 'left',
        background: 'linear-gradient(180deg, #E6F3FF 0%, #F0F8FF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Glass Effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '95%',
          height: '800px',
          background: 'radial-gradient(circle, rgba(135, 206, 250, 0.15) 0%, rgba(173, 216, 230, 0.08) 50%, transparent 80%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
        
        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(32px, 5.5vw, 56px)',
            fontWeight: '800',
            lineHeight: '1.02',
            color: '#1d1d1f',
            marginBottom: '24px',
            letterSpacing: '-0.06em',
            textShadow: '0 2px 8px rgba(255, 255, 255, 0.4)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            UK based <span style={{ 
              background: 'linear-gradient(90deg, #87CEEB 0%, #5DADE2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              payroll migration experts
            </span>
          </h1>
          <p style={{ 
            fontSize: '19px',
            lineHeight: '1.35',
            color: '#424245',
            fontWeight: '500',
            marginBottom: '48px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
          }}>
            Seamlessly migrate your payroll system with zero downtime.<br />
            Expert team with proven track record.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Link 
              to="/quote" 
              style={{
                background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none',
                boxShadow: '0 4px 20px rgba(135, 206, 250, 0.4)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(135, 206, 250, 0.5)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(135, 206, 250, 0.4)';
              }}
            >
              Get Started
            </Link>
            <Link 
              to="/success-stories"
              style={{
                color: '#5DADE2',
                padding: '16px 32px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                border: '2px solid rgba(135, 206, 250, 0.4)',
                background: 'rgba(135, 206, 250, 0.08)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.borderColor = 'rgba(135, 206, 250, 0.7)';
                e.target.style.background = 'rgba(135, 206, 250, 0.15)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.borderColor = 'rgba(135, 206, 250, 0.4)';
                e.target.style.background = 'rgba(135, 206, 250, 0.08)';
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Apple Style */}
      <section style={{ 
        padding: '60px 20px 100px 20px', 
        backgroundColor: '#F0F8FF',
        borderTop: '1px solid rgba(173, 216, 230, 0.2)'
      }}>
        <div style={{ width: '95%', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '20px',
            letterSpacing: '-0.03em'
          }}>
            Our Services
          </h2>
          <p style={{ 
            fontSize: '15px',
            color: '#333333',
            marginBottom: '60px',
            lineHeight: '1.4'
          }}>
            Tailored solutions for your organization.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px'
          }}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                style={{
                  perspective: '1000px',
                  height: '480px'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  className={`flip-card-${index}`}
                  onMouseEnter={() => {
                    document.querySelector(`.flip-card-${index}`).style.transform = 'rotateY(180deg)';
                  }}
                  onMouseLeave={() => {
                    document.querySelector(`.flip-card-${index}`).style.transform = 'rotateY(0deg)';
                  }}
                >
                  {/* Front of card */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(173, 216, 230, 0.2)',
                    boxShadow: '0 12px 48px rgba(173, 216, 230, 0.15), 0 4px 20px rgba(135, 206, 250, 0.1)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <div>
                      <div style={{ 
                        marginBottom: '28px',
                        padding: '24px',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, rgba(173, 216, 230, 0.15) 0%, rgba(135, 206, 250, 0.1) 100%)`,
                        display: 'inline-block'
                      }}>
                        {React.cloneElement(service.icon, { 
                          sx: { fontSize: 36, color: '#5DADE2' } 
                        })}
                      </div>
                      <h3 style={{ 
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1d1d1f',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                      }}>
                        {service.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        color: '#87CEEB',
                        fontWeight: '600',
                        marginBottom: '16px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                      }}>
                        {service.subtitle}
                      </p>
                      <p style={{ 
                        fontSize: '16px',
                        color: '#424245',
                        lineHeight: '1.5',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                      }}>
                        {service.description}
                      </p>
                    </div>
                    <div style={{
                      textAlign: 'center',
                      padding: '12px 20px',
                      borderRadius: '16px',
                      background: 'rgba(173, 216, 230, 0.1)',
                      color: '#5DADE2',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                    }}>
                      Hover to see details
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, #87CEEB 0%, #5DADE2 100%)`,
                    borderRadius: '24px',
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    boxShadow: '0 20px 64px rgba(135, 206, 250, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {/* Background Glass Effect */}
                    <div style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                      zIndex: 0
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ 
                        marginBottom: '28px',
                        padding: '20px',
                        borderRadius: '18px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        display: 'inline-block'
                      }}>
                        {React.cloneElement(service.icon, { 
                          sx: { fontSize: 32, color: '#ffffff' } 
                        })}
                      </div>
                      
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '20px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                      }}>
                        What's included:
                      </h3>
                      
                      <div style={{ marginBottom: '0' }}>
                        {service.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              marginBottom: '12px',
                              fontSize: '15px',
                              color: 'rgba(255, 255, 255, 0.95)',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                            }}
                          >
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.9)',
                              flexShrink: 0
                            }} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to={service.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '16px 28px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '24px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        zIndex: 2
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Discovery Call Section - Apple Style */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#F0F8FF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Glass Effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0
        }} />
        
        <div style={{ 
          width: '95%', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.98)',
            borderRadius: '24px',
            padding: '60px 40px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
            backdropFilter: 'blur(20px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              color: '#1d1d1f',
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}>
              Book a free discovery call
            </h2>
            <p style={{ 
              fontSize: '17px',
              color: '#333333',
              lineHeight: '1.4',
              marginBottom: '40px',
              fontWeight: '400',
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}>
              Speak with our payroll migration experts. We'll assess your current system and provide a tailored migration roadmap at no cost.
            </p>
            <Link 
              to="/quote" 
              style={{
                background: 'linear-gradient(135deg, #87CEEB 0%, #5DADE2 100%)',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '28px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none',
                boxShadow: '0 6px 24px rgba(135, 206, 250, 0.4)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 36px rgba(135, 206, 250, 0.5)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 6px 24px rgba(135, 206, 250, 0.4)';
              }}
            >
              Book Call
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Apple Style */}
      <section style={{ 
        padding: '120px 20px', 
        backgroundColor: '#F0F8FF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ width: '95%', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '20px',
            letterSpacing: '-0.03em'
          }}>
            Why Choose Us
          </h2>
          <p style={{ 
            fontSize: '15px',
            color: '#86868b',
            marginBottom: '80px',
            lineHeight: '1.4'
          }}>
            Industry-leading expertise with proven results.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '64px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{ 
                textAlign: 'left',
                padding: '32px',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.98)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.background = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.background = '#FFFFFF';
              }}>
                <div style={{ 
                  marginBottom: '32px',
                  padding: '24px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(90, 200, 250, 0.1) 100%)',
                  display: 'inline-block'
                }}>
                  {React.cloneElement(feature.icon, { 
                    sx: { fontSize: 56, color: '#5DADE2' } 
                  })}
                </div>
                <h3 style={{ 
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1d1d1f',
                  marginBottom: '20px',
                  letterSpacing: '-0.02em'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: '15px',
                  color: '#86868b',
                  lineHeight: '1.5',
                  fontWeight: '400'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section - Apple Style */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#F0F8FF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ width: '95%', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '20px',
            letterSpacing: '-0.03em',
            textAlign: 'center'
          }}>
            Our Migration Process
          </h2>
          <p style={{ 
            fontSize: '15px',
            color: '#86868b',
            marginBottom: '60px',
            lineHeight: '1.4',
            textAlign: 'center'
          }}>
            Proven methodology ensuring seamless transitions.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px'
          }}>
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'Comprehensive audit of your current payroll system, data mapping, and migration timeline planning.'
              },
              {
                step: '02',
                title: 'Data Extraction & Cleansing',
                description: 'Secure extraction of payroll data with thorough validation and cleansing processes.'
              },
              {
                step: '03',
                title: 'System Configuration',
                description: 'New system setup with your specific payroll rules, reporting requirements, and integrations.'
              },
              {
                step: '04',
                title: 'Parallel Testing',
                description: 'Run both systems simultaneously to validate accuracy before full transition.'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  textAlign: 'left',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  fontSize: '48px',
                  fontWeight: '800',
                  color: 'rgba(173, 216, 230, 0.3)',
                  marginBottom: '16px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  {process.step}
                </div>
                <h3 style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em'
                }}>
                  {process.title}
                </h3>
                <p style={{ 
                  fontSize: '15px',
                  color: '#333333',
                  lineHeight: '1.5'
                }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories Section - Apple Style */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#F0F8FF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ width: '95%', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '60px',
            letterSpacing: '-0.03em'
          }}>
            Trusted by Leading Organizations
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px'
          }}>
            {[
              {
                company: 'Manufacturing SME (250+ employees)',
                quote: 'The migration from Sage to ADP was seamless. Zero payroll disruption and immediate compliance improvements.',
                industry: 'Manufacturing'
              },
              {
                company: 'Financial Services (1000+ employees)',
                quote: 'Complex multi-country payroll migration completed on time and under budget. Exceptional service.',
                industry: 'Financial Services'
              },
              {
                company: 'Healthcare Trust (500+ employees)',
                quote: 'GPM handled our NHS pension integration perfectly. Their UK compliance expertise is unmatched.',
                industry: 'Healthcare'
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  textAlign: 'left',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  fontSize: '24px',
                  color: '#5DADE2',
                  marginBottom: '20px'
                }}>
                  "
                </div>
                <p style={{ 
                  fontSize: '16px',
                  color: '#1d1d1f',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  {testimonial.quote}
                </p>
                <div>
                  <p style={{ 
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    marginBottom: '4px'
                  }}>
                    {testimonial.company}
                  </p>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#86868b'
                  }}>
                    {testimonial.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section style={{ 
        padding: '160px 20px', 
        backgroundColor: '#F0F8FF',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 30% 50%, rgba(173, 216, 230, 0.18) 0%, transparent 55%), radial-gradient(circle at 70% 30%, rgba(135, 206, 250, 0.12) 0%, transparent 55%), radial-gradient(circle at 50% 80%, rgba(176, 224, 230, 0.08) 0%, transparent 60%)',
          zIndex: 0
        }} />
        
        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '32px',
            letterSpacing: '-0.04em',
            lineHeight: '1.05'
          }}>
            Ready to migrate your payroll?
          </h2>
          <p style={{ 
            fontSize: '15px',
            color: '#333333',
            lineHeight: '1.3',
            marginBottom: '64px',
            fontWeight: '400'
          }}>
            Start with a free consultation. Our UK payroll migration experts will assess your current system and provide a detailed roadmap.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/quote" 
              style={{
                background: 'linear-gradient(135deg, #87CEEB 0%, #5DADE2 100%)',
                color: 'white',
                padding: '20px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(135, 206, 250, 0.4)',
                border: 'none',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 16px 48px rgba(135, 206, 250, 0.5)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(135, 206, 250, 0.4)';
              }}
            >
              Get Free Consultation
            </Link>
            <a 
              href="mailto:info@globalpayrollmigration.com"
              style={{
                color: '#87CEEB',
                padding: '20px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                border: '2px solid rgba(135, 206, 250, 0.4)',
                background: 'rgba(135, 206, 250, 0.08)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.borderColor = 'rgba(135, 206, 250, 0.7)';
                e.target.style.background = 'rgba(135, 206, 250, 0.15)';
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 16px 32px rgba(135, 206, 250, 0.3)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.borderColor = 'rgba(135, 206, 250, 0.4)';
                e.target.style.background = 'rgba(135, 206, 250, 0.08)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalHome2025;