import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Assessment,
  Psychology,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Analytics,
  Lightbulb,
  Support
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ProfessionalConsultancyServices = () => {
  const features = [
    {
      icon: <Assessment />,
      title: "System Assessment",
      description: "Comprehensive audit of your current payroll systems, processes, and data quality."
    },
    {
      icon: <Psychology />,
      title: "Strategic Planning",
      description: "Expert guidance on payroll strategy, system selection, and optimization roadmaps."
    },
    {
      icon: <TrendingUp />,
      title: "Process Optimization",
      description: "Streamline existing processes and eliminate inefficiencies without full migration."
    },
    {
      icon: <Analytics />,
      title: "Compliance Review",
      description: "Ensure regulatory compliance and implement best practices across all jurisdictions."
    }
  ];

  const services = [
    {
      title: "Payroll System Assessment",
      description: "Comprehensive evaluation of your current payroll infrastructure",
      duration: "2-4 weeks",
      deliverables: [
        "Current state assessment report",
        "Gap analysis and recommendations",
        "Risk assessment matrix",
        "ROI analysis for improvements"
      ],
      price: "£25,000 - £45,000"
    },
    {
      title: "Migration Strategy & Planning",
      description: "Detailed roadmap for payroll system migration without implementation",
      duration: "3-6 weeks",
      deliverables: [
        "Migration strategy document",
        "Detailed project plan",
        "Resource requirements analysis",
        "Vendor evaluation and selection"
      ],
      price: "£35,000 - £65,000"
    },
    {
      title: "Process Optimization",
      description: "Improve existing systems and processes for better efficiency",
      duration: "4-8 weeks",
      deliverables: [
        "Process mapping and analysis",
        "Optimization recommendations",
        "Implementation roadmap",
        "Training materials and support"
      ],
      price: "£45,000 - £85,000"
    },
    {
      title: "Compliance & Governance",
      description: "Ensure regulatory compliance and establish governance frameworks",
      duration: "3-5 weeks",
      deliverables: [
        "Compliance gap analysis",
        "Governance framework design",
        "Policy and procedure documentation",
        "Compliance monitoring setup"
      ],
      price: "£30,000 - £55,000"
    }
  ];

  const approach = [
    {
      phase: "Discovery",
      duration: "Week 1-2",
      activities: [
        "Stakeholder interviews",
        "System documentation review",
        "Process mapping workshops",
        "Data quality assessment"
      ]
    },
    {
      phase: "Analysis",
      duration: "Week 3-4",
      activities: [
        "Gap analysis and benchmarking",
        "Risk assessment and mitigation",
        "Cost-benefit analysis",
        "Solution architecture design"
      ]
    },
    {
      phase: "Strategy",
      duration: "Week 5-6",
      activities: [
        "Strategic recommendations",
        "Implementation roadmap",
        "Resource planning",
        "Change management strategy"
      ]
    },
    {
      phase: "Delivery",
      duration: "Week 7-8",
      activities: [
        "Final report preparation",
        "Executive presentation",
        "Stakeholder workshops",
        "Handover and transition"
      ]
    }
  ];

  const stats = [
    { value: "150+", label: "Consultancy Projects", description: "Successfully delivered" },
    { value: "£850K", label: "Average Savings", description: "Per consultancy engagement" },
    { value: "6 weeks", label: "Average Timeline", description: "From start to delivery" },
    { value: "95%", label: "Client Satisfaction", description: "Recommendation rate" }
  ];

  return (
    <AppleBackground variant="primary">
      {/* Apple Hero Section - Consultancy Theme */}
      <section style={{ 
        background: '#000000',
        padding: 'max(60px, 10vh) 0 max(80px, 12vh) 0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Apple-style ambient lighting - Consultancy Colors */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255, 149, 0, 0.08) 0%, transparent 65%)',
          filter: 'blur(120px)',
          opacity: 0.6,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(175, 82, 222, 0.06) 0%, transparent 65%)',
          filter: 'blur(100px)',
          opacity: 0.4,
          pointerEvents: 'none'
        }} />
        
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '95%', 
          margin: '0 auto', 
          padding: '0 22px',
          width: '100%'
        }}>
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
                fontWeight: '600',
                color: '#ff9500',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
            >
              Consultancy Services
            </motion.div>

            {/* Apple-style hero title */}
            <motion.h1 
              style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: '600',
                color: '#f5f5f7',
                marginBottom: '24px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.05',
                letterSpacing: '-0.015em',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              Expert payroll consultancy.
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Strategic insights.
              </span>
            </motion.h1>
            
            {/* Apple-style subtitle */}
            <motion.p 
              style={{
                fontSize: '21px',
                color: '#a1a1a6',
                marginBottom: '48px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                fontWeight: '400',
                letterSpacing: '.011em',
                maxWidth: '640px',
                margin: '0 auto 48px auto',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              Strategic guidance and optimization expertise for organizations seeking to improve payroll operations without full system migration.
            </motion.p>
            
            {/* Apple-style CTA buttons */}
            <motion.div 
              style={{ 
                display: 'flex', 
                gap: '24px', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              {/* Primary CTA - Consultancy Orange */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 32px',
                    background: '#ff9500',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 4px 16px rgba(255, 149, 0, 0.3)'
                  }}
                >
                  Book Strategy Session
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
              
              {/* Secondary CTA - Apple Link Style */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/success-stories/consultancy" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '17px 8px',
                    background: 'transparent',
                    border: 'none',
                    color: '#ff9500',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  View case studies
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Apple-style scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(to bottom, transparent, #a1a1a6, transparent)',
                opacity: 0.6
              }} />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#a1a1a6',
                  opacity: 0.6
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple Stats Section */}
      <section style={{ padding: '60px 0', background: '#f5f5f7', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Consultancy gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)'
                }} />
                
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '8px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.1'
                }}>
                  {stat.value}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '8px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {stat.label}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#000000',
                  margin: 0,
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apple Features Section - Consultancy Theme */}
      <section style={{ padding: '80px 0 60px 0', background: '#ccebff', position: 'relative' }}>
        {/* Header - Centered */}
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textAlign: 'center'
            }}>
              Our Consultancy Approach.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#000000',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Strategic expertise that delivers measurable results and long-term value.
            </p>
          </motion.div>
        </div>
          
        {/* Apple Product Grid - Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px',
          width: '95%',
          margin: '0 auto'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <AppleFlipCard
                frontContent={
                  <div style={{
                    background: 'linear-gradient(135deg, #fbfbfd 0%, #f5f5f7 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#000000',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}>
                    {/* Consultancy glass morphism */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.025) 0%, rgba(175, 82, 222, 0.025) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      borderRadius: '22px'
                    }} />
                    
                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {/* Icon Container */}
                      <div style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                        borderRadius: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: '0 8px 32px rgba(255, 149, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}>
                        {React.cloneElement(feature.icon, { sx: { fontSize: 32, color: '#ccebff' } })}
                      </div>
                      
                      {/* Typography */}
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#000000',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.07143',
                        letterSpacing: '-0.005em'
                      }}>
                        {feature.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '19px',
                        color: '#6E6E73',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.42105',
                        letterSpacing: '.012em',
                        fontWeight: '400',
                        margin: '0',
                        maxWidth: '280px'
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                }
                
                backContent={
                  <div style={{
                    background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 64px rgba(255, 149, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {/* Apple Ambient Lighting */}
                    <div style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '-20%',
                      left: '-20%',
                      width: '150px',
                      height: '150px',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                      filter: 'blur(40px)'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <h4 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#ccebff',
                        marginBottom: '32px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.16667',
                        letterSpacing: '.009em'
                      }}>
                        Key Benefits
                      </h4>
                      
                      <div style={{ marginBottom: '24px' }}>
                        {[
                          'Strategic roadmap creation',
                          'Risk assessment & mitigation',
                          'Cost-benefit analysis',
                          'Implementation planning'
                        ].map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '16px',
                              marginBottom: '16px',
                              fontSize: '17px',
                              color: 'rgba(255, 255, 255, 0.95)',
                              lineHeight: '1.47059',
                              letterSpacing: '-0.022em',
                              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400'
                            }}
                          >
                            <CheckCircle sx={{ 
                              fontSize: 20, 
                              marginTop: '2px', 
                              flexShrink: 0, 
                              color: 'rgba(255, 255, 255, 0.9)',
                              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                            }} />
                            <span>{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Apple Button */}
                      <Link 
                        to="/quote"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '20px',
                          color: '#ccebff',
                          textDecoration: 'none',
                          fontSize: '17px',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          userSelect: 'none'
                        }}
                      >
                        Learn More
                        <ArrowForward sx={{ fontSize: 16 }} />
                      </Link>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple Services Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#f5f5f7', position: 'relative' }}>
        {/* Header - Centered */}
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textAlign: 'center'
            }}>
              Consultancy Services.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#000000',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Flexible engagement models tailored to your specific needs and objectives.
            </p>
          </motion.div>
        </div>
          
        {/* Apple Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '24px',
          width: '95%',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: '#ccebff',
                borderRadius: '24px',
                padding: '40px 32px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Consultancy gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)'
              }} />
              
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  margin: 0,
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  flex: 1,
                  minWidth: '200px'
                }}>
                  {service.title}
                </h3>
                <div style={{
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  color: '#ccebff',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {service.duration}
                </div>
              </div>
              
              {/* Description */}
              <p style={{
                fontSize: '17px',
                color: '#000000',
                marginBottom: '24px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.47059',
                fontWeight: '400'
              }}>
                {service.description}
              </p>
              
              {/* Deliverables */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '16px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Key Deliverables:
                </h4>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {service.deliverables.map((deliverable, delIndex) => (
                    <motion.div
                      key={delIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: delIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '15px',
                        color: '#000000',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      <CheckCircle sx={{ 
                        fontSize: 18, 
                        marginTop: '1px', 
                        flexShrink: 0, 
                        color: '#ff9500'
                      }} />
                      <span>{deliverable}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '24px',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {service.price}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/quote" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                      border: 'none',
                      borderRadius: '20px',
                      color: '#ccebff',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    Learn More
                    <ArrowForward sx={{ fontSize: 16 }} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple Process Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#ccebff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Our Consultancy Process.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#000000',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              A structured 4-phase approach ensuring comprehensive analysis and actionable recommendations.
            </p>
          </motion.div>

          {/* Apple Process Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {approach.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Phase Number Circle */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 32px rgba(255, 149, 0, 0.3)',
                  position: 'relative'
                }}>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#ccebff',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    {index + 1}
                  </span>
                </div>
                
                {/* Phase Title */}
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '12px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {phase.phase}
                </h3>
                
                {/* Duration Badge */}
                <div style={{
                  display: 'inline-flex',
                  padding: '8px 16px',
                  background: 'rgba(255, 149, 0, 0.1)',
                  borderRadius: '20px',
                  color: '#ff9500',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  marginBottom: '24px'
                }}>
                  {phase.duration}
                </div>
                
                {/* Activities List */}
                <div style={{ textAlign: 'left' }}>
                  {phase.activities.map((activity, actIndex) => (
                    <motion.div
                      key={actIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: actIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: '15px',
                        color: '#6e6e73',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                        marginTop: '6px',
                        flexShrink: 0
                      }} />
                      <span>{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple "When to Choose Consultancy" Section */}
      <section style={{ 
        padding: '80px 0 60px 0', 
        background: '#f5f5f7', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(255, 149, 0, 0.03), transparent)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '64px',
              alignItems: 'center'
            }}
          >
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '32px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.08349',
                letterSpacing: '-0.003em'
              }}>
                When to Choose Consultancy
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    title: "System Evaluation",
                    description: "Need expert assessment of current systems before major decisions"
                  },
                  {
                    title: "Process Optimization", 
                    description: "Want to improve efficiency without full system replacement"
                  },
                  {
                    title: "Strategic Planning",
                    description: "Need roadmap for future payroll system evolution"
                  },
                  {
                    title: "Compliance Review",
                    description: "Require expert guidance on regulatory compliance"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}
                  >
                    <CheckCircle sx={{ 
                      fontSize: 24, 
                      marginTop: '2px', 
                      color: '#ff9500',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                    }} />
                    <div>
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: '8px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: '16px',
                        color: '#000000',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.4',
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Success Story Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 64px rgba(255, 149, 0, 0.25)'
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  color: '#ccebff',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 32px rgba(255, 149, 0, 0.3)'
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  filter: 'blur(60px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#ccebff',
                    marginBottom: '24px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    textAlign: 'center'
                  }}>
                    Consultancy Success Story
                  </h3>
                  
                  <blockquote style={{
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.95)',
                    marginBottom: '32px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.5',
                    fontWeight: '400',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    "The strategic guidance saved us £850K while dramatically improving our payroll operations. The recommendations were practical, actionable, and delivered measurable results."
                  </blockquote>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#ccebff',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}
                    >
                      E
                    </motion.div>
                    <div>
                      <h4 style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: '#ccebff',
                        marginBottom: '4px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        Emma Williams
                      </h4>
                      <p style={{
                        fontSize: '15px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '400',
                        margin: 0
                      }}>
                        CFO, Financial Services Group
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to="/success-stories/consultancy"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '14px 28px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        color: '#ccebff',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: '500',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        userSelect: 'none',
                        width: '100%'
                      }}
                    >
                      Read Case Study
                      <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple CTA Section */}
      <section style={{ 
        background: '#000000', 
        padding: '80px 0 60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements - Consultancy Theme */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 149, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(175, 82, 222, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '600',
              color: '#ccebff',
              marginBottom: '24px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              lineHeight: '1.1'
            }}>
              Ready to optimize your payroll strategy?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              lineHeight: '1.6'
            }}>
              Get expert insights and strategic guidance tailored to your organization's needs. Join 150+ organizations that have optimized their payroll operations with our proven consultancy approach.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/quote" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 4px 16px rgba(255, 149, 0, 0.3)'
                  }}
                >
                  Book Strategy Session
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/about" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.28)',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  Learn About Our Expertise
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default ProfessionalConsultancyServices;