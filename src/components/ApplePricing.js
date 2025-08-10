import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ApplePricing = () => {
  const pricingPlans = [
    {
      id: 'sme',
      name: 'SME Starter',
      subtitle: 'Perfect for small & medium businesses',
      price: '2,500',
      period: 'per project',
      description: 'Complete payroll migration solution for growing businesses with up to 500 employees.',
      features: [
        'Xero Payroll Migration',
        'QuickBooks Integration',
        'Data Validation & Testing',
        'Basic Training (4 hours)',
        '30-day Post-migration Support',
        'Standard Security Protocols',
        'Email Support',
        'Migration Timeline: 2-4 weeks'
      ],
      ctaText: 'Start Migration',
      popular: false,
      guarantee: '30-day money-back guarantee',
      icon: '🏢'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Pro',
      subtitle: 'Advanced solution for large organizations',
      price: '25,000',
      period: 'per project',
      description: 'Comprehensive enterprise-grade migration with advanced compliance and multi-country support.',
      features: [
        'SAP & Workday Migration',
        'Oracle HCM Cloud Integration',
        'Multi-country Compliance',
        'Advanced Data Mapping',
        'Dedicated Project Manager',
        'Premium Training (40 hours)',
        '90-day Premium Support',
        'Bank-level Security',
        'Phone & Email Support',
        'Migration Timeline: 8-16 weeks'
      ],
      ctaText: 'Contact Sales',
      popular: true,
      guarantee: '100% satisfaction guarantee',
      icon: '🏛️'
    },
    {
      id: 'consultancy',
      name: 'Expert Consultancy',
      subtitle: 'Strategic guidance & planning',
      price: '150',
      period: 'per hour',
      description: 'Expert consultation for payroll strategy, compliance review, and migration planning.',
      features: [
        'Payroll Strategy Planning',
        'Risk Assessment & Mitigation',
        'Compliance Review',
        'Process Optimization',
        'Vendor Selection Guidance',
        'Change Management Support',
        'Custom Reporting Setup',
        'Ongoing Advisory Services'
      ],
      ctaText: 'Book Consultation',
      popular: false,
      guarantee: 'Pay only for results',
      icon: '👥'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="apple-pricing">
      <div className="apple-container">
        <motion.div 
          className="apple-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="apple-section-eyebrow">Transparent Pricing</div>
          <h2 className="apple-section-title">Simple, Transparent Pricing</h2>
          <p className="apple-section-subtitle">
            Choose the right migration solution for your business. All plans include our zero downtime guarantee 
            and dedicated expert support throughout the process.
          </p>
        </motion.div>

        <motion.div 
          className="apple-pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`apple-pricing-card ${plan.popular ? 'apple-pricing-featured' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <div className="apple-pricing-badge">Most Popular</div>
              )}
              
              <div className="apple-pricing-header">
                <div className="apple-pricing-icon">
                  <span>{plan.icon}</span>
                </div>
                <h3 className="apple-pricing-title">{plan.name}</h3>
                <p className="apple-pricing-subtitle">{plan.subtitle}</p>
              </div>

              <div className="apple-pricing-price">
                <span className="apple-pricing-currency">£</span>
                <span className="apple-pricing-amount">{plan.price}</span>
                <span className="apple-pricing-period">{plan.period}</span>
              </div>

              <div className="apple-pricing-description">
                {plan.description}
              </div>

              <ul className="apple-pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="apple-pricing-feature">
                    <svg className="apple-pricing-check" viewBox="0 0 20 20" width="16" height="16">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="apple-pricing-cta">
                <Link 
                  to={plan.id === 'consultancy' ? '/contact' : '/quote'} 
                  className={`apple-button apple-button-large ${plan.popular ? 'apple-button-primary' : 'apple-button-secondary'}`}
                >
                  {plan.ctaText}
                </Link>
              </div>

              {plan.guarantee && (
                <div className="apple-pricing-guarantee">
                  <svg viewBox="0 0 20 20" width="16" height="16">
                    <path d="M10 2L3 7v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-7-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <span>{plan.guarantee}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="apple-pricing-faq"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="apple-pricing-faq-title">Frequently Asked Questions</h3>
          
          <div className="apple-pricing-faq-grid">
            <div className="apple-pricing-faq-item">
              <h4>What's included in the price?</h4>
              <p>All our prices include complete migration, testing, validation, training, and post-migration support. No hidden fees.</p>
            </div>
            
            <div className="apple-pricing-faq-item">
              <h4>How do you guarantee zero downtime?</h4>
              <p>We use parallel migration techniques and comprehensive testing environments to ensure your payroll remains operational throughout the process.</p>
            </div>
            
            <div className="apple-pricing-faq-item">
              <h4>What if something goes wrong?</h4>
              <p>We maintain complete rollback capabilities and provide instant support. Our guarantee covers any issues that may arise during migration.</p>
            </div>
            
            <div className="apple-pricing-faq-item">
              <h4>Do you offer custom solutions?</h4>
              <p>Yes, we can create bespoke migration solutions for unique requirements. Contact us to discuss your specific needs.</p>
            </div>
          </div>

          <div className="apple-pricing-contact">
            <p>Need a custom quote or have questions?</p>
            <Link to="/contact" className="apple-button apple-button-tertiary">
              Contact Our Experts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplePricing;