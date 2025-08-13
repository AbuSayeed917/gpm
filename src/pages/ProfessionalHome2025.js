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
      title: 'SME Solutions',
      description: 'Tailored migration solutions for small to medium enterprises.',
      icon: <Business sx={{ fontSize: 24, color: '#007AFF' }} />,
      href: '/services/sme'
    },
    {
      id: 'enterprise',
      title: 'Large Enterprise',
      description: 'Complex multi-system migrations for large organizations.',
      icon: <People sx={{ fontSize: 24, color: '#007AFF' }} />,
      href: '/services/large-enterprise'
    },
    {
      id: 'consultancy',
      title: 'Expert Consultancy',
      description: 'Strategic guidance and system optimization.',
      icon: <Timeline sx={{ fontSize: 24, color: '#007AFF' }} />,
      href: '/services/consultancy'
    }
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 32 }} />,
      title: 'Secure',
      description: 'Enterprise-grade security with zero downtime guarantee.'
    },
    {
      icon: <Speed sx={{ fontSize: 32 }} />,
      title: 'Fast',
      description: 'Streamlined implementation. Get up and running quickly.'
    },
    {
      icon: <Analytics sx={{ fontSize: 32 }} />,
      title: 'Proven',
      description: '500+ successful migrations. 99.9% success rate.'
    }
  ];



  return (
    <div style={{ 
      backgroundColor: '#F5F5F7', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      color: '#1d1d1f'
    }}>
      {/* Hero Section - Apple Style */}
      <section style={{ 
        padding: '80px 20px', 
        textAlign: 'left',
        backgroundColor: '#F5F5F7',
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
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
        
        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: '700',
            lineHeight: '1.05',
            color: '#1d1d1f',
            marginBottom: '20px',
            letterSpacing: '-0.04em',
            textShadow: '0 2px 4px rgba(255, 255, 255, 0.3)'
          }}>
            Professional Payroll <span style={{ 
              background: 'linear-gradient(90deg, #007AFF 0%, #5AC8FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Migration Services
            </span>
          </h1>
          <p style={{ 
            fontSize: '17px',
            lineHeight: '1.3',
            color: '#333333',
            fontWeight: '400',
            marginBottom: '40px'
          }}>
            Seamlessly migrate your payroll system with zero downtime.<br />
            Expert team with proven track record.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Link 
              to="/quote" 
              style={{
                background: 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)',
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
                boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(0, 122, 255, 0.4)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 122, 255, 0.3)';
              }}
            >
              Get Started
            </Link>
            <Link 
              to="/success-stories"
              style={{
                color: '#007AFF',
                padding: '16px 32px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                border: '2px solid rgba(0, 122, 255, 0.3)',
                background: 'rgba(0, 122, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.borderColor = 'rgba(0, 122, 255, 0.6)';
                e.target.style.background = 'rgba(0, 122, 255, 0.1)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.borderColor = 'rgba(0, 122, 255, 0.3)';
                e.target.style.background = 'rgba(0, 122, 255, 0.05)';
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Apple Style */}
      <section style={{ 
        padding: '40px 20px 80px 20px', 
        backgroundColor: '#F5F5F7',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '32px'
          }}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  textAlign: 'left',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  marginBottom: '24px',
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(0, 122, 255, 0.1)',
                  display: 'inline-block'
                }}>
                  {React.cloneElement(service.icon, { 
                    sx: { fontSize: 32, color: '#007AFF' } 
                  })}
                </div>
                <h3 style={{ 
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: '15px',
                  color: '#333333',
                  lineHeight: '1.5',
                  marginBottom: '32px'
                }}>
                  {service.description}
                </p>
                <Link 
                  to={service.href} 
                  style={{
                    color: '#5AC8FA',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { 
                    e.target.style.color = '#007AFF';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.color = '#5AC8FA';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  Learn more <span style={{ fontSize: '16px' }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Apple Style */}
      <section style={{ 
        padding: '120px 20px', 
        backgroundColor: '#F5F5F7',
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
                background: '#FFFFFF',
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
                    sx: { fontSize: 56, color: '#007AFF' } 
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

      {/* CTA Section - Apple Style */}
      <section style={{ 
        padding: '160px 20px', 
        backgroundColor: '#F5F5F7',
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
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 122, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(90, 200, 250, 0.1) 0%, transparent 50%)',
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
            Ready to get started?
          </h2>
          <p style={{ 
            fontSize: '15px',
            color: '#333333',
            lineHeight: '1.3',
            marginBottom: '64px',
            fontWeight: '400'
          }}>
            Get a free consultation. Our experts will assess your system and provide a detailed migration plan.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/quote" 
              style={{
                background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                color: 'white',
                padding: '20px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
                border: 'none',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 16px 48px rgba(0, 122, 255, 0.4)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 122, 255, 0.3)';
              }}
            >
              Get Free Consultation
            </Link>
            <a 
              href="mailto:info@globalpayrollmigration.com"
              style={{
                color: '#5AC8FA',
                padding: '20px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                border: '2px solid rgba(90, 200, 250, 0.3)',
                background: 'rgba(90, 200, 250, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => { 
                e.target.style.borderColor = 'rgba(90, 200, 250, 0.6)';
                e.target.style.background = 'rgba(90, 200, 250, 0.1)';
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 16px 32px rgba(90, 200, 250, 0.2)';
              }}
              onMouseLeave={(e) => { 
                e.target.style.borderColor = 'rgba(90, 200, 250, 0.3)';
                e.target.style.background = 'rgba(90, 200, 250, 0.05)';
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