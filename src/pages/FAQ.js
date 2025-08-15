import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpOutline,
  ExpandMore,
  Phone,
  Email,
  Security,
  Speed,
  Support,
  Analytics,
  Business,
  People,
  Timeline,
  ArrowForward,
  Search,
  Clear
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';


const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const faqSectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    if (value.trim() && faqSectionRef.current) {
      // Scroll to FAQ section when user starts typing
      setTimeout(() => {
        faqSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  const faqs = [
    {
      category: "General",
      question: "What is payroll migration, and when is it necessary?",
      answer: "Payroll migration is the process of transferring payroll data and processes from one system to another. It's typically required when moving from outdated software, consolidating systems after mergers or acquisitions, or transitioning to a cloud-based platform for better automation and compliance. Common triggers include system end-of-life, compliance requirements, business growth, or the need for enhanced functionality."
    },
    {
      category: "Process",
      question: "What is the difference between payroll migration and payroll implementation?",
      answer: "Payroll migration involves transferring data from one system to another, preserving historical information and existing processes. Payroll implementation, on the other hand, is the setup of a new payroll system from scratch — including configuration of pay components, statutory rules, reporting, and system integration. Migration focuses on data transfer, while implementation focuses on system setup and configuration."
    },
    {
      category: "Timeline",
      question: "How long does a typical migration project take?",
      answer: "Timeframes vary depending on your company size, number of countries, and complexity. A simple SME migration can take 4–6 weeks, while large multi-country enterprise projects may take 2–3 months or more. Factors affecting timeline include: data complexity, number of integrations, customization requirements, testing phases, and stakeholder availability."
    },
    {
      category: "Disruption",
      question: "Will payroll be disrupted during migration?",
      answer: "No. Our method includes data validation, parallel testing, and contingency planning to ensure smooth delivery with zero payroll interruption. We run parallel systems during testing phases, maintain backup processes, and schedule go-live activities outside of payroll cycles. We guarantee continuous payroll processing throughout the migration."
    },
    {
      category: "Coverage",
      question: "What countries do you support?",
      answer: "We support payroll migration, implementation, and consultancy across the UK, Germany, France, Spain, Netherlands, Italy, UAE, Saudi Arabia, Belgium, Switzerland, Austria, Sweden, Qatar, Ireland, Denmark, and other EMEA countries. Our team has deep expertise in local compliance requirements, statutory reporting, and regulatory frameworks for each supported region."
    },
    {
      category: "Platforms",
      question: "What systems can you migrate from or to?",
      answer: "We've migrated clients from Sage, ADP, Dayforce, Xero, BrightPay, Moneysoft, Workday, SAP, Ceridian, and custom/manual solutions. We can work with any modern or legacy platform, including bespoke systems, Excel-based solutions, and discontinued software. Our platform-agnostic approach means we can handle any migration scenario."
    },
    {
      category: "Scope",
      question: "Do you also handle HR system migrations?",
      answer: "Currently, we specialise in payroll system migrations and implementations. However, we can collaborate with your HRIS vendor or partner to ensure smooth data flow and integration between payroll and HR systems. We coordinate closely with HR system specialists to ensure seamless connectivity and data synchronization."
    },
    {
      category: "Data",
      question: "What if our data is messy or incomplete?",
      answer: "That's common — and something we're very comfortable handling. We perform full data cleansing, formatting, and validation as part of every migration project. Our process includes data profiling, quality assessment, cleansing procedures, validation rules, and comprehensive testing to ensure data integrity throughout the migration."
    },
    {
      category: "Compliance",
      question: "Can you help us stay compliant with local laws during migration?",
      answer: "Yes. We are well-versed in country-specific compliance across Europe and the Middle East — from RTI and NI in the UK to Lohnsteuer and Sozialversicherung in Germany. Our team stays current with regulatory changes, ensures statutory reporting continuity, and implements compliance controls in the new system from day one."
    },
    {
      category: "Business Size",
      question: "Do you work with SMEs as well as large enterprises?",
      answer: "Yes. Whether you're a small care provider or a global tech firm, we tailor our services to match your scale, complexity, and budget. We have specialized approaches for SMEs (streamlined processes, cost-effective solutions) and enterprises (complex integrations, multi-country support, extensive testing phases)."
    },
    {
      category: "Vendors",
      question: "Can you work directly with our software vendors or payroll providers?",
      answer: "Yes. We regularly collaborate with third-party vendors, including Dayforce, Sage, ADP, and local payroll providers to ensure smooth data handover, testing, and integration. We coordinate technical requirements, manage vendor communications, and ensure all parties are aligned throughout the migration process."
    },
    {
      category: "Security",
      question: "Do you sign NDAs or offer data protection agreements?",
      answer: "Absolutely. We follow GDPR and local data privacy laws strictly. NDAs, DPAs, and confidentiality agreements are standard in our onboarding process. We implement comprehensive security measures including encrypted data transfer, secure access controls, audit trails, and compliance with ISO 27001 standards."
    },
    {
      category: "Business Case",
      question: "Can you help build a business case for payroll system change?",
      answer: "Yes. We offer strategic payroll consultancy to help you assess ROI, identify current system gaps, and prepare cost/benefit documentation for internal approvals. This includes efficiency analysis, cost comparison, risk assessment, compliance evaluation, and projected benefits calculation."
    },
    {
      category: "Documentation",
      question: "What kind of documentation do we receive after go-live?",
      answer: "You'll receive SOPs (standard operating procedures), system configuration documents, user guides, troubleshooting manuals, and handover guides so your team can confidently manage post-migration payroll. All documentation is customized to your specific setup and includes step-by-step processes for common tasks."
    },
    {
      category: "Training",
      question: "Can you train our internal payroll or HR teams?",
      answer: "Yes. We offer tailored training and knowledge transfer sessions to ensure your in-house team is fully equipped to manage the new system independently. Training covers system navigation, daily operations, month-end procedures, reporting, troubleshooting, and administrative functions."
    },
    {
      category: "Support",
      question: "What if we need help after the project is completed?",
      answer: "We offer post-go-live support and optional ongoing consultancy. You can choose from hourly support, weekly check-ins, monthly maintenance, or project-based support models based on your needs. Support includes issue resolution, system optimization, regulatory updates, and enhancement guidance."
    },
    {
      category: "Pricing",
      question: "Do you offer fixed-price packages or flexible pricing?",
      answer: "We provide both. For many migrations, we offer fixed-scope pricing with clear deliverables and timelines. We also support flexible project-based or retainer models for more complex, evolving needs. Pricing depends on scope, complexity, timeline, and support requirements. We provide detailed quotes after initial assessment."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickStats = [
    { value: '4-16 Weeks', label: 'Typical Duration', description: 'From SME to enterprise projects' },
    { value: 'Zero', label: 'Downtime Guarantee', description: 'Uninterrupted payroll operations' },
    { value: '14+', label: 'Countries Supported', description: 'UK, Europe, Middle East coverage' },
    { value: '500+', label: 'Successful Migrations', description: 'Proven track record delivered' }
  ];

  const keyFeatures = [
    {
      type: 'speed',
      title: 'Fast Turnaround',
      description: 'Streamlined processes ensure quick implementation without quality compromise.'
    },
    {
      type: 'security', 
      title: 'Zero Disruption',
      description: 'Guaranteed continuity with parallel processing and comprehensive testing.'
    },
    {
      type: 'support',
      title: 'Expert Support',
      description: '24/7 assistance from UK-based payroll migration specialists.'
    },
    {
      type: 'analytics',
      title: 'Proven Results',
      description: '99.9% success rate with average savings of £2.5M per engagement.'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
    <AppleBackground variant="primary">
      {/* Apple Hero Section */}
      <section style={{ 
        background: '#f0f9ff',
        padding: '80px 0 60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Apple-style ambient lighting */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', maxWidth: '95%', margin: '0 auto' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                background: 'rgba(0, 122, 255, 0.1)',
                borderRadius: '20px',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 122, 255, 0.2)'
              }}
            >
              <HelpOutline sx={{ fontSize: 20, color: '#00bfff' }} />
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#00bfff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>Expert Answers</span>
            </motion.div>
            
            <motion.h1 
              style={{
                fontSize: 'clamp(48px, 5vw, 64px)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '24px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.1',
                letterSpacing: '-0.015em',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              Frequently Asked <span style={{ 
                background: 'linear-gradient(90deg, #00bfff 0%, #87ceeb 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Questions
              </span>
            </motion.h1>
            
            <motion.p 
              style={{
                fontSize: '18px',
                color: '#000000',
                marginBottom: '32px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.5',
                fontWeight: '400',
                letterSpacing: '.011em',
                maxWidth: '95%',
                margin: '0 auto 32px auto',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              Everything you need to know about our payroll migration services, process, and approach. 
              Get clear answers from our experts who have successfully completed 500+ migrations.
            </motion.p>

            {/* Hero Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ maxWidth: '600px', margin: '40px auto 0 auto' }}
            >
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Search sx={{ 
                  position: 'absolute', 
                  left: '20px', 
                  fontSize: 20, 
                  color: '#000000',
                  zIndex: 1
                }} />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '18px 50px 18px 50px',
                    borderRadius: '25px',
                    border: '2px solid rgba(0, 122, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: '#000000',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 122, 255, 0.15)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00bfff';
                    e.target.style.boxShadow = '0 8px 32px rgba(0, 191, 255, 0.25), 0 0 0 4px rgba(0, 191, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 122, 255, 0.3)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0, 122, 255, 0.15)';
                  }}
                />
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      transition: 'all 0.2s ease'
                    }}
                    whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Clear sx={{ fontSize: 20 }} />
                  </motion.button>
                )}
              </div>
              {searchTerm && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '12px',
                    fontSize: '14px',
                    color: '#000000',
                    textAlign: 'center',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found for "{searchTerm}"
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple Quick Stats */}
      <section style={{ padding: '80px 0 60px 0', background: '#ccebff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>Quick facts.</h2>
            <p style={{
              fontSize: '21px',
              color: '#000000',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Key information about our payroll migration services
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            width: '95%',
            margin: '0 auto'
          }}>
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#ccebff',
                    borderRadius: '22px',
                    padding: '40px 32px',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Background decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(0, 122, 255, 0.04) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: '700',
                      color: '#00bfff',
                      marginBottom: '16px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.1'
                    }}>{stat.value}</div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '12px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>{stat.label}</h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#000000',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.4',
                      fontWeight: '400'
                    }}>{stat.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Key Features */}
      <section style={{ padding: '80px 0 60px 0', background: '#f0f9ff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>Why choose us.</h2>
            <p style={{
              fontSize: '21px',
              color: '#000000',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Our expertise ensures successful payroll transformations
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            width: '95%',
            margin: '0 auto'
          }}>
            {keyFeatures.map((feature, index) => {
              const iconMap = {
                speed: <Speed sx={{ fontSize: 40, color: '#ccebff' }} />,
                security: <Security sx={{ fontSize: 40, color: '#ccebff' }} />,
                support: <Support sx={{ fontSize: 40, color: '#ccebff' }} />,
                analytics: <Analytics sx={{ fontSize: 40, color: '#ccebff' }} />
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: '#ccebff',
                      borderRadius: '22px',
                      padding: '32px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      backdropFilter: 'saturate(180%) blur(20px)',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-20%',
                      right: '-20%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(0, 122, 255, 0.04) 0%, transparent 70%)',
                      filter: 'blur(40px)'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                        <div style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '22px',
                          background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 8px 32px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }}>
                          {iconMap[feature.type]}
                        </div>
                        <div>
                          <h3 style={{
                            fontSize: '24px',
                            fontWeight: '600',
                            color: '#000000',
                            marginBottom: '12px',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            lineHeight: '1.16667',
                            letterSpacing: '-0.005em'
                          }}>{feature.title}</h3>
                          <p style={{
                            fontSize: '16px',
                            color: '#000000',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            lineHeight: '1.47059',
                            letterSpacing: '-0.022em',
                            fontWeight: '400'
                          }}>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apple FAQ Section */}
      <section ref={faqSectionRef} style={{ padding: '80px 0 60px 0', background: '#ccebff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>Detailed answers.</h2>
            <p style={{
              fontSize: '21px',
              color: '#000000',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Comprehensive responses to help you understand our process and approach
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}
          >
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search sx={{ 
                position: 'absolute', 
                left: '20px', 
                fontSize: 20, 
                color: '#000000',
                zIndex: 1
              }} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 50px 16px 50px',
                  borderRadius: '25px',
                  border: '2px solid rgba(0, 122, 255, 0.2)',
                  background: '#f0f9ff',
                  fontSize: '16px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: '#000000'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00bfff';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 191, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0, 122, 255, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {searchTerm && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                    transition: 'all 0.2s ease'
                  }}
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Clear sx={{ fontSize: 20 }} />
                </motion.button>
              )}
            </div>
            {searchTerm && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '12px',
                  fontSize: '14px',
                  color: '#000000',
                  textAlign: 'center',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found for "{searchTerm}"
              </motion.p>
            )}
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                style={{
                  background: '#ccebff',
                  borderRadius: '18px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <motion.button 
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '28px',
                    background: openFAQ === index ? '#f0f9ff' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: openFAQ === index ? '#f0f9ff' : 'rgba(0, 122, 255, 0.02)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        marginBottom: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        backgroundColor: 'rgba(0, 122, 255, 0.1)',
                        color: '#00bfff',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        {faq.category}
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#000000',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.3',
                        letterSpacing: '-0.022em',
                        margin: 0
                      }}>{faq.question}</h3>
                    </div>
                    <motion.div 
                      style={{ flexShrink: 0 }}
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ExpandMore sx={{ fontSize: 24, color: '#000000' }} />
                    </motion.div>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 28px 28px 28px' }}>
                        <p style={{
                          fontSize: '17px',
                          color: '#000000',
                          lineHeight: '1.6',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '400',
                          letterSpacing: '.011em',
                          margin: 0
                        }}>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Contact CTA */}
      <section style={{ padding: '100px 0', background: '#000000', position: 'relative', overflow: 'hidden' }}>
        {/* Apple-style subtle background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }} />
        
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '95%', margin: '0 auto' }}
          >
            <h2 style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '600',
              color: '#ccebff',
              marginBottom: '24px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.015em'
            }}>
              Still have questions?
            </h2>
            <p style={{
              fontSize: '21px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              maxWidth: '600px',
              margin: '0 auto 48px auto'
            }}>
              Our payroll migration experts are here to help. Get personalized answers to your specific situation and requirements.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 8px 32px rgba(0, 122, 255, 0.4)'
                  }}
                >
                  <Phone sx={{ fontSize: 18 }} />
                  Schedule Consultation
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <Email sx={{ fontSize: 18 }} />
                  Send Message
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple Related Resources */}
      <section style={{ padding: '80px 0 60px 0', background: '#f0f9ff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>Learn more.</h2>
            <p style={{
              fontSize: '21px',
              color: '#000000',
              maxWidth: '95%',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Explore additional resources to understand our services and approach
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            width: '95%',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <Timeline sx={{ fontSize: 48, color: '#00bfff' }} />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>Our Services</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#000000',
                  marginBottom: '32px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  Detailed overview of all our payroll migration and implementation services
                </p>
                <Link 
                  to="/services" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    border: '2px solid rgba(0, 122, 255, 0.3)',
                    borderRadius: '25px',
                    color: '#00bfff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    background: 'rgba(0, 122, 255, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%'
                  }}
                >
                  Learn More
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <People sx={{ fontSize: 48, color: '#00bfff' }} />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>Success Stories</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#000000',
                  marginBottom: '32px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  Real examples of successful migrations across various industries and regions
                </p>
                <Link 
                  to="/success-stories" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    border: '2px solid rgba(0, 122, 255, 0.3)',
                    borderRadius: '25px',
                    color: '#00bfff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    background: 'rgba(0, 122, 255, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%'
                  }}
                >
                  Learn More
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 64px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <Business sx={{ fontSize: 48, color: '#00bfff' }} />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>Our Process</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#000000',
                  marginBottom: '32px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  Learn about our proven methodology and approach to payroll migrations
                </p>
                <Link 
                  to="/about" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    border: '2px solid rgba(0, 122, 255, 0.3)',
                    borderRadius: '25px',
                    color: '#00bfff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    background: 'rgba(0, 122, 255, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%'
                  }}
                >
                  Learn More
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </AppleBackground>
    </>
  );
};

export default FAQ;