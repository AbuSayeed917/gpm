import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  CheckCircle,
  Speed,
  Group,
  Public,
  Send,
  CalendarMonth,
  BusinessCenter,
  Groups,
  Language,
  PersonPin,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Add responsive styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 1024px) {
        .contact-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 768px) {
        .contact-cards-grid {
          grid-template-columns: 1fr !important;
        }
        .hero-title { font-size: clamp(32px, 8vw, 42px) !important; }
        .hero-subtitle { font-size: 18px !important; }
        .section-title { font-size: clamp(28px, 6vw, 36px) !important; }
        .contact-form { padding: 32px 24px !important; }
      }
      @media (max-width: 480px) {
        .hero-buttons { flex-direction: column !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    service: '',
    timeline: '',
    currentSystem: '',
    targetSystem: '',
    countries: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactReasons = [
    {
      icon: <CheckCircle />,
      title: 'Free Consultation',
      description:
        'Get expert guidance on your payroll migration with no commitment required.',
      features: [
        'Detailed needs assessment',
        'Migration roadmap planning',
        'Risk identification',
        'Cost estimation guidance'
      ]
    },
    {
      icon: <Speed />,
      title: 'Quick Response',
      description:
        'We respond to all inquiries within 2 hours during business hours with personalized recommendations.',
      features: [
        '2-hour response guarantee',
        'Direct expert contact',
        'Personalized recommendations',
        'Same-day consultation booking'
      ]
    },
    {
      icon: <Group />,
      title: 'Expert Team',
      description: 'Speak directly with experienced payroll migration specialists, not salespeople.',
      features: [
        '500+ migrations completed',
        'UK-based specialists',
        'No sales pressure',
        'Technical expertise'
      ]
    },
    {
      icon: <Public />,
      title: 'Global Experience',
      description:
        'Deep knowledge of payroll systems across 14+ countries and regulatory frameworks.',
      features: [
        '14+ countries supported',
        'Multi-jurisdiction expertise',
        'Regulatory compliance',
        'Global payroll systems'
      ]
    },
  ];

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      primary: '+44 7432 665514',
      secondary: 'Available Mon-Fri 9AM-6PM GMT',
      description: 'Speak directly with a migration expert',
      href: 'tel:+447432665514',
    },
    {
      icon: <Email />,
      title: 'Email',
      primary: 'info@globalpayrollmigration.com',
      secondary: 'Response within 2 hours',
      description: 'Send us your requirements',
      href: 'mailto:info@globalpayrollmigration.com',
    },
    {
      icon: <CalendarMonth />,
      title: 'Book a Call',
      primary: 'Schedule Free Consultation',
      secondary: '30-minute discovery session',
      description: 'Choose a time that works for you',
      href: 'https://calendly.com/globalpayrollmigration',
    },
  ];

  const services = [
    'Legacy System Migration',
    'Cloud Platform Migration',
    'Multi-Country Consolidation',
    'System Implementation',
    'Payroll Health Check',
    'Strategic Consulting',
    'Other (please specify)',
  ];

  const urgency = [
    'Just exploring options',
    'Within next 6 months',
    'Within next 3 months',
    'Within next month',
    'Urgent - as soon as possible',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        employees: formData.employees,
        service: formData.service,
        timeline: formData.timeline,
        current_system: formData.currentSystem,
        target_system: formData.targetSystem,
        countries: formData.countries,
        message: formData.details,
        to_email: 'info@globalpayrollmigration.com',
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        employees: '',
        service: '',
        timeline: '',
        currentSystem: '',
        targetSystem: '',
        countries: '',
        details: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Our Experts
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
              Ready to{' '}
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
                Transform
              </span>{' '}
              Your Payroll?
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
              Get expert guidance from UK-based specialists. Free consultation, quick response, and zero sales pressure.
            </p>

            <div
              className='hero-buttons'
              style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}
            >
              <a
                href='tel:+447432665514'
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
                <Phone sx={{ fontSize: 18 }} />
                Call Now
              </a>

              <a
                href='mailto:info@globalpayrollmigration.com'
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
                <Email sx={{ fontSize: 18 }} />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us Section */}
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
              Why contact us?
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
              Four compelling reasons to start your payroll transformation journey with us.
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
          className='contact-cards-grid'
        >
          {contactReasons.map((reason, index) => (
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
                      {React.cloneElement(reason.icon, {
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
                      {reason.title}
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
                      {reason.description}
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
                          {reason.title}
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
                          {reason.features.map((feature, fIndex) => (
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
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href='#contact-form'
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
                        <Send sx={{ fontSize: 14 }} />
                      </a>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <section
        style={{
          padding: '40px 20px 60px 20px',
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
              }}
            >
              Get in touch.
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
              Choose your preferred way to connect with our payroll migration experts.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          {contactInfo.map((info, index) => (
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
              <motion.a
                href={info.href}
                target={info.href.includes('calendly') ? '_blank' : '_self'}
                rel={info.href.includes('calendly') ? 'noopener noreferrer' : ''}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  minHeight: '320px',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
                    }}
                  >
                    {React.cloneElement(info.icon, {
                      sx: {
                        fontSize: 36,
                        color: '#ccebff',
                        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                      },
                    })}
                  </div>

                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.16667',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {info.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      color: '#007aff',
                      marginBottom: '4px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.3',
                      textAlign: 'center',
                      wordBreak: 'break-word',
                    }}
                  >
                    {info.primary}
                  </div>

                  <div
                    style={{
                      fontSize: '14px',
                      color: '#1a237e',
                      marginBottom: '12px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      opacity: 0.8,
                      textAlign: 'center',
                    }}
                  >
                    {info.secondary}
                  </div>

                  <p
                    style={{
                      fontSize: '15px',
                      color: '#1a237e',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.4',
                      letterSpacing: '-0.022em',
                      fontWeight: '400',
                      margin: 0,
                      textAlign: 'center',
                    }}
                  >
                    {info.description}
                  </p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id='contact-form'
        style={{
          padding: '60px 20px 80px 20px',
          background: '#e3f2fd',
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
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 22px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
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
              Send us a message.
            </h2>

            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                lineHeight: '1.33',
                fontWeight: '400',
              }}
            >
              Tell us about your payroll migration needs and we'll get back to you within 2 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '24px',
              padding: '48px 40px',
              boxShadow: '0 20px 64px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              backdropFilter: 'blur(20px)',
            }}
            className='contact-form'
          >
            {submitStatus === 'success' && (
              <div
                style={{
                  background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                  color: 'white',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  marginBottom: '32px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                ✓ Thank you! We'll respond within 2 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                style={{
                  background: 'linear-gradient(135deg, #FF3B30 0%, #FF2D92 100%)',
                  color: 'white',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  marginBottom: '32px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                ✗ Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    First Name *
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Last Name *
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Company *
                  </label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: '#1a237e',
                      marginBottom: '8px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Service Needed *
                  </label>
                  <select
                    name='service'
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(0, 122, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#007aff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#1a237e',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  Timeline *
                </label>
                <select
                  name='timeline'
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid rgba(0, 122, 255, 0.2)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#007aff';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value=''>Select timeline</option>
                  {urgency.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#1a237e',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  Project Details
                </label>
                <textarea
                  name='details'
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder='Tell us about your current payroll system, challenges, and what you hope to achieve...'
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid rgba(0, 122, 255, 0.2)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#007aff';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 122, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type='submit'
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: isSubmitting 
                    ? 'rgba(0, 122, 255, 0.5)' 
                    : 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '17px',
                  fontWeight: '500',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: isSubmitting 
                    ? 'none' 
                    : '0 4px 16px rgba(0, 122, 255, 0.3)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send sx={{ fontSize: 18 }} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default Contact;