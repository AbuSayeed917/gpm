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
  Timeline,
  Speed,
  Support,
  Analytics
} from '@mui/icons-material';

const SMESuccessStories = () => {
  const stories = [
    {
      company: "TechStart Solutions",
      industry: "Technology",
      size: "85 employees",
      location: "Manchester, UK",
      avatar: "TS",
      challenge: "Legacy payroll system causing 3-day processing delays and compliance issues with UK tax regulations.",
      solution: "Migrated to cloud-based system with automated tax calculations and real-time processing capabilities.",
      results: [
        "Reduced payroll processing time from 3 days to 2 hours",
        "100% accuracy in tax calculations", 
        "40% reduction in HR administrative overhead",
        "Improved employee satisfaction with self-service portal"
      ],
      quote: "The migration was seamless and completed ahead of schedule. Our payroll processing is now faster and more accurate than ever before.",
      testimonial: {
        name: "Sarah Mitchell",
        role: "HR Manager",
        rating: 5
      },
      metrics: {
        timeSaved: "95%",
        costReduction: "30%",
        implementation: "6 weeks"
      }
    },
    {
      company: "Green Manufacturing Ltd",
      industry: "Manufacturing", 
      size: "120 employees",
      location: "Birmingham, UK",
      avatar: "GM",
      challenge: "Multi-shift payroll complexity with manual overtime calculations leading to errors and employee complaints.",
      solution: "Implemented automated shift management with real-time overtime tracking and mobile clock-in capabilities.",
      results: [
        "Eliminated manual overtime calculation errors",
        "Real-time visibility into labor costs",
        "Mobile time tracking increased accuracy by 98%",
        "Reduced payroll queries by 85%"
      ],
      quote: "Our employees love the mobile app, and we've eliminated virtually all payroll disputes. The ROI was immediate.",
      testimonial: {
        name: "David Thompson",
        role: "Operations Director",
        rating: 5
      },
      metrics: {
        timeSaved: "80%",
        costReduction: "25%",
        implementation: "8 weeks"
      }
    },
    {
      company: "Creative Agency Plus",
      industry: "Marketing & Advertising",
      size: "45 employees", 
      location: "London, UK",
      avatar: "CA",
      challenge: "Freelancer and contractor payments scattered across multiple systems, causing cash flow tracking issues.",
      solution: "Unified payroll system handling both employees and contractors with integrated project billing and expense management.",
      results: [
        "Consolidated all worker payments in single system",
        "Improved cash flow visibility and forecasting",
        "Automated expense reimbursements",
        "Reduced month-end closing time by 60%"
      ],
      quote: "Having all our payments in one system transformed our financial operations. We can now focus on growing our business instead of managing spreadsheets.",
      testimonial: {
        name: "Emma Rodriguez",
        role: "Finance Director",
        rating: 5
      },
      metrics: {
        timeSaved: "70%",
        costReduction: "35%",
        implementation: "4 weeks"
      }
    }
  ];

  const stats = [
    {
      value: "150+",
      label: "SME Migrations",
      description: "Successful small to medium enterprise projects",
      icon: <Business sx={{ fontSize: 24, color: 'var(--color-primary)' }} />
    },
    {
      value: "6.5 weeks",
      label: "Average Timeline", 
      description: "From planning to go-live for SME projects",
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />
    },
    {
      value: "32%",
      label: "Cost Savings",
      description: "Average operational cost reduction",
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />
    },
    {
      value: "98.5%",
      label: "Success Rate",
      description: "Projects completed on time and budget",
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />
    }
  ];

  const benefits = [
    {
      icon: <Speed sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Rapid Implementation",
      description: "Streamlined processes designed specifically for SME requirements with minimal disruption to operations."
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Dedicated Support",
      description: "Personal project manager and UK-based support team available throughout the migration process."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Cost-Effective Solutions",
      description: "Tailored packages that deliver enterprise-level functionality within SME budgets and constraints."
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Proven Results",
      description: "Track record of successful migrations for companies from 10 to 500 employees across all industries."
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
              <Business sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
              <span className="body-small font-medium text-primary">SME Success Stories</span>
            </div>
            
            <h1 className="display-large mb-6 text-on-surface">
              Small to Medium Enterprise <span className="text-primary">Migration Success</span>
            </h1>
            
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Real stories from SME clients who transformed their payroll operations with our tailored migration services. 
              See how we help growing businesses streamline processes and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 surface-variant">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-4 text-on-surface">SME Migration Results</h2>
            <p className="body-large text-on-surface-variant">
              Key metrics from our small to medium enterprise payroll migrations
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
            <h2 className="display-medium mb-6 text-on-surface">Client Success Stories</h2>
            <p className="body-large text-on-surface-variant">
              Real transformations from SME clients across different industries
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
                        <span className="body-medium text-on-surface-variant">Location:</span>
                        <span className="body-medium text-on-surface">{story.location}</span>
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
            <h2 className="display-medium mb-6 text-on-surface">Why SMEs Choose Us</h2>
            <p className="body-large text-on-surface-variant">
              Specialized expertise and tailored solutions for growing businesses
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
              Ready for Your SME Migration?
            </h2>
            <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
              Join these successful SME clients who transformed their payroll operations. 
              Get a free consultation tailored to your business size and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Phone sx={{ fontSize: 20 }} />
                Get Free SME Consultation
              </Link>
              <Link to="/services/sme" className="btn-outlined">
                <ArrowForward sx={{ fontSize: 20 }} />
                Learn About SME Services
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
                <Timeline sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Large Enterprise Stories</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Complex multi-country migrations for enterprise organizations
              </p>
              <Link to="/success-stories/large-enterprise" className="btn-outlined w-full">
                View Enterprise Stories
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

export default SMESuccessStories;