import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Custom Apple-style form components - no Material-UI needed
import {
  Business,
  CorporateFare,
  Groups,
  Send,
  CheckCircleOutline,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { sendQuoteRequest } from '../services/emailService';

const QuotePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Extract service type from URL parameters - no default value
  const searchParams = new URLSearchParams(location.search);
  const serviceType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    // Auto-filled based on service type
    serviceCategory: serviceType,
    // Company Information
    companyName: '',
    industry: '',
    employeeCount: '',
    companySize: serviceType === 'sme'
      ? 'small'
      : serviceType === 'large-enterprise'
        ? 'enterprise'
        : serviceType === 'consultancy'
          ? 'consultancy'
          : '',
    // Current System
    currentSystem: '',
    migrationUrgency: '',
    currentChallenges: [],
    // Migration Requirements
    targetSystem: '',
    migrationScope: [],
    complianceRequirements: [],
    dataVolume: '',
    // Contact Information
    contactName: '',
    email: '',
    phone: '',
    jobTitle: '',
    preferredContact: 'email',
    // Additional Details
    timeline: '',
    budget: '',
    additionalRequirements: '',
    customMigrationType: '',
  });

  const serviceConfig = {
    sme: {
      title: 'SME Payroll Migration Quote',
      icon: <Business sx={{ fontSize: 40, color: '#87ceeb' }} />,
      gradient: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
      description: 'Get a tailored quote for your small to medium enterprise payroll migration',
      migrationOptions: [
        'Sage to Xero Migration',
        'QuickBooks to Xero Migration',
        'BrightPay to Xero Migration',
        'IRIS to Xero Migration',
        'Excel/Manual to Payroll System',
        'Legacy System Migration',
        'Other',
      ],
      industries: [
        'Technology',
        'Professional Services',
        'Retail',
        'Healthcare',
        'Manufacturing',
        'Hospitality',
        'Other',
      ],
      employeeRanges: [
        '1-10 employees',
        '11-50 employees',
        '51-100 employees',
        '101-250 employees',
      ],
    },
    'large-enterprise': {
      title: 'Enterprise Payroll Migration Quote',
      icon: <CorporateFare sx={{ fontSize: 40, color: '#87ceeb' }} />,
      gradient: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
      description: 'Enterprise-grade payroll migration solutions for large organizations',
      migrationOptions: [
        'SAP to Workday Migration',
        'ADP to Dayforce Migration',
        'Oracle HCM to CloudPay Migration',
        'Legacy to SAP SuccessFactors',
        'Multi-Country Payroll Consolidation',
        'Global Payroll Platform Migration',
        'On-Premise to Cloud Migration',
        'Other',
      ],
      industries: [
        'Financial Services',
        'Technology',
        'Healthcare',
        'Manufacturing',
        'Retail',
        'Energy & Utilities',
        'Government',
        'Other',
      ],
      employeeRanges: [
        '500-1,000 employees',
        '1,000-5,000 employees',
        '5,000-10,000 employees',
        '10,000+ employees',
      ],
    },
    consultancy: {
      title: 'Consultancy Partnership Quote',
      icon: <Groups sx={{ fontSize: 40, color: '#87ceeb' }} />,
      gradient: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
      description: 'Partnership opportunities for consulting firms and professional services',
      migrationOptions: [
        'Payroll System Assessment',
        'Migration Strategy Consulting',
        'Compliance Review & Audit',
        'System Selection Advisory',
        'Process Optimization',
        'Staff Training & Support',
        'Post-Migration Support',
        'Other',
      ],
      industries: [
        'Management Consulting',
        'HR Consulting',
        'Technology Consulting',
        'Legal Services',
        'Accounting Firms',
        'Financial Advisory',
        'Other',
      ],
      employeeRanges: [
        '10-50 consultants',
        '50-100 consultants',
        '100-500 consultants',
        '500+ consultants',
      ],
    },
  };

  // Default configuration when no service is selected
  const defaultConfig = {
    title: 'Get Your Migration Quote',
    icon: <Business sx={{ fontSize: 40, color: '#87ceeb' }} />,
    gradient: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
    description: 'Choose your service type to get started with a personalized migration quote',
    migrationOptions: [],
    industries: [],
    employeeRanges: [],
  };

  const currentConfig = formData.serviceCategory 
    ? serviceConfig[formData.serviceCategory] 
    : defaultConfig;

  const steps = formData.serviceCategory ? [
    'Service Details',
    'Company Information', 
    'Technical Requirements',
    'Contact & Timeline',
  ] : [
    'Choose Service',
    'Service Details',
    'Company Information',
    'Technical Requirements', 
    'Contact & Timeline',
  ];

  useEffect(() => {
    // Update form when service type changes
    setFormData((prev) => ({
      ...prev,
      serviceCategory: serviceType,
      companySize: serviceType === 'sme'
        ? 'small'
        : serviceType === 'large-enterprise'
          ? 'enterprise'
          : serviceType === 'consultancy'
            ? 'consultancy'
            : '',
    }));
  }, [serviceType]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Validate required fields
      if (
        !formData.serviceCategory ||
        !formData.contactName ||
        !formData.email ||
        !formData.companyName ||
        !formData.targetSystem
      ) {
        setSubmitError('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const result = await sendQuoteRequest(formData);

      if (result.success) {
        setSubmitSuccess(true);
        // Thank you page will stay visible with a button to return home

        // Scroll to top smoothly when thank you page appears
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        setSubmitError(
          'Failed to send quote request. Please try again or contact us directly at info@globalpayrollmigration.com'
        );
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Submission error:', error);
      setSubmitError(
        'An error occurred while sending your request. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (step) => {
    // If no service is selected, show service selection as step 0
    if (!formData.serviceCategory) {
      switch (step) {
        case 0:
          return (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ maxWidth: '100%' }}>
                <div style={{ marginBottom: '40px' }}>
                  <h3
                    style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#000000',
                      marginBottom: '16px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Choose Your Service
                  </h3>
                  <p
                    style={{
                      fontSize: '17px',
                      color: '#6e6e73',
                      lineHeight: '1.47',
                      marginBottom: '0',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Select the type of payroll migration service you need to get started.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '20px',
                    marginBottom: '32px',
                  }}
                >
                  {[
                    {
                      key: 'sme',
                      title: 'SME Payroll Migration',
                      description: 'Perfect for small to medium enterprises (1-250 employees)',
                      icon: <Business sx={{ fontSize: 32, color: '#00bfff' }} />,
                    },
                    {
                      key: 'large-enterprise',
                      title: 'Large Enterprise Solutions',
                      description: 'Enterprise-grade solutions for organizations with 500+ employees',
                      icon: <CorporateFare sx={{ fontSize: 32, color: '#00bfff' }} />,
                    },
                    {
                      key: 'consultancy',
                      title: 'Payroll Consultancy',
                      description: 'Partnership opportunities for consulting firms and professional services',
                      icon: <Groups sx={{ fontSize: 32, color: '#00bfff' }} />,
                    },
                  ].map((service) => (
                    <button
                      key={service.key}
                      type='button'
                      onClick={() => {
                        handleInputChange('serviceCategory', service.key);
                        window.history.replaceState({}, '', `/quote?type=${service.key}`);
                        handleInputChange('companySize', 
                          service.key === 'sme' ? 'small' :
                          service.key === 'large-enterprise' ? 'enterprise' :
                          service.key === 'consultancy' ? 'consultancy' : ''
                        );
                      }}
                      style={{
                        padding: '24px',
                        border: '2px solid rgba(173, 216, 230, 0.3)',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#00bfff';
                        e.target.style.backgroundColor = 'rgba(135, 206, 250, 0.1)';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 32px rgba(135, 206, 250, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.transform = 'translateY(0px)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ flexShrink: 0 }}>
                        {service.icon}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#000000',
                            marginBottom: '8px',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                          }}
                        >
                          {service.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '15px',
                            color: '#6e6e73',
                            margin: '0',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                            lineHeight: '1.47',
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        
        case 1:
        case 2:
        case 3:
        case 4:
          // Shift step numbers by 1 when service selection is first
          return renderServiceSelectedStepContent(step - 1);
        
        default:
          return null;
      }
    }
    
    // If service is already selected, use normal step flow
    return renderServiceSelectedStepContent(step);
  };

  const renderServiceSelectedStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ maxWidth: '100%' }}>
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Service Selection
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '24px',
                  marginBottom: '32px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Service Type *
                  </label>
                  <div
                    style={{
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(135, 206, 250, 0.1)',
                      color: '#000000',
                      fontWeight: '600',
                    }}
                  >
                    {formData.serviceCategory === 'sme' && 'SME Payroll Migration'}
                    {formData.serviceCategory === 'large-enterprise' && 'Large Enterprise Solutions'}
                    {formData.serviceCategory === 'consultancy' && 'Payroll Consultancy'}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Migration Type *
                  </label>
                  <select
                    value={formData.targetSystem}
                    onChange={(e) => {
                      handleInputChange('targetSystem', e.target.value);
                      if (e.target.value !== 'Other') {
                        handleInputChange('customMigrationType', '');
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select migration type</option>
                    {currentConfig.migrationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.targetSystem === 'Other' && (
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: '8px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      }}
                    >
                      Please specify migration type *
                    </label>
                    <input
                      type='text'
                      value={formData.customMigrationType}
                      onChange={(e) => handleInputChange('customMigrationType', e.target.value)}
                      required={formData.targetSystem === 'Other'}
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '16px 20px',
                        border: '1px solid rgba(173, 216, 230, 0.3)',
                        borderRadius: '16px',
                        fontSize: '17px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      placeholder='e.g., Custom system to Workday, Internal tool to SAP, etc.'
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00bfff';
                        e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                )}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Current Payroll System
                  </label>
                  <input
                    type='text'
                    value={formData.currentSystem}
                    onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='e.g., Legacy system, Excel, Current provider'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Migration Urgency
                  </label>
                  <select
                    value={formData.migrationUrgency}
                    onChange={(e) => handleInputChange('migrationUrgency', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select migration urgency</option>
                    <option value='immediate'>Immediate (within 1 month)</option>
                    <option value='soon'>Soon (1-3 months)</option>
                    <option value='planned'>Planned (3-6 months)</option>
                    <option value='future'>Future consideration (6+ months)</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ maxWidth: '100%' }}>
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Company Information
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#6e6e73',
                    lineHeight: '1.47',
                    marginBottom: '0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Please provide your company details to help us tailor the perfect migration
                  solution for your needs.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '32px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Company Name *
                  </label>
                  <input
                    type='text'
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Enter your company name'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select industry sector</option>
                    {currentConfig.industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Company Size (Employees)
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select company size</option>
                    {currentConfig.employeeRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Expected Data Volume
                  </label>
                  <select
                    value={formData.dataVolume}
                    onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select expected data volume</option>
                    <option value='small'>Small (&lt; 1GB)</option>
                    <option value='medium'>Medium (1-10GB)</option>
                    <option value='large'>Large (10-100GB)</option>
                    <option value='enterprise'>Enterprise (100GB+)</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ maxWidth: '100%' }}>
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Technical Requirements
                </h3>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Migration Scope
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#6e6e73',
                    marginBottom: '20px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Select all services that apply to your migration:
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  {[
                    'Employee Data Migration',
                    'Historical Payroll Data',
                    'Tax Information',
                    'Benefits Integration',
                    'Time Tracking Integration',
                    'Reporting Setup',
                    'Custom Calculations',
                    'Multi-Currency Support',
                  ].map((scope) => (
                    <button
                      key={scope}
                      type='button'
                      onClick={() => handleArrayFieldChange('migrationScope', scope)}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '20px',
                        border: formData.migrationScope.includes(scope)
                          ? '2px solid #00bfff'
                          : '2px solid rgba(173, 216, 230, 0.4)',
                        backgroundColor: formData.migrationScope.includes(scope)
                          ? 'rgba(135, 206, 250, 0.1)'
                          : 'rgba(255, 255, 255, 0.8)',
                        color: formData.migrationScope.includes(scope) ? '#87ceeb' : '#000000',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={(e) => {
                        if (!formData.migrationScope.includes(scope)) {
                          e.target.style.borderColor = '#00bfff';
                          e.target.style.backgroundColor = 'rgba(135, 206, 250, 0.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!formData.migrationScope.includes(scope)) {
                          e.target.style.borderColor = 'rgba(173, 216, 230, 0.4)';
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        }
                      }}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Compliance Requirements
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#6e6e73',
                    marginBottom: '20px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Select all compliance requirements that apply:
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  {[
                    'GDPR Compliance',
                    'SOX Compliance',
                    'ISO 27001',
                    'Local Tax Regulations',
                    'Industry-Specific Requirements',
                    'Data Residency Requirements',
                  ].map((compliance) => (
                    <button
                      key={compliance}
                      type='button'
                      onClick={() => handleArrayFieldChange('complianceRequirements', compliance)}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '20px',
                        border: formData.complianceRequirements.includes(compliance)
                          ? '2px solid #00bfff'
                          : '2px solid rgba(173, 216, 230, 0.4)',
                        backgroundColor: formData.complianceRequirements.includes(compliance)
                          ? 'rgba(135, 206, 250, 0.1)'
                          : 'rgba(255, 255, 255, 0.8)',
                        color: formData.complianceRequirements.includes(compliance)
                          ? '#87ceeb'
                          : '#000000',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={(e) => {
                        if (!formData.complianceRequirements.includes(compliance)) {
                          e.target.style.borderColor = '#00bfff';
                          e.target.style.backgroundColor = 'rgba(135, 206, 250, 0.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!formData.complianceRequirements.includes(compliance)) {
                          e.target.style.borderColor = 'rgba(173, 216, 230, 0.4)';
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        }
                      }}
                    >
                      {compliance}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ maxWidth: '100%' }}>
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Contact Information & Timeline
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '32px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Contact Name *
                  </label>
                  <input
                    type='text'
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Enter your full name'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Job Title
                  </label>
                  <input
                    type='text'
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Enter your job title'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Enter your email address'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder='Enter your phone number'
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Preferred Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select preferred timeline</option>
                    <option value='asap'>ASAP</option>
                    <option value='1-2months'>1-2 months</option>
                    <option value='3-6months'>3-6 months</option>
                    <option value='6-12months'>6-12 months</option>
                    <option value='flexible'>Flexible</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '16px 20px',
                      border: '1px solid rgba(173, 216, 230, 0.3)',
                      borderRadius: '16px',
                      fontSize: '17px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00bfff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value=''>Select budget range</option>
                    <option value='under-10k'>Under £10,000</option>
                    <option value='10k-25k'>£10,000 - £25,000</option>
                    <option value='25k-50k'>£25,000 - £50,000</option>
                    <option value='50k-100k'>£50,000 - £100,000</option>
                    <option value='100k-plus'>£100,000+</option>
                    <option value='discuss'>Prefer to discuss</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '8px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  Additional Requirements
                </label>
                <textarea
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '1px solid rgba(173, 216, 230, 0.3)',
                    borderRadius: '16px',
                    fontSize: '17px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  placeholder='Please describe any specific requirements, challenges, or questions you have...'
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00bfff';
                    e.target.style.boxShadow = '0 0 0 4px rgba(135, 206, 250, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(173, 216, 230, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <AppleBackground variant='primary'>
        <section
          style={{
            background: '#000000',
            padding: '100px 0',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Apple-style background */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: '0 22px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{ marginBottom: '32px' }}
              >
                <CheckCircleOutline sx={{ fontSize: 80, color: '#34C759' }} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: 'clamp(48px, 6vw, 64px)',
                  fontWeight: '600',
                  color: '#ccebff',
                  marginBottom: '24px',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.1',
                  letterSpacing: '-0.015em',
                }}
              >
                Request submitted.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  fontSize: '21px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '48px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.381',
                  maxWidth: '500px',
                  margin: '0 auto 48px auto',
                }}
              >
                Your quote request has been sent successfully! Our team will review your
                requirements and get back to you within 24 hours with a detailed quote.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => navigate('/')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                    border: 'none',
                    borderRadius: '980px',
                    color: '#ccebff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    fontSize: '16px',
                    letterSpacing: '-0.022em',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    boxShadow: '0 8px 32px rgba(135, 206, 250, 0.4)',
                  }}
                >
                  Return to Home
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AppleBackground>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <AppleBackground variant='primary'>
        <section
          style={{
            background: '#f0f9ff',
            padding: '80px 0',
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          {/* Apple-style ambient lighting */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '600px',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 22px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Apple Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                  }}
                >
                  {currentConfig.icon}
                  <h1
                    style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: '600',
                      color: '#000000',
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: '1.1',
                      letterSpacing: '-0.015em',
                      margin: 0,
                    }}
                  >
                    {currentConfig.title}
                  </h1>
                </div>
                <p
                  style={{
                    fontSize: '21px',
                    color: '#000000',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.381',
                    letterSpacing: '.011em',
                    fontWeight: '400',
                  }}
                >
                  {currentConfig.description}
                </p>
              </motion.div>

              {/* Apple Progress Stepper */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '40px 32px',
                  marginBottom: '32px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'saturate(180%) blur(20px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                  }}
                >
                  {steps.map((label, index) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        animate={{ scale: index === activeStep ? 1.1 : 1 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '12px',
                          color: index <= activeStep ? '#ccebff' : '#000000',
                          background:
                            index <= activeStep
                              ? 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)'
                              : '#f0f9ff',
                          boxShadow:
                            index <= activeStep ? '0 4px 16px rgba(135, 206, 250, 0.4)' : 'none',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontFamily:
                            'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        {index + 1}
                      </motion.div>
                      <span
                        style={{
                          fontSize: '14px',
                          textAlign: 'center',
                          fontWeight: '500',
                          padding: '0 8px',
                          color: index <= activeStep ? '#000000' : '#000000',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                      >
                        {label}
                      </span>
                      {index < steps.length - 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '24px',
                            left: '50%',
                            width: 'calc(100% - 48px)',
                            height: '2px',
                            borderRadius: '1px',
                            background:
                              index < activeStep
                                ? 'linear-gradient(90deg, #00bfff 0%, #87ceeb 100%)'
                                : 'rgba(0, 0, 0, 0.1)',
                            transform: 'translateX(50%)',
                            zIndex: -1,
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Apple Form Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  background: '#ccebff',
                  borderRadius: '22px',
                  padding: '48px 40px',
                  marginBottom: '40px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'saturate(180%) blur(20px)',
                }}
              >
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {renderStepContent(activeStep)}
                  </motion.div>
                </AnimatePresence>

                {/* Error Message Display */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '24px',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 59, 48, 0.1)',
                      border: '2px solid rgba(255, 59, 48, 0.3)',
                      borderRadius: '12px',
                      color: '#D70015',
                      fontSize: '15px',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Apple Navigation Buttons - Right under the form */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '40px',
                    padding: '0 16px',
                  }}
                >
                  {activeStep === 0 ? (
                    <div style={{ width: '120px' }} />
                  ) : (
                    <motion.button
                      onClick={handleBack}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        background: 'rgba(135, 206, 250, 0.08)',
                        border: '2px solid rgba(135, 206, 250, 0.4)',
                        borderRadius: '25px',
                        color: '#87ceeb',
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontWeight: '600',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        minWidth: '120px',
                      }}
                    >
                      <ArrowBack sx={{ fontSize: 18 }} />
                      <span>Back</span>
                    </motion.button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        background: isSubmitting
                          ? '#000000'
                          : 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                        border: 'none',
                        borderRadius: '980px',
                        color: '#ccebff',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: isSubmitting ? 'default' : 'pointer',
                        minWidth: '200px',
                        boxShadow: isSubmitting ? 'none' : '0 8px 32px rgba(0, 122, 255, 0.4)',
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    >
                      {isSubmitting ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              border: '2px solid #ccebff',
                              borderTop: '2px solid transparent',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite',
                            }}
                          ></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <>
                          <span>Submit Quote Request</span>
                          <Send sx={{ fontSize: 18 }} />
                        </>
                      )}
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={() => {
                        // If on service selection step and no service selected, prevent next
                        if (!formData.serviceCategory && activeStep === 0) {
                          return;
                        }
                        handleNext();
                      }}
                      disabled={!formData.serviceCategory && activeStep === 0}
                      whileHover={(!formData.serviceCategory && activeStep === 0) ? {} : { scale: 1.05, y: -2 }}
                      whileTap={(!formData.serviceCategory && activeStep === 0) ? {} : { scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        background: (!formData.serviceCategory && activeStep === 0) ? 
                          'rgba(135, 206, 250, 0.3)' : 
                          'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                        border: 'none',
                        borderRadius: '980px',
                        color: '#ccebff',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: (!formData.serviceCategory && activeStep === 0) ? 'not-allowed' : 'pointer',
                        minWidth: '140px',
                        boxShadow: (!formData.serviceCategory && activeStep === 0) ? 
                          'none' : '0 8px 32px rgba(135, 206, 250, 0.4)',
                        opacity: (!formData.serviceCategory && activeStep === 0) ? 0.5 : 1,
                      }}
                    >
                      <span>Next</span>
                      <ArrowForward sx={{ fontSize: 18 }} />
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Not Sure? Discovery Call Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  marginTop: '48px',
                  marginBottom: '32px',
                  padding: '32px',
                  background: 'rgba(135, 206, 250, 0.08)',
                  borderRadius: '20px',
                  border: '1px solid rgba(135, 206, 250, 0.2)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    marginBottom: '20px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    }}
                  >
                    Not sure which option is right for you?
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#6e6e73',
                      margin: '0',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      lineHeight: '1.47',
                    }}
                  >
                    Speak with our experts to find the perfect migration solution for your needs.
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => navigate('/contact')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '16px 28px',
                      background: 'linear-gradient(135deg, #00bfff 0%, #87ceeb 100%)',
                      border: 'none',
                      borderRadius: '24px',
                      color: '#ccebff',
                      fontSize: '16px',
                      fontWeight: '600',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 6px 20px rgba(135, 206, 250, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 8px 28px rgba(135, 206, 250, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 6px 20px rgba(135, 206, 250, 0.4)';
                    }}
                  >
                    Book a Free Discovery Call
                  </button>
                </motion.div>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#000000',
                    margin: '12px 0 0 0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  }}
                >
                  15-minute consultation • No obligation • Expert guidance
                </p>
              </motion.div>

              {/* Apple Service Type Alert */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  background: 'rgba(135, 206, 250, 0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginTop: '24px',
                  border: '1px solid rgba(135, 206, 250, 0.2)',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    color: '#000000',
                    margin: 0,
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  Current service:{' '}
                  <span style={{ fontWeight: '600', color: '#000000' }}>{currentConfig.title}</span>
                  {' — '}
                  You can change the service type in the form above if needed.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AppleBackground>
    </>
  );
};

export default QuotePage;
