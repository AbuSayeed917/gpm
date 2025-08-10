import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
  Chip
} from '@mui/material';
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
    <Box component="footer" sx={{ 
      background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(88, 86, 214, 0.05) 100%)',
      pt: 8, 
      pb: 4,
      borderTop: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Language sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Global Payroll Migration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                UK-based payroll migration specialists trusted by Fortune 500 companies 
                worldwide. Zero downtime guaranteed.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                <Chip 
                  icon={<Security sx={{ fontSize: '16px !important' }} />}
                  label="ISO 27001 Certified" 
                  variant="outlined" 
                  size="small"
                />
                <Chip 
                  icon={<Public sx={{ fontSize: '16px !important' }} />}
                  label="Global Coverage" 
                  variant="outlined" 
                  size="small"
                />
                <Chip 
                  icon={<Support sx={{ fontSize: '16px !important' }} />}
                  label="24/7 Support" 
                  variant="outlined" 
                  size="small"
                />
              </Stack>
            </Box>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <Stack spacing={1}>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/services/sme" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                SME Solutions
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/services/large-enterprise" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Large Enterprise
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/services/consultancy" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Expert Consultancy
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/quote" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Get Quote
              </Typography>
            </Stack>
          </Grid>

          {/* Success Stories Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Success Stories
            </Typography>
            <Stack spacing={1}>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/success-stories/sme" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                SME Case Studies
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/success-stories/large-enterprise" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Enterprise Stories
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/success-stories/consultancy" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Consultancy Results
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/success-stories" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                All Success Stories
              </Typography>
            </Stack>
          </Grid>

          {/* Company Links Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/about" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                About Us
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/faq" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                FAQ
              </Typography>
              <Typography 
                variant="body2" 
                component={Link} 
                to="/contact" 
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Contact
              </Typography>
              <Typography 
                variant="body2" 
                component="a"
                href="/careers"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Careers
              </Typography>
            </Stack>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Get Started
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Ready to migrate your payroll system with zero downtime?
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              to="/quote"
              size="small"
              sx={{ mb: 3 }}
            >
              Get Free Quote
            </Button>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +44 20 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  hello@gpm.co.uk
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  2 hour response
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              &copy; {currentYear} Global Payroll Migration Ltd. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Registered in England & Wales. Company No: 12345678
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Typography 
              variant="body2" 
              component={Link} 
              to="/privacy" 
              sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              component={Link} 
              to="/terms" 
              sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              Terms of Service
            </Typography>
            <Typography 
              variant="body2" 
              component={Link} 
              to="/cookies" 
              sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              Cookie Policy
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton 
              component="a"
              href="https://linkedin.com/company/globalpayrollmigration" 
              target="_blank" 
              rel="noopener noreferrer"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              component="a"
              href="https://twitter.com/globalpayrollmigration" 
              target="_blank" 
              rel="noopener noreferrer"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <Twitter />
            </IconButton>
            <IconButton 
              component="a"
              href="https://youtube.com/@globalpayrollmigration" 
              target="_blank" 
              rel="noopener noreferrer"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <YouTube />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;