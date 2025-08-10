import React from 'react';
import { motion } from 'framer-motion';

const AppleFeatures = () => {
  const features = [
    {
      icon: '🛡️',
      title: 'Zero Downtime Guarantee',
      description: 'Our proven migration methodology ensures your payroll system stays operational throughout the entire migration process.',
      benefits: ['24/7 monitoring', 'Real-time backups', 'Instant rollback capability'],
      color: '#34C759'
    },
    {
      icon: '🌍',
      title: 'Global Compliance',
      description: 'Stay compliant across all jurisdictions with our comprehensive understanding of international payroll regulations.',
      benefits: ['Multi-country support', 'Tax code updates', 'Regulatory compliance'],
      color: '#007AFF'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Migration',
      description: 'Advanced automation tools and optimized processes ensure the fastest possible migration times in the industry.',
      benefits: ['Automated data mapping', 'Parallel processing', 'Optimized workflows'],
      color: '#FF9500'
    },
    {
      icon: '🔐',
      title: 'Bank-Level Security',
      description: 'Your sensitive payroll data is protected with military-grade encryption and security protocols.',
      benefits: ['End-to-end encryption', 'SOC 2 compliance', 'Regular security audits'],
      color: '#FF3B30'
    },
    {
      icon: '👨‍💼',
      title: 'Expert Support Team',
      description: 'Dedicated migration specialists guide you through every step with personalized support and expertise.',
      benefits: ['Dedicated account manager', 'Expert consultation', 'Training included'],
      color: '#5856D6'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to track migration progress and validate data accuracy.',
      benefits: ['Real-time dashboards', 'Data validation reports', 'Migration analytics'],
      color: '#FF2D92'
    }
  ];

  return (
    <section className="apple-features">
      <div className="apple-container">
        <motion.div 
          className="apple-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="apple-section-eyebrow">Why Choose Us</div>
          <h2 className="apple-section-title">Unmatched Migration Excellence</h2>
          <p className="apple-section-subtitle">
            Our comprehensive approach ensures successful payroll migrations with zero business disruption. 
            Trusted by industry leaders worldwide.
          </p>
        </motion.div>

        <div className="apple-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="apple-feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="apple-feature-icon"
                style={{ '--feature-color': feature.color }}
              >
                <span>{feature.icon}</span>
                <div className="apple-feature-icon-bg"></div>
              </div>
              
              <div className="apple-feature-content">
                <h3 className="apple-feature-title">{feature.title}</h3>
                <p className="apple-feature-description">{feature.description}</p>
                
                <ul className="apple-feature-benefits">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="apple-feature-benefit">
                      <svg className="apple-feature-check" viewBox="0 0 20 20" width="16" height="16">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="apple-features-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="apple-stats-grid">
            <div className="apple-stat-item">
              <div className="apple-stat-number">500+</div>
              <div className="apple-stat-label">Successful Migrations</div>
            </div>
            <div className="apple-stat-item">
              <div className="apple-stat-number">99.9%</div>
              <div className="apple-stat-label">Uptime Guaranteed</div>
            </div>
            <div className="apple-stat-item">
              <div className="apple-stat-number">24/7</div>
              <div className="apple-stat-label">Expert Support</div>
            </div>
            <div className="apple-stat-item">
              <div className="apple-stat-number">0</div>
              <div className="apple-stat-label">Data Loss Incidents</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppleFeatures;