import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Business,
  TrendingUp,
  AccessTime,
  MonetizationOn,
  Star,
  CheckCircle,
  ArrowForward,
  Phone,
  Support,
  Analytics,
  Psychology,
  Groups,
  Handshake
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ConsultancySuccessStories = () => {
  const stories = [
    {
      company: "Strategic HR Partners",
      industry: "HR Consulting",
      size: "45 consultants",
      clients: "200+ clients",
      location: "London, UK",
      avatar: "SH",
      challenge: "Growing demand for payroll migration services from clients, but lacked in-house technical expertise and resources to deliver comprehensive solutions.",
      solution: "Partnered with our white-label migration services to offer complete payroll transformation solutions under their brand, with full technical support.",
      results: [
        "Added £2.8M in new annual revenue streams",
        "Successfully completed 85+ client migrations",
        "Expanded service portfolio without additional hiring",
        "Achieved 98% client satisfaction rate",
        "Reduced project delivery risks to near zero"
      ],
      quote: "This partnership transformed our practice. We can now offer enterprise-grade payroll migrations while focusing on what we do best - strategic HR consulting.",
      testimonial: {
        name: "Catherine Williams",
        role: "Managing Partner",
        rating: 5
      },
      metrics: {
        timeSaved: "90%",
        revenueGrowth: "65%",
        implementation: "3 months"
      }
    },
    {
      company: "Digital Finance Solutions",
      industry: "Financial Technology",
      size: "180 employees",
      clients: "150+ financial services",
      location: "Edinburgh, UK",
      avatar: "DF",
      challenge: "Existing payroll system couldn't scale with rapid business growth, causing processing delays and compliance issues affecting client trust.",
      solution: "Strategic payroll optimization and phased system enhancement without full migration, focusing on process improvement and automation.",
      results: [
        "Improved payroll accuracy from 92% to 99.8%",
        "Reduced processing time by 75%",
        "Enhanced compliance reporting capabilities",
        "Eliminated overtime calculation errors",
        "Increased employee satisfaction by 40%"
      ],
      quote: "The consultancy approach was perfect for our needs. We got the improvements we needed without the disruption of a full migration.",
      testimonial: {
        name: "Andrew MacLeod",
        role: "Chief Operating Officer",
        rating: 5
      },
      metrics: {
        timeSaved: "75%",
        revenueGrowth: "25%",
        implementation: "8 weeks"
      }
    },
    {
      company: "Global Consulting Group",
      industry: "Management Consulting",
      size: "320 consultants",
      clients: "Fortune 500 clients",
      location: "Manchester, UK",
      avatar: "GC",
      challenge: "Complex contractor and employee payment structures across multiple projects required specialized expertise for optimization and compliance.",
      solution: "Comprehensive payroll audit, process reengineering, and implementation of best practices for multi-tier workforce management.",
      results: [
        "Streamlined payments for 5 different worker types",
        "Reduced administrative overhead by 60%",
        "Improved project profitability by 15%",
        "Enhanced regulatory compliance across all markets",
        "Automated expense and time tracking integration"
      ],
      quote: "The strategic insights and process improvements delivered immediate value. Our payroll operations now support our growth ambitions perfectly.",
      testimonial: {
        name: "Rachel Thompson",
        role: "Finance Director",
        rating: 5
      },
      metrics: {
        timeSaved: "60%",
        revenueGrowth: "15%",
        implementation: "12 weeks"
      }
    }
  ];

  const stats = [
    {
      value: "200+",
      label: "Consultancy Projects",
      description: "Strategic guidance and optimization engagements",
      icon: <Psychology sx={{ fontSize: 24, color: 'var(--color-primary)' }} />
    },
    {
      value: "8.5 weeks",
      label: "Average Timeline", 
      description: "From assessment to implementation",
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />
    },
    {
      value: "38%",
      label: "Average ROI",
      description: "Return on investment within first year",
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />
    },
    {
      value: "100%",
      label: "Success Rate",
      description: "All consultancy projects delivered successfully",
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />
    }
  ];

  const benefits = [
    {
      icon: <Psychology sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Strategic Expertise",
      description: "Deep payroll and HR expertise combined with strategic business insights to optimize operations without full migration."
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Flexible Engagement",
      description: "Tailored consultancy packages from quick assessments to comprehensive transformation programs based on your needs."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Risk-Free Approach",
      description: "Optimize and improve existing systems with minimal disruption while maximizing efficiency and compliance."
    },
    {
      icon: <Handshake sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Partnership Model",
      description: "White-label services for consultants and solution providers to expand their portfolio with our technical expertise."
    }
  ];

  return (
    <AppleBackground variant="primary">
      {/* Hero Section - SME Style */}
      <section style={{ 
        background: '#e3f2fd',
        padding: '80px 0 60px 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle background effects */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 65%)',
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
          background: 'radial-gradient(circle, rgba(247, 147, 30, 0.04) 0%, transparent 65%)',
          filter: 'blur(100px)',
          opacity: 0.4,
          pointerEvents: 'none'
        }} />
        
        {/* Content Container - Apple's signature max-width */}
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
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
            >
              Consultancy Success Stories
            </motion.div>

            {/* Hero title with red-orange gradient */}
            <motion.h1 
              style={{
                fontSize: 'clamp(38px, 4.5vw, 50px)',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              Strategic consultancy solutions.
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              style={{
                fontSize: '21px',
                color: '#1a237e',
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
              Strategic consultancy services that optimize payroll operations without full migration disruption.
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
              {/* Primary CTA */}
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
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ffffff',
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
                  Get started
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
              
              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/services/consultancy" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '17px 8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
                  Learn more
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#e3f2fd', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textAlign: 'center'
            }}>
              Consultancy Results.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#1a237e',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Key metrics from our strategic consultancy and optimization projects.
            </p>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '12px',
          width: '95%',
          margin: '0 auto'
        }}>
          {stats.map((stat, index) => (
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
              <div style={{
                background: 'rgba(255, 255, 255, 0.72)',
                borderRadius: '22px',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 8px 32px rgba(255, 149, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}>
                  {React.cloneElement(stat.icon, { 
                    sx: { 
                      fontSize: 32, 
                      color: '#ffffff',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                    } 
                  })}
                </div>
                
                <div style={{
                  fontSize: '48px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.0625',
                  letterSpacing: '-0.005em'
                }}>
                  {stat.value}
                </div>
                
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a237e',
                  marginBottom: '8px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.16667',
                  letterSpacing: '-0.005em'
                }}>
                  {stat.label}
                </h3>
                
                <p style={{
                  fontSize: '15px',
                  color: '#1a237e',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.47059',
                  letterSpacing: '-0.022em',
                  fontWeight: '400',
                  margin: '0',
                  textAlign: 'center'
                }}>
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple Success Stories Section */}
      <section style={{ padding: '80px 0 60px 0', background: 'rgba(255, 255, 255, 0.72)', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Consultancy Client Success Stories.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#1a237e',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Strategic transformations and optimizations across different business models.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  borderRadius: '22px',
                  padding: '48px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: index % 2 === 0 ? '-30px' : 'auto',
                  bottom: index % 2 === 0 ? 'auto' : '-30px',
                  right: index % 2 === 0 ? '-30px' : 'auto',
                  left: index % 2 === 0 ? 'auto' : '-30px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(255, 149, 0, 0.08) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '48px',
                  alignItems: 'start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Company Info */}
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '32px'
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '22px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#ffffff',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        boxShadow: '0 8px 32px rgba(255, 149, 0, 0.3)',
                        letterSpacing: '-0.01em'
                      }}>
                        {story.avatar}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: '600',
                          color: '#1a237e',
                          marginBottom: '4px',
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}>
                          {story.company}
                        </h3>
                        <p style={{
                          fontSize: '17px',
                          color: '#1a237e',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '400'
                        }}>
                          {story.industry}
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '32px' }}>
                      {[
                        { label: 'Size', value: story.size },
                        { label: 'Clients', value: story.clients },
                        { label: 'Timeline', value: story.metrics.implementation }
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 0',
                          borderBottom: i < 2 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none'
                        }}>
                          <span style={{
                            fontSize: '15px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400'
                          }}>
                            {item.label}:
                          </span>
                          <span style={{
                            fontSize: '15px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500'
                          }}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px'
                    }}>
                      {[
                        { label: 'Time Saved', value: story.metrics.timeSaved },
                        { label: 'Revenue Growth', value: story.metrics.revenueGrowth },
                        { label: 'Rating', value: story.testimonial.rating, isRating: true }
                      ].map((metric, i) => (
                        <div key={i} style={{
                          textAlign: 'center',
                          padding: '16px 12px',
                          borderRadius: '16px',
                          background: 'rgba(255, 149, 0, 0.05)',
                          border: '1px solid rgba(255, 149, 0, 0.1)'
                        }}>
                          {metric.isRating ? (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '8px' }}>
                              {[...Array(metric.value)].map((_, starIndex) => (
                                <Star key={starIndex} sx={{ fontSize: 16, color: '#ff9500' }} />
                              ))}
                            </div>
                          ) : (
                            <div style={{
                              fontSize: '24px',
                              fontWeight: '600',
                              color: '#ff9500',
                              marginBottom: '4px',
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                            }}>
                              {metric.value}
                            </div>
                          )}
                          <div style={{
                            fontSize: '12px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500'
                          }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Story Content */}
                  <div>
                    <div style={{ marginBottom: '32px' }}>
                      {[
                        { title: 'Challenge', content: story.challenge },
                        { title: 'Solution', content: story.solution }
                      ].map((section, i) => (
                        <div key={i} style={{ marginBottom: '24px' }}>
                          <h4 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#1a237e',
                            marginBottom: '12px',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                          }}>
                            {section.title}
                          </h4>
                          <p style={{
                            fontSize: '17px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            lineHeight: '1.47059',
                            fontWeight: '400'
                          }}>
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div style={{ marginBottom: '32px' }}>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#1a237e',
                        marginBottom: '16px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        Results
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {story.results.map((result, resultIndex) => (
                          <li key={resultIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            marginBottom: '12px',
                            fontSize: '15px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            lineHeight: '1.47059',
                            fontWeight: '400'
                          }}>
                            <CheckCircle sx={{ 
                              fontSize: 18, 
                              color: '#30d158', 
                              marginTop: '1px',
                              flexShrink: 0
                            }} />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div style={{
                      padding: '24px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.05) 0%, rgba(175, 82, 222, 0.05) 100%)',
                      border: '1px solid rgba(255, 149, 0, 0.1)'
                    }}>
                      <blockquote style={{
                        fontSize: '17px',
                        color: '#1a237e',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.47059',
                        fontStyle: 'italic',
                        marginBottom: '16px',
                        fontWeight: '400'
                      }}>
                        "{story.quote}"
                      </blockquote>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#ffffff',
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}>
                          {story.testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                          }}>
                            {story.testimonial.name}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: '#1a237e',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400'
                          }}>
                            {story.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Flip Cards */}
      <section style={{ 
        padding: '80px 0 60px 0', 
        background: '#e3f2fd', 
        position: 'relative',
        overflow: 'hidden'
      }}>
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
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Why choose our consultancy.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#1a237e',
              maxWidth: '650px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Strategic expertise and flexible solutions tailored to your specific needs.
            </p>
          </motion.div>
        </div>
          
        {/* AppleFlipCard Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          width: '95%',
          margin: '0 auto'
        }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AppleFlipCard
                  frontContent={
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.72)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      padding: '32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                        boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                      }}>
                        {React.cloneElement(benefit.icon, { 
                          sx: { 
                            fontSize: 36, 
                            color: '#ffffff',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                          } 
                        })}
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '16px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.2'
                      }}>
                        {benefit.title}
                      </h3>
                    </div>
                  }
                  backContent={
                    <div style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                      borderRadius: '20px',
                      padding: '32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#ffffff',
                      boxShadow: '0 8px 32px rgba(255, 107, 53, 0.4)'
                    }}>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '20px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.2'
                      }}>
                        {benefit.title}
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: '#ffffff',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        opacity: 0.9
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  }
                  style={{
                    height: '400px'
                  }}
                />
              </motion.div>
            ))}
          </div>
      </section>


      {/* Apple CTA Section */}
      <section style={{ 
        background: '#000000', 
        padding: '80px 0 60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
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
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '24px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1'
            }}>
              Ready for strategic consultancy?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.6'
            }}>
              Get expert guidance to optimize your payroll operations without full migration disruption. 
              Our consultancy services deliver immediate value and long-term strategic advantage.
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
                    padding: '17px 44px',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ffffff',
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
                  <Phone sx={{ fontSize: 18 }} />
                  Get Consultancy Quote
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/services/consultancy" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.28)',
                    borderRadius: '980px',
                    color: '#ffffff',
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
                  <ArrowForward sx={{ fontSize: 18 }} />
                  Learn About Consultancy Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Success Stories Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#e3f2fd', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 36px)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              More Success Stories.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#1a237e',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Explore success stories from different business segments.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                icon: <Business sx={{ fontSize: 48, color: '#ffffff' }} />,
                title: 'SME Success Stories',
                description: 'Tailored migration solutions for small to medium enterprises',
                link: '/success-stories/sme',
                gradient: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)'
              },
              {
                icon: <Groups sx={{ fontSize: 48, color: '#ffffff' }} />,
                title: 'Enterprise Stories', 
                description: 'Complex multi-country migrations for large organizations',
                link: '/success-stories/large-enterprise',
                gradient: 'linear-gradient(135deg, #30d158 0%, #ff3b30 100%)'
              }
            ].map((item, index) => (
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
                whileHover={{ y: -8 }}
              >
                <div style={{
                  background: item.gradient,
                  borderRadius: '22px',
                  padding: '48px 32px',
                  color: '#ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: index === 0 ? '0 20px 64px rgba(0, 122, 255, 0.4)' : '0 20px 64px rgba(48, 209, 88, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {/* Apple Ambient Effects */}
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
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '22px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}>
                      {item.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '16px',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}>
                      {item.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '17px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '32px',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.47059',
                      fontWeight: '400'
                    }}>
                      {item.description}
                    </p>
                    
                    <Link 
                      to={item.link}
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
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '17px',
                        fontWeight: '500',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      View {item.title}
                      <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default ConsultancySuccessStories;