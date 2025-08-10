import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  CloudUpload,
  Public,
  Assessment,
  Check,
  Business,
  Storage,
  Computer,
  Handyman,
  SwapHoriz,
  Security,
  MergeType,
  CompareArrows,
  HealthAndSafety,
  Settings,
  QuestionAnswer
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';
import { AppleCard, AppleCardGrid } from '../components/AppleCardSystem';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Services = () => {
  const migrationServices = [
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: "Legacy Payroll System Migration",
      description: "Migrate from outdated or unsupported systems to modern payroll platforms with accurate historical transfer.",
      features: [
        "Complete data preservation and validation",
        "Zero downtime migration process",
        "Historical data accuracy guarantee",
        "Comprehensive system testing",
        "Legacy system decommissioning support"
      ],
      platforms: ["Sage", "Legacy ADP", "Ceridian", "Custom systems", "Old Workday versions"]
    },
    {
      icon: <Business sx={{ fontSize: 40 }} />,
      title: "Bespoke/In-House Payroll Migration",
      description: "Move customised or internally-developed payroll solutions to scalable, compliant platforms — cloud or on-prem.",
      features: [
        "Custom code analysis and mapping",
        "Business logic preservation",
        "Scalability improvements",
        "Modern platform integration",
        "Team knowledge transfer"
      ],
      platforms: ["Custom .NET systems", "Excel-based solutions", "Access databases", "Internal tools"]
    },
    {
      icon: <CloudUpload sx={{ fontSize: 40 }} />,
      title: "Cloud Payroll Migration",
      description: "Transition to modern platforms like Dayforce, Workday, ADP, Paychex, or Xero for better flexibility, access, and integration.",
      features: [
        "Cloud platform optimization",
        "Enhanced accessibility and mobility",
        "Automatic updates and maintenance",
        "Improved integration capabilities",
        "Scalability and performance gains"
      ],
      platforms: ["Dayforce", "Workday", "ADP Workforce Now", "Paychex", "Xero Payroll"]
    },
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: "On-Premise Payroll Migration",
      description: "Manage migrations to or from on-prem systems such as Sage, SAP, or Ceridian — with full control over setup and data.",
      features: [
        "Complete infrastructure control",
        "Enhanced data security",
        "Customized server configurations",
        "Direct database access",
        "Compliance with data residency requirements"
      ],
      platforms: ["SAP HCM", "Sage HRMS", "Ceridian Dayforce", "Oracle HCM", "PeopleSoft"]
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: "Multi-Country Payroll Consolidation",
      description: "Bring together multiple regional payrolls under a unified system for global visibility, compliance, and control.",
      features: [
        "Global payroll standardization",
        "Multi-currency support",
        "Localized compliance by region",
        "Unified reporting and analytics",
        "Centralized administration"
      ],
      countries: ["UK", "US", "Germany", "France", "Spain", "Netherlands", "UAE"]
    },
    {
      icon: <Handyman sx={{ fontSize: 40 }} />,
      title: "Manual-to-Digital Migration",
      description: "Eliminate spreadsheets and manual processes by upgrading to automated, rules-driven payroll technology.",
      features: [
        "Process automation implementation",
        "Error reduction through digitization",
        "Workflow optimization",
        "Audit trail establishment",
        "Staff productivity improvements"
      ],
      platforms: ["Excel replacements", "Paper-based systems", "Manual calculations"]
    },
    {
      icon: <SwapHoriz sx={{ fontSize: 40 }} />,
      title: "Platform-to-Platform Migration",
      description: "Move between existing payroll providers without disruption — preserving data, structure, and compliance.",
      features: [
        "Seamless provider transitions",
        "Data structure preservation",
        "Compliance continuity",
        "Minimal business disruption",
        "Contract transition support"
      ],
      examples: ["ADP to Workday", "Sage to Dayforce", "Paychex to ADP", "Workday to SAP"]
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Compliance-Driven Migrations",
      description: "Transition to new systems to meet legal obligations like GDPR, IR35, or DSN.",
      features: [
        "Regulatory compliance assurance",
        "Data protection implementation",
        "Audit trail maintenance",
        "Legal requirement adherence",
        "Risk mitigation strategies"
      ],
      regulations: ["GDPR", "IR35", "DSN", "Making Tax Digital", "Auto Enrolment"]
    },
    {
      icon: <MergeType sx={{ fontSize: 40 }} />,
      title: "Post-Merger Payroll Consolidation",
      description: "Unify payroll processes following mergers, acquisitions, or restructures.",
      features: [
        "Dual system integration",
        "Employee data consolidation",
        "Policy harmonization",
        "Benefit structure alignment",
        "Cultural integration support"
      ],
      scenarios: ["Company acquisitions", "Mergers", "Spin-offs", "Restructures"]
    },
    {
      icon: <CompareArrows sx={{ fontSize: 40 }} />,
      title: "Outsourced-to-In-House (and vice versa)",
      description: "Shift delivery models while maintaining continuity, security, and compliance.",
      features: [
        "Service model transition",
        "Knowledge transfer programs",
        "Process documentation",
        "System ownership transfer",
        "Ongoing support planning"
      ],
      transitions: ["Outsourced to In-house", "In-house to Outsourced", "Hybrid models"]
    }
  ];

  const implementationServices = [
    {
      title: "Configure pay elements, deduction rules, and statutory codes",
      description: "Set up all payroll components specific to your business requirements"
    },
    {
      title: "Build GL mappings and cost allocations",
      description: "Integrate with your financial systems for seamless accounting"
    },
    {
      title: "Set up time and HR system integrations",
      description: "Connect payroll with existing HR and time management systems"
    },
    {
      title: "Create user roles and security controls",
      description: "Establish proper access controls and security protocols"
    },
    {
      title: "Perform UAT testing, parallel runs, and go-live planning",
      description: "Comprehensive testing to ensure system reliability"
    }
  ];

  const strategicServices = [
    {
      icon: <QuestionAnswer sx={{ fontSize: 32 }} />,
      title: "Payroll Consultancy",
      description: "Expert-led guidance to improve your existing payroll setup, workflows, policies, and compliance frameworks.",
      benefits: [
        "Process optimization recommendations",
        "Best practice implementation",
        "Compliance framework enhancement",
        "Cost reduction strategies",
        "Technology roadmap planning"
      ]
    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 32 }} />,
      title: "Payroll Health Check",
      description: "A thorough audit of your current payroll operation — identifying risks, inefficiencies, and offering a clear plan for optimisation.",
      benefits: [
        "Risk identification and mitigation",
        "Process efficiency analysis",
        "Compliance gap assessment",
        "Technology evaluation",
        "Optimization roadmap"
      ]
    },
    {
      icon: <Assessment sx={{ fontSize: 32 }} />,
      title: "Payroll Investigation",
      description: "A forensic review to uncover historical payroll discrepancies, underpayments, or compliance gaps — ideal for clients facing audits, disputes, or data concerns.",
      benefits: [
        "Historical data analysis",
        "Discrepancy identification",
        "Compliance violation detection",
        "Audit preparation support",
        "Remediation planning"
      ]
    }
  ];

  return (
    <AppleBackground>
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
            pt={8}
            pb={6}
          >
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3
              }}
            >
              Complete Payroll Transformation Services
            </Typography>
            
            <Typography variant="h5" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              We provide tailored, end-to-end services to support your business through every phase of payroll transformation — 
              from legacy system replacement to modern implementation, strategic consultancy, and compliance improvement.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Payroll Migration Services */}
      <Container maxWidth="lg" className="section-spacing">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={6}
        >
          <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
            Payroll Migration Services
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            Our team delivers seamless migrations across all types of payroll systems — with zero data loss, full compliance, and minimal disruption.
          </Typography>
        </MotionBox>

        <AppleCardGrid columns="auto-fit" minWidth="320px" gap="24px">
          {migrationServices.map((service, index) => (
            <AppleCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor="#1976d2"
              features={service.features ? service.features.slice(0, 4) : []}
              size="default"
              variant="glass"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </AppleCardGrid>
      </Container>

      {/* Payroll System Implementation */}
      <Box className="section-spacing gradient-bg-primary">
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
            mb={6}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
              Payroll System Implementation
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400, mb: 4 }}>
              We don't just migrate — we fully implement your new payroll system to ensure it runs smoothly from day one:
            </Typography>
          </MotionBox>

          <div className="card-grid-2col">
            <div style={{ gridColumn: 'span 1' }}>
              <List>
                {implementationServices.map((service, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ListItem sx={{ py: 2, px: 0 }}>
                      <ListItemIcon>
                        <Check sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            {service.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {service.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </MotionBox>
                ))}
              </List>
            </div>
            
            <div>
              <MotionCard
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{ p: 4, textAlign: 'center', height: 'fit-content' }}
              >
                <Settings sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Platform Expertise
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Whether you're setting up Dayforce, SAP, ADP, or another platform — we tailor every configuration to your business and compliance needs.
                </Typography>
                <Stack spacing={1}>
                  {['Dayforce', 'Workday', 'ADP', 'SAP SuccessFactors', 'Sage', 'Ceridian'].map((platform, index) => (
                    <Chip key={index} label={platform} variant="outlined" />
                  ))}
                </Stack>
              </MotionCard>
            </div>
          </div>
        </Container>
      </Box>

      {/* Strategic Payroll Services */}
      <Container maxWidth="lg" className="section-spacing">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={6}
        >
          <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'text.primary' }}>
            Strategic Payroll Services
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            You don't need to be ready for a full migration to benefit from our expertise. We also provide:
          </Typography>
        </MotionBox>

        <AppleCardGrid columns={3} minWidth="320px" gap="24px">
          {strategicServices.map((service, index) => (
            <AppleCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor="#1976d2"
              features={service.benefits ? service.benefits.slice(0, 4) : []}
              size="default"
              variant="glass"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </AppleCardGrid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
        color: 'white',
        paddingTop: '80px', paddingBottom: '80px'
      }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'white' }}>
              Ready to Start Your Migration?
            </Typography>
            <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, maxWidth: '600px', mx: 'auto', fontWeight: 400 }}>
              Let's discuss your specific requirements and create a tailored migration plan.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{ 
                  py: 2, 
                  px: 4,
                  fontSize: '1.1rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  minWidth: 220,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.3)',
                  }
                }}
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outlined"
                size="large"
                component={Link}
                to="/success-stories"
                sx={{ 
                  py: 2, 
                  px: 4,
                  fontSize: '1.1rem',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  minWidth: 220,
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                View Success Stories
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
    </AppleBackground>
  );
};

export default Services;