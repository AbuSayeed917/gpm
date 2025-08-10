import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CloudUpload,
  Public,
  Assessment,
  Check,
  Business,
  Storage,
  Computer,
  Handyman,
  SwapHoriz,
  Security,
  MergeType,
  CompareArrows,
  HealthAndSafety,
  Settings,
  QuestionAnswer,
  ArrowForward,
  CheckCircle,
  PlayArrow,
  Lightbulb,
  Speed,
  Shield
} from '@mui/icons-material';

const Services2025 = () => {
  const [activeTab, setActiveTab] = useState('migration');

  const migrationServices = [
    {
      icon: <Computer sx={{ fontSize: 48, color: 'var(--color-primary)' }} />,
      title: "Legacy Payroll System Migration",
      description: "Migrate from outdated or unsupported systems to modern payroll platforms with accurate historical transfer.",
      features: [
        "Complete data preservation and validation",
        "Zero downtime migration process", 
        "Historical data accuracy guarantee",
        "Comprehensive system testing",
        "Legacy system decommissioning support"
      ],
      platforms: ["Sage", "Legacy ADP", "Ceridian", "Custom systems", "Old Workday versions"],
      timeframe: "4-8 weeks",
      complexity: "Medium to High"
    },
    {
      icon: <Business sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />,
      title: "Bespoke/In-House Payroll Migration",
      description: "Move customised or internally-developed payroll solutions to scalable, compliant platforms — cloud or on-prem.",
      features: [
        "Custom code analysis and mapping",
        "Business logic preservation",
        "Scalability improvements", 
        "Modern platform integration",
        "Team knowledge transfer"
      ],
      platforms: ["Custom .NET systems", "Excel-based solutions", "Access databases", "Internal tools"],
      timeframe: "6-12 weeks",
      complexity: "High"
    },
    {
      icon: <CloudUpload sx={{ fontSize: 48, color: 'var(--color-tertiary)' }} />,
      title: "Cloud Payroll Migration", 
      description: "Transition to modern platforms like Dayforce, Workday, ADP, Paychex, or Xero for better flexibility, access, and integration.",
      features: [
        "Cloud platform optimization",
        "Enhanced accessibility and mobility",
        "Automatic updates and maintenance",
        "Improved integration capabilities",
        "Scalability and performance gains"
      ],
      platforms: ["Dayforce", "Workday", "ADP Workforce Now", "Paychex", "Xero Payroll"],
      timeframe: "3-6 weeks",
      complexity: "Medium"
    },
    {
      icon: <Storage sx={{ fontSize: 48, color: 'var(--color-warning-60)' }} />,
      title: "On-Premise Payroll Migration",
      description: "Manage migrations to or from on-prem systems such as Sage, SAP, or Ceridian — with full control over setup and data.",
      features: [
        "Complete infrastructure control",
        "Enhanced data security",
        "Customized server configurations",
        "Direct database access", 
        "Compliance with data residency requirements"
      ],
      platforms: ["SAP HCM", "Sage HRMS", "Ceridian Dayforce", "Oracle HCM", "PeopleSoft"],
      timeframe: "6-10 weeks", 
      complexity: "High"
    },
    {
      icon: <Public sx={{ fontSize: 48, color: 'var(--color-error)' }} />,
      title: "Multi-Country Payroll Consolidation",
      description: "Bring together multiple regional payrolls under a unified system for global visibility, compliance, and control.",
      features: [
        "Global payroll standardization",
        "Multi-currency support",
        "Regional compliance management",
        "Unified reporting dashboard",
        "Cross-border data synchronization"
      ],
      platforms: ["Workday Global", "SAP SuccessFactors", "ADP GlobalView", "Oracle Global HR"],
      timeframe: "8-16 weeks",
      complexity: "Very High"
    }
  ];

  const consultancyServices = [
    {
      icon: <Assessment sx={{ fontSize: 48, color: 'var(--color-primary)' }} />,
      title: "Payroll System Assessment",
      description: "Comprehensive evaluation of your current payroll infrastructure, identifying inefficiencies and improvement opportunities.",
      benefits: [
        "System performance analysis",
        "Cost optimization recommendations", 
        "Security vulnerability assessment",
        "Compliance gap analysis",
        "Future-proofing strategies"
      ]
    },
    {
      icon: <Settings sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />,
      title: "Process Optimization",
      description: "Streamline existing payroll processes to improve efficiency, reduce errors, and enhance compliance without full migration.",
      benefits: [
        "Workflow automation implementation",
        "Error reduction strategies",
        "Performance monitoring setup",
        "Staff training and development",
        "Best practice implementation"
      ]
    },
    {
      icon: <Security sx={{ fontSize: 48, color: 'var(--color-tertiary)' }} />,
      title: "Compliance & Security Review",
      description: "Ensure your payroll systems meet current regulations and security standards across all applicable jurisdictions.",
      benefits: [
        "Regulatory compliance audit",
        "Data protection assessment", 
        "Security protocol review",
        "Risk mitigation planning",
        "Ongoing compliance monitoring"
      ]
    }
  ];

  const supportServices = [
    {
      icon: <HealthAndSafety sx={{ fontSize: 40, color: 'var(--color-success-60)' }} />,
      title: "24/7 Technical Support",
      description: "Round-the-clock support from certified payroll specialists"
    },
    {
      icon: <QuestionAnswer sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,  
      title: "Training & Documentation",
      description: "Comprehensive training programs and detailed documentation"
    },
    {
      icon: <Handyman sx={{ fontSize: 40, color: 'var(--color-warning-60)' }} />,
      title: "Ongoing Maintenance", 
      description: "Regular system maintenance and performance optimization"
    },
    {
      icon: <Shield sx={{ fontSize: 40, color: 'var(--color-tertiary)' }} />,
      title: "SLA Guarantee",
      description: "Service level agreements with guaranteed response times"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment", 
      description: "Comprehensive analysis of your current payroll system, data structure, and business requirements.",
      icon: <Lightbulb sx={{ fontSize: 32, color: 'var(--color-primary)' }} />
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Detailed migration plan with timelines, resource allocation, and risk mitigation strategies.",
      icon: <Assessment sx={{ fontSize: 32, color: 'var(--color-secondary)' }} />
    },
    {
      number: "03",
      title: "Testing & Validation",
      description: "Rigorous testing in staging environment to ensure data accuracy and system functionality.", 
      icon: <CheckCircle sx={{ fontSize: 32, color: 'var(--color-tertiary)' }} />
    },
    {
      number: "04",
      title: "Migration Execution", 
      description: "Careful execution of migration plan with real-time monitoring and immediate issue resolution.",
      icon: <PlayArrow sx={{ fontSize: 32, color: 'var(--color-warning-60)' }} />
    },
    {
      number: "05",
      title: "Go-Live & Support",
      description: "Seamless transition to new system with comprehensive support and user training.",
      icon: <Speed sx={{ fontSize: 32, color: 'var(--color-success-60)' }} />
    }
  ];

  const tabs = [
    { id: 'migration', label: 'Migration Services', icon: <SwapHoriz sx={{ fontSize: 20 }} /> },
    { id: 'consultancy', label: 'Consultancy', icon: <Assessment sx={{ fontSize: 20 }} /> },
    { id: 'process', label: 'Our Process', icon: <Settings sx={{ fontSize: 20 }} /> }
  ];

  return (
    <div className="surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 surface-container">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-large mb-6 text-on-surface">
              Comprehensive Payroll Migration Services
            </h1>
            <p className="body-large mb-8 text-on-surface-variant">
              From legacy system modernization to multi-country consolidation, 
              our expert team delivers seamless payroll migrations with zero downtime guarantee 
              across all platforms and complexities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                Get Free Assessment
                <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
              <Link to="/success-stories" className="btn-outlined">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation Tabs */}
      <section className="py-8 surface-variant sticky top-16 z-20">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex rounded-lg p-1" style={{ backgroundColor: 'var(--color-surface-container)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ${
                    activeTab === tab.id 
                      ? 'shadow-2' 
                      : ''
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? 'var(--color-primary-container)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-on-primary-container)' : 'var(--color-on-surface)'
                  }}
                >
                  {tab.icon}
                  <span className="label-large">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Services Tab */}
      {activeTab === 'migration' && (
        <section className="py-20 surface">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-medium mb-6 text-on-surface">Migration Services</h2>
              <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
                Expert migration services for every payroll system type and complexity level. 
                Our proven methodologies ensure successful transitions with complete data integrity.
              </p>
            </div>
            
            <div className="space-y-12">
              {migrationServices.map((service, index) => (
                <div 
                  key={index}
                  className="card-elevated p-8 lg:p-12"
                  style={{
                    background: index % 2 === 0 
                      ? 'var(--color-surface)' 
                      : 'var(--color-surface-container-low)'
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        {service.icon}
                        <div>
                          <h3 className="headline-large mb-2 text-on-surface">{service.title}</h3>
                          <div className="flex gap-4 text-on-surface-variant body-small">
                            <span>⏱️ {service.timeframe}</span>
                            <span>🔧 {service.complexity}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="body-large mb-6 text-on-surface-variant">
                        {service.description}
                      </p>

                      {/* Platforms */}
                      <div className="mb-6">
                        <h4 className="title-medium mb-3 text-on-surface">Supported Platforms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, platformIndex) => (
                            <span 
                              key={platformIndex}
                              className="px-3 py-1 rounded-full body-small"
                              style={{
                                backgroundColor: 'var(--color-secondary-container)',
                                color: 'var(--color-on-secondary-container)'
                              }}
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="title-medium mb-4 text-on-surface">Key Features:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle sx={{ 
                              fontSize: 20, 
                              color: 'var(--color-success-60)', 
                              mt: 0.25, 
                              flexShrink: 0 
                            }} />
                            <span className="body-medium text-on-surface-variant">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to="/quote" 
                        className="btn-primary mt-6 w-full sm:w-auto"
                      >
                        Get Quote for This Service
                        <ArrowForward sx={{ fontSize: 18 }} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Consultancy Services Tab */}
      {activeTab === 'consultancy' && (
        <section className="py-20 surface">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-medium mb-6 text-on-surface">Consultancy Services</h2>
              <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
                Strategic guidance and optimization services to maximize the value of your existing payroll systems 
                without the need for full migration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {consultancyServices.map((service, index) => (
                <div key={index} className="card p-8">
                  <div className="text-center mb-6">
                    {service.icon}
                    <h3 className="headline-small mt-4 mb-3 text-on-surface">{service.title}</h3>
                    <p className="body-medium text-on-surface-variant">{service.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="title-small mb-3 text-on-surface">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle sx={{ 
                            fontSize: 16, 
                            color: 'var(--color-success-60)', 
                            mt: 0.25 
                          }} />
                          <span className="body-small text-on-surface-variant">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Services */}
            <div className="card p-8 mb-12" style={{
              background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary-container) 100%)'
            }}>
              <div className="text-center mb-8">
                <h3 className="headline-large mb-4 text-on-surface">Ongoing Support Services</h3>
                <p className="body-large text-on-surface-variant">
                  Comprehensive support packages to ensure your payroll systems continue to perform optimally.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportServices.map((service, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="mb-3">{service.icon}</div>
                    <h4 className="title-medium mb-2 text-on-surface">{service.title}</h4>
                    <p className="body-small text-on-surface-variant">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="btn-primary">
                Discuss Your Requirements
                <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process Tab */}
      {activeTab === 'process' && (
        <section className="py-20 surface">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-medium mb-6 text-on-surface">Our Proven Process</h2>
              <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
                A systematic approach that has delivered over 500 successful migrations. 
                Every step is designed to minimize risk and ensure seamless transitions.
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="card p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-primary-container)' }}
                      >
                        <span className="headline-small text-on-primary-container">{step.number}</span>
                      </div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-surface-container-high)' }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="headline-medium mb-3 text-on-surface">{step.title}</h3>
                      <p className="body-large text-on-surface-variant">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div 
                        className="w-0.5 h-8"
                        style={{ backgroundColor: 'var(--color-outline-variant)' }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="headline-large mb-6 text-on-surface">Ready to Start Your Migration?</h3>
              <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
                Every successful migration starts with understanding your unique requirements. 
                Get a free consultation to discuss your project.
              </p>
              <Link to="/quote" className="btn-primary">
                Start Your Migration Journey
                <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Services2025;