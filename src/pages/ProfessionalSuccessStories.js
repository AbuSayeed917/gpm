import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Business,
  LocationOn,
  ArrowForward
} from '@mui/icons-material';
import { StatsCard } from '../components/ProfessionalCards';

const ProfessionalSuccessStories = () => {
  const stories = [
    {
      id: 'ent-1',
      company: 'TechGlobal Manufacturing',
      industry: 'Manufacturing',
      location: 'UK & Germany',
      employees: '2,500',
      type: 'Enterprise Migration',
      timeline: '12 weeks',
      challenge: "Legacy payroll system across multiple countries couldn't handle complex manufacturing schedules, overtime calculations, or comply with changing regulations.",
      solution: "Phased migration approach with cloud-based system that automated complex calculations and integrated seamlessly with existing systems.",
      testimonial: "The migration was seamless and our payroll processing time has reduced from days to hours. The team's expertise was exceptional.",
      author: "Sarah Johnson",
      title: "HR Director",
      results: [
        '85% reduction in payroll processing time',
        'Zero compliance violations since implementation',
        'Automated integration with manufacturing systems',
        'Real-time reporting across all locations'
      ],
      savings: '£2.1M',
      category: 'large-enterprise'
    },
    {
      id: 'sme-1',
      company: 'Digital Innovations Ltd',
      industry: 'Technology',
      location: 'London, UK',
      employees: '150',
      type: 'SME Migration',
      timeline: '6 weeks',
      challenge: "Growing tech company struggling with manual payroll processes that couldn't scale with rapid hiring and complex equity compensation.",
      solution: "Implementation of modern cloud payroll system with automated equity calculations and seamless integration with existing HR tools.",
      testimonial: "The new system handles our complex equity structures perfectly. Implementation was smooth with zero disruption to operations.",
      author: "Michael Chen",
      title: "Operations Director",
      results: [
        '90% reduction in payroll administration time',
        'Automated equity compensation tracking',
        'Seamless integration with existing tools',
        'Improved compliance and reporting'
      ],
      savings: '£180K',
      category: 'sme'
    },
    {
      id: 'cons-1',
      company: 'Financial Services Group',
      industry: 'Financial Services',
      location: 'Edinburgh, UK',
      employees: '800',
      type: 'Consultancy Project',
      timeline: '8 weeks',
      challenge: "Complex financial services regulations and multiple payroll systems needed optimization and consolidation without full migration.",
      solution: "Strategic consultancy approach to optimize existing systems, implement better controls, and ensure regulatory compliance.",
      testimonial: "Their consultancy approach saved us millions while dramatically improving our payroll operations and compliance posture.",
      author: "Emma Williams",
      title: "Chief Financial Officer",
      results: [
        'Consolidated 5 systems into 2',
        'Improved regulatory compliance',
        '60% reduction in processing errors',
        'Enhanced audit trail capabilities'
      ],
      savings: '£850K',
      category: 'consultancy'
    }
  ];

  const overallStats = [
    { value: '500+', label: 'Successful Migrations', description: 'Across all industries' },
    { value: '99.9%', label: 'Success Rate', description: 'Zero-downtime guarantee' },
    { value: '£50M+', label: 'Client Savings', description: 'Total cost savings delivered' },
    { value: '24/7', label: 'Support', description: 'Round-the-clock assistance' }
  ];

  const categories = [
    {
      name: 'SME Solutions',
      href: '/success-stories/sme',
      description: 'Small to medium enterprises',
      count: '200+ migrations'
    },
    {
      name: 'Large Enterprise',
      href: '/success-stories/large-enterprise',
      description: 'Complex multi-system migrations',
      count: '150+ migrations'
    },
    {
      name: 'Expert Consultancy',
      href: '/success-stories/consultancy',
      description: 'Strategic guidance and optimization',
      count: '150+ projects'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Success Stories
          </h1>
          <p className="hero-subtitle">
            Real results from organizations that have transformed their payroll operations 
            with our proven migration methodology.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section section-sm" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="stats-grid">
            {overallStats.map((stat, index) => (
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

      {/* Categories */}
      <section className="section section-sm">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success by Category</h2>
            <p className="section-subtitle">
              Explore success stories by business type and migration approach
            </p>
          </div>

          <div className="grid grid-3">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={category.href} 
                className="card hover-lift" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card-body text-center">
                  <h3 className="service-title">{category.name}</h3>
                  <p className="service-description">{category.description}</p>
                  <div className="badge badge-primary">{category.count}</div>
                  <div className="mt-4">
                    <ArrowForward className="text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Success Stories</h2>
            <p className="section-subtitle">
              Detailed case studies showcasing our expertise across different industries
            </p>
          </div>

          <div className="grid grid-1" style={{ gap: 'var(--space-8)' }}>
            {stories.map((story, index) => (
              <div key={index} className="card card-elevated">
                <div className="card-body">
                  <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'start' }}>
                    {/* Story Details */}
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {story.company}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-secondary">
                            <span className="flex items-center gap-1">
                              <Business size={16} />
                              {story.industry}
                            </span>
                            <span className="flex items-center gap-1">
                              <LocationOn size={16} />
                              {story.location}
                            </span>
                            <span>{story.employees} employees</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="badge badge-success">{story.type}</div>
                          <div className="text-sm text-secondary mt-1">{story.timeline}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                          <p className="text-secondary">{story.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Solution</h4>
                          <p className="text-secondary">{story.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3">Key Results</h4>
                          <div className="grid grid-1" style={{ gap: 'var(--space-2)' }}>
                            {story.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start gap-2">
                                <CheckCircle 
                                  style={{ 
                                    fontSize: '16px', 
                                    color: 'var(--color-success-500)',
                                    marginTop: '2px',
                                    flexShrink: 0
                                  }} 
                                />
                                <span className="text-sm text-secondary">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial & Stats */}
                    <div>
                      <div className="card" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
                        <div className="card-body">
                          <blockquote className="text-lg italic text-secondary mb-4">
                            "{story.testimonial}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="testimonial-avatar">
                              {story.author.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary">{story.author}</h4>
                              <p className="text-sm text-secondary">{story.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-success-50)' }}>
                          <div className="text-3xl font-bold text-success-700 mb-2">
                            {story.savings}
                          </div>
                          <div className="text-sm font-medium text-success-600">
                            Total Cost Savings
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Link 
                          to={`/success-stories/${story.category}`}
                          className="btn btn-outline w-full"
                        >
                          View More {story.type} Stories
                          <ArrowForward size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Join Our Success Stories?</h2>
              <p className="text-lg mb-6">
                Let's discuss how we can help you achieve similar results with your payroll migration.
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

export default ProfessionalSuccessStories;