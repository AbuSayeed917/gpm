import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  CheckCircle,
  Speed,
  Support,
  Public,
  Send,
  CalendarMonth
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    service: '',
    timeline: '',
    currentSystem: '',
    targetSystem: '',
    countries: '',
    details: ''
  });

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 28, color: 'var(--color-primary)' }} />,
      title: "Phone",
      primary: "+44 (0) 20 7946 0234",
      secondary: "Available Mon-Fri 9AM-6PM GMT",
      description: "Speak directly with a migration expert"
    },
    {
      icon: <Email sx={{ fontSize: 28, color: 'var(--color-primary)' }} />,
      title: "Email",
      primary: "hello@globalpayrollmigration.com",
      secondary: "Response within 2 hours",
      description: "Send us your requirements"
    },
    {
      icon: <Schedule sx={{ fontSize: 28, color: 'var(--color-primary)' }} />,
      title: "Book Discovery Call",
      primary: "Free 30-minute consultation",
      secondary: "No obligation, just insight",
      description: "Schedule directly with an expert"
    }
  ];

  const whyContact = [
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Free Consultation",
      description: "No-obligation discussion about your payroll migration needs with detailed project assessment"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Quick Response",
      description: "We respond to all inquiries within 2 hours during business hours with personalized recommendations"
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Expert Team",
      description: "Speak directly with experienced payroll migration specialists, not salespeople"
    },
    {
      icon: <Public sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      title: "Global Experience",
      description: "Deep knowledge of payroll systems across 14+ countries and regulatory frameworks"
    }
  ];

  const services = [
    "Legacy System Migration",
    "Cloud Platform Migration", 
    "Multi-Country Consolidation",
    "System Implementation",
    "Payroll Health Check",
    "Strategic Consulting",
    "Other (please specify)"
  ];

  const urgency = [
    "Just exploring options",
    "Within next 6 months",
    "Within next 3 months", 
    "Within next month",
    "Urgent - as soon as possible"
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Response",
      description: "We'll respond within 2 hours with next steps"
    },
    {
      number: "2",
      title: "Discovery Call",
      description: "30-minute consultation to understand your needs"
    },
    {
      number: "3",
      title: "Custom Proposal",
      description: "Detailed proposal within 24 hours"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
              <Phone sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
              <span className="body-small font-medium text-primary">Free Consultation Available</span>
            </div>
            
            <h1 className="display-large mb-6 text-on-surface">
              Get Started with Your <span className="text-primary">Payroll Migration</span>
            </h1>
            
            <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
              Ready to migrate without the stress? Let's discuss how we can support your payroll migration — 
              whether you're just starting out or ready to move forward immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 surface-variant">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">
              How to <span className="text-primary">Reach Us</span>
            </h2>
            <p className="body-large text-on-surface-variant">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="card p-8 text-center transition-all duration-300 hover:shadow-3">
                <div className="flex justify-center mb-6">
                  <div 
                    className="p-4 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="headline-small mb-3 text-on-surface">{method.title}</h3>
                <p className="title-medium text-primary mb-2">{method.primary}</p>
                <p className="body-medium text-on-surface-variant mb-4">{method.secondary}</p>
                <p className="body-small text-on-surface-variant mb-6">{method.description}</p>
                
                <button className="btn-outlined w-full">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium mb-6 text-on-surface">
              Why <span className="text-primary">Contact Us</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {whyContact.map((reason, index) => (
              <div key={index} className="card p-6 text-center transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    {reason.icon}
                  </div>
                </div>
                <h3 className="title-medium mb-3 text-on-surface">{reason.title}</h3>
                <p className="body-medium text-on-surface-variant leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 surface-container">
        <div className="container max-w-4xl">
          <div className="card p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="display-medium mb-4 text-on-surface">Request Your Custom Quote</h2>
              <p className="body-large text-on-surface-variant">
                Tell us your requirements and get a tailored proposal within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="employees" className="form-label">Number of Employees</label>
                  <input
                    type="text"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. 50, 500, 5000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline" className="form-label">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select timeline</option>
                    {urgency.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="currentSystem" className="form-label">Current Payroll System</label>
                <input
                  type="text"
                  id="currentSystem"
                  name="currentSystem"
                  value={formData.currentSystem}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. Sage, ADP, Excel spreadsheets, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="targetSystem" className="form-label">Target System (if known)</label>
                <input
                  type="text"
                  id="targetSystem"
                  name="targetSystem"
                  value={formData.targetSystem}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. Dayforce, Workday, not sure yet"
                />
              </div>

              <div className="form-group">
                <label htmlFor="countries" className="form-label">Countries/Regions</label>
                <input
                  type="text"
                  id="countries"
                  name="countries"
                  value={formData.countries}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. UK, Germany, France"
                />
              </div>

              <div className="form-group">
                <label htmlFor="details" className="form-label">Additional Details</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us more about your requirements, challenges, or specific needs..."
                  rows="4"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button type="submit" className="btn-primary flex items-center justify-center gap-3">
                  <Send sx={{ fontSize: 20 }} />
                  Send Request
                </button>
                <button type="button" className="btn-outlined flex items-center justify-center gap-3">
                  <CalendarMonth sx={{ fontSize: 20 }} />
                  Schedule Call Instead
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Information */}
      <section className="py-20 surface-variant">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-medium mb-8 text-on-surface">Or Contact Us Directly</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    <Phone sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className="title-medium mb-2 text-on-surface">Phone</h3>
                    <p className="body-large text-primary mb-1">+44 (0) 20 7946 0234</p>
                    <p className="body-medium text-on-surface-variant">
                      Available Monday-Friday, 9AM-6PM GMT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    <Email sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className="title-medium mb-2 text-on-surface">Email</h3>
                    <p className="body-large text-primary mb-1">hello@globalpayrollmigration.com</p>
                    <p className="body-medium text-on-surface-variant">
                      Response within 2 hours during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-primary-container)' }}
                  >
                    <LocationOn sx={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 className="title-medium mb-2 text-on-surface">Location</h3>
                    <p className="body-large mb-1 text-on-surface">United Kingdom</p>
                    <p className="body-medium text-on-surface-variant">
                      Serving clients across UK, Europe, Middle East, and beyond
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card p-8">
                <h3 className="headline-small mb-8 text-center text-on-surface">What Happens Next?</h3>
                
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-on-primary"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        <span className="label-medium font-medium">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="title-medium mb-1 text-on-surface">{step.title}</h4>
                        <p className="body-medium text-on-surface-variant">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;