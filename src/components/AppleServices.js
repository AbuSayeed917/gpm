import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AppleServices = () => {
  const services = [
    {
      id: 'sme',
      icon: '🏢',
      title: 'SME Solutions',
      subtitle: 'Perfect for growing businesses',
      description:
        'Comprehensive payroll migration services tailored for small and medium enterprises with seamless integration capabilities.',
      features: [
        'Xero Payroll Migration',
        'QuickBooks to Xero Transfer',
        'Any-to-Any Migration',
        'BrightPay & IRIS Integration',
        'Sage Payroll Migration',
        'Custom API Integrations',
      ],
      gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
      price: 'From £2,500',
      timeline: '2-4 weeks',
      path: '/services/sme',
    },
    {
      id: 'enterprise',
      icon: '🏛️',
      title: 'Large Enterprise',
      subtitle: 'Global scale solutions',
      description:
        'Enterprise-grade payroll migration for large organizations with complex multi-country requirements and advanced compliance needs.',
      features: [
        'SAP Payroll Migration',
        'Workday Integration',
        'Oracle HCM Cloud',
        'Global Consolidation',
        'Multi-Currency Support',
        'Advanced Compliance',
      ],
      gradient: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)',
      price: 'From £25,000',
      timeline: '8-16 weeks',
      path: '/services/large-enterprise',
    },
    {
      id: 'consultancy',
      icon: '👥',
      title: 'Expert Consultancy',
      subtitle: 'Strategic guidance & planning',
      description:
        'Strategic payroll consultancy services including process optimization, compliance review, and migration planning expertise.',
      features: [
        'Strategy & Planning',
        'Risk Assessment',
        'Compliance Review',
        'Process Optimization',
        'Change Management',
        'Training & Support',
      ],
      gradient: 'linear-gradient(135deg, #34C759 0%, #007AFF 100%)',
      price: 'From £150/hour',
      timeline: '1-12 weeks',
      path: '/services/consultancy',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='apple-services'>
      <div className='apple-container'>
        <motion.div
          className='apple-section-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='apple-section-eyebrow'>Our Services</div>
          <h2 className='apple-section-title'>Choose Your Migration Path</h2>
          <p className='apple-section-subtitle'>
            Tailored payroll migration solutions for every business size and complexity. Zero
            downtime guaranteed with our proven methodologies.
          </p>
        </motion.div>

        <motion.div
          className='apple-services-grid'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`apple-service-card ${index === 1 ? 'apple-service-featured' : ''}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {index === 1 && <div className='apple-service-badge'>Most Popular</div>}

              <div className='apple-service-header'>
                <div className='apple-service-icon' style={{ background: service.gradient }}>
                  <span>{service.icon}</span>
                </div>
                <div className='apple-service-title-group'>
                  <h3 className='apple-service-title'>{service.title}</h3>
                  <p className='apple-service-subtitle'>{service.subtitle}</p>
                </div>
              </div>

              <p className='apple-service-description'>{service.description}</p>

              <div className='apple-service-features'>
                <h4 className='apple-service-features-title'>What's Included:</h4>
                <ul className='apple-service-features-list'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='apple-service-feature'>
                      <svg
                        className='apple-service-check'
                        viewBox='0 0 20 20'
                        width='20'
                        height='20'
                      >
                        <path
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          fill='currentColor'
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='apple-service-meta'>
                <div className='apple-service-meta-item'>
                  <span className='apple-service-meta-label'>Starting Price</span>
                  <span className='apple-service-meta-value'>{service.price}</span>
                </div>
                <div className='apple-service-meta-item'>
                  <span className='apple-service-meta-label'>Timeline</span>
                  <span className='apple-service-meta-value'>{service.timeline}</span>
                </div>
              </div>

              <div className='apple-service-actions'>
                <Link
                  to={service.path}
                  className='apple-button apple-button-primary apple-button-large'
                >
                  Learn More
                </Link>
                <Link
                  to='/quote'
                  className='apple-button apple-button-secondary apple-button-large'
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='apple-services-cta'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='apple-services-cta-content'>
            <h3>Not sure which service is right for you?</h3>
            <p>Get a free consultation with our payroll migration experts</p>
            <Link to='/contact' className='apple-button apple-button-primary apple-button-xl'>
              Schedule Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppleServices;
