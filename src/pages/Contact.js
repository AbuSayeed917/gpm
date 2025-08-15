import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      primary: 'XXXX XXX XXXX',
      secondary: 'Available Mon-Fri 9AM-6PM GMT',
      description: 'Speak directly with a migration expert',
    },
    {
      icon: '✉️',
      title: 'Email',
      primary: 'info@globalpayrollmigration.com',
      secondary: 'Response within 2 hours',
      description: 'Send us your requirements',
    },
    {
      icon: '📅',
      title: 'Book Discovery Call',
      primary: 'Free 30-minute consultation',
      secondary: 'No obligation, just insight',
      description: 'Schedule directly with an expert',
    },
  ];

  const whyContact = [
    {
      icon: '✅',
      title: 'Free Consultation',
      description:
        'No-obligation discussion about your payroll migration needs with detailed project assessment',
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description:
        'We respond to all inquiries within 2 hours during business hours with personalized recommendations',
    },
    {
      icon: '🤝',
      title: 'Expert Team',
      description: 'Speak directly with experienced payroll migration specialists, not salespeople',
    },
    {
      icon: '🌍',
      title: 'Global Experience',
      description:
        'Deep knowledge of payroll systems across 14+ countries and regulatory frameworks',
    },
  ];

  return (
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
      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 0 6rem 0',
          background:
            'linear-gradient(135deg, rgba(135, 206, 235, 0.15) 0%, rgba(173, 216, 230, 0.1) 50%, rgba(240, 248, 255, 0.05) 100%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
                padding: '12px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(135, 206, 235, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(135, 206, 235, 0.2)',
                marginBottom: '2rem',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>📞</span>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1976d2',
                  letterSpacing: '0.025em',
                }}
              >
                Free Consultation Available
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                color: '#1a1a1a',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
              }}
            >
              Get Started with Your <span style={{ color: '#87ceeb' }}>Payroll Migration</span>
            </h1>

            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#4a4a4a',
                maxWidth: '48rem',
                margin: '0 auto',
                fontWeight: '400',
              }}
            >
              Ready to migrate without the stress? Let's discuss how we can support your payroll
              migration — whether you're just starting out or ready to move forward immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: 'rgba(135, 206, 235, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}
            >
              How to <span style={{ color: '#87ceeb' }}>Reach Us</span>
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#4a4a4a',
                fontWeight: '400',
              }}
            >
              Choose the method that works best for you
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(135, 206, 235, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(135, 206, 235, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(135, 206, 235, 0.15)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}
                  >
                    {method.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    color: '#1a1a1a',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {method.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#87ceeb',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                  }}
                >
                  {method.primary}
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '1rem',
                    fontWeight: '400',
                  }}
                >
                  {method.secondary}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#666',
                    marginBottom: '1.5rem',
                    fontWeight: '400',
                  }}
                >
                  {method.description}
                </p>

                <button
                  style={{
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
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us - Flip Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}
            >
              Why <span style={{ color: '#87ceeb' }}>Contact Us</span>?
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {whyContact.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                style={{
                  height: '300px',
                  perspective: '1000px',
                  cursor: 'pointer',
                }}
              >
                <motion.div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                  whileHover={{
                    rotateY: 180,
                  }}
                >
                  {/* Front of card */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(135, 206, 235, 0.3)',
                      borderRadius: '24px',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      boxShadow: '0 8px 32px rgba(135, 206, 235, 0.15)',
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'rgba(135, 206, 235, 0.2)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                        border: '2px solid rgba(135, 206, 235, 0.3)',
                      }}
                    >
                      {reason.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                      }}
                    >
                      {reason.title}
                    </h3>
                  </div>

                  {/* Back of card */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: 'rgba(135, 206, 235, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(93, 173, 226, 0.4)',
                      borderRadius: '24px',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      boxShadow: '0 12px 40px rgba(135, 206, 235, 0.3)',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {reason.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: '#ccebff',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.6',
                        fontWeight: '400',
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
