import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Paper
} from '@mui/material';
import {
  CorporateFare,
  Public,
  Star,
  People,
  Security
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';

const MotionDiv = motion.div;
const MotionCard = motion(Card);

const LargeEnterpriseSuccessStories = () => {
  const stories = [
    {
      company: "GlobalTech Industries",
      industry: "Technology",
      size: "12,500 employees",
      countries: "25 countries",
      location: "Multinational",
      avatar: "GT",
      challenge: "Legacy mainframe payroll system struggling with global compliance and taking 8 days to process monthly payroll across multiple jurisdictions.",
      solution: "Complete migration to cloud-based enterprise platform with real-time multi-country processing and automated compliance management.",
      results: [
        "Reduced global payroll processing from 8 days to 6 hours",
        "Achieved 100% compliance across all 25 jurisdictions",
        "Eliminated $2.3M in annual compliance penalties",
        "Improved employee satisfaction scores by 45%",
        "Reduced IT maintenance costs by 60%"
      ],
      quote: "This migration transformed our global operations. We now process payroll for 12,500 employees across 25 countries in less than a day, with perfect compliance.",
      testimonial: {
        name: "Michael Chen",
        role: "Global CHRO",
        rating: 5
      },
      metrics: {
        employees: "12,500",
        countries: "25",
        timeSaved: "95%",
        costSavings: "$2.3M",
        implementation: "18 months"
      },
      complexity: "High"
    },
    {
      company: "International Manufacturing Corp",
      industry: "Manufacturing",
      size: "8,750 employees",
      countries: "18 countries",
      location: "Europe & Asia",
      avatar: "IM",
      challenge: "Multiple disparate payroll systems causing data inconsistencies, reporting delays, and difficulty in global workforce analytics.",
      solution: "Unified global payroll platform with advanced analytics, real-time reporting, and seamless ERP integration across all manufacturing sites.",
      results: [
        "Consolidated 18 separate payroll systems into one",
        "Real-time global workforce analytics and reporting",
        "Reduced month-end closing time by 70%",
        "Improved data accuracy to 99.97%",
        "Generated $1.8M annual operational savings"
      ],
      quote: "Having unified payroll data across our global operations has revolutionized our workforce planning and financial reporting capabilities.",
      testimonial: {
        name: "Anna Kowalski",
        role: "VP Global Operations",
        rating: 5
      },
      metrics: {
        employees: "8,750",
        countries: "18",
        timeSaved: "70%",
        costSavings: "$1.8M",
        implementation: "14 months"
      },
      complexity: "High"
    },
    {
      company: "Financial Services Global",
      industry: "Financial Services",
      size: "15,200 employees",
      countries: "32 countries",
      location: "Global",
      avatar: "FS",
      challenge: "Strict regulatory requirements across multiple financial jurisdictions with complex bonus calculations and audit trail requirements.",
      solution: "Enterprise-grade solution with advanced security, comprehensive audit trails, and automated regulatory reporting for financial services compliance.",
      results: [
        "Achieved SOX compliance across all jurisdictions",
        "Automated complex bonus and commission calculations",
        "Reduced audit preparation time by 85%",
        "Enhanced security with military-grade encryption",
        "Streamlined regulatory reporting across 32 countries"
      ],
      quote: "The security and compliance features exceeded our expectations. We now handle complex financial regulations with confidence and complete audit transparency.",
      testimonial: {
        name: "Robert Harrison",
        role: "Chief Compliance Officer",
        rating: 5
      },
      metrics: {
        employees: "15,200",
        countries: "32",
        timeSaved: "85%",
        costSavings: "$3.1M",
        implementation: "24 months"
      },
      complexity: "Very High"
    },
    {
      company: "Retail Empire Holdings",
      industry: "Retail",
      size: "22,000 employees",
      countries: "15 countries",
      location: "Americas & Europe",
      avatar: "RE",
      challenge: "Seasonal workforce fluctuations, complex shift patterns, and varying regional labor laws creating payroll processing bottlenecks during peak seasons.",
      solution: "Scalable platform with dynamic workforce management, automated shift calculations, and region-specific compliance rules for retail operations.",
      results: [
        "Seamlessly handled 40% seasonal workforce increases",
        "Automated complex shift and overtime calculations",
        "Reduced peak season processing time by 60%",
        "Improved workforce cost visibility and forecasting",
        "Enhanced employee self-service adoption to 92%"
      ],
      quote: "During our busiest seasons, the system scales effortlessly. Our seasonal hiring and payroll processing is now completely automated and error-free.",
      testimonial: {
        name: "Lisa Rodriguez",
        role: "Global HR Director",
        rating: 5
      },
      metrics: {
        employees: "22,000",
        countries: "15",
        timeSaved: "60%",
        costSavings: "$1.4M",
        implementation: "16 months"
      },
      complexity: "High"
    }
  ];

  const stats = [
    { number: "75+", label: "Enterprise Clients", icon: <CorporateFare /> },
    { number: "2M+", label: "Employees Migrated", icon: <People /> },
    { number: "50+", label: "Countries Served", icon: <Public /> },
    { number: "99.99%", label: "Uptime SLA", icon: <Security /> }
  ];

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'High': return 'warning';
      case 'Very High': return 'error';
      default: return 'info';
    }
  };

  return (
    <AppleBackground>
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <CorporateFare sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Enterprise Success Stories
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
          >
            Explore how global enterprises have revolutionized their payroll operations 
            with our comprehensive migration solutions spanning multiple countries and complex requirements.
          </Typography>
        </MotionDiv>

        {/* Stats Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center' }}
                >
                  <Box sx={{ mb: 2 }}>
                    {React.cloneElement(stat.icon, { 
                      sx: { fontSize: 40, color: 'secondary.main' } 
                    })}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'secondary.main',
                      mb: 1 
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </MotionDiv>
              </Grid>
            ))}
          </Grid>
        </MotionDiv>

        {/* Success Stories */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Global Enterprise Transformations
          </Typography>
          <Grid container spacing={4}>
            {stories.map((story, index) => (
              <Grid item xs={12} key={story.company}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ 
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-4px)' }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Company Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar 
                        sx={{ 
                          width: 60, 
                          height: 60, 
                          bgcolor: 'secondary.main', 
                          fontSize: '1.5rem',
                          mr: 3 
                        }}
                      >
                        {story.avatar}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                          {story.company}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                          <Chip label={story.industry} color="secondary" variant="outlined" size="small" />
                          <Chip label={story.size} color="primary" variant="outlined" size="small" />
                          <Chip label={story.countries} color="info" variant="outlined" size="small" />
                          <Chip 
                            label={`${story.complexity} Complexity`} 
                            color={getComplexityColor(story.complexity)} 
                            variant="outlined" 
                            size="small" 
                          />
                        </Box>
                      </Box>
                    </Box>

                    {/* Enterprise Metrics */}
                    <Paper sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={6} md={2}>
                          <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.employees}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Employees
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.countries}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Countries
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.timeSaved}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Time Saved
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.costSavings}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Annual Savings
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Typography variant="h6" color="info.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.implementation}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Implementation Timeline
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'error.main' }}>
                          Enterprise Challenge
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.challenge}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
                          Strategic Solution
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.solution}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
                          Business Impact
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {story.results.map((result, idx) => (
                            <Typography component="li" variant="body2" color="text.secondary" key={idx} sx={{ mb: 0.5 }}>
                              {result}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    {/* Executive Testimonial */}
                    <Box sx={{ bgcolor: 'secondary.50', p: 3, borderRadius: 2, border: '1px solid', borderColor: 'secondary.100' }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, fontSize: '1.1rem' }}>
                        "{story.quote}"
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {story.testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {story.testimonial.role}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          {[...Array(story.testimonial.rating)].map((_, idx) => (
                            <Star key={idx} sx={{ color: '#F59E0B', fontSize: 24 }} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card sx={{ 
            background: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)',
            color: 'white',
            textAlign: 'center',
            p: 4
          }}>
            <CardContent>
              <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'white' }}>
                Transform Your Global Enterprise
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                Join these industry leaders in revolutionizing global payroll operations. 
                Our enterprise specialists are ready to design your transformation strategy.
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/contact"
                    sx={{ 
                      bgcolor: 'white',
                      color: 'secondary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': { 
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Schedule Enterprise Consultation
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/services/large-enterprise"
                    sx={{ 
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': { 
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderColor: 'white',
                        color: 'white',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Enterprise Solutions
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </MotionDiv>
      </Container>
    </Box>
    </AppleBackground>
  );
};

export default LargeEnterpriseSuccessStories;