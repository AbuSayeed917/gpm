import React from 'react';
import { Link } from 'react-router-dom';
import {
  Business,
  TrendingUp,
  AccessTime,
  MonetizationOn,
  Star,
  CheckCircle,
  ArrowForward,
  Phone,
  Public,
  Support,
  Analytics,
  People
} from '@mui/icons-material';

const LargeEnterpriseSuccessStories = () => {
  const stories = [
    {
      company: "Global Tech Corporation",
      industry: "Technology",
      size: "15,000 employees",
      location: "UK, Germany, France, Netherlands",
      avatar: "GT",
      challenge: "Multi-country payroll across 4 European markets with complex regulatory requirements, multiple currencies, and inconsistent processes causing compliance risks.",
      solution: "Unified global payroll platform with country-specific compliance modules, automated currency conversion, and centralized reporting dashboard.",
      results: [
        "Consolidated 12 separate payroll systems into single platform",
        "Achieved 100% compliance across all 4 countries",
        "Reduced monthly processing time from 5 days to 8 hours",
        "Eliminated 95% of manual data entry and reconciliation",
        "Real-time visibility into global labor costs and analytics"
      ],
      quote: "This transformation revolutionized our HR operations. We now have complete visibility and control over our European payroll with significantly reduced compliance risk.",
      testimonial: {
        name: "James Richardson",
        role: "Global HR Director",
        rating: 5
      },
      metrics: {
        timeSaved: "85%",
        costReduction: "45%",
        implementation: "16 weeks"
      }
    },
    {
      company: "International Manufacturing Group",
      industry: "Manufacturing",
      size: "8,500 employees",
      location: "UK, Germany, Poland, Czech Republic",
      avatar: "IM",
      challenge: "Post-acquisition integration requiring consolidation of different payroll systems across newly merged facilities with varying local requirements.",
      solution: "Phased migration approach with parallel system testing, comprehensive data mapping, and extensive change management program.",
      results: [
        "Successfully integrated 3 acquired companies",
        "Standardized payroll processes across all locations",
        "Implemented multi-language employee self-service",
        "Reduced payroll errors by 92%",
        "Achieved ROI within 8 months of go-live"
      ],
      quote: "The complexity of our post-acquisition integration was immense, but the systematic approach and expertise delivered exceeded our expectations.",
      testimonial: {
        name: "Maria Kowalski",
        role: "Chief Financial Officer",
        rating: 5
      },
      metrics: {
        timeSaved: "78%",
        costReduction: "38%",
        implementation: "20 weeks"
      }
    },
    {
      company: "European Financial Services",
      industry: "Financial Services",
      size: "12,000 employees",
      location: "UK, Ireland, Germany, Belgium, Luxembourg",
      avatar: "EF",
      challenge: "Highly regulated industry requiring detailed audit trails, complex bonus calculations, and strict data security across multiple financial centers.",
      solution: "Enterprise-grade platform with advanced security features, automated compliance reporting, and sophisticated compensation management.",
      results: [
        "Implemented bank-grade security and encryption",
        "Automated regulatory reporting for 5 countries",
        "Reduced bonus calculation errors to zero",
        "Achieved SOX compliance certification",
        "Improved audit preparation time by 70%"
      ],
      quote: "The security and compliance features were exactly what we needed for our regulated environment. The audit process is now streamlined and stress-free.",
      testimonial: {
        name: "Sophie Laurent",
        role: "Chief Compliance Officer",
        rating: 5
      },
      metrics: {
        timeSaved: "82%",
        costReduction: "42%",
        implementation: "24 weeks"
      }
    }
  ];

  const stats = [
    {
      value: "50+",
      label: "Enterprise Migrations",
      description: "Large-scale multi-country implementations",
      icon: <People sx={{ fontSize: 24, color: 'var(--color-primary)' }} />
    },
    {
      value: "18 weeks",
      label: "Average Timeline", 
      description: "From planning to full deployment",
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />
    },
    {
      value: "42%",
      label: "Cost Savings",
      description: "Average operational cost reduction",
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />
    },
    {
      value: "99.8%",
      label: "Success Rate",
      description: "Enterprise projects delivered successfully",
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />
    }
  ];

  const benefits = [
    {
      icon: <Public sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Multi-Country Expertise",
      description: "Deep knowledge of payroll regulations, tax requirements, and compliance across 14+ European and Middle Eastern countries."
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Dedicated Project Team",
      description: "Senior consultants, project managers, and technical specialists assigned exclusively to your enterprise migration."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Advanced Integration",
      description: "Complex ERP, HRIS, and financial system integrations with real-time data synchronization and reporting."
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Risk Mitigation",
      description: "Comprehensive testing, parallel runs, and rollback procedures to ensure zero business disruption."
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
              <People sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
              <span className="body-small font-medium text-primary">Enterprise Success Stories</span>
            </div>
            
            <h1 className="display-large mb-6 text-on-surface">
              Large Enterprise <span className="text-primary">Migration Success</span>
            </h1>
            
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Complex, multi-country payroll transformations for global enterprises. Discover how we help large organizations 
              achieve compliance, reduce costs, and streamline operations across multiple markets.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 surface-variant">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-4 text-on-surface">Enterprise Migration Results</h2>
            <p className="body-large text-on-surface-variant">
              Key metrics from our large enterprise payroll transformation projects
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="display-small mb-2 text-primary">{stat.value}</div>
                <h3 className="title-medium mb-2 text-on-surface">{stat.label}</h3>
                <p className="body-small text-on-surface-variant">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Enterprise Client Success Stories</h2>
            <p className="body-large text-on-surface-variant">
              Complex transformations from global enterprise clients across different industries
            </p>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={index} className="card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-on-primary"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        {story.avatar}
                      </div>
                      <div>
                        <h3 className="headline-small text-on-surface">{story.company}</h3>
                        <p className="body-medium text-on-surface-variant">{story.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="body-medium text-on-surface-variant">Size:</span>
                        <span className="body-medium text-on-surface">{story.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="body-medium text-on-surface-variant">Countries:</span>
                        <span className="body-medium text-on-surface">{story.location.split(',').length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="body-medium text-on-surface-variant">Timeline:</span>
                        <span className="body-medium text-on-surface">{story.metrics.implementation}</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface-container)' }}>
                        <div className="headline-small text-primary">{story.metrics.timeSaved}</div>
                        <div className="body-small text-on-surface-variant">Time Saved</div>
                      </div>
                      <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface-container)' }}>
                        <div className="headline-small text-primary">{story.metrics.costReduction}</div>
                        <div className="body-small text-on-surface-variant">Cost Reduction</div>
                      </div>
                      <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface-container)' }}>
                        <div className="flex justify-center gap-1">
                          {[...Array(story.testimonial.rating)].map((_, i) => (
                            <Star key={i} sx={{ fontSize: 16, color: 'var(--color-warning-60)' }} />
                          ))}
                        </div>
                        <div className="body-small text-on-surface-variant">Rating</div>
                      </div>
                    </div>

                    {/* Countries Badge */}
                    <div className="mt-6">
                      <div className="body-small text-on-surface-variant mb-2">Countries:</div>
                      <div className="flex flex-wrap gap-2">
                        {story.location.split(', ').map((country, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{ 
                              backgroundColor: 'var(--color-primary-container)',
                              color: 'var(--color-primary)'
                            }}
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="title-large mb-3 text-on-surface">Challenge</h4>
                        <p className="body-large text-on-surface-variant">{story.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="title-large mb-3 text-on-surface">Solution</h4>
                        <p className="body-large text-on-surface-variant">{story.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="title-large mb-3 text-on-surface">Results</h4>
                        <ul className="space-y-2">
                          {story.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-3">
                              <CheckCircle sx={{ fontSize: 20, color: 'var(--color-success-60)', mt: 0.25 }} />
                              <span className="body-medium text-on-surface-variant">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-surface-container)' }}>
                        <blockquote className="body-large text-on-surface-variant italic mb-4">
                          "{story.quote}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-on-primary"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            {story.testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="title-medium text-on-surface">{story.testimonial.name}</div>
                            <div className="body-small text-on-surface-variant">{story.testimonial.role}</div>
                          </div>
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

      {/* Benefits Section */}
      <section className="py-20 surface-container">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Why Enterprises Choose Us</h2>
            <p className="body-large text-on-surface-variant">
              Specialized expertise for complex, multi-country enterprise transformations
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-6">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="headline-small mb-3 text-on-surface">{benefit.title}</h3>
                    <p className="body-medium text-on-surface-variant">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 surface-variant">
        <div className="container">
          <div className="card p-12 text-center" style={{
            background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary-container) 100%)'
          }}>
            <h2 className="display-medium mb-6 text-on-surface">
              Ready for Your Enterprise Migration?
            </h2>
            <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
              Join these successful enterprise clients who transformed their global payroll operations. 
              Get a comprehensive consultation tailored to your enterprise requirements and complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Phone sx={{ fontSize: 20 }} />
                Get Enterprise Consultation
              </Link>
              <Link to="/services/large-enterprise" className="btn-outlined">
                <ArrowForward sx={{ fontSize: 20 }} />
                Learn About Enterprise Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Success Stories */}
      <section className="py-20 surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">More Success Stories</h2>
            <p className="body-large text-on-surface-variant">
              Explore success stories from different business segments
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="card-elevated p-8 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Business sx={{ fontSize: 48, color: 'var(--color-primary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">SME Success Stories</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Tailored migration solutions for small to medium enterprises
              </p>
              <Link to="/success-stories/sme" className="btn-outlined w-full">
                View SME Stories
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
            
            <div className="card-elevated p-8 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Support sx={{ fontSize: 48, color: 'var(--color-tertiary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Consultancy Stories</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Strategic guidance and optimization without full migration
              </p>
              <Link to="/success-stories/consultancy" className="btn-outlined w-full">
                View Consultancy Stories
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LargeEnterpriseSuccessStories;