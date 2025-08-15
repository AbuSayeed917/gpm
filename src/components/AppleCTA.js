import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AppleCTA = () => {
  return (
    <section className="apple-cta">
      <div className="apple-cta-background">
        <div className="apple-cta-gradient"></div>
        <div className="apple-cta-pattern">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="apple-cta-dot" 
              style={{
                '--delay': `${Math.random() * 2}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="apple-container">
        <div className="apple-cta-content">
          <motion.div
            className="apple-cta-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="apple-cta-title">
              Ready to Start Your
              <span className="apple-cta-accent">Migration Journey?</span>
            </h2>
            
            <p className="apple-cta-subtitle">
              Join 500+ companies who have successfully migrated their payroll systems with zero downtime. 
              Get your free consultation today and discover how we can transform your payroll operations.
            </p>

            <div className="apple-cta-buttons">
              <Link to="/quote" className="apple-button apple-button-primary apple-button-xl">
                <span>Get Free Quote</span>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </Link>
              
              <Link to="/contact" className="apple-button apple-button-secondary apple-button-xl">
                <span>Schedule Consultation</span>
              </Link>
            </div>

            <div className="apple-cta-features">
              <div className="apple-cta-feature">
                <div className="apple-cta-feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <span>Zero Downtime Guaranteed</span>
              </div>
              
              <div className="apple-cta-feature">
                <div className="apple-cta-feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span>24/7 Expert Support</span>
              </div>
              
              <div className="apple-cta-feature">
                <div className="apple-cta-feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span>Bank-Level Security</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="apple-cta-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="apple-cta-contact-card">
              <h3>Speak to Our Experts</h3>
              <p>Get personalized advice for your specific migration needs</p>
              
              <div className="apple-cta-contact-methods">
                <div className="apple-cta-contact-method">
                  <div className="apple-cta-contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="apple-cta-contact-details">
                    <span className="apple-cta-contact-label">Phone</span>
                    <span className="apple-cta-contact-value">XXXX XXX XXXX</span>
                  </div>
                </div>
                
                <div className="apple-cta-contact-method">
                  <div className="apple-cta-contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="apple-cta-contact-details">
                    <span className="apple-cta-contact-label">Email</span>
                    <span className="apple-cta-contact-value">info@globalpayrollmigration.com</span>
                  </div>
                </div>
                
                <div className="apple-cta-contact-method">
                  <div className="apple-cta-contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="apple-cta-contact-details">
                    <span className="apple-cta-contact-label">Response Time</span>
                    <span className="apple-cta-contact-value">Within 2 hours</span>
                  </div>
                </div>
              </div>

              <div className="apple-cta-testimonial">
                <div className="apple-cta-testimonial-text">
                  "The consultation call was incredibly valuable. They understood our complex requirements immediately."
                </div>
                <div className="apple-cta-testimonial-author">
                  <span className="apple-cta-testimonial-name">Sarah M.</span>
                  <span className="apple-cta-testimonial-title">CFO, TechCorp</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="apple-cta-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="apple-cta-stats-grid">
            <div className="apple-cta-stat">
              <div className="apple-cta-stat-number">500+</div>
              <div className="apple-cta-stat-label">Successful Migrations</div>
            </div>
            <div className="apple-cta-stat">
              <div className="apple-cta-stat-number">99.9%</div>
              <div className="apple-cta-stat-label">Success Rate</div>
            </div>
            <div className="apple-cta-stat">
              <div className="apple-cta-stat-number">£2.5M</div>
              <div className="apple-cta-stat-label">Average Savings</div>
            </div>
            <div className="apple-cta-stat">
              <div className="apple-cta-stat-number">24/7</div>
              <div className="apple-cta-stat-label">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppleCTA;