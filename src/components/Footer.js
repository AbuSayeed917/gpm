import React from 'react';
import { Link } from 'react-router-dom';
import {
  Language,
  Security,
  Public,
  Support,
  Phone,
  Email,
  Schedule,
  LinkedIn,
  Twitter,
  YouTube
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="surface-container gradient-subtle py-12 md:py-16">
      <div className="container">
        <div className="footer-grid gap-8 lg:gap-12">
          {/* Company Section */}
          <div className="footer-company">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Language sx={{ fontSize: 28, color: 'var(--color-primary)' }} />
                <h3 className="title-large text-on-surface">
                  Global Payroll Migration
                </h3>
              </div>
              <p className="body-medium text-on-surface-variant mb-6 leading-relaxed max-w-md">
                UK-based payroll migration specialists trusted by Fortune 500 companies 
                worldwide. Zero downtime guaranteed.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full surface-container-high">
                  <Security sx={{ fontSize: 16, color: 'var(--color-primary)' }} />
                  <span className="body-small text-on-surface">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full surface-container-high">
                  <Public sx={{ fontSize: 16, color: 'var(--color-tertiary)' }} />
                  <span className="body-small text-on-surface">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full surface-container-high">
                  <Support sx={{ fontSize: 16, color: 'var(--color-primary)' }} />
                  <span className="body-small text-on-surface">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="title-medium text-on-surface mb-4">
              Services
            </h4>
            <div className="space-y-3">
              <Link 
                to="/services/sme" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                SME Solutions
              </Link>
              <Link 
                to="/services/large-enterprise" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Large Enterprise
              </Link>
              <Link 
                to="/services/consultancy" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Expert Consultancy
              </Link>
              <Link 
                to="/quote" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Success Stories Section */}
          <div>
            <h4 className="title-medium text-on-surface mb-4">
              Success Stories
            </h4>
            <div className="space-y-3">
              <Link 
                to="/success-stories/sme" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                SME Case Studies
              </Link>
              <Link 
                to="/success-stories/large-enterprise" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Enterprise Stories
              </Link>
              <Link 
                to="/success-stories/consultancy" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Consultancy Results
              </Link>
              <Link 
                to="/success-stories" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                All Success Stories
              </Link>
            </div>
          </div>

          {/* Company Links Section */}
          <div>
            <h4 className="title-medium text-on-surface mb-4">
              Company
            </h4>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/faq" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
              <a 
                href="/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="block body-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="title-medium text-on-surface mb-4">
              Get Started
            </h4>
            <p className="body-medium text-on-surface-variant mb-4">
              Ready to migrate your payroll system with zero downtime?
            </p>
            <Link 
              to="/quote" 
              className="btn-gradient inline-flex items-center gap-2 mb-6"
            >
              Get Free Quote
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone sx={{ fontSize: 16, color: 'var(--color-on-surface-variant)' }} />
                <span className="body-small text-on-surface-variant">
                  +44 20 1234 5678
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Email sx={{ fontSize: 16, color: 'var(--color-on-surface-variant)' }} />
                <span className="body-small text-on-surface-variant">
                  hello@gpm.co.uk
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Schedule sx={{ fontSize: 16, color: 'var(--color-on-surface-variant)' }} />
                <span className="body-small text-on-surface-variant">
                  2 hour response
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-outline-variant mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <p className="body-small text-on-surface-variant mb-1">
                &copy; {currentYear} Global Payroll Migration Ltd. All rights reserved.
              </p>
              <p className="body-small text-on-surface-variant">
                Registered in England & Wales. Company No: 12345678
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link 
                to="/privacy" 
                className="body-small text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="body-small text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="body-small text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>

            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/company/globalpayrollmigration" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
              >
                <LinkedIn sx={{ fontSize: 20, color: 'var(--color-on-surface-variant)' }} />
              </a>
              <a 
                href="https://twitter.com/globalpayrollmigration" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
              >
                <Twitter sx={{ fontSize: 20, color: 'var(--color-on-surface-variant)' }} />
              </a>
              <a 
                href="https://youtube.com/@globalpayrollmigration" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
              >
                <YouTube sx={{ fontSize: 20, color: 'var(--color-on-surface-variant)' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;