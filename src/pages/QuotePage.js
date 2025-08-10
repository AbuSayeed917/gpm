import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Chip
} from '@mui/material';
import {
  Business,
  CorporateFare,
  Groups,
  Send,
  CheckCircleOutline,
  ArrowBack,
  ArrowForward
} from '@mui/icons-material';

const QuotePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Extract service type from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const serviceType = searchParams.get('type') || 'sme';

  const [formData, setFormData] = useState({
    // Auto-filled based on service type
    serviceCategory: serviceType,
    // Company Information
    companyName: '',
    industry: '',
    employeeCount: '',
    companySize: serviceType === 'sme' ? 'small' : serviceType === 'large-enterprise' ? 'enterprise' : 'consultancy',
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
    additionalRequirements: ''
  });

  const serviceConfig = {
    sme: {
      title: 'SME Payroll Migration Quote',
      icon: <Business sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      gradient: 'linear-gradient(135deg, var(--color-primary-40) 0%, var(--color-tertiary-40) 100%)',
      description: 'Get a tailored quote for your small to medium enterprise payroll migration',
      migrationOptions: [
        'Xero Payroll Migration',
        'QuickBooks to Xero Migration',
        'Any-to-Any Payroll Migration',
        'BrightPay Integration',
        'IRIS Integration'
      ],
      industries: [
        'Technology',
        'Professional Services',
        'Retail',
        'Healthcare',
        'Manufacturing',
        'Hospitality',
        'Other'
      ],
      employeeRanges: [
        '1-10 employees',
        '11-50 employees',
        '51-100 employees',
        '101-250 employees'
      ]
    },
    'large-enterprise': {
      title: 'Enterprise Payroll Migration Quote',
      icon: <CorporateFare sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      gradient: 'linear-gradient(135deg, var(--color-primary-40) 0%, var(--color-tertiary-40) 100%)',
      description: 'Enterprise-grade payroll migration solutions for large organizations',
      migrationOptions: [
        'SAP Payroll Migration',
        'Workday Integration',
        'Oracle HCM Cloud Migration',
        'Global Payroll Consolidation',
        'Multi-Country Implementation'
      ],
      industries: [
        'Financial Services',
        'Technology',
        'Healthcare',
        'Manufacturing',
        'Retail',
        'Energy & Utilities',
        'Government',
        'Other'
      ],
      employeeRanges: [
        '500-1,000 employees',
        '1,000-5,000 employees',
        '5,000-10,000 employees',
        '10,000+ employees'
      ]
    },
    consultancy: {
      title: 'Consultancy Partnership Quote',
      icon: <Groups sx={{ fontSize: 40, color: 'var(--color-primary)' }} />,
      gradient: 'linear-gradient(135deg, var(--color-primary-40) 0%, var(--color-tertiary-40) 100%)',
      description: 'Partnership opportunities for consulting firms and professional services',
      migrationOptions: [
        'White-label Migration Services',
        'Strategic Advisory Partnership',
        'Joint Venture Opportunities',
        'Training & Certification',
        'Custom Solutions Development'
      ],
      industries: [
        'Management Consulting',
        'HR Consulting',
        'Technology Consulting',
        'Legal Services',
        'Accounting Firms',
        'Financial Advisory',
        'Other'
      ],
      employeeRanges: [
        '10-50 consultants',
        '50-100 consultants',
        '100-500 consultants',
        '500+ consultants'
      ]
    }
  };

  const currentConfig = serviceConfig[serviceType];
  
  const steps = [
    'Service Details',
    'Company Information',
    'Technical Requirements',
    'Contact & Timeline'
  ];

  useEffect(() => {
    // Update form when service type changes
    setFormData(prev => ({
      ...prev,
      serviceCategory: serviceType,
      companySize: serviceType === 'sme' ? 'small' : serviceType === 'large-enterprise' ? 'enterprise' : 'consultancy'
    }));
  }, [serviceType]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleNext = () => {
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Auto redirect after success
    setTimeout(() => {
      navigate('/thank-you');
    }, 3000);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Service Selection
                </Typography>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <InputLabel sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Migration Type</InputLabel>
                  <Select
                    value={formData.targetSystem}
                    onChange={(e) => handleInputChange('targetSystem', e.target.value)}
                    label="Migration Type"
                    sx={{ minHeight: '56px', '& .MuiSelect-select': { py: 2 } }}
                  >
                    {currentConfig.migrationOptions.map(option => (
                      <MenuItem key={option} value={option} sx={{ py: 1.5, fontSize: '1rem' }}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <TextField
                  fullWidth
                  label="Current Payroll System"
                  value={formData.currentSystem}
                  onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                  sx={{ mb: 4, '& .MuiInputBase-root': { minHeight: '56px' } }}
                  placeholder="e.g., Legacy system, Excel, Current provider"
                  InputLabelProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }}
                />
                
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <InputLabel sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Migration Urgency</InputLabel>
                  <Select
                    value={formData.migrationUrgency}
                    onChange={(e) => handleInputChange('migrationUrgency', e.target.value)}
                    label="Migration Urgency"
                    sx={{ minHeight: '56px', '& .MuiSelect-select': { py: 2 } }}
                  >
                    <MenuItem value="immediate" sx={{ py: 1.5, fontSize: '1rem' }}>Immediate (within 1 month)</MenuItem>
                    <MenuItem value="soon" sx={{ py: 1.5, fontSize: '1rem' }}>Soon (1-3 months)</MenuItem>
                    <MenuItem value="planned" sx={{ py: 1.5, fontSize: '1rem' }}>Planned (3-6 months)</MenuItem>
                    <MenuItem value="future" sx={{ py: 1.5, fontSize: '1rem' }}>Future consideration (6+ months)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </motion.div>
        );
      
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4, fontSize: '1.5rem' }}>
                  Company Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'var(--color-on-surface-variant)' }}>
                  Please provide your company details to help us tailor the perfect migration solution for your needs.
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                  sx={{ '& .MuiInputBase-root': { minHeight: '56px' } }}
                  InputLabelProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Industry Sector</InputLabel>
                  <Select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    label="Industry Sector"
                    sx={{ minHeight: '56px', '& .MuiSelect-select': { py: 2 } }}
                  >
                    {currentConfig.industries.map(industry => (
                      <MenuItem key={industry} value={industry} sx={{ py: 1.5, fontSize: '1rem' }}>{industry}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Company Size (Employees)</InputLabel>
                  <Select
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    label="Company Size (Employees)"
                    sx={{ minHeight: '56px', '& .MuiSelect-select': { py: 2 } }}
                  >
                    {currentConfig.employeeRanges.map(range => (
                      <MenuItem key={range} value={range} sx={{ py: 1.5, fontSize: '1rem' }}>{range}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontSize: '1.1rem', fontWeight: 500 }}>Expected Data Volume</InputLabel>
                  <Select
                    value={formData.dataVolume}
                    onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                    label="Expected Data Volume"
                    sx={{ minHeight: '56px', '& .MuiSelect-select': { py: 2 } }}
                  >
                    <MenuItem value="small" sx={{ py: 1.5, fontSize: '1rem' }}>Small (&lt; 1GB)</MenuItem>
                    <MenuItem value="medium" sx={{ py: 1.5, fontSize: '1rem' }}>Medium (1-10GB)</MenuItem>
                    <MenuItem value="large" sx={{ py: 1.5, fontSize: '1rem' }}>Large (10-100GB)</MenuItem>
                    <MenuItem value="enterprise" sx={{ py: 1.5, fontSize: '1rem' }}>Enterprise (100GB+)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Technical Requirements
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Migration Scope (select all that apply)
            </Typography>
            <Box sx={{ mb: 3 }}>
              {[
                'Employee Data Migration',
                'Historical Payroll Data',
                'Tax Information',
                'Benefits Integration',
                'Time Tracking Integration',
                'Reporting Setup',
                'Custom Calculations',
                'Multi-Currency Support'
              ].map(scope => (
                <Chip
                  key={scope}
                  label={scope}
                  onClick={() => handleArrayFieldChange('migrationScope', scope)}
                  color={formData.migrationScope.includes(scope) ? 'primary' : 'default'}
                  variant={formData.migrationScope.includes(scope) ? 'filled' : 'outlined'}
                  sx={{ mr: 1, mb: 1, cursor: 'pointer' }}
                />
              ))}
            </Box>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Compliance Requirements
            </Typography>
            <Box sx={{ mb: 3 }}>
              {[
                'GDPR Compliance',
                'SOX Compliance',
                'ISO 27001',
                'Local Tax Regulations',
                'Industry-Specific Requirements',
                'Data Residency Requirements'
              ].map(compliance => (
                <Chip
                  key={compliance}
                  label={compliance}
                  onClick={() => handleArrayFieldChange('complianceRequirements', compliance)}
                  color={formData.complianceRequirements.includes(compliance) ? 'secondary' : 'default'}
                  variant={formData.complianceRequirements.includes(compliance) ? 'filled' : 'outlined'}
                  sx={{ mr: 1, mb: 1, cursor: 'pointer' }}
                />
              ))}
            </Box>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Contact Information & Timeline
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Name"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Preferred Timeline</InputLabel>
                  <Select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    label="Preferred Timeline"
                  >
                    <MenuItem value="asap">ASAP</MenuItem>
                    <MenuItem value="1-2months">1-2 months</MenuItem>
                    <MenuItem value="3-6months">3-6 months</MenuItem>
                    <MenuItem value="6-12months">6-12 months</MenuItem>
                    <MenuItem value="flexible">Flexible</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Budget Range</InputLabel>
                  <Select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    label="Budget Range"
                  >
                    <MenuItem value="under-10k">Under £10,000</MenuItem>
                    <MenuItem value="10k-25k">£10,000 - £25,000</MenuItem>
                    <MenuItem value="25k-50k">£25,000 - £50,000</MenuItem>
                    <MenuItem value="50k-100k">£50,000 - £100,000</MenuItem>
                    <MenuItem value="100k-plus">£100,000+</MenuItem>
                    <MenuItem value="discuss">Prefer to discuss</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Requirements"
                  multiline
                  rows={4}
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                  placeholder="Please describe any specific requirements, challenges, or questions you have..."
                />
              </Grid>
            </Grid>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="surface min-h-screen py-16 md:py-20">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-8 md:p-12 text-center gradient-subtle">
              <CheckCircleOutline sx={{ fontSize: 80, color: 'var(--color-success-60)', marginBottom: '24px' }} />
              <h1 className="display-medium mb-6 text-on-surface">
                Quote Request Submitted!
              </h1>
              <p className="headline-small text-on-surface-variant mb-8 max-w-lg mx-auto">
                Thank you for your interest. Our team will review your requirements 
                and get back to you within 24 hours with a detailed quote.
              </p>
              <button
                onClick={() => navigate('/')}
                className="btn-gradient px-8 py-3"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="surface min-h-screen py-16 md:py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              {currentConfig.icon}
              <h1 className="display-medium text-on-surface">
                {currentConfig.title}
              </h1>
            </div>
            <p className="headline-small text-on-surface-variant max-w-2xl mx-auto">
              {currentConfig.description}
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="card p-8 mb-8" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-container-low) 100%)' }}>
            <div className="flex justify-between items-start mb-4">
              {steps.map((label, index) => (
                <div key={label} className="flex flex-col items-center flex-1 relative">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold mb-3 transition-all duration-300 shadow-sm ${
                      index <= activeStep 
                        ? 'text-white' 
                        : 'text-on-surface-variant'
                    }`}
                    style={{
                      background: index <= activeStep 
                        ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
                        : 'var(--color-surface-container)',
                      transform: index === activeStep ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    {index + 1}
                  </div>
                  <span className={`text-sm text-center font-medium px-2 ${
                    index <= activeStep ? 'text-on-surface' : 'text-on-surface-variant'
                  }`}>
                    {label}
                  </span>
                  {index < steps.length - 1 && (
                    <div 
                      className={`absolute top-6 left-1/2 w-full h-1 rounded-full transition-all duration-500 ${
                        index < activeStep ? '' : ''
                      }`}
                      style={{
                        background: index < activeStep 
                          ? 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
                          : 'var(--color-outline-variant)',
                        transform: 'translateX(50%)',
                        zIndex: -1
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="card p-10 mb-10" style={{ background: 'var(--color-surface)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            {renderStepContent(activeStep)}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10 px-4">
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                activeStep === 0 
                  ? 'invisible' 
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant hover:shadow-md'
              }`}
              style={{
                minWidth: '120px',
                boxShadow: activeStep === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <ArrowBack sx={{ fontSize: 20 }} />
              <span>Back</span>
            </button>
            
            {activeStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-white shadow-lg hover:shadow-xl disabled:opacity-70"
                style={{
                  background: isSubmitting 
                    ? 'var(--color-outline)' 
                    : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  minWidth: '200px',
                  transform: isSubmitting ? 'none' : 'scale(1.02)',
                  boxShadow: '0 4px 16px rgba(107, 62, 145, 0.3)'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send sx={{ fontSize: 20 }} />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-white hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  minWidth: '140px',
                  transform: 'scale(1.02)',
                  boxShadow: '0 4px 16px rgba(107, 62, 145, 0.3)'
                }}
              >
                <span>Next</span>
                <ArrowForward sx={{ fontSize: 20 }} />
              </button>
            )}
          </div>

          {/* Service Type Auto-Detection Alert */}
          <div className="card p-4 mt-6 surface-container-low">
            <p className="body-medium text-on-surface-variant">
              Service type automatically detected: <span className="font-medium text-on-surface">{currentConfig.title}</span>
              {' - '}
              <button 
                onClick={() => navigate('/services')}
                className="text-primary hover:underline"
              >
                Change service type
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotePage;