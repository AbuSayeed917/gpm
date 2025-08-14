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
  Timeline,
  Speed,
  Support,
  Analytics
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';

const SMESuccessStories = () => {
  const stories = [
    {
      company: "TechStart Solutions",
      industry: "Technology",
      size: "85 employees",
      location: "Manchester, UK",
      avatar: "TS",
      challenge: "Legacy payroll system causing 3-day processing delays and compliance issues with UK tax regulations.",
      solution: "Migrated to cloud-based system with automated tax calculations and real-time processing capabilities.",
      results: [
        "Reduced payroll processing time from 3 days to 2 hours",
        "100% accuracy in tax calculations", 
        "40% reduction in HR administrative overhead",
        "Improved employee satisfaction with self-service portal"
      ],
      quote: "The migration was seamless and completed ahead of schedule. Our payroll processing is now faster and more accurate than ever before.",
      testimonial: {
        name: "Sarah Mitchell",
        role: "HR Manager",
        rating: 5
      },
      metrics: {
        timeSaved: "95%",
        costReduction: "30%",
        implementation: "6 weeks"
      }
    },
    {
      company: "Green Manufacturing Ltd",
      industry: "Manufacturing", 
      size: "120 employees",
      location: "Birmingham, UK",
      avatar: "GM",
      challenge: "Multi-shift payroll complexity with manual overtime calculations leading to errors and employee complaints.",
      solution: "Implemented automated shift management with real-time overtime tracking and mobile clock-in capabilities.",
      results: [
        "Eliminated manual overtime calculation errors",
        "Real-time visibility into labor costs",
        "Mobile time tracking increased accuracy by 98%",
        "Reduced payroll queries by 85%"
      ],
      quote: "Our employees love the mobile app, and we've eliminated virtually all payroll disputes. The ROI was immediate.",
      testimonial: {
        name: "David Thompson",
        role: "Operations Director",
        rating: 5
      },
      metrics: {
        timeSaved: "80%",
        costReduction: "25%",
        implementation: "8 weeks"
      }
    },
    {
      company: "Creative Agency Plus",
      industry: "Marketing & Advertising",
      size: "45 employees", 
      location: "London, UK",
      avatar: "CA",
      challenge: "Freelancer and contractor payments scattered across multiple systems, causing cash flow tracking issues.",
      solution: "Unified payroll system handling both employees and contractors with integrated project billing and expense management.",
      results: [
        "Consolidated all worker payments in single system",
        "Improved cash flow visibility and forecasting",
        "Automated expense reimbursements",
        "Reduced month-end closing time by 60%"
      ],
      quote: "Having all our payments in one system transformed our financial operations. We can now focus on growing our business instead of managing spreadsheets.",
      testimonial: {
        name: "Emma Rodriguez",
        role: "Finance Director",
        rating: 5
      },
      metrics: {
        timeSaved: "70%",
        costReduction: "35%",
        implementation: "4 weeks"
      }
    }
  ];

  const stats = [
    {
      value: "150+",
      label: "SME Migrations",
      description: "Successful small to medium enterprise projects",
      icon: <Business sx={{ fontSize: 24, color: 'var(--color-primary)' }} />
    },
    {
      value: "6.5 weeks",
      label: "Average Timeline", 
      description: "From planning to go-live for SME projects",
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />
    },
    {
      value: "32%",
      label: "Cost Savings",
      description: "Average operational cost reduction",
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />
    },
    {
      value: "98.5%",
      label: "Success Rate",
      description: "Projects completed on time and budget",
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />
    }
  ];

  const benefits = [
    {
      icon: <Speed sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Rapid Implementation",
      description: "Streamlined processes designed specifically for SME requirements with minimal disruption to operations."
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Dedicated Support",
      description: "Personal project manager and UK-based support team available throughout the migration process."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Cost-Effective Solutions",
      description: "Tailored packages that deliver enterprise-level functionality within SME budgets and constraints."
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Proven Results",
      description: "Track record of successful migrations for companies from 10 to 500 employees across all industries."
    }
  ];

  return (
    <AppleBackground variant="primary">
      {/* Apple Hero Section - 100% Authentic */}
      <section style={{ 
        background: '#1d1d1f',
        padding: 'max(60px, 10vh) 0 max(80px, 12vh) 0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Apple-style ambient lighting - Enhanced */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 65%)',
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
          background: 'radial-gradient(circle, rgba(88, 86, 214, 0.06) 0%, transparent 65%)',
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
                color: '#007aff',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}
            >
              SME Success Stories
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
              SME migrations.
              <br />
              <span style={{ 
                background: 'linear-gradient(90deg, #007aff 0%, #5856d6 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Real results.
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
              Real stories from SME clients who transformed their payroll operations with our tailored migration services.
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
              {/* Primary CTA - Apple Blue */}
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
                    background: '#007aff',
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
                    boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)'
                  }}
                >
                  Get started
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
                  to="/services/sme" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '17px 8px',
                    background: 'transparent',
                    border: 'none',
                    color: '#007aff',
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

      {/* Apple Stats Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#f5f5f7', position: 'relative' }}>
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
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em',
              textAlign: 'center'
            }}>
              SME Migration Results.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#86868b',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Key metrics from our small to medium enterprise payroll migrations.
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
                background: '#ffffff',
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
                  background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 8px 32px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
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
                  color: '#1d1d1f',
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
                  color: '#1d1d1f',
                  marginBottom: '8px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.16667',
                  letterSpacing: '-0.005em'
                }}>
                  {stat.label}
                </h3>
                
                <p style={{
                  fontSize: '15px',
                  color: '#86868b',
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
      <section style={{ padding: '80px 0 60px 0', background: '#ffffff', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Client Success Stories.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#86868b',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Real transformations from SME clients across different industries.
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
                  background: '#ffffff',
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
                  background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
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
                        background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#ffffff',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
                        letterSpacing: '-0.01em'
                      }}>
                        {story.avatar}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: '600',
                          color: '#1d1d1f',
                          marginBottom: '4px',
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}>
                          {story.company}
                        </h3>
                        <p style={{
                          fontSize: '17px',
                          color: '#86868b',
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
                        { label: 'Location', value: story.location },
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
                            color: '#86868b',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400'
                          }}>
                            {item.label}:
                          </span>
                          <span style={{
                            fontSize: '15px',
                            color: '#1d1d1f',
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
                        { label: 'Cost Reduction', value: story.metrics.costReduction },
                        { label: 'Rating', value: story.testimonial.rating, isRating: true }
                      ].map((metric, i) => (
                        <div key={i} style={{
                          textAlign: 'center',
                          padding: '16px 12px',
                          borderRadius: '16px',
                          background: 'rgba(0, 122, 255, 0.05)',
                          border: '1px solid rgba(0, 122, 255, 0.1)'
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
                              color: '#007aff',
                              marginBottom: '4px',
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                            }}>
                              {metric.value}
                            </div>
                          )}
                          <div style={{
                            fontSize: '12px',
                            color: '#86868b',
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
                            color: '#1d1d1f',
                            marginBottom: '12px',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                          }}>
                            {section.title}
                          </h4>
                          <p style={{
                            fontSize: '17px',
                            color: '#86868b',
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
                        color: '#1d1d1f',
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
                            color: '#86868b',
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
                      background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(88, 86, 214, 0.05) 100%)',
                      border: '1px solid rgba(0, 122, 255, 0.1)'
                    }}>
                      <blockquote style={{
                        fontSize: '17px',
                        color: '#1d1d1f',
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
                          background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
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
                            color: '#1d1d1f',
                            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                          }}>
                            {story.testimonial.name}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: '#86868b',
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

      {/* Apple Benefits Section */}
      <section style={{ 
        padding: '80px 0 60px 0', 
        background: '#ffffff', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background gradient - Apple style */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 122, 255, 0.03), transparent)',
          pointerEvents: 'none'
        }} />

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
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              Why SMEs choose us.
            </h2>
            <p style={{
              fontSize: '21px',
              color: '#86868b',
              maxWidth: '650px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.381',
              letterSpacing: '.011em',
              fontWeight: '400'
            }}>
              Specialized expertise and tailored solutions for growing businesses.
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
            {benefits.map((benefit, index) => (
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
              >
                <div style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  {/* Apple-style Icon Container */}
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 8px 32px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}>
                    {React.cloneElement(benefit.icon, { 
                      sx: { 
                        fontSize: 32, 
                        color: '#ffffff',
                        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                      } 
                    })}
                  </div>
                  
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    marginBottom: '16px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.16667',
                    letterSpacing: '-0.005em'
                  }}>
                    {benefit.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '17px',
                    color: '#86868b',
                    marginBottom: '24px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.47059',
                    letterSpacing: '-0.022em',
                    fontWeight: '400',
                    flex: 1
                  }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Apple CTA Section */}
      <section style={{ 
        background: '#1d1d1f', 
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
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, transparent 70%)',
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
              color: '#ffffff',
              marginBottom: '24px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1'
            }}>
              Ready for your SME migration?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.6'
            }}>
              Join these successful SME clients who transformed their payroll operations. 
              Get a free consultation tailored to your business size and requirements.
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
                    background: '#007aff',
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
                  Get Free SME Consultation
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/services/sme" 
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
                  Learn About SME Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple Related Success Stories Section */}
      <section style={{ padding: '80px 0 60px 0', background: '#f5f5f7', position: 'relative' }}>
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '16px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.0625',
              letterSpacing: '-0.009em'
            }}>
              More Success Stories.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#86868b',
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
                icon: <Timeline sx={{ fontSize: 48, color: '#ffffff' }} />,
                title: 'Large Enterprise Stories',
                description: 'Complex multi-country migrations for enterprise organizations',
                link: '/success-stories/large-enterprise',
                gradient: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)'
              },
              {
                icon: <Support sx={{ fontSize: 48, color: '#ffffff' }} />,
                title: 'Consultancy Stories', 
                description: 'Strategic guidance and optimization without full migration',
                link: '/success-stories/consultancy',
                gradient: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)'
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
                  boxShadow: index === 0 ? '0 20px 64px rgba(48, 209, 88, 0.4)' : '0 20px 64px rgba(255, 59, 48, 0.4)',
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

export default SMESuccessStories;