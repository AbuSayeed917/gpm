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
    },
    {
      icon: <Speed sx={{ fontSize: 32 }} />,
      title: 'Quick Response',
      description:
        'We respond to all inquiries within 2 hours during business hours with personalized recommendations',
    },
    {
      icon: <Group sx={{ fontSize: 32 }} />,
      title: 'Expert Team',
      description: 'Speak directly with experienced payroll migration specialists, not salespeople',
    },
    {
      icon: <Public sx={{ fontSize: 32 }} />,
      title: 'Global Experience',
      description:
        'Deep knowledge of payroll systems across 14+ countries and regulatory frameworks',
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {whyContact.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='card p-6 text-center hover:shadow-3 transition-all duration-300'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full surface-container-high text-primary mb-6'>
                  {reason.icon}
                </div>
                <h3 className='title-medium mb-3'>{reason.title}</h3>
                <p className='body-medium text-on-surface-variant leading-relaxed'>
                  {reason.description}
                </p>
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
