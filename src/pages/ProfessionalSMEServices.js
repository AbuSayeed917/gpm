import React from 'react';
import { Link } from 'react-router-dom';
import {
  MonetizationOn,
  Speed,
  Support,
  Security,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';
import { FeatureCard, StatsCard } from '../components/ProfessionalCards';

const ProfessionalSMEServices = () => {
  const features = [
    {
      icon: <MonetizationOn />,
      title: "Cost-Effective Solutions",
      description: "Affordable migration packages designed for SME budgets without compromising on quality or security."
    },
    {
      icon: <Speed />,
      title: "Quick Implementation",
      description: "Streamlined processes ensure minimal downtime and faster go-live timelines for your business operations."
    },
    {
      icon: <Support />,
      title: "Dedicated Support",
      description: "Personal migration specialist assigned to guide you through every step of the process."
    },
    {
      icon: <Security />,
      title: "Data Security",
      description: "Enterprise-grade security protocols to protect your sensitive payroll data throughout migration."
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "£15,000",
      duration: "4-6 weeks",
      employees: "Up to 50",
      features: [
        "Single payroll system migration",
        "Basic data validation",
        "Email support",
        "1-month post-migration support",
        "User training sessions"
      ]
    },
    {
      name: "Professional",
      price: "£25,000",
      duration: "6-8 weeks", 
      employees: "51-150",
      popular: true,
      features: [
        "Multiple system integration",
        "Advanced data validation",
        "Priority phone & email support",
        "3-months post-migration support",
        "Custom reporting setup",
        "Dedicated project manager"
      ]
    },
    {
      name: "Enterprise",
      price: "£45,000",
      duration: "8-12 weeks",
      employees: "151-500",
      features: [
        "Complex multi-system migration",
        "Custom integration development",
        "24/7 dedicated support line",
        "6-months post-migration support",
        "Advanced reporting & analytics",
        "On-site training and support"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      duration: "1 week",
      description: "Understanding your current setup and requirements"
    },
    {
      step: 2,
      title: "System Analysis",
      duration: "1-2 weeks",
      description: "Detailed analysis of your existing payroll data and processes"
    },
    {
      step: 3,
      title: "Migration Planning",
      duration: "1 week",
      description: "Creating detailed migration plan and timeline"
    },
    {
      step: 4,
      title: "Data Migration",
      duration: "2-4 weeks",
      description: "Secure transfer and validation of your payroll data"
    },
    {
      step: 5,
      title: "Testing & Go-Live",
      duration: "1 week",
      description: "Comprehensive testing and smooth transition to new system"
    }
  ];

  const stats = [
    { value: "200+", label: "SME Migrations", description: "Successfully completed" },
    { value: "99.8%", label: "Success Rate", description: "Zero-downtime guarantee" },
    { value: "£180K", label: "Average Savings", description: "Cost reduction per client" },
    { value: "6 weeks", label: "Average Timeline", description: "From start to go-live" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            SME Payroll Migration Services
          </h1>
          <p className="hero-subtitle">
            Affordable, efficient payroll migration solutions designed specifically 
            for small to medium enterprises. Zero downtime guaranteed.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Quote
            </Link>
            <Link to="/success-stories/sme" className="btn btn-outline btn-lg">
              View SME Success Stories
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
            <h2 className="section-title">Why SMEs Choose Us</h2>
            <p className="section-subtitle">
              Tailored solutions that understand the unique needs of growing businesses
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

      {/* Service Packages */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SME Migration Packages</h2>
            <p className="section-subtitle">
              Choose the package that best fits your business size and requirements
            </p>
          </div>

          <div className="grid grid-3">
            {packages.map((pkg, index) => (
              <div key={index} className={`card ${pkg.popular ? 'card-bordered' : ''}`} style={{ position: 'relative' }}>
                {pkg.popular && (
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
                  <h3 className="service-title">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <div className="text-sm text-secondary mb-4">
                    {pkg.duration} • {pkg.employees} employees
                  </div>
                  
                  <ul className="service-features mb-6">
                    {pkg.features.map((feature, featureIndex) => (
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
                    className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} w-full`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our SME Migration Process</h2>
            <p className="section-subtitle">
              A streamlined 5-step process designed for efficiency and minimal disruption
            </p>
          </div>

          <div className="grid grid-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {processSteps.map((step, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="service-icon flex-shrink-0">
                      <span className="text-2xl font-bold">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="service-title">{step.title}</h3>
                        <div className="badge badge-success">{step.duration}</div>
                      </div>
                      <p className="service-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Preview */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                SME Success Story
              </h2>
              <blockquote className="text-lg italic text-secondary mb-6">
                "The migration was completed in just 5 weeks with zero disruption to our operations. 
                Our payroll processing time has been cut in half, and the new system handles our 
                complex commission structures perfectly."
              </blockquote>
              <div className="flex items-center gap-3 mb-6">
                <div className="testimonial-avatar">M</div>
                <div>
                  <h4 className="font-semibold text-primary">Mark Thompson</h4>
                  <p className="text-sm text-secondary">Operations Director, TechStart Solutions</p>
                </div>
              </div>
              <Link to="/success-stories/sme" className="btn btn-outline">
                Read Full Case Study
                <ArrowForward size={16} />
              </Link>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="service-title text-center mb-4">Key Results</h3>
                <div className="grid grid-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">50%</div>
                    <div className="text-sm text-secondary">Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">£95K</div>
                    <div className="text-sm text-secondary">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">5 weeks</div>
                    <div className="text-sm text-secondary">Migration Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-700">120</div>
                    <div className="text-sm text-secondary">Employees</div>
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
              <h2>Ready to Transform Your Payroll?</h2>
              <p className="text-lg mb-6">
                Join 200+ SMEs that have successfully migrated with our proven methodology.
              </p>
              
              <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Get Free Consultation
                </Link>
                <Link to="/quote" className="btn btn-ghost btn-lg">
                  Request Quote
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

export default ProfessionalSMEServices;