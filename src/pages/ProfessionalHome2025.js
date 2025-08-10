import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Email,
  Speed,
  Support,
  Analytics,
  Business,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Star,
  People,
  Shield,
  Timeline
} from '@mui/icons-material';

const ProfessionalHome2025 = () => {
  const services = [
    {
      id: 'sme',
      title: 'SME Solutions',
      description: 'Tailored migration solutions for small to medium enterprises with focus on cost-effectiveness and minimal disruption.',
      icon: <Business sx={{ fontSize: 32, color: 'var(--color-primary)' }} />,
      features: [
        'Zero downtime migration',
        'Data validation and testing',
        'Staff training and support',
        '3 months post-migration support'
      ],
      href: '/services/sme',
      color: 'var(--color-primary-container)'
    },
    {
      id: 'enterprise',
      title: 'Large Enterprise',
      description: 'Complex multi-system migrations for large organizations with extensive compliance and integration requirements.',
      icon: <People sx={{ fontSize: 32, color: 'var(--color-secondary)' }} />,
      features: [
        'Multi-system integration',
        'Compliance management',
        '24/7 dedicated support',
        'Dedicated project manager'
      ],
      href: '/services/large-enterprise',
      color: 'var(--color-secondary-container)'
    },
    {
      id: 'consultancy',
      title: 'Expert Consultancy',
      description: 'Strategic guidance and optimization of existing payroll systems without full migration requirements.',
      icon: <Timeline sx={{ fontSize: 32, color: 'var(--color-tertiary)' }} />,
      features: [
        'Comprehensive system audit',
        'Process optimization',
        'Compliance review',
        'Best practice guidance'
      ],
      href: '/services/consultancy',
      color: 'var(--color-tertiary-container)'
    }
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 40 }} />,
      title: 'Zero Downtime Guarantee',
      description: 'Our proven migration process ensures your payroll operations continue uninterrupted throughout the entire migration.'
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast Implementation',
      description: 'Streamlined processes and expert methodology that get you up and running quickly without compromising quality.'
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our UK-based payroll migration specialists with guaranteed 2-hour response time.'
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: 'Proven Track Record',
      description: '500+ successful migrations with 99.9% success rate and average savings of £2.5M per client engagement.'
    }
  ];


  const testimonials = [
    {
      quote: 'The migration was seamless and completed ahead of schedule. Their expertise saved us months of work.',
      author: 'Sarah Johnson',
      title: 'HR Director',
      company: 'TechFlow Solutions',
      rating: 5
    },
    {
      quote: 'Outstanding service from start to finish. Zero downtime as promised and excellent ongoing support.',
      author: 'David Chen',
      title: 'CFO',
      company: 'Global Manufacturing Inc',
      rating: 5
    },
    {
      quote: 'Professional, knowledgeable team that delivered exactly what they promised. Highly recommended.',
      author: 'Emma Williams',
      title: 'Operations Manager',
      company: 'Retail Excellence Ltd',
      rating: 5
    }
  ];

  const clientLogos = [
    'Microsoft', 'Amazon', 'Google', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Samsung'
  ];

  return (
    <div className="surface" style={{minHeight: '80vh'}}>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 surface-container">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-24 lg:justify-between">
            {/* Hero Content */}
            <div className="text-center lg:text-left w-full lg:w-96">
              <h1 className="display-large mb-6 text-on-surface">
                Professional Payroll Migration Services
              </h1>
              <p className="body-large mb-8 text-on-surface-variant">
                Seamless payroll migration with zero downtime guarantee. 
                Expert UK-based team with proven track record of successful migrations 
                across industries and system complexities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/quote" className="btn-primary">
                  Get Free Consultation
                  <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
                <Link to="/success-stories" className="btn-outlined">
                  View Success Stories
                </Link>
              </div>
            </div>
            
            {/* Hero Visual - Company Goal */}
            <div className="flex justify-center lg:justify-center w-full lg:w-auto">
              <div className="text-center">
                <div className="animate-bounce-slow mb-6">
                  <TrendingUp 
                    sx={{ 
                      fontSize: 72, 
                      color: 'var(--color-primary)', 
                      filter: 'drop-shadow(0 4px 8px rgba(107, 62, 145, 0.3))'
                    }} 
                  />
                </div>
                <h3 className="headline-large animate-fade-in-up gradient-text">
                  Helping You To Succeed
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 surface">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Our Migration Services</h2>
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Comprehensive payroll migration solutions tailored to your organization's size, 
              complexity, and industry requirements. Every migration backed by our zero-downtime guarantee.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="card-elevated p-6 md:p-8 transition-all duration-300 flex-1 min-w-[280px] md:min-w-[320px] max-w-[400px]"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20 0%, var(--color-surface) 100%)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--elevation-4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--elevation-2)';
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="headline-small text-on-surface">{service.title}</h3>
                </div>
                
                <p className="body-large mb-6 text-on-surface-variant">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle sx={{ fontSize: 20, color: 'var(--color-success-60)', mt: 0.25 }} />
                      <span className="body-medium text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.href} 
                  className="btn-outlined w-full"
                  style={{ justifyContent: 'center' }}
                >
                  Learn More
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 surface-container">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Why Choose Us</h2>
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Industry-leading expertise, proven methodologies, and unwavering commitment 
              to your success make us the trusted choice for payroll migration.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-6">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    {React.cloneElement(feature.icon, { 
                      sx: { fontSize: 40, color: 'var(--color-primary)' } 
                    })}
                  </div>
                  <div>
                    <h3 className="headline-small mb-3 text-on-surface">{feature.title}</h3>
                    <p className="body-medium text-on-surface-variant">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 surface-variant">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="display-medium mb-6 text-on-surface">What Our Clients Say</h2>
            <p className="body-large text-on-surface-variant">
              Hear from organizations who have transformed their payroll operations with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      sx={{ fontSize: 20, color: 'var(--color-warning-60)' }} 
                    />
                  ))}
                </div>
                
                <blockquote className="body-large mb-6 text-on-surface-variant italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="title-medium text-on-surface">{testimonial.author}</div>
                  <div className="body-small text-on-surface-variant">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-10 md:py-12 lg:py-16 surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="headline-large mb-4 text-on-surface">Trusted by Industry Leaders</h2>
            <p className="body-medium text-on-surface-variant">
              Join hundreds of organizations who have successfully migrated with our expertise.
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex items-center gap-8 animate-flow"
              style={{
                animation: 'flow 20s linear infinite',
                width: 'fit-content'
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 rounded-lg flex-shrink-0 min-w-[160px]"
                  style={{ backgroundColor: 'var(--color-surface-container-low)' }}
                >
                  <span className="body-medium text-on-surface-variant font-medium whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 surface-container">
        <div className="container">
          <div className="card p-12 text-center" style={{
            background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary-container) 100%)'
          }}>
            <h2 className="display-medium mb-6 text-on-surface">
              Ready to Migrate Your Payroll System?
            </h2>
            <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
              Get started with a free consultation. Our experts will assess your current system 
              and provide a detailed migration plan with timeline and costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                <Phone sx={{ fontSize: 20 }} />
                Get Free Consultation
              </Link>
              <a href="mailto:info@globalpayrollmigration.com" className="btn-outlined">
                <Email sx={{ fontSize: 20 }} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalHome2025;