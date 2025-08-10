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
  Support,
  Analytics,
  Psychology,
  Groups,
  Handshake
} from '@mui/icons-material';

const ConsultancySuccessStories = () => {
  const stories = [
    {
      company: "Strategic HR Partners",
      industry: "HR Consulting",
      size: "45 consultants",
      clients: "200+ clients",
      location: "London, UK",
      avatar: "SH",
      challenge: "Growing demand for payroll migration services from clients, but lacked in-house technical expertise and resources to deliver comprehensive solutions.",
      solution: "Partnered with our white-label migration services to offer complete payroll transformation solutions under their brand, with full technical support.",
      results: [
        "Added £2.8M in new annual revenue streams",
        "Successfully completed 85+ client migrations",
        "Expanded service portfolio without additional hiring",
        "Achieved 98% client satisfaction rate",
        "Reduced project delivery risks to near zero"
      ],
      quote: "This partnership transformed our practice. We can now offer enterprise-grade payroll migrations while focusing on what we do best - strategic HR consulting.",
      testimonial: {
        name: "Catherine Williams",
        role: "Managing Partner",
        rating: 5
      },
      metrics: {
        timeSaved: "90%",
        revenueGrowth: "65%",
        implementation: "3 months"
      }
    },
    {
      company: "Digital Finance Solutions",
      industry: "Financial Technology",
      size: "180 employees",
      clients: "150+ financial services",
      location: "Edinburgh, UK",
      avatar: "DF",
      challenge: "Existing payroll system couldn't scale with rapid business growth, causing processing delays and compliance issues affecting client trust.",
      solution: "Strategic payroll optimization and phased system enhancement without full migration, focusing on process improvement and automation.",
      results: [
        "Improved payroll accuracy from 92% to 99.8%",
        "Reduced processing time by 75%",
        "Enhanced compliance reporting capabilities",
        "Eliminated overtime calculation errors",
        "Increased employee satisfaction by 40%"
      ],
      quote: "The consultancy approach was perfect for our needs. We got the improvements we needed without the disruption of a full migration.",
      testimonial: {
        name: "Andrew MacLeod",
        role: "Chief Operating Officer",
        rating: 5
      },
      metrics: {
        timeSaved: "75%",
        revenueGrowth: "25%",
        implementation: "8 weeks"
      }
    },
    {
      company: "Global Consulting Group",
      industry: "Management Consulting",
      size: "320 consultants",
      clients: "Fortune 500 clients",
      location: "Manchester, UK",
      avatar: "GC",
      challenge: "Complex contractor and employee payment structures across multiple projects required specialized expertise for optimization and compliance.",
      solution: "Comprehensive payroll audit, process reengineering, and implementation of best practices for multi-tier workforce management.",
      results: [
        "Streamlined payments for 5 different worker types",
        "Reduced administrative overhead by 60%",
        "Improved project profitability by 15%",
        "Enhanced regulatory compliance across all markets",
        "Automated expense and time tracking integration"
      ],
      quote: "The strategic insights and process improvements delivered immediate value. Our payroll operations now support our growth ambitions perfectly.",
      testimonial: {
        name: "Rachel Thompson",
        role: "Finance Director",
        rating: 5
      },
      metrics: {
        timeSaved: "60%",
        revenueGrowth: "15%",
        implementation: "12 weeks"
      }
    }
  ];

  const stats = [
    {
      value: "200+",
      label: "Consultancy Projects",
      description: "Strategic guidance and optimization engagements",
      icon: <Psychology sx={{ fontSize: 24, color: 'var(--color-primary)' }} />
    },
    {
      value: "8.5 weeks",
      label: "Average Timeline", 
      description: "From assessment to implementation",
      icon: <AccessTime sx={{ fontSize: 24, color: 'var(--color-success-60)' }} />
    },
    {
      value: "38%",
      label: "Average ROI",
      description: "Return on investment within first year",
      icon: <MonetizationOn sx={{ fontSize: 24, color: 'var(--color-tertiary)' }} />
    },
    {
      value: "100%",
      label: "Success Rate",
      description: "All consultancy projects delivered successfully",
      icon: <TrendingUp sx={{ fontSize: 24, color: 'var(--color-warning-60)' }} />
    }
  ];

  const benefits = [
    {
      icon: <Psychology sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Strategic Expertise",
      description: "Deep payroll and HR expertise combined with strategic business insights to optimize operations without full migration."
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Flexible Engagement",
      description: "Tailored consultancy packages from quick assessments to comprehensive transformation programs based on your needs."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Risk-Free Approach",
      description: "Optimize and improve existing systems with minimal disruption while maximizing efficiency and compliance."
    },
    {
      icon: <Handshake sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Partnership Model",
      description: "White-label services for consultants and solution providers to expand their portfolio with our technical expertise."
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
              <Psychology sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
              <span className="body-small font-medium text-primary">Consultancy Success Stories</span>
            </div>
            
            <h1 className="display-large mb-6 text-on-surface">
              Strategic Payroll <span className="text-primary">Consultancy Success</span>
            </h1>
            
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Strategic guidance and optimization solutions without full migration. See how our consultancy services 
              help organizations improve efficiency, ensure compliance, and maximize ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 surface-variant">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium mb-4 text-on-surface">Consultancy Results</h2>
            <p className="body-large text-on-surface-variant">
              Key metrics from our strategic consultancy and optimization projects
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
            <h2 className="display-medium mb-6 text-on-surface">Consultancy Client Success Stories</h2>
            <p className="body-large text-on-surface-variant">
              Strategic transformations and optimizations across different business models
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
                        <span className="body-medium text-on-surface-variant">Clients:</span>
                        <span className="body-medium text-on-surface">{story.clients}</span>
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
                        <div className="headline-small text-primary">{story.metrics.revenueGrowth}</div>
                        <div className="body-small text-on-surface-variant">Revenue Growth</div>
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
            <h2 className="display-medium mb-6 text-on-surface">Why Choose Our Consultancy</h2>
            <p className="body-large text-on-surface-variant">
              Strategic expertise and flexible solutions tailored to your specific needs
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

      {/* Consultancy Services */}
      <section className="py-20 surface-variant">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">Our Consultancy Services</h2>
            <p className="body-large text-on-surface-variant">
              Flexible engagement models to suit your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-6">
                <Analytics sx={{ fontSize: 48, color: 'var(--color-primary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Payroll Health Check</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Comprehensive audit of current processes, compliance, and efficiency
              </p>
              <div className="text-center p-3 rounded-lg mb-4" style={{ backgroundColor: 'var(--color-primary-container)' }}>
                <div className="title-large text-primary">2-4 weeks</div>
                <div className="body-small text-on-surface-variant">Typical Duration</div>
              </div>
            </div>

            <div className="card p-8 text-center">
              <div className="flex justify-center mb-6">
                <Timeline sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Process Optimization</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Strategic improvements to existing systems without full migration
              </p>
              <div className="text-center p-3 rounded-lg mb-4" style={{ backgroundColor: 'var(--color-secondary-container)' }}>
                <div className="title-large text-secondary">6-12 weeks</div>
                <div className="body-small text-on-surface-variant">Typical Duration</div>
              </div>
            </div>

            <div className="card p-8 text-center">
              <div className="flex justify-center mb-6">
                <Handshake sx={{ fontSize: 48, color: 'var(--color-tertiary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Partnership Services</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                White-label migration services for consultants and solution providers
              </p>
              <div className="text-center p-3 rounded-lg mb-4" style={{ backgroundColor: 'var(--color-tertiary-container)' }}>
                <div className="title-large text-tertiary">Ongoing</div>
                <div className="body-small text-on-surface-variant">Partnership Model</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 surface">
        <div className="container">
          <div className="card p-12 text-center" style={{
            background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary-container) 100%)'
          }}>
            <h2 className="display-medium mb-6 text-on-surface">
              Ready for Strategic Consultancy?
            </h2>
            <p className="body-large mb-8 text-on-surface-variant max-w-2xl mx-auto">
              Get expert guidance to optimize your payroll operations without full migration disruption. 
              Our consultancy services deliver immediate value and long-term strategic advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Phone sx={{ fontSize: 20 }} />
                Get Consultancy Quote
              </Link>
              <Link to="/services/consultancy" className="btn-outlined">
                <ArrowForward sx={{ fontSize: 20 }} />
                Learn About Consultancy Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Success Stories */}
      <section className="py-20 surface-container">
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
                <Groups sx={{ fontSize: 48, color: 'var(--color-secondary)' }} />
              </div>
              <h3 className="headline-small mb-4 text-on-surface">Enterprise Stories</h3>
              <p className="body-medium mb-6 text-on-surface-variant">
                Complex multi-country migrations for large organizations
              </p>
              <Link to="/success-stories/large-enterprise" className="btn-outlined w-full">
                View Enterprise Stories
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultancySuccessStories;