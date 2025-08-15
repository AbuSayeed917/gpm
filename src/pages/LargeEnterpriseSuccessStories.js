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
  Public,
  Support,
  Analytics,
  People,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';

const LargeEnterpriseSuccessStories = () => {
  const stories = [
    {
      company: 'Netherlands Tech Company',
      industry: 'Technology',
      size: 'Large Enterprise',
      location: 'Netherlands',
      avatar: 'NT',
      challenge:
        'A multinational tech firm acquired a new company in the Netherlands and needed to consolidate payroll operations with their existing entity.',
      solution:
        'Our expert team successfully migrated both company payrolls from a legacy system into a unified cloud-based solution, ensuring regulatory compliance, zero data loss, and uninterrupted payroll operations.',
      results: [
        'Successfully consolidated payroll operations',
        'Migrated from legacy system to cloud-based solution',
        'Ensured full regulatory compliance',
        'Achieved zero data loss during migration',
        'Maintained uninterrupted payroll operations',
      ],
      quote:
        'The consolidation was handled expertly with no disruptions to our operations. We now have a unified, compliant payroll system.',
      testimonial: {
        name: 'Netherlands Operations Director',
        role: 'Operations Director',
        rating: 5,
      },
      metrics: {
        timeSaved: 'Significant efficiency gains',
        costReduction: 'Operational savings',
        implementation: 'Completed successfully',
      },
    },
    {
      company: 'Spain Tech Acquisition',
      industry: 'Technology',
      size: 'Large Enterprise',
      location: 'Spain',
      avatar: 'ST',
      challenge:
        'Following a corporate acquisition in Spain, the client needed to integrate the new entity into their existing cloud-based payroll system.',
      solution:
        'Our team managed the entire transition — from data cleansing and validation to testing and go-live — delivering a successful outcome with full compliance and system harmony.',
      results: [
        'Successfully integrated acquired Spanish entity',
        'Completed comprehensive data cleansing and validation',
        'Delivered full testing and go-live support',
        'Achieved full compliance with Spanish regulations',
        'Established system harmony across entities',
      ],
      quote:
        'The acquisition integration was seamless. Our Spanish operations are now fully integrated with perfect compliance.',
      testimonial: {
        name: 'Spain Integration Manager',
        role: 'Integration Manager',
        rating: 5,
      },
      metrics: {
        timeSaved: 'Streamlined operations',
        costReduction: 'Integration efficiency',
        implementation: 'On time delivery',
      },
    },
    {
      company: 'Germany Tech Migration',
      industry: 'Technology',
      size: 'Large Enterprise',
      location: 'Germany',
      avatar: 'GT',
      challenge:
        'The client lacked internal resources to migrate a newly acquired German entity from in-house payroll to a cloud-based platform.',
      solution:
        'We led the project from discovery to go-live, navigating complex German compliance requirements and delivering a fully operational, automated payroll system on time and without disruption.',
      results: [
        'Led complete project from discovery to go-live',
        'Navigated complex German compliance requirements',
        'Delivered fully operational automated payroll system',
        'Completed migration on time without disruption',
        'Provided comprehensive project leadership',
      ],
      quote:
        'Despite the complexity of German compliance, the project was delivered flawlessly and on time.',
      testimonial: {
        name: 'Germany Project Lead',
        role: 'Project Director',
        rating: 5,
      },
      metrics: {
        timeSaved: 'Full automation',
        costReduction: 'Operational excellence',
        implementation: 'On-time delivery',
      },
    },
    {
      company: 'UK Research & Policy Organization',
      industry: 'Research & Public Policy',
      size: 'Large Enterprise',
      location: 'United Kingdom',
      avatar: 'UK',
      challenge:
        'The client was midway through a high-stakes payroll migration from a legacy platform to a cloud-based solution when issues arose due to lack of internal expertise and unclear operational direction.',
      solution:
        'Our team stepped in to investigate, remediate errors, re-align project governance, and successfully deliver the UK payroll go-live within tight deadlines.',
      results: [
        'Successfully rescued troubled migration project',
        'Investigated and remediated critical errors',
        'Re-aligned project governance and direction',
        'Delivered UK payroll go-live within tight deadlines',
        'Established clear operational procedures',
      ],
      quote:
        'They saved our project when it was in serious trouble. The rescue and delivery exceeded all our expectations.',
      testimonial: {
        name: 'UK Operations Manager',
        role: 'Operations Manager',
        rating: 5,
      },
      metrics: {
        timeSaved: 'Project rescue',
        costReduction: 'Avoided failure costs',
        implementation: 'Critical deadline met',
      },
    },
    {
      company: 'Germany Research Organization',
      industry: 'Research & Public Policy',
      size: 'Large Enterprise',
      location: 'Germany',
      avatar: 'GR',
      challenge:
        'Without in-house expertise, the client needed full ownership and execution of a German payroll migration project.',
      solution:
        'We handled everything from initial discovery and data cleansing to system setup, testing, go-live support, and post-live SOP documentation. The result: a stable, compliant payroll function the client can confidently operate going forward.',
      results: [
        'Provided complete end-to-end project ownership',
        'Handled discovery, data cleansing, and system setup',
        'Delivered comprehensive testing and go-live support',
        'Created detailed post-live SOP documentation',
        'Established stable, compliant payroll operations',
      ],
      quote:
        'Complete project ownership from start to finish. We now have a stable payroll system we can operate with confidence.',
      testimonial: {
        name: 'Germany Research Director',
        role: 'Research Director',
        rating: 5,
      },
      metrics: {
        timeSaved: 'Complete solution',
        costReduction: 'Full service delivery',
        implementation: 'End-to-end success',
      },
    },
  ];

  const stats = [
    {
      value: '50+',
      label: 'Enterprise Migrations',
      description: 'Large-scale multi-country implementations',
      icon: <People sx={{ fontSize: 24, color: 'var(--color-primary)' }} />,
    },
    {
      value: '18 weeks',
      label: 'Average Timeline',
      description: 'From planning to full deployment',
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />,
    },
    {
      value: '42%',
      label: 'Cost Savings',
      description: 'Average operational cost reduction',
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />,
    },
    {
      value: '99.8%',
      label: 'Success Rate',
      description: 'Enterprise projects delivered successfully',
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />,
    },
  ];

  const benefits = [
    {
      icon: <Public sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: 'Multi-Country Expertise',
      description:
        'Deep knowledge of payroll regulations, tax requirements, and compliance across 14+ European and Middle Eastern countries.',
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: 'Dedicated Project Team',
      description:
        'Senior consultants, project managers, and technical specialists assigned exclusively to your enterprise migration.',
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: 'Advanced Integration',
      description:
        'Complex ERP, HRIS, and financial system integrations with real-time data synchronization and reporting.',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: 'Risk Mitigation',
      description:
        'Comprehensive testing, parallel runs, and rollback procedures to ensure zero business disruption.',
    },
  ];

  return (
    <AppleBackground variant='primary'>
      {/* Hero Section - Homepage Style */}
      <section
        style={{
          padding: '50px 20px 40px 20px',
          textAlign: 'center',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating Background Elements - Homepage Style */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '15%',
            width: '300px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
                fontWeight: '700',
                color: '#007aff',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Enterprise Success Stories
            </motion.div>

            <h1
              style={{
                fontSize: 'clamp(38px, 4.5vw, 50px)',
                fontWeight: '700',
                lineHeight: '1.05',
                color: '#1a237e',
                marginBottom: '16px',
                letterSpacing: '-0.025em',
                textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  fontWeight: '700',
                  paddingBottom: '4px',
                  lineHeight: '1.2',
                  textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                Enterprise Success Stories
              </span>{' '}
              Results.
            </h1>

            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.3',
                color: '#283593',
                fontWeight: '400',
                marginBottom: '32px',
                maxWidth: '640px',
                margin: '0 auto 32px auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Complex multi-country payroll transformations for enterprise organizations across
              multiple jurisdictions.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <Link
                to='/contact'
                style={{
                  background: '#007AFF',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = '#0056CC';
                  e.target.style.boxShadow = '0 8px 24px rgba(0, 122, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = '#007AFF';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 122, 255, 0.3)';
                }}
              >
                Book Enterprise Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple Stats Section */}
      <section
        style={{
          padding: '0px 20px 40px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.0625',
                letterSpacing: '-0.009em',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Enterprise Migration Results.
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Key metrics from our large enterprise payroll transformation projects.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div
                style={{
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, #30d158 0%, #ff3b30 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow:
                      '0 8px 32px rgba(48, 209, 88, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {React.cloneElement(stat.icon, {
                    sx: {
                      fontSize: 32,
                      color: '#ccebff',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                    },
                  })}
                </div>

                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: '600',
                    background:
                      'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.0625',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {stat.value}
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '8px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.16667',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {stat.label}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: '#000000',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.47059',
                    letterSpacing: '-0.022em',
                    fontWeight: '400',
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple Success Stories Section */}
      <section
        style={{
          padding: '80px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                background:
                  'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Enterprise Client Success Stories.
            </h2>
            <p
              style={{
                fontSize: '21px',
                color: '#1a237e',
                maxWidth: '650px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Complex transformations from global enterprise clients across different industries.
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
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <div
                  style={{
                    position: 'absolute',
                    top: index % 2 === 0 ? '-30px' : 'auto',
                    bottom: index % 2 === 0 ? 'auto' : '-30px',
                    right: index % 2 === 0 ? '-30px' : 'auto',
                    left: index % 2 === 0 ? 'auto' : '-30px',
                    width: '120px',
                    height: '120px',
                    background:
                      'radial-gradient(circle, rgba(48, 209, 88, 0.08) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '48px',
                    alignItems: 'start',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Company Info */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '32px',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '22px',
                          background: 'linear-gradient(135deg, #30d158 0%, #ff3b30 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          fontWeight: '600',
                          color: '#ccebff',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          boxShadow: '0 8px 32px rgba(48, 209, 88, 0.3)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {story.avatar}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '24px',
                            fontWeight: '600',
                            color: '#000000',
                            marginBottom: '4px',
                            fontFamily:
                              'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          }}
                        >
                          {story.company}
                        </h3>
                        <p
                          style={{
                            fontSize: '17px',
                            color: '#000000',
                            fontFamily:
                              'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '400',
                          }}
                        >
                          {story.industry}
                        </p>
                      </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                      {[
                        { label: 'Size', value: story.size },
                        {
                          label: 'Countries',
                          value: story.location.split(',').length + ' countries',
                        },
                        { label: 'Timeline', value: story.metrics.implementation },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '12px 0',
                            borderBottom: i < 2 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '15px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                            }}
                          >
                            {item.label}:
                          </span>
                          <span
                            style={{
                              fontSize: '15px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '500',
                            }}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                      }}
                    >
                      {[
                        { label: 'Time Saved', value: story.metrics.timeSaved },
                        { label: 'Cost Reduction', value: story.metrics.costReduction },
                        { label: 'Rating', value: story.testimonial.rating, isRating: true },
                      ].map((metric, i) => (
                        <div
                          key={i}
                          style={{
                            textAlign: 'center',
                            padding: '16px 12px',
                            borderRadius: '16px',
                            background: 'rgba(48, 209, 88, 0.05)',
                            border: '1px solid rgba(48, 209, 88, 0.1)',
                          }}
                        >
                          {metric.isRating ? (
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '2px',
                                marginBottom: '8px',
                              }}
                            >
                              {[...Array(metric.value)].map((_, starIndex) => (
                                <Star key={starIndex} sx={{ fontSize: 16, color: '#ff9500' }} />
                              ))}
                            </div>
                          ) : (
                            <div
                              style={{
                                fontSize: '24px',
                                fontWeight: '600',
                                color: '#30d158',
                                marginBottom: '4px',
                                fontFamily:
                                  'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                              }}
                            >
                              {metric.value}
                            </div>
                          )}
                          <div
                            style={{
                              fontSize: '12px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '500',
                            }}
                          >
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Countries Badge */}
                    <div style={{ marginTop: '24px' }}>
                      <div
                        style={{
                          fontSize: '12px',
                          color: '#000000',
                          marginBottom: '8px',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        Countries:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {story.location.split(', ').map((country, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              background: 'rgba(48, 209, 88, 0.1)',
                              color: '#30d158',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '500',
                            }}
                          >
                            {country.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div>
                    <div style={{ marginBottom: '32px' }}>
                      {[
                        { title: 'Challenge', content: story.challenge },
                        { title: 'Solution', content: story.solution },
                      ].map((section, i) => (
                        <div key={i} style={{ marginBottom: '24px' }}>
                          <h4
                            style={{
                              fontSize: '20px',
                              fontWeight: '600',
                              color: '#000000',
                              marginBottom: '12px',
                              fontFamily:
                                'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                          >
                            {section.title}
                          </h4>
                          <p
                            style={{
                              fontSize: '17px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              lineHeight: '1.47059',
                              fontWeight: '400',
                            }}
                          >
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div style={{ marginBottom: '32px' }}>
                      <h4
                        style={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#000000',
                          marginBottom: '16px',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        Results
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {story.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              marginBottom: '12px',
                              fontSize: '15px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              lineHeight: '1.47059',
                              fontWeight: '400',
                            }}
                          >
                            <CheckCircle
                              sx={{
                                fontSize: 18,
                                color: '#30d158',
                                marginTop: '1px',
                                flexShrink: 0,
                              }}
                            />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div
                      style={{
                        padding: '24px',
                        borderRadius: '16px',
                        background:
                          'linear-gradient(135deg, rgba(48, 209, 88, 0.05) 0%, rgba(255, 59, 48, 0.05) 100%)',
                        border: '1px solid rgba(48, 209, 88, 0.1)',
                      }}
                    >
                      <blockquote
                        style={{
                          fontSize: '17px',
                          color: '#000000',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          lineHeight: '1.47059',
                          fontStyle: 'italic',
                          marginBottom: '16px',
                          fontWeight: '400',
                        }}
                      >
                        "{story.quote}"
                      </blockquote>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #30d158 0%, #ff3b30 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ccebff',
                            fontFamily:
                              'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          }}
                        >
                          {story.testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                          >
                            {story.testimonial.name}
                          </div>
                          <div
                            style={{
                              fontSize: '13px',
                              color: '#000000',
                              fontFamily:
                                'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                            }}
                          >
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
      <section
        style={{
          padding: '80px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background gradient - Apple style */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(48, 209, 88, 0.03), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Header - Centered */}
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                background:
                  'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Why enterprises choose us.
            </h2>
            <p
              style={{
                fontSize: '21px',
                color: '#1a237e',
                maxWidth: '650px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Specialized expertise for complex, multi-country enterprise transformations.
            </p>
          </motion.div>
        </div>

        {/* Apple Product Grid - Responsive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px',
            width: '95%',
            margin: '0 auto',
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  borderRadius: '22px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Apple-style Icon Container */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, #30d158 0%, #ff3b30 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow:
                      '0 8px 32px rgba(48, 209, 88, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {React.cloneElement(benefit.icon, {
                    sx: {
                      fontSize: 32,
                      color: '#ccebff',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
                    },
                  })}
                </div>

                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.16667',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {benefit.title}
                </h3>

                <p
                  style={{
                    fontSize: '17px',
                    color: '#000000',
                    marginBottom: '24px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.47059',
                    letterSpacing: '-0.022em',
                    fontWeight: '400',
                    flex: 1,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple CTA Section */}
      <section
        style={{
          padding: '80px 20px',
          background: '#e3f2fd',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(48, 209, 88, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 59, 48, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '600',
                color: '#1a237e',
                marginBottom: '20px',
                letterSpacing: '-0.025em',
                lineHeight: '1.05',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Ready for your enterprise migration?
            </h2>

            <p
              style={{
                fontSize: '24px',
                color: '#283593',
                lineHeight: '1.33',
                marginBottom: '64px',
                fontWeight: '400',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Join these successful enterprise clients who transformed their global payroll
              operations. Get a comprehensive consultation tailored to your enterprise requirements
              and complexity.
            </p>

            <div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/quote'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: '#007AFF',
                    border: 'none',
                    borderRadius: '980px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.background = '#0056CC';
                    e.target.style.boxShadow = '0 8px 24px rgba(0, 122, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = '#007AFF';
                    e.target.style.boxShadow = '0 4px 16px rgba(0, 122, 255, 0.3)';
                  }}
                >
                  <Phone sx={{ fontSize: 18 }} />
                  Get Enterprise Consultation
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to='/services/large-enterprise'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '17px 44px',
                    background: 'transparent',
                    border: '2px solid #007AFF',
                    borderRadius: '980px',
                    color: '#007AFF',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.background = '#007AFF';
                    e.target.style.color = 'white';
                    e.target.style.borderColor = '#007AFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#007AFF';
                    e.target.style.borderColor = '#007AFF';
                  }}
                >
                  <ArrowForward sx={{ fontSize: 18 }} />
                  Learn About Enterprise Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apple Related Success Stories Section */}
      <section
        style={{ padding: '80px 20px 60px 20px', background: '#e3f2fd', position: 'relative' }}
      >
        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)',
                fontWeight: '700',
                color: '#1a237e',
                marginBottom: '12px',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.0625',
                letterSpacing: '-0.009em',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              More Success Stories.
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#283593',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.381',
                letterSpacing: '.011em',
                fontWeight: '400',
              }}
            >
              Explore success stories from different business segments.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: <Business sx={{ fontSize: 48, color: '#ccebff' }} />,
                title: 'SME Success Stories',
                description: 'Tailored migration solutions for small to medium enterprises',
                link: '/success-stories/sme',
                gradient: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
              },
              {
                icon: <Support sx={{ fontSize: 48, color: '#ccebff' }} />,
                title: 'Consultancy Stories',
                description: 'Strategic guidance and optimization without full migration',
                link: '/success-stories/consultancy',
                gradient: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -8 }}
              >
                <div
                  style={{
                    background: item.gradient,
                    borderRadius: '22px',
                    padding: '48px 32px',
                    color: '#ccebff',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow:
                      index === 0
                        ? '0 20px 64px rgba(0, 122, 255, 0.4)'
                        : '0 20px 64px rgba(255, 149, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Apple Ambient Effects */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-20%',
                      left: '-20%',
                      width: '150px',
                      height: '150px',
                      background:
                        'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
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
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#ccebff',
                        marginBottom: '16px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '17px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '32px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.47059',
                        fontWeight: '400',
                      }}
                    >
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
                        color: '#ccebff',
                        textDecoration: 'none',
                        fontSize: '17px',
                        fontWeight: '500',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        userSelect: 'none',
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

export default LargeEnterpriseSuccessStories;
