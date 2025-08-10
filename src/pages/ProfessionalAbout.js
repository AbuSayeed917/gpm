import React from 'react';
import { Link } from 'react-router-dom';
import {
  Assessment,
  Psychology,
  Settings,
  RocketLaunch,
  Timeline,
  Group,
  Shield,
  Speed,
  Support,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';

const ProfessionalAbout = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Assessment",
      icon: <Assessment />,
      duration: "1-2 weeks",
      description: "Comprehensive analysis of your current payroll systems, processes, and requirements.",
      activities: [
        "Current system audit and documentation",
        "Data quality assessment and profiling", 
        "Integration mapping and dependency analysis",
        "Compliance requirements review"
      ]
    },
    {
      step: 2,
      title: "Planning & Design",
      icon: <Psychology />,
      duration: "2-3 weeks",
      description: "Detailed migration strategy and technical architecture design.",
      activities: [
        "Migration roadmap development",
        "Technical architecture design",
        "Data transformation mapping",
        "Testing strategy and plan"
      ]
    },
    {
      step: 3,
      title: "Development & Testing",
      icon: <Settings />,
      duration: "4-6 weeks",
      description: "Build migration tools and conduct comprehensive testing.",
      activities: [
        "Migration tool development",
        "Data validation framework",
        "Integration testing",
        "Performance optimization"
      ]
    },
    {
      step: 4,
      title: "Migration Execution",
      icon: <RocketLaunch />,
      duration: "1-2 weeks",
      description: "Execute the migration with zero downtime guarantee.",
      activities: [
        "Pre-migration validation",
        "Live data migration",
        "System switchover",
        "Post-migration verification"
      ]
    },
    {
      step: 5,
      title: "Support & Optimization",
      icon: <Support />,
      duration: "3 months",
      description: "Ongoing support and system optimization.",
      activities: [
        "24/7 support coverage",
        "Performance monitoring",
        "User training and adoption",
        "Continuous optimization"
      ]
    }
  ];

  const expertise = [
    {
      icon: <Timeline />,
      title: "10+ Years Experience",
      description: "Decade of expertise in payroll system migrations across industries"
    },
    {
      icon: <Group />,
      title: "Expert Team",
      description: "Certified professionals with deep payroll domain knowledge"
    },
    {
      icon: <Shield />,
      title: "Security First",
      description: "ISO 27001 certified with enterprise-grade security protocols"
    },
    {
      icon: <Speed />,
      title: "Zero Downtime",
      description: "Proven methodology ensuring business continuity throughout migration"
    }
  ];

  const stats = [
    { value: "500+", label: "Successful Migrations" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "50+", label: "Countries Served" },
    { value: "24/7", label: "Support Coverage" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            About Global Payroll Migration
          </h1>
          <p className="hero-subtitle">
            We are the UK's leading payroll migration specialists, helping organizations 
            seamlessly transition to new payroll systems with zero downtime guarantee.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
            <Link to="/success-stories" className="btn btn-outline btn-lg">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-sm" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Our expertise and proven methodology ensure successful payroll migrations
            </p>
          </div>

          <div className="grid grid-4">
            {expertise.map((item, index) => (
              <div key={index} className="card">
                <div className="card-body text-center">
                  <div className="service-icon" style={{ margin: '0 auto var(--space-4)' }}>
                    {item.icon}
                  </div>
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Migration Process</h2>
            <p className="section-subtitle">
              A proven 5-step methodology ensuring successful payroll migrations
            </p>
          </div>

          <div className="grid grid-1" style={{ gap: 'var(--space-8)' }}>
            {processSteps.map((step, index) => (
              <div key={index} className="card card-elevated">
                <div className="card-body">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div 
                        className="service-icon"
                        style={{ 
                          width: '80px', 
                          height: '80px',
                          fontSize: '2rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="text-center mt-2">
                        <span className="badge badge-primary">Step {step.step}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="service-title">{step.title}</h3>
                        <div className="badge badge-success">{step.duration}</div>
                      </div>
                      
                      <p className="service-description mb-4">{step.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Activities:</h4>
                        <div className="grid grid-2" style={{ gap: 'var(--space-2)' }}>
                          {step.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle 
                                style={{ 
                                  fontSize: '16px', 
                                  color: 'var(--color-success-500)',
                                  marginTop: '2px',
                                  flexShrink: 0
                                }} 
                              />
                              <span className="text-secondary">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-12)', alignItems: 'center' }}>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="text-secondary text-lg leading-relaxed space-y-4">
                <p>
                  Founded in 2014, Global Payroll Migration emerged from a simple observation: 
                  payroll migrations were consistently over-budget, behind schedule, and fraught with risks.
                </p>
                <p>
                  Our founders, having experienced these challenges firsthand in enterprise environments, 
                  set out to create a specialized consultancy focused exclusively on payroll migrations.
                </p>
                <p>
                  Today, we're the UK's leading payroll migration specialists, trusted by Fortune 500 
                  companies and growing businesses alike. Our proven methodology and zero-downtime 
                  guarantee have made us the go-to choice for organizations seeking seamless transitions.
                </p>
              </div>
            </div>
            
            <div className="card card-elevated">
              <div className="card-body">
                <h3 className="service-title mb-6">Our Mission</h3>
                <blockquote className="text-lg text-secondary italic mb-6">
                  "To make payroll migrations predictable, painless, and profitable 
                  for organizations worldwide."
                </blockquote>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                    <div>
                      <h4 className="font-semibold text-primary">Predictable</h4>
                      <p className="text-sm text-secondary">Fixed timelines and transparent pricing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                    <div>
                      <h4 className="font-semibold text-primary">Painless</h4>
                      <p className="text-sm text-secondary">Zero downtime with minimal disruption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                    <div>
                      <h4 className="font-semibold text-primary">Profitable</h4>
                      <p className="text-sm text-secondary">ROI-focused approach with measurable benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Start Your Migration?</h2>
              <p className="text-lg mb-6">
                Join 500+ organizations that have successfully migrated with our proven methodology.
              </p>
              
              <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Get Free Consultation
                </Link>
                <Link to="/services" className="btn btn-ghost btn-lg">
                  View Our Services
                  <ArrowForward size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalAbout;