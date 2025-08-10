import React from 'react';
import { Link } from 'react-router-dom';
import {
  Assessment,
  Psychology,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Analytics
} from '@mui/icons-material';
import { FeatureCard, StatsCard } from '../components/ProfessionalCards';

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
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Expert Payroll Consultancy Services
          </h1>
          <p className="hero-subtitle">
            Strategic guidance and optimization expertise for organizations seeking 
            to improve payroll operations without full system migration.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book Strategy Session
            </Link>
            <Link to="/success-stories/consultancy" className="btn btn-outline btn-lg">
              Consultancy Results
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
            <h2 className="section-title">Our Consultancy Approach</h2>
            <p className="section-subtitle">
              Strategic expertise that delivers measurable results and long-term value
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

      {/* Service Offerings */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Consultancy Services</h2>
            <p className="section-subtitle">
              Flexible engagement models tailored to your specific needs and objectives
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
            {services.map((service, index) => (
              <div key={index} className="card card-elevated">
                <div className="card-body">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="service-title">{service.title}</h3>
                    <div className="badge badge-success">{service.duration}</div>
                  </div>
                  
                  <p className="service-description mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-3">Key Deliverables:</h4>
                    <ul className="service-features">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="flex items-start gap-2 mb-2">
                          <CheckCircle 
                            style={{ 
                              fontSize: '16px', 
                              color: 'var(--color-success-500)',
                              marginTop: '2px',
                              flexShrink: 0
                            }} 
                          />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <Link to="/contact" className="btn btn-outline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Consultancy Process</h2>
            <p className="section-subtitle">
              A structured 4-phase approach ensuring comprehensive analysis and actionable recommendations
            </p>
          </div>

          <div className="grid grid-4">
            {approach.map((phase, index) => (
              <div key={index} className="card">
                <div className="card-body text-center">
                  <div className="service-icon mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="service-title">{phase.phase}</h3>
                  <div className="badge badge-primary mb-4">{phase.duration}</div>
                  
                  <ul className="service-features">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-sm mb-2">{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Consultancy */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                When to Choose Consultancy
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                  <div>
                    <h4 className="font-semibold text-primary">System Evaluation</h4>
                    <p className="text-sm text-secondary">Need expert assessment of current systems before major decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                  <div>
                    <h4 className="font-semibold text-primary">Process Optimization</h4>
                    <p className="text-sm text-secondary">Want to improve efficiency without full system replacement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                  <div>
                    <h4 className="font-semibold text-primary">Strategic Planning</h4>
                    <p className="text-sm text-secondary">Need roadmap for future payroll system evolution</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success-500 mt-1" style={{ fontSize: '20px' }} />
                  <div>
                    <h4 className="font-semibold text-primary">Compliance Review</h4>
                    <p className="text-sm text-secondary">Require expert guidance on regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="service-title text-center mb-4">Consultancy Success Story</h3>
                <blockquote className="text-base italic text-secondary mb-4">
                  "The strategic guidance saved us £850K while dramatically improving our payroll operations. 
                  The recommendations were practical, actionable, and delivered measurable results."
                </blockquote>
                <div className="flex items-center gap-3 mb-4">
                  <div className="testimonial-avatar">E</div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">Emma Williams</h4>
                    <p className="text-xs text-secondary">CFO, Financial Services Group</p>
                  </div>
                </div>
                <Link to="/success-stories/consultancy" className="btn btn-outline btn-sm w-full">
                  Read Case Study
                  <ArrowForward size={14} />
                </Link>
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
              <h2>Ready to Optimize Your Payroll Strategy?</h2>
              <p className="text-lg mb-6">
                Get expert insights and strategic guidance tailored to your organization's needs.
              </p>
              
              <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Book Strategy Session
                </Link>
                <Link to="/about" className="btn btn-ghost btn-lg">
                  Learn About Our Expertise
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

export default ProfessionalConsultancyServices;