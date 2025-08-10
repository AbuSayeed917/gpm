import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  CheckCircle,
  Speed,
  Group,
  Public
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';
import { AppleCard, AppleCardGrid } from '../components/AppleCardSystem';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone />,
      title: "Phone",
      primary: "+44 (0) 20 7946 0234",
      secondary: "Available Mon-Fri 9AM-6PM GMT",
      description: "Speak directly with a migration expert",
      color: '#007AFF'
    },
    {
      icon: <Email />,
      title: "Email",
      primary: "hello@globalpayrollmigration.com",
      secondary: "Response within 2 hours",
      description: "Send us your requirements",
      color: '#34C759'
    },
    {
      icon: <Schedule />,
      title: "Book Discovery Call",
      primary: "Free 30-minute consultation",
      secondary: "No obligation, just insight",
      description: "Schedule directly with an expert",
      color: '#FF9500'
    }
  ];

  const whyContact = [
    {
      icon: <CheckCircle />,
      title: "Free Consultation",
      description: "No-obligation discussion about your payroll migration needs"
    },
    {
      icon: <Speed />,
      title: "Quick Response",
      description: "We respond to all inquiries within 2 hours during business hours"
    },
    {
      icon: <Group />,
      title: "Expert Team",
      description: "Speak directly with experienced payroll migration specialists"
    },
    {
      icon: <Public />,
      title: "Global Experience",
      description: "Deep knowledge of payroll systems across 14+ countries"
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

  return (
    <AppleBackground>
    <Box>
      {/* Hero Section */}
      <div className="hero-modern">
        <div className="container">
          <div className="hero-content">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <div className="hero-badge">
                <Phone sx={{ fontSize: 16, color: '#F59E0B' }} />
                <span>Free Consultation Available</span>
              </div>
              
              <Typography 
                className="display-lg gradient-text"
                component="h1"
                sx={{ mb: 4 }}
              >
                Get Started with Your Payroll Migration
              </Typography>
              
              <Typography 
                className="body-xl text-muted"
                sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}
              >
                Ready to migrate without the stress? Let's discuss how we can support your payroll migration — 
                whether you're just starting out or ready to move.
              </Typography>
            </MotionBox>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="section">
        <div className="container">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
          >
            <Typography className="display-md" sx={{ mb: 4 }}>
              How to <span className="gradient-text">Reach Us</span>
            </Typography>
            <Typography className="body-xl text-muted" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Choose the method that works best for you
            </Typography>
          </MotionBox>

        <AppleCardGrid columns={3} minWidth="320px" gap="32px" style={{ marginBottom: '64px' }}>
          {contactMethods.map((method, index) => (
            <AppleCard
              key={index}
              title={method.title}
              subtitle={method.primary}
              description={method.description}
              icon={method.icon}
              iconColor={method.color}
              features={[method.secondary]}
              size="compact"
              variant="glass"
              style={{
                textAlign: 'center',
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </AppleCardGrid>
        </div>
      </div>

      {/* Why Contact Us */}
      <div className="section section-alt">
        <div className="container">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
          >
            <Typography className="display-md" sx={{ mb: 4 }}>
              Why <span className="gradient-text">Contact Us</span>?
            </Typography>
          </MotionBox>
          
          <div className="service-grid">
            {whyContact.map((reason, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="service-icon">
                  {React.cloneElement(reason.icon, { sx: { fontSize: 40, color: 'white' } })}
                </div>
                <Typography className="service-title">
                  {reason.title}
                </Typography>
                <Typography className="service-description">
                  {reason.description}
                </Typography>
              </MotionBox>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="section">
        <div className="container" style={{ maxWidth: '768px' }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card sx={{ p: 4 }}>
              <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2, color: 'text.primary' }}>
                Request Your Custom Quote
              </Typography>
              <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', fontWeight: 400, mb: 4 }}>
                Tell us your requirements and get a tailored proposal within 24 hours
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Number of Employees"
                    variant="outlined"
                    placeholder="e.g. 50, 500, 5000"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Service Required</InputLabel>
                    <Select label="Service Required">
                      {services.map((service, index) => (
                        <MenuItem key={index} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Timeline</InputLabel>
                    <Select label="Timeline">
                      {urgency.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Current Payroll System"
                    variant="outlined"
                    placeholder="e.g. Sage, ADP, Excel spreadsheets, etc."
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Target System (if known)"
                    variant="outlined"
                    placeholder="e.g. Dayforce, Workday, not sure yet"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Countries/Regions"
                    variant="outlined"
                    placeholder="e.g. UK, Germany, France"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Details"
                    variant="outlined"
                    placeholder="Tell us more about your requirements, challenges, or specific needs..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={3} justifyContent="center">
                    <Button 
                      variant="contained" 
                      size="large"
                      sx={{ 
                        py: 2, 
                        px: 6,
                        fontSize: '1.1rem',
                        minWidth: 200
                      }}
                    >
                      Send Request
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{ 
                        py: 2, 
                        px: 6,
                        fontSize: '1.1rem',
                        minWidth: 200
                      }}
                    >
                      Schedule Call Instead
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </MotionBox>
        </div>
      </div>

      {/* Direct Contact Information */}
      <div className="section section-alt">
        <div className="container">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="service-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <div>
              <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
                Or Contact Us Directly
              </Typography>
              
              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <Phone sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Phone
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 5 }}>
                    +44 (0) 20 7946 0234
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', ml: 5 }}>
                    Available Monday-Friday, 9AM-6PM GMT
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <Email sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 5 }}>
                    hello@globalpayrollmigration.com
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', ml: 5 }}>
                    Response within 2 hours during business hours
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <LocationOn sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Location
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 5 }}>
                    United Kingdom
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', ml: 5 }}>
                    Serving clients across UK, Europe, Middle East, and beyond
                  </Typography>
                </Box>
              </Stack>
            </div>
            
            <div>
              <MotionCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{ 
                  textAlign: 'center', 
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(88, 86, 214, 0.05) 100%)'
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  What Happens Next?
                </Typography>
                
                <Stack spacing={2} textAlign="left">
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        mt: 0.5
                      }}
                    >
                      1
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Initial Response
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        We'll respond within 2 hours with next steps
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        mt: 0.5
                      }}
                    >
                      2
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Discovery Call
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        30-minute consultation to understand your needs
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        mt: 0.5
                      }}
                    >
                      3
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Custom Proposal
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Detailed proposal within 24 hours
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </MotionCard>
            </div>
          </div>
        </MotionBox>
        </div>
      </div>
    </Box>
    </AppleBackground>
  );
};

export default Contact;