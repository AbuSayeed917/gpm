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
  Groups,
  Psychology,
  Star,
  Business,
  Handshake,
  MonetizationOn,
  TrendingUp
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';

const MotionDiv = motion.div;
const MotionCard = motion(Card);

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
        name: "James Patterson",
        role: "Managing Partner",
        rating: 5
      },
      metrics: {
        revenueAdded: "£2.8M",
        clientsMigrated: "85+",
        satisfaction: "98%",
        partnership: "3 years"
      },
      partnershipType: "White-Label Services"
    },
    {
      company: "TechConsult Excellence",
      industry: "Technology Consulting",
      size: "120 consultants",
      clients: "Fortune 500 focus",
      location: "Manchester, UK",
      avatar: "TC",
      challenge: "Enterprise clients requesting complex payroll system modernization as part of broader digital transformation initiatives, requiring specialized expertise.",
      solution: "Joint venture approach combining their change management expertise with our technical payroll migration capabilities for comprehensive digital transformation projects.",
      results: [
        "Won 12 major digital transformation contracts",
        "Generated £6.5M in additional project value",
        "Established expertise in payroll modernization",
        "Enhanced competitive positioning in market",
        "Built long-term strategic partnerships with key clients"
      ],
      quote: "Our clients now see us as the complete digital transformation partner. The payroll expertise we gained through this partnership has been a game-changer.",
      testimonial: {
        name: "Sarah Williams",
        role: "Digital Transformation Director",
        rating: 5
      },
      metrics: {
        revenueAdded: "£6.5M",
        clientsMigrated: "12",
        satisfaction: "100%",
        partnership: "2 years"
      },
      partnershipType: "Joint Venture"
    },
    {
      company: "Professional Services Group",
      industry: "Management Consulting",
      size: "85 partners",
      clients: "Mid-market focus",
      location: "Edinburgh, UK",
      avatar: "PS",
      challenge: "Clients experiencing payroll compliance issues and inefficiencies, but the firm lacked specialized knowledge to provide comprehensive solutions.",
      solution: "Strategic advisory partnership providing training, knowledge transfer, and co-delivery of payroll optimization consulting services to their client base.",
      results: [
        "Upskilled 25 consultants in payroll expertise",
        "Delivered 40+ payroll optimization projects",
        "Increased average project value by 60%",
        "Reduced client churn by 35%",
        "Established new center of excellence"
      ],
      quote: "The knowledge transfer was exceptional. Our consultants now have deep payroll expertise that adds tremendous value to every client engagement.",
      testimonial: {
        name: "Michael Thompson",
        role: "Senior Partner",
        rating: 5
      },
      metrics: {
        revenueAdded: "£3.2M",
        clientsMigrated: "40+",
        satisfaction: "96%",
        partnership: "4 years"
      },
      partnershipType: "Strategic Advisory"
    },
    {
      company: "Legal & Compliance Associates",
      industry: "Legal Services",
      size: "60 attorneys",
      clients: "Corporate legal focus",
      location: "Birmingham, UK",
      avatar: "LC",
      challenge: "Corporate clients needed payroll compliance expertise for M&A transactions and regulatory changes, requiring specialized technical knowledge.",
      solution: "Expert advisory services providing payroll due diligence, compliance assessments, and migration planning for corporate transactions and regulatory changes.",
      results: [
        "Supported 30+ M&A transactions",
        "Enhanced due diligence capabilities",
        "Reduced client compliance risks significantly",
        "Expanded corporate legal service offerings",
        "Achieved recognition as payroll compliance specialists"
      ],
      quote: "Our clients rely on us for comprehensive payroll expertise in their most critical transactions. This partnership has made us the go-to firm for payroll compliance.",
      testimonial: {
        name: "Elizabeth Crawford",
        role: "Corporate Law Partner",
        rating: 5
      },
      metrics: {
        revenueAdded: "£1.9M",
        clientsMigrated: "30+",
        satisfaction: "100%",
        partnership: "2.5 years"
      },
      partnershipType: "Expert Advisory"
    }
  ];

  const stats = [
    { number: "50+", label: "Consulting Partners", icon: <Groups /> },
    { number: "£20M+", label: "Partner Revenue Generated", icon: <MonetizationOn /> },
    { number: "300+", label: "Joint Client Projects", icon: <Business /> },
    { number: "99%", label: "Partnership Satisfaction", icon: <Star /> }
  ];

  const getPartnershipTypeColor = (type) => {
    switch (type) {
      case 'White-Label Services': return 'primary';
      case 'Joint Venture': return 'secondary';
      case 'Strategic Advisory': return 'success';
      case 'Expert Advisory': return 'info';
      default: return 'default';
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
          <Groups sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              mb: 3,
              background: 'linear-gradient(135deg, #34C759 0%, #30DB5B 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Consultancy Success Stories
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
          >
            Discover how consulting firms have expanded their service offerings and grown their practices 
            through strategic partnerships in payroll migration expertise.
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
                      sx: { fontSize: 40, color: 'success.main' } 
                    })}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'success.main',
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
            Partnership Success Stories
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
                          bgcolor: 'success.main', 
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
                          <Chip label={story.industry} color="success" variant="outlined" size="small" />
                          <Chip label={story.size} color="primary" variant="outlined" size="small" />
                          <Chip label={story.clients} color="secondary" variant="outlined" size="small" />
                          <Chip 
                            label={story.partnershipType} 
                            color={getPartnershipTypeColor(story.partnershipType)} 
                            variant="filled" 
                            size="small" 
                          />
                        </Box>
                      </Box>
                    </Box>

                    {/* Partnership Metrics */}
                    <Paper sx={{ p: 2, mb: 3, bgcolor: 'success.50' }}>
                      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={6} md={3}>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.revenueAdded}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Revenue Added
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.clientsMigrated}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Clients Served
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.satisfaction}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Client Satisfaction
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="h6" color="info.main" sx={{ fontWeight: 700 }}>
                            {story.metrics.partnership}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Partnership Duration
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'error.main' }}>
                          Business Challenge
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.challenge}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
                          Partnership Solution
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.solution}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
                          Business Results
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

                    {/* Partner Testimonial */}
                    <Box sx={{ bgcolor: 'success.50', p: 3, borderRadius: 2, border: '1px solid', borderColor: 'success.200' }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, fontSize: '1.1rem' }}>
                        "{story.quote}"
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {story.testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {story.testimonial.role} • {story.company}
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

        {/* Partnership Benefits */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}>
            Partnership Models Available
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Psychology sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  White-Label Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Complete migration services under your brand
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Handshake sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Joint Ventures
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaborative project delivery partnerships
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <TrendingUp sx={{ fontSize: 50, color: 'success.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Strategic Advisory
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert guidance and knowledge transfer
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Business sx={{ fontSize: 50, color: 'info.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Expert Advisory
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Specialized expertise for complex projects
                </Typography>
              </Paper>
            </Grid>
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
            background: 'linear-gradient(135deg, #34C759 0%, #30DB5B 100%)',
            color: 'white',
            textAlign: 'center',
            p: 4
          }}>
            <CardContent>
              <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'white' }}>
                Ready to Expand Your Practice?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                Join our network of successful consulting partners. Let's discuss how payroll migration 
                expertise can accelerate your business growth and enhance your client relationships.
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
                      color: 'success.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': { 
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Explore Partnership
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/services/consultancy"
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
                    View Consultancy Services
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

export default ConsultancySuccessStories;