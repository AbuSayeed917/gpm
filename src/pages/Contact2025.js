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

const Contact2025 = () => {
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

  // State for card flips
  const [flippedCards, setFlippedCards] = React.useState({});

  // Refs to prevent rapid toggling
  const hoverTimeouts = React.useRef({});

  // Smooth hover handlers
  const handleCardHover = (index, isHovered) => {
    const key = `card-${index}`;
    if (hoverTimeouts.current[key]) {
      clearTimeout(hoverTimeouts.current[key]);
    }

    hoverTimeouts.current[key] = setTimeout(
      () => {
        setFlippedCards((prev) => ({ ...prev, [index]: isHovered }));
      },
      isHovered ? 20 : 100
    );
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    const timeoutsRef = hoverTimeouts.current;
    return () => {
      Object.values(timeoutsRef).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 28 }} />,
      title: 'Phone',
      primary: '+44 7432 665514',
      secondary: 'Available Mon-Fri 9AM-6PM GMT',
      description: 'Speak directly with a migration expert',
      action: 'Call Now',
    },
    {
      icon: <Email sx={{ fontSize: 28 }} />,
      title: 'Email',
      primary: 'info@globalpayrollmigration.com',
      secondary: 'Response within 2 hours',
      description: 'Send us your requirements',
      action: 'Send Email',
    },
    {
      icon: <Schedule sx={{ fontSize: 28 }} />,
      title: 'Book Discovery Call',
      primary: 'Free 30-minute consultation',
      secondary: 'No obligation, just insight',
      description: 'Schedule directly with an expert',
      action: 'Schedule Call',
    },
  ];

  const whyContact = [
    {
      icon: <CheckCircle sx={{ fontSize: 32 }} />,
      title: 'Free Consultation',
      description:
        'No-obligation discussion about your payroll migration needs with detailed project assessment',
      features: [
        'Detailed needs assessment',
        'Migration roadmap planning',
        'Risk identification',
        'Cost estimation guidance'
      ]
    },
    {
      icon: <Speed sx={{ fontSize: 32 }} />,
      title: 'Quick Response',
      description:
        'We respond to all inquiries within 2 hours during business hours with personalized recommendations',
      features: [
        '2-hour response guarantee',
        'Direct expert contact',
        'Personalized recommendations',
        'Same-day consultation booking'
      ]
    },
    {
      icon: <Group sx={{ fontSize: 32 }} />,
      title: 'Expert Team',
      description: 'Speak directly with experienced payroll migration specialists, not salespeople',
      features: [
        '500+ migrations completed',
        'UK-based specialists',
        'No sales pressure',
        'Technical expertise'
      ]
    },
    {
      icon: <Public sx={{ fontSize: 32 }} />,
      title: 'Global Experience',
      description:
        'Deep knowledge of payroll systems across 14+ countries and regulatory frameworks',
      features: [
        '14+ countries supported',
        'Multi-jurisdiction expertise',
        'Regulatory compliance',
        'Global payroll systems'
      ]
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

  const processSteps = [
    {
      number: '1',
      title: 'Initial Response',
      description: "We'll respond within 2 hours with next steps",
    },
    {
      number: '2',
      title: 'Discovery Call',
      description: '30-minute consultation to understand your needs',
    },
    {
      number: '3',
      title: 'Custom Proposal',
      description: 'Detailed proposal within 24 hours',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='min-h-screen surface'>
      {/* Hero Section */}
      <section className='py-20 lg:py-32 px-6'>
        <div className='container'>
          <div className='text-center max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full surface-container-low mb-8'>
                <Phone sx={{ fontSize: 16, color: 'var(--color-primary)' }} />
                <span className='label-large text-on-surface'>Free Consultation Available</span>
              </div>

              <h1 className='display-large mb-6'>
                Get Started with Your <span className='text-primary'>Payroll Migration</span>
              </h1>

              <p className='body-large text-on-surface-variant mb-8 max-w-3xl mx-auto'>
                Ready to migrate without the stress? Let's discuss how we can support your payroll
                migration — whether you're just starting out or ready to move forward immediately.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-16 px-6 surface-container-lowest'>
        <div className='container'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='headline-large mb-4'>
                How to <span className='text-primary'>Reach Us</span>
              </h2>
              <p className='body-large text-on-surface-variant max-w-2xl mx-auto'>
                Choose the method that works best for you
              </p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='card p-8 text-center hover:shadow-3 transition-all duration-300 group'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full surface-container-high mb-6 group-hover:scale-110 transition-transform duration-300'>
                  {React.cloneElement(method.icon, {
                    sx: { fontSize: 28, color: 'var(--color-primary)' },
                  })}
                </div>

                <h3 className='title-large mb-3'>{method.title}</h3>
                {method.title === 'Phone' ? (
                  <a
                    href={`tel:${method.primary}`}
                    className='title-medium text-primary mb-2 hover:underline'
                    style={{ display: 'block', textDecoration: 'none' }}
                  >
                    {method.primary}
                  </a>
                ) : method.title === 'Email' ? (
                  <a
                    href={`mailto:${method.primary}`}
                    className='title-medium text-primary mb-2 hover:underline'
                    style={{ display: 'block', textDecoration: 'none' }}
                  >
                    {method.primary}
                  </a>
                ) : (
                  <p className='title-medium text-primary mb-2'>{method.primary}</p>
                )}
                <p className='body-medium text-on-surface-variant mb-4'>{method.secondary}</p>
                <p className='body-small text-on-surface-variant mb-6'>{method.description}</p>

                {method.title === 'Phone' ? (
                  <a
                    href={`tel:${method.primary}`}
                    className='btn-outlined w-full inline-flex items-center justify-center'
                    style={{ textDecoration: 'none' }}
                  >
                    {method.action}
                  </a>
                ) : method.title === 'Email' ? (
                  <a
                    href={`mailto:${method.primary}`}
                    className='btn-outlined w-full inline-flex items-center justify-center'
                    style={{ textDecoration: 'none' }}
                  >
                    {method.action}
                  </a>
                ) : (
                  <button className='btn-outlined w-full'>{method.action}</button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className='py-20 px-6 surface-container'>
        <div className='container'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='headline-large mb-4'>
                Why <span className='text-primary'>Contact Us</span>?
              </h2>
            </motion.div>
          </div>

          <div 
            className='grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl mx-auto'
            style={{ minHeight: '380px' }}
          >
            {whyContact.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  perspective: '1000px',
                  height: '350px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                >
                  {/* Front of card */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '20px',
                      padding: '28px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    <div
                      style={{
                        marginBottom: '24px',
                        padding: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(240, 248, 255, 0.3) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {React.cloneElement(reason.icon, {
                        sx: { fontSize: 32, color: '#0d47a1' },
                      })}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '16px',
                        letterSpacing: '-0.01em',
                        textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      }}
                    >
                      {reason.title}
                    </h3>
                    <div
                      style={{
                        textAlign: 'center',
                        padding: '8px 16px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: 'white',
                        fontSize: '11px',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      Hover for details
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                      borderRadius: '20px',
                      padding: '28px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 48px rgba(26, 35, 126, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    {/* Enhanced Glass Effect */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 0,
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          marginBottom: '20px',
                          padding: '16px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'inline-block',
                        }}
                      >
                        {React.cloneElement(reason.icon, {
                          sx: { fontSize: 24, color: 'rgba(255,255,255,0.9)' },
                        })}
                      </div>

                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'rgba(255, 255, 255, 0.95)',
                          marginBottom: '16px',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        What's included:
                      </h3>

                      <div style={{ marginBottom: '0' }}>
                        {reason.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '8px',
                              fontSize: '12px',
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                            }}
                          >
                            <div
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#34C759',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <span
                                style={{
                                  color: 'white',
                                  fontSize: '8px',
                                  fontWeight: '600',
                                }}
                              >
                                ✓
                              </span>
                            </div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-20 px-6 surface'>
        <div className='container max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='card p-8 lg:p-12'>
              <div className='text-center mb-12'>
                <h2 className='headline-medium mb-4'>Request Your Custom Quote</h2>
                <p className='body-large text-on-surface-variant'>
                  Tell us your requirements and get a tailored proposal within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='input-field'>
                    <label htmlFor='firstName' className='label'>
                      First Name *
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='input'
                      required
                      aria-describedby='firstName-help'
                    />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='lastName' className='label'>
                      Last Name *
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='input'
                      required
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='input-field'>
                    <label htmlFor='email' className='label'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='input'
                      required
                    />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='phone' className='label'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='input'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='input-field'>
                    <label htmlFor='company' className='label'>
                      Company Name *
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='input'
                      required
                    />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='employees' className='label'>
                      Number of Employees
                    </label>
                    <input
                      type='text'
                      id='employees'
                      name='employees'
                      value={formData.employees}
                      onChange={handleInputChange}
                      className='input'
                      placeholder='e.g. 50, 500, 5000'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='input-field'>
                    <label htmlFor='service' className='label'>
                      Service Required
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleInputChange}
                      className='input'
                    >
                      <option value=''>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='input-field'>
                    <label htmlFor='timeline' className='label'>
                      Timeline
                    </label>
                    <select
                      id='timeline'
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className='input'
                    >
                      <option value=''>Select timeline</option>
                      {urgency.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='input-field'>
                  <label htmlFor='currentSystem' className='label'>
                    Current Payroll System
                  </label>
                  <input
                    type='text'
                    id='currentSystem'
                    name='currentSystem'
                    value={formData.currentSystem}
                    onChange={handleInputChange}
                    className='input'
                    placeholder='e.g. Sage, ADP, Excel spreadsheets, etc.'
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor='targetSystem' className='label'>
                    Target System (if known)
                  </label>
                  <input
                    type='text'
                    id='targetSystem'
                    name='targetSystem'
                    value={formData.targetSystem}
                    onChange={handleInputChange}
                    className='input'
                    placeholder='e.g. Dayforce, Workday, not sure yet'
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor='countries' className='label'>
                    Countries/Regions
                  </label>
                  <input
                    type='text'
                    id='countries'
                    name='countries'
                    value={formData.countries}
                    onChange={handleInputChange}
                    className='input'
                    placeholder='e.g. UK, Germany, France'
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor='details' className='label'>
                    Additional Details
                  </label>
                  <textarea
                    id='details'
                    name='details'
                    value={formData.details}
                    onChange={handleInputChange}
                    className='input min-h-32 resize-vertical'
                    placeholder='Tell us more about your requirements, challenges, or specific needs...'
                    rows='4'
                  />
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
                  <button
                    type='submit'
                    className='btn-primary flex items-center justify-center gap-3 px-8 py-4'
                  >
                    <Send sx={{ fontSize: 20 }} />
                    Send Request
                  </button>
                  <button
                    type='button'
                    className='btn-outlined flex items-center justify-center gap-3 px-8 py-4'
                  >
                    <CalendarMonth sx={{ fontSize: 20 }} />
                    Schedule Call Instead
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Information */}
      <section className='py-20 px-6 surface-container'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='headline-medium mb-8'>Or Contact Us Directly</h2>

              <div className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full surface-container-high flex items-center justify-center'>
                    <Phone sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className='title-medium mb-2'>Phone</h3>
                    <a
                      href='tel:+447432665514'
                      className='body-large text-primary mb-1 hover:underline'
                      style={{ display: 'block', textDecoration: 'none' }}
                    >
                      +44 7432 665514
                    </a>
                    <p className='body-medium text-on-surface-variant'>
                      Available Monday-Friday, 9AM-6PM GMT
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full surface-container-high flex items-center justify-center'>
                    <Email sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className='title-medium mb-2'>Email</h3>
                    <a
                      href='mailto:info@globalpayrollmigration.com'
                      className='body-large text-primary mb-1 hover:underline'
                      style={{ display: 'block', textDecoration: 'none' }}
                    >
                      info@globalpayrollmigration.com
                    </a>
                    <p className='body-medium text-on-surface-variant'>
                      Response within 2 hours during business hours
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full surface-container-high flex items-center justify-center'>
                    <LocationOn sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className='title-medium mb-2'>Location</h3>
                    <p className='body-large mb-1'>United Kingdom</p>
                    <p className='body-medium text-on-surface-variant'>
                      Serving clients across UK, Europe, Middle East, and beyond
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='card p-8'>
                <h3 className='headline-small mb-8 text-center'>What Happens Next?</h3>

                <div className='space-y-6'>
                  {processSteps.map((step, index) => (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center'>
                        <span className='label-medium font-medium'>{step.number}</span>
                      </div>
                      <div>
                        <h4 className='title-medium mb-1'>{step.title}</h4>
                        <p className='body-medium text-on-surface-variant'>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact2025;
