import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Email } from '@mui/icons-material';
import {
  ServiceCard,
  FeatureCard,
  StatsCard,
  TestimonialCard,
  CTACard,
  getServiceIcon,
  getFeatureIcon,
} from '../components/ProfessionalCards';

const ProfessionalHome = () => {
  const services = [
    {
      id: 'sme',
      title: 'SME Solutions',
      description:
        'Tailored migration solutions for small to medium enterprises with focus on cost-effectiveness and minimal disruption.',
      features: [
        'Zero downtime migration',
        'Data validation and testing',
        'Staff training and support',
        '3 months post-migration support',
      ],
      href: '/services/sme',
    },
    {
      id: 'enterprise',
      title: 'Large Enterprise',
      description:
        'Complex multi-system migrations for large organizations with extensive compliance and integration requirements.',
      features: [
        'Multi-system integration',
        'Compliance management',
        '24/7 dedicated support',
        'Dedicated project manager',
      ],
      href: '/services/large-enterprise',
    },
    {
      id: 'consultancy',
      title: 'Expert Consultancy',
      description:
        'Strategic guidance and optimization of existing payroll systems without full migration requirements.',
      features: [
        'Comprehensive system audit',
        'Process optimization',
        'Compliance review',
        'Best practice guidance',
      ],
      href: '/services/consultancy',
    },
  ];

  const features = [
    {
      type: 'security',
      title: 'Zero Downtime Guarantee',
      description:
        'Our proven migration process ensures your payroll operations continue uninterrupted throughout the entire migration.',
    },
    {
      type: 'speed',
      title: 'Fast Implementation',
      description:
        'Streamlined processes and expert methodology that get you up and running quickly without compromising quality.',
    },
    {
      type: 'support',
      title: '24/7 Expert Support',
      description:
        'Round-the-clock support from our UK-based payroll migration specialists with guaranteed 2-hour response time.',
    },
    {
      type: 'analytics',
      title: 'Proven Track Record',
      description:
        '500+ successful migrations with 99.9% success rate and average savings of £2.5M per client engagement.',
    },
  ];

  const stats = [
    {
      value: '500+',
      label: 'Migrations Completed',
      description: 'Successful payroll system migrations',
    },
    { value: '99.9%', label: 'Success Rate', description: 'Zero-downtime migrations delivered' },
    { value: '£2.5M', label: 'Average Savings', description: 'Cost savings per client engagement' },
    { value: '24/7', label: 'Support Available', description: 'Round-the-clock expert assistance' },
  ];

  const testimonials = [
    {
      quote:
        'The migration was seamless and completed ahead of schedule. Their expertise saved us months of work.',
      author: 'Sarah Johnson',
      title: 'HR Director',
      company: 'TechFlow Solutions',
    },
    {
      quote:
        'Outstanding service from start to finish. Zero downtime as promised and excellent ongoing support.',
      author: 'David Chen',
      title: 'CFO',
      company: 'Global Manufacturing Inc',
    },
    {
      quote:
        'Professional, knowledgeable team that delivered exactly what they promised. Highly recommended.',
      author: 'Emma Williams',
      title: 'Operations Manager',
      company: 'Retail Excellence Ltd',
    },
  ];

  const clientLogos = [
    'Microsoft',
    'Amazon',
    'Google',
    'Apple',
    'Meta',
    'Netflix',
    'Tesla',
    'Samsung',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-background' />
        <div className='container hero-content'>
          <h1 className='hero-title'>Professional Payroll Migration Services</h1>
          <p className='hero-subtitle'>
            Seamless payroll migration with zero downtime guarantee. Expert UK-based team with
            proven track record of successful migrations.
          </p>
          <div className='hero-actions'>
            <Link to='/quote' className='btn btn-primary btn-lg'>
              Get Free Consultation
            </Link>
            <Link to='/success-stories' className='btn btn-outline btn-lg'>
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='section section-sm'>
        <div className='container'>
          <div className='stats-grid'>
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

      {/* Services Section */}
      <section className='section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>Our Services</h2>
            <p className='section-subtitle'>
              Comprehensive payroll migration solutions tailored to your business needs
            </p>
          </div>

          <div className='service-grid'>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={getServiceIcon(service.id)}
                title={service.title}
                description={service.description}
                features={service.features}
                onLearnMore={() => (window.location.href = service.href)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='section' style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>Why Choose Us</h2>
            <p className='section-subtitle'>
              We deliver exceptional results with our proven methodology and expert team
            </p>
          </div>

          <div className='grid grid-4'>
            {features.map((feature, index) => (
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

      {/* Client Logos Section */}
      <section className='client-logos-section'>
        <div className='container'>
          <div className='section-header'>
            <h3 className='text-lg font-medium text-secondary text-center'>
              Trusted by leading organizations worldwide
            </h3>
          </div>

          <div className='logos-grid'>
            {clientLogos.map((logo, index) => (
              <div key={index} className='logo-item'>
                <div className='logo-text'>{logo}</div>
              </div>
            ))}
          </div>

          <div className='trust-indicators'>
            <div className='trust-badge'>
              <span className='icon'>✓</span>
              ISO 27001 Certified
            </div>
            <div className='trust-badge'>
              <span className='icon'>✓</span>
              GDPR Compliant
            </div>
            <div className='trust-badge'>
              <span className='icon'>✓</span>
              SOC 2 Type II
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>What Our Clients Say</h2>
            <p className='section-subtitle'>
              Real stories from satisfied clients who experienced seamless migrations
            </p>
          </div>

          <div className='grid grid-3'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section section-sm'>
        <div className='container'>
          <CTACard
            title='Ready to Start Your Migration?'
            subtitle="Let's discuss your specific requirements and create a tailored migration plan."
            gradient={true}
            primaryAction={{
              label: 'Get Free Consultation',
              onClick: () => (window.location.href = '/contact'),
            }}
            secondaryAction={{
              label: 'View Our Process',
              onClick: () => (window.location.href = '/about'),
            }}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section
        className='section section-sm'
        style={{ backgroundColor: 'var(--color-surface-secondary)' }}
      >
        <div className='container'>
          <div className='text-center'>
            <h3 className='text-2xl font-semibold text-primary mb-4'>Get in Touch Today</h3>
            <p className='text-secondary mb-6'>
              Speak with our migration experts to discuss your specific needs
            </p>

            <div className='flex justify-center gap-6 flex-wrap'>
              <a
                href='tel:XXXX-XXX-XXXX'
                className='flex items-center gap-2 text-primary hover-lift'
                style={{ textDecoration: 'none' }}
              >
                <Phone size={20} />
                <span className='font-medium'>XXXX-XXX-XXXX</span>
              </a>
              <a
                href='mailto:info@globalpayrollmigration.com'
                className='flex items-center gap-2 text-primary hover-lift'
                style={{ textDecoration: 'none' }}
              >
                <Email size={20} />
                <span className='font-medium'>info@globalpayrollmigration.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalHome;
