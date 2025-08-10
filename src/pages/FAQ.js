import React, { useState } from 'react';
import {
  HelpOutline,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';
import { 
  ServiceCard, 
  FeatureCard, 
  StatsCard, 
  CTACard,
  getServiceIcon,
  getFeatureIcon
} from '../components/ProfessionalCards';


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
    <main className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <HelpOutline className="icon-sm" />
              Expert Answers to Your Questions
            </div>
            
            <h1 className="display-large">Frequently Asked Questions</h1>
            
            <p className="body-large text-secondary hero-subtitle">
              At GlobalPayrollMigration.com, we know payroll transformation can feel overwhelming. 
              Here are answers to the most common questions our clients ask before starting a project.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="headline-large">Quick Facts</h2>
            <p className="body-large text-secondary">
              Key information about our payroll migration services
            </p>
          </div>

          <div className="stats-grid">
            {quickStats.map((stat, index) => (
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
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="headline-large">Why Choose Us</h2>
            <p className="body-large text-secondary">
              Our expertise ensures successful payroll transformations
            </p>
          </div>

          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={getFeatureIcon(feature.type)}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2 className="headline-large">Detailed Answers</h2>
            <p className="body-large text-secondary">
              Comprehensive responses to help you understand our process and approach
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question-content">
                    <span className="faq-category">{faq.category}</span>
                    <h3 className="title-medium">{faq.question}</h3>
                  </div>
                  <div className="faq-toggle">
                    {openFAQ === index ? <ExpandLess /> : <ExpandMore />}
                  </div>
                </div>
                
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p className="body-large text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTACard
        title="Still Have Questions?"
        subtitle="Our payroll migration experts are here to help. Get personalized answers to your specific situation and requirements."
        primaryAction={{
          label: 'Schedule Consultation',
          onClick: () => window.location.href = '/contact'
        }}
        secondaryAction={{
          label: 'Send Message',
          onClick: () => window.location.href = '/contact'
        }}
        gradient
      />

      {/* Related Resources */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="headline-large">Learn More</h2>
            <p className="body-large text-secondary">
              Explore additional resources to understand our services and approach
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={getServiceIcon('consultancy')}
              title="Our Services"
              description="Detailed overview of all our payroll migration and implementation services"
              onLearnMore={() => window.location.href = '/services'}
            />
            
            <ServiceCard
              icon={getServiceIcon('enterprise')}
              title="Success Stories"
              description="Real examples of successful migrations across various industries and regions"
              onLearnMore={() => window.location.href = '/success-stories'}
            />
            
            <ServiceCard
              icon={getServiceIcon('sme')}
              title="Our Process"
              description="Learn about our proven methodology and approach to payroll migrations"
              onLearnMore={() => window.location.href = '/about'}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;