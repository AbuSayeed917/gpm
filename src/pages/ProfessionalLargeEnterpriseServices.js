import React from 'react';
import { Link } from 'react-router-dom';
import {
  Settings,
  CheckCircle,
  ArrowForward,
  Public,
  Shield,
  Support
} from '@mui/icons-material';
import { FeatureCard, StatsCard } from '../components/ProfessionalCards';

const ProfessionalLargeEnterpriseServices = () => {
  const features = [
    {
      icon: <Settings />,
      title: "Complex System Integration",
      description: "Seamless integration with existing ERP, HR, and financial systems across multiple platforms."
    },
    {
      icon: <Public />,
      title: "Global Compliance",
      description: "Multi-country payroll migrations with full regulatory compliance and localization support."
    },
    {
      icon: <Shield />,
      title: "Enterprise Security",
      description: "Bank-grade security with ISO 27001 certification and SOC 2 Type II compliance."
    },
    {
      icon: <Support />,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock support with dedicated project manager and technical team."
    }
  ];

  const capabilities = [
    {
      title: "Multi-System Architecture",
      description: "Handle complex migrations involving multiple payroll systems, databases, and integrations",
      items: [
        "ERP system integration (SAP, Oracle, Workday)",
        "Legacy system modernization",
        "API development and management",
        "Data warehouse integration"
      ]
    },
    {
      title: "Global Compliance Management",
      description: "Ensure compliance across all jurisdictions and regulatory requirements",
      items: [
        "Multi-country tax regulations",
        "GDPR and data privacy compliance",
        "SOX compliance for public companies",
        "Industry-specific requirements"
      ]
    },
    {
      title: "Scalable Infrastructure",
      description: "Enterprise-grade infrastructure that scales with your organization",
      items: [
        "Cloud-native architecture",
        "Auto-scaling capabilities",
        "Disaster recovery planning",
        "Performance optimization"
      ]
    }
  ];

  const tiers = [
    {
      name: "Enterprise Standard",
      price: "£150,000+",
      duration: "12-16 weeks",
      employees: "500-2,000",
      features: [
        "Multi-system integration",
        "Basic compliance management",
        "Dedicated project manager",
        "6-months post-migration support",
        "Standard reporting suite"
      ]
    },
    {
      name: "Enterprise Premium",
      price: "£300,000+",
      duration: "16-24 weeks",
      employees: "2,000-10,000",
      popular: true,
      features: [
        "Complex multi-region migration",
        "Advanced compliance management",
        "Dedicated team of specialists",
        "12-months post-migration support",
        "Custom integration development",
        "Advanced analytics platform"
      ]
    },
    {
      name: "Global Enterprise",
      price: "Custom Pricing",
      duration: "24+ weeks",
      employees: "10,000+",
      features: [
        "Global multi-country deployment",
        "Full regulatory compliance suite",
        "Dedicated migration center",
        "24-months post-migration support",
        "Custom platform development",
        "Executive dashboard and reporting"
      ]
    }
  ];

  const stats = [
    { value: "150+", label: "Enterprise Migrations", description: "Successfully completed" },
    { value: "99.9%", label: "Uptime Guarantee", description: "Zero business disruption" },
    { value: "£2.5M", label: "Average Savings", description: "Per enterprise client" },
    { value: "18 weeks", label: "Average Timeline", description: "Complex multi-system migrations" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Large Enterprise Payroll Migration
          </h1>
          <p className="hero-subtitle">
            Complex, multi-system payroll migrations for large organizations. 
            Global compliance, zero downtime, and enterprise-grade security guaranteed.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Consultation
            </Link>
            <Link to="/success-stories/large-enterprise" className="btn btn-outline btn-lg">
              Enterprise Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise-Grade Capabilities</h2>
            <p className="section-subtitle">
              Advanced features and capabilities designed for large-scale organizations
            </p>
          </div>

          <div className="grid grid-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deep Dive */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive solutions for the most complex enterprise requirements
            </p>
          </div>

          <div className="grid grid-1" style={{ gap: 'var(--space-6)' }}>
            {capabilities.map((capability, index) => (
              <div key={index} className="card card-elevated">
                <div className="card-body">
                  <div className="grid grid-2" style={{ gap: 'var(--space-6)', alignItems: 'start' }}>
                    <div>
                      <h3 className="service-title">{capability.title}</h3>
                      <p className="service-description">{capability.description}</p>
                    </div>
                    <div>
                      <ul className="service-features">
                        {capability.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 mb-2">
                            <CheckCircle 
                              style={{ 
                                fontSize: '16px', 
                                color: 'var(--color-success-500)',
                                marginTop: '2px',
                                flexShrink: 0
                              }} 
                            />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Migration Tiers</h2>
            <p className="section-subtitle">
              Scalable solutions that grow with your organization's complexity
            </p>
          </div>

          <div className="grid grid-3">
            {tiers.map((tier, index) => (
              <div key={index} className={`card ${tier.popular ? 'card-bordered' : ''}`} style={{ position: 'relative' }}>
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}>
                    <div className="badge badge-primary">Most Popular</div>
                  </div>
                )}
                
                <div className="card-body text-center">
                  <h3 className="service-title">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <div className="text-sm text-secondary mb-4">
                    {tier.duration} • {tier.employees} employees
                  </div>
                  
                  <ul className="service-features mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 mb-2">
                        <CheckCircle 
                          style={{ 
                            fontSize: '16px', 
                            color: 'var(--color-success-500)',
                            marginTop: '2px',
                            flexShrink: 0
                          }} 
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'} w-full`}
                  >
                    {tier.name === 'Global Enterprise' ? 'Discuss Requirements' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Success Story */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Enterprise Success Story
              </h2>
              <blockquote className="text-lg italic text-secondary mb-6">
                "The migration of our global payroll systems across 15 countries was completed 
                flawlessly. The team's expertise in handling complex compliance requirements 
                and system integrations was exceptional. We achieved 85% cost reduction and 
                improved processing efficiency significantly."
              </blockquote>
              <div className="flex items-center gap-3 mb-6">
                <div className="testimonial-avatar">S</div>
                <div>
                  <h4 className="font-semibold text-primary">Sarah Mitchell</h4>
                  <p className="text-sm text-secondary">Global HR Director, TechGlobal Manufacturing</p>
                </div>
              </div>
              <Link to="/success-stories/large-enterprise" className="btn btn-outline">
                Read Full Case Study
                <ArrowForward size={16} />
              </Link>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="service-title text-center mb-4">Migration Results</h3>
                <div className="grid grid-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">15</div>
                    <div className="text-sm text-secondary">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">2,500</div>
                    <div className="text-sm text-secondary">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">85%</div>
                    <div className="text-sm text-secondary">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">12 weeks</div>
                    <div className="text-sm text-secondary">Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready for Enterprise-Scale Migration?</h2>
              <p className="text-lg mb-6">
                Let's discuss your complex requirements and create a tailored migration strategy.
              </p>
              
              <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Schedule Executive Briefing
                </Link>
                <Link to="/about" className="btn btn-ghost btn-lg">
                  Learn About Our Process
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

export default ProfessionalLargeEnterpriseServices;