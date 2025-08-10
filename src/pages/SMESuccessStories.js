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
  Divider
} from '@mui/material';
import {
  Business,
  AccessTime,
  MonetizationOn,
  Star
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';

const MotionDiv = motion.div;
const MotionCard = motion(Card);

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
    },
    {
      company: "HealthCare Partners",
      industry: "Healthcare",
      size: "95 employees",
      location: "Edinburgh, UK",
      avatar: "HP",
      challenge: "Complex shift patterns for medical staff and strict compliance requirements for healthcare worker regulations.",
      solution: "Specialized healthcare payroll system with automated compliance checking and flexible shift management.",
      results: [
        "Automated compliance with healthcare regulations",
        "Flexible scheduling for medical staff shifts",
        "Reduced compliance audit preparation time by 90%",
        "Improved staff satisfaction with transparent pay calculations"
      ],
      quote: "The system understands the complexity of healthcare payroll. Compliance is now automatic, and our staff trust their pay calculations completely.",
      testimonial: {
        name: "Dr. James Wilson",
        role: "Practice Manager",
        rating: 5
      },
      metrics: {
        timeSaved: "85%",
        costReduction: "28%",
        implementation: "10 weeks"
      }
    }
  ];

  const stats = [
    { number: "150+", label: "SMEs Migrated", icon: <Business /> },
    { number: "98%", label: "Success Rate", icon: <Star /> },
    { number: "6 weeks", label: "Avg Implementation", icon: <AccessTime /> },
    { number: "£50K", label: "Avg Annual Savings", icon: <MonetizationOn /> }
  ];

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
          <Business sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            SME Success Stories
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '700px', mx: 'auto', mb: 6 }}
          >
            Discover how small and medium enterprises have transformed their payroll operations 
            with our tailored migration solutions.
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
                      sx: { fontSize: 40, color: 'primary.main' } 
                    })}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main',
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
            Real SME Transformations
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
                          bgcolor: 'primary.main', 
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
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label={story.industry} color="primary" variant="outlined" size="small" />
                          <Chip label={story.size} color="secondary" variant="outlined" size="small" />
                          <Chip label={story.location} variant="outlined" size="small" />
                        </Box>
                      </Box>
                      
                      {/* Quick Metrics */}
                      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, textAlign: 'center' }}>
                        <Box>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.timeSaved}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Time Saved
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.costReduction}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Cost Reduction
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" color="info.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.implementation}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Implementation
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'error.main' }}>
                          Challenge
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.challenge}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
                          Solution
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.solution}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
                          Results
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

                    {/* Testimonial */}
                    <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2 }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                        "{story.quote}"
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {story.testimonial.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {story.testimonial.role}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          {[...Array(story.testimonial.rating)].map((_, idx) => (
                            <Star key={idx} sx={{ color: '#F59E0B', fontSize: 20 }} />
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
            background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
            color: 'white',
            textAlign: 'center',
            p: 4
          }}>
            <CardContent>
              <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'white' }}>
                Ready to Join These Success Stories?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                Transform your SME's payroll operations with our proven migration expertise. 
                Get started with a free consultation today.
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
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': { 
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Start Your Migration
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/services/sme"
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
                    View SME Services
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

export default SMESuccessStories;