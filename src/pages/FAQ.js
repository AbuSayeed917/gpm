import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpOutline,
  ExpandMore,
  ExpandLess,
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
  CheckCircle
} from '@mui/icons-material';


const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
    <div className="surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 surface-container">
        <div className="container">
          <div className="text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'var(--color-primary-container)' }}
            >
              <HelpOutline sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
              <span className="body-small font-medium text-primary">Expert Answers</span>
            </div>
            
            <h1 className="display-large mb-6 text-on-surface">
              Frequently Asked Questions
            </h1>
            
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Everything you need to know about our payroll migration services, process, and approach. 
              Get clear answers from our experts who have successfully completed 500+ migrations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 surface-variant">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-4 text-on-surface">Quick Facts</h2>
            <p className="body-large text-on-surface-variant">
              Key information about our payroll migration services
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="card text-center p-6">
                <div className="display-small mb-2 text-primary">{stat.value}</div>
                <h3 className="title-medium mb-2 text-on-surface">{stat.label}</h3>
                <p className="body-small text-on-surface-variant">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Why Choose Us</h2>
            <p className="body-large text-on-surface-variant">
              Our expertise ensures successful payroll transformations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => {
              const iconMap = {
                speed: <Speed sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
                security: <Security sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
                support: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
                analytics: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />
              };
              return (
                <div key={index} className="card p-6">
                  <div className="flex items-start gap-6">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary-container)' }}
                    >
                      {iconMap[feature.type]}
                    </div>
                    <div>
                      <h3 className="headline-small mb-3 text-on-surface">{feature.title}</h3>
                      <p className="body-medium text-on-surface-variant">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 surface-container">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Detailed Answers</h2>
            <p className="body-large text-on-surface-variant">
              Comprehensive responses to help you understand our process and approach
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button 
                  className={`w-full text-left p-6 transition-colors ${
                    openFAQ === index ? 'bg-surface-container' : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                  style={{
                    backgroundColor: openFAQ === index ? 'var(--color-surface-container)' : 'transparent'
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div 
                        className="inline-block px-3 py-1 rounded-full mb-3 text-xs font-medium uppercase tracking-wide"
                        style={{ 
                          backgroundColor: 'var(--color-primary-container)',
                          color: 'var(--color-primary)'
                        }}
                      >
                        {faq.category}
                      </div>
                      <h3 className="title-large text-on-surface">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0 transition-transform" style={{
                      transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <ExpandMore sx={{ fontSize: 24, color: 'var(--color-on-surface-variant)' }} />
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="body-large text-on-surface-variant leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 surface-variant">
        <div className="container">
          <div className="card p-12 text-center" style={{
            background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary-container) 100%)'
          }}>
            <h2 className="display-medium mb-6 text-on-surface">
              Still Have Questions?
            </h2>
            <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
              Our payroll migration experts are here to help. Get personalized answers to your specific situation and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Phone sx={{ fontSize: 20 }} />
                Schedule Consultation
              </Link>
              <Link to="/contact" className="btn-outlined">
                <Email sx={{ fontSize: 20 }} />
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Learn More</h2>
            <p className="body-large text-on-surface-variant">
              Explore additional resources to understand our services and approach
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Timeline sx={{ fontSize: 48, color: 'var(--color-tertiary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Our Services</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Detailed overview of all our payroll migration and implementation services
              </p>
              <Link to="/services" className="btn-outlined w-full">
                Learn More
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
            
            <div className="card-elevated p-8 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <People sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Success Stories</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Real examples of successful migrations across various industries and regions
              </p>
              <Link to="/success-stories" className="btn-outlined w-full">
                Learn More
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
            
            <div className="card-elevated p-8 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Business sx={{ fontSize: 48, color: 'var(--color-primary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Our Process</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Learn about our proven methodology and approach to payroll migrations
              </p>
              <Link to="/about" className="btn-outlined w-full">
                Learn More
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;