import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Chip,
  Alert,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  Paper
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
import './QuotePage.css';

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
      icon: <Business sx={{ fontSize: 40, color: '#007AFF' }} />,
      gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
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
      icon: <CorporateFare sx={{ fontSize: 40, color: '#FF3B30' }} />,
      gradient: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)',
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
      icon: <Groups sx={{ fontSize: 40, color: '#34C759' }} />,
      gradient: 'linear-gradient(135deg, #34C759 0%, #30DB5B 100%)',
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
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Migration Type</InputLabel>
                  <Select
                    value={formData.targetSystem}
                    onChange={(e) => handleInputChange('targetSystem', e.target.value)}
                    label="Migration Type"
                  >
                    {currentConfig.migrationOptions.map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <TextField
                  fullWidth
                  label="Current Payroll System"
                  value={formData.currentSystem}
                  onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                  sx={{ mb: 3 }}
                  placeholder="e.g., Legacy system, Excel, Current provider"
                />
                
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Migration Urgency</InputLabel>
                  <Select
                    value={formData.migrationUrgency}
                    onChange={(e) => handleInputChange('migrationUrgency', e.target.value)}
                    label="Migration Urgency"
                  >
                    <MenuItem value="immediate">Immediate (within 1 month)</MenuItem>
                    <MenuItem value="soon">Soon (1-3 months)</MenuItem>
                    <MenuItem value="planned">Planned (3-6 months)</MenuItem>
                    <MenuItem value="future">Future consideration (6+ months)</MenuItem>
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Company Information
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Industry</InputLabel>
                  <Select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    label="Industry"
                  >
                    {currentConfig.industries.map(industry => (
                      <MenuItem key={industry} value={industry}>{industry}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Number of Employees</InputLabel>
                  <Select
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    label="Number of Employees"
                  >
                    {currentConfig.employeeRanges.map(range => (
                      <MenuItem key={range} value={range}>{range}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Data Volume</InputLabel>
                  <Select
                    value={formData.dataVolume}
                    onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                    label="Data Volume"
                  >
                    <MenuItem value="small">Small (&lt; 1GB)</MenuItem>
                    <MenuItem value="medium">Medium (1-10GB)</MenuItem>
                    <MenuItem value="large">Large (10-100GB)</MenuItem>
                    <MenuItem value="enterprise">Enterprise (100GB+)</MenuItem>
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
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper className="glass-card-strong" sx={{ p: 6, textAlign: 'center' }}>
            <CheckCircleOutline sx={{ fontSize: 80, color: 'success.main', mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Quote Request Submitted!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Thank you for your interest. Our team will review your requirements 
              and get back to you within 24 hours with a detailed quote.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              size="large"
              sx={{ px: 6 }}
            >
              Return to Home
            </Button>
          </Paper>
        </motion.div>
      </Container>
    );
  }

  return (
    <AppleBackground>
      <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
            {currentConfig.icon}
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              {currentConfig.title}
            </Typography>
          </Box>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {currentConfig.description}
          </Typography>
        </Box>

        {/* Progress Stepper */}
        <Paper className="glass-card" sx={{ p: 4, mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{
                  '& .MuiStepLabel-label': {
                    fontFamily: 'var(--font-sf-text)',
                    fontWeight: 500
                  }
                }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* Form Content */}
        <Paper className="glass-card-strong" sx={{ p: 6 }}>
          {renderStepContent(activeStep)}
          
          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              startIcon={<ArrowBack />}
              sx={{ visibility: activeStep === 0 ? 'hidden' : 'visible' }}
            >
              Back
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                variant="contained"
                endIcon={isSubmitting ? null : <Send />}
                disabled={isSubmitting}
                sx={{ px: 4 }}
              >
                {isSubmitting ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinearProgress sx={{ width: 100 }} />
                    Submitting...
                  </Box>
                ) : (
                  'Submit Quote Request'
                )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                endIcon={<ArrowForward />}
              >
                Next
              </Button>
            )}
          </Box>
        </Paper>

        {/* Service Type Auto-Detection Alert */}
        <Alert 
          severity="info" 
          sx={{ 
            mt: 3, 
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            border: 'var(--glass-border)'
          }}
        >
          Service type automatically detected: <strong>{currentConfig.title}</strong>
          {' - '}
          <Button 
            size="small" 
            onClick={() => navigate('/services')}
            sx={{ textTransform: 'none' }}
          >
            Change service type
          </Button>
        </Alert>
      </motion.div>
      </Container>
    </AppleBackground>
  );
};

export default QuotePage;