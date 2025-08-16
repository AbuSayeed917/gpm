import { Analytics, Business, People, Shield, Speed, Timeline } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalHome2025 = () => {
  // State for card flips
  const [flippedCards, setFlippedCards] = React.useState({});
  const [flippedFeatures, setFlippedFeatures] = React.useState({});
  const [flippedProcesses, setFlippedProcesses] = React.useState({});
  const [flippedCountries, setFlippedCountries] = React.useState({});

  // Refs to prevent rapid toggling
  const hoverTimeouts = React.useRef({});

  // Ultra smooth hover handlers with optimized debounce
  const handleCardHover = (index, isHovered, setFlipState) => {
    const key = `card-${index}`;
    if (hoverTimeouts.current[key]) {
      clearTimeout(hoverTimeouts.current[key]);
    }

    hoverTimeouts.current[key] = setTimeout(
      () => {
        setFlipState((prev) => ({ ...prev, [index]: isHovered }));
      },
      isHovered ? 20 : 100
    ); // Ultra fast enter, smooth leave
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    const timeoutsRef = hoverTimeouts.current;
    return () => {
      Object.values(timeoutsRef).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(1deg); }
        66% { transform: translateY(-10px) rotate(-1deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      
      /* Ultra smooth country card animations */
      .country-card-container {
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        perspective: 1000px;
        -webkit-perspective: 1000px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        will-change: transform;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
      }
      
      .country-card-face {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        will-change: transform;
      }
      
      @keyframes wave {
        0%, 100% { transform: rotate(-5deg) scale(1); }
        25% { transform: rotate(-8deg) scale(1.05); }
        50% { transform: rotate(-2deg) scale(1.1); }
        75% { transform: rotate(-6deg) scale(1.05); }
      }
      
      .waving-flag {
        animation: wave 2s ease-in-out infinite;
        transform-origin: left center;
        display: inline-block;
      }
      
      .waving-flag:hover {
        animation-duration: 0.8s;
      }
      
      @media (max-width: 768px) {
        .hero-title { font-size: clamp(20px, 5vw, 32px) !important; line-height: 1.15 !important; }
        .hero-subtitle { font-size: clamp(14px, 3.5vw, 18px) !important; }
        .section-title { font-size: clamp(20px, 5vw, 28px) !important; }
        .section-description { font-size: clamp(12px, 3.5vw, 16px) !important; }
        .card-title { font-size: clamp(16px, 4.5vw, 20px) !important; }
        .card-description { font-size: clamp(11px, 3vw, 14px) !important; }
        .float-bg { display: none !important; }
        
        /* Features Cards */
        .features-card { height: 300px !important; }
        .features-card-padding { padding: 20px 16px !important; }
        .features-card-icon { font-size: clamp(28px, 7vw, 36px) !important; }
        .features-card-title { font-size: clamp(14px, 4vw, 18px) !important; }
        .features-card-description { font-size: clamp(10px, 2.8vw, 12px) !important; }
        .features-card .glass-bg { width: 120px !important; height: 120px !important; }
        .features-card .back-title { font-size: clamp(16px, 4vw, 18px) !important; margin-bottom: 16px !important; }
        .features-card .back-description { font-size: clamp(12px, 3vw, 14px) !important; line-height: 1.3 !important; }
        .features-card .back-icon-bg { padding: 16px !important; margin-bottom: 16px !important; }
        
        /* Service Cards */
        .service-card { height: 400px !important; }
        .service-card-padding { padding: 20px 16px !important; }
        .service-card-icon { font-size: clamp(20px, 5vw, 24px) !important; }
        .service-card-title { font-size: clamp(16px, 4.5vw, 20px) !important; }
        .service-card-subtitle { font-size: clamp(11px, 3vw, 13px) !important; }
        .service-card-description { font-size: clamp(12px, 3.2vw, 14px) !important; }
        .service-card .icon-bg { padding: 14px !important; margin-bottom: 14px !important; }
        .service-card .back-glass-1 { width: 120px !important; height: 120px !important; }
        .service-card .back-glass-2 { width: 100px !important; height: 100px !important; }
        .service-card .hover-hint { font-size: 11px !important; padding: 10px 16px !important; }
        .service-card .features-list-item { font-size: clamp(10px, 2.8vw, 12px) !important; margin-bottom: 6px !important; }
        .service-card .check-icon { width: 12px !important; height: 12px !important; font-size: 8px !important; }
        .service-card .learn-more-btn { font-size: 11px !important; padding: 8px 14px !important; }
        .service-card .back-content { padding: 16px 12px !important; }
        .service-card .back-title { font-size: clamp(14px, 4vw, 16px) !important; margin-bottom: 12px !important; }
        .service-card .back-icon-bg { padding: 12px !important; margin-bottom: 12px !important; }
        .service-card .front-content { padding: 18px 14px !important; }
        .service-card .front-icon-bg { padding: 12px !important; margin-bottom: 12px !important; }
        .service-card .front-title { font-size: clamp(14px, 4vw, 18px) !important; margin-bottom: 4px !important; }
        .service-card .front-subtitle { font-size: clamp(10px, 2.8vw, 12px) !important; margin-bottom: 8px !important; }
        .service-card .front-description { font-size: clamp(11px, 3vw, 13px) !important; line-height: 1.3 !important; }
        
        /* Process Cards */
        .process-card { height: 350px !important; }
        .process-card-padding { padding: 24px 18px !important; }
        .process-step { font-size: clamp(32px, 8vw, 40px) !important; margin-bottom: 20px !important; }
        .process-title { font-size: clamp(16px, 4.5vw, 20px) !important; margin-bottom: 16px !important; }
        .process-description { font-size: clamp(11px, 3vw, 13px) !important; }
        .process-card .back-glass { width: 120px !important; height: 120px !important; }
        .process-card .hover-hint { font-size: 11px !important; padding: 10px 16px !important; }
        
        /* Country Section */
        .country-flag { font-size: clamp(40px, 10vw, 56px) !important; }
        .country-name { font-size: clamp(10px, 2.5vw, 12px) !important; }
        
        /* Services Section Text */
        .services-title { font-size: clamp(20px, 5vw, 32px) !important; }
        .services-description { font-size: clamp(13px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 40px !important; }
        
        /* Discovery Call Section */
        .discovery-title { font-size: clamp(20px, 4vw, 28px) !important; }
        .discovery-description { font-size: clamp(14px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 24px !important; }
        
        /* Migration Process Section */
        .process-section-title { font-size: clamp(20px, 5vw, 32px) !important; }
        .process-section-description { font-size: clamp(13px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 40px !important; }
        
        /* Where We Operate Section */
        .operate-title { font-size: clamp(20px, 5vw, 32px) !important; }
        .operate-description { font-size: clamp(13px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 40px !important; }
        
        /* Final CTA Section */
        .cta-main-title { font-size: clamp(20px, 4.5vw, 32px) !important; }
        .cta-main-description { font-size: clamp(13px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 40px !important; }
        .cta-card-title { font-size: clamp(18px, 4vw, 24px) !important; }
        .cta-card-description { font-size: clamp(12px, 3vw, 14px) !important; line-height: 1.3 !important; margin-bottom: 20px !important; }
        
        /* Why Choose Us Text */
        .why-choose-text { font-size: clamp(14px, 4vw, 18px) !important; line-height: 1.4 !important; margin-bottom: 16px !important; }
        
        /* Buttons */
        .hero-button { padding: 12px 24px !important; font-size: 15px !important; }
        .cta-button { padding: 12px 24px !important; font-size: 15px !important; }
      }
      
      @media (max-width: 1024px) {
        .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        .migration-process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        .features-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
      }
      
      .trusted-organizations-grid > div:nth-child(3) {
        grid-column: 1 / -1;
        justify-self: center;
        width: calc(50% - 20px);
      }
      
      @media (max-width: 1024px) {
        .trusted-organizations-grid { grid-template-columns: 1fr !important; }
        .trusted-organizations-grid > div:nth-child(3) { grid-column: auto !important; width: auto !important; }
      }
      
      @media (max-width: 480px) {
        .hero-title { font-size: clamp(16px, 5.5vw, 24px) !important; line-height: 1.1 !important; }
        .hero-subtitle { font-size: clamp(12px, 4vw, 16px) !important; }
        .section-title { font-size: clamp(18px, 6vw, 24px) !important; }
        .section-description { font-size: clamp(11px, 3.5vw, 14px) !important; }
        .card-title { font-size: clamp(14px, 5vw, 18px) !important; }
        .card-description { font-size: clamp(10px, 3vw, 12px) !important; }
        
        /* Features Cards */
        .features-card { height: 280px !important; }
        .features-card-padding { padding: 18px 14px !important; }
        .features-card-icon { font-size: clamp(24px, 8vw, 32px) !important; }
        .features-card-title { font-size: clamp(12px, 4vw, 16px) !important; }
        .features-card-description { font-size: clamp(9px, 2.5vw, 11px) !important; }
        .features-card .glass-bg { width: 100px !important; height: 100px !important; }
        .features-card .icon-bg { padding: 24px !important; margin-bottom: 20px !important; }
        .features-card .hover-hint { font-size: 10px !important; padding: 8px 14px !important; }
        .features-card .back-title { font-size: clamp(14px, 3.5vw, 16px) !important; margin-bottom: 12px !important; }
        .features-card .back-description { font-size: clamp(10px, 2.5vw, 12px) !important; line-height: 1.25 !important; }
        .features-card .back-icon-bg { padding: 14px !important; margin-bottom: 12px !important; }
        
        /* Service Cards */
        .service-card { height: 360px !important; }
        .service-card-padding { padding: 18px 14px !important; }
        .service-card-icon { font-size: clamp(18px, 4.5vw, 22px) !important; }
        .service-card-title { font-size: clamp(14px, 4vw, 18px) !important; }
        .service-card-subtitle { font-size: clamp(10px, 2.8vw, 12px) !important; }
        .service-card-description { font-size: clamp(11px, 3vw, 13px) !important; }
        .service-card .icon-bg { padding: 12px !important; margin-bottom: 12px !important; }
        .service-card .back-glass-1 { width: 100px !important; height: 100px !important; }
        .service-card .back-glass-2 { width: 80px !important; height: 80px !important; }
        .service-card .hover-hint { font-size: 10px !important; padding: 8px 14px !important; }
        .service-card .features-list-item { font-size: clamp(9px, 2.5vw, 11px) !important; margin-bottom: 4px !important; }
        .service-card .check-icon { width: 10px !important; height: 10px !important; font-size: 7px !important; }
        .service-card .learn-more-btn { font-size: 10px !important; padding: 6px 12px !important; }
        .service-card .back-content { padding: 14px 10px !important; }
        .service-card .back-title { font-size: clamp(12px, 3.5vw, 14px) !important; margin-bottom: 8px !important; }
        .service-card .back-icon-bg { padding: 10px !important; margin-bottom: 8px !important; }
        .service-card .front-content { padding: 14px 10px !important; }
        .service-card .front-icon-bg { padding: 10px !important; margin-bottom: 8px !important; }
        .service-card .front-title { font-size: clamp(12px, 3.5vw, 16px) !important; margin-bottom: 3px !important; }
        .service-card .front-subtitle { font-size: clamp(9px, 2.5vw, 11px) !important; margin-bottom: 6px !important; }
        .service-card .front-description { font-size: clamp(10px, 2.8vw, 12px) !important; line-height: 1.25 !important; }
        
        /* Process Cards */
        .process-card { height: 320px !important; }
        .process-card-padding { padding: 20px 16px !important; }
        .process-step { font-size: clamp(28px, 7vw, 36px) !important; margin-bottom: 16px !important; }
        .process-title { font-size: clamp(14px, 4vw, 18px) !important; margin-bottom: 12px !important; }
        .process-description { font-size: clamp(10px, 2.8vw, 12px) !important; }
        .process-card .back-glass { width: 100px !important; height: 100px !important; }
        .process-card .hover-hint { font-size: 10px !important; padding: 8px 14px !important; }
        
        /* Country Section */
        .country-flag { font-size: clamp(36px, 9vw, 48px) !important; }
        .country-name { font-size: clamp(9px, 2.2vw, 11px) !important; }
        
        /* Services Section Text */
        .services-title { font-size: clamp(18px, 4.5vw, 28px) !important; }
        .services-description { font-size: clamp(11px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 35px !important; }
        
        /* Discovery Call Section */
        .discovery-title { font-size: clamp(16px, 4vw, 24px) !important; }
        .discovery-description { font-size: clamp(12px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 20px !important; }
        
        /* Migration Process Section */
        .process-section-title { font-size: clamp(18px, 4.5vw, 28px) !important; }
        .process-section-description { font-size: clamp(11px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 35px !important; }
        
        /* Where We Operate Section */
        .operate-title { font-size: clamp(18px, 4.5vw, 28px) !important; }
        .operate-description { font-size: clamp(11px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 35px !important; }
        
        /* Final CTA Section */
        .cta-main-title { font-size: clamp(16px, 4vw, 28px) !important; }
        .cta-main-description { font-size: clamp(11px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 35px !important; }
        .cta-card-title { font-size: clamp(14px, 3.5vw, 20px) !important; }
        .cta-card-description { font-size: clamp(10px, 2.8vw, 12px) !important; line-height: 1.25 !important; margin-bottom: 18px !important; }
        
        /* Why Choose Us Text */
        .why-choose-text { font-size: clamp(12px, 3.5vw, 16px) !important; line-height: 1.3 !important; margin-bottom: 14px !important; }
        
        /* Buttons */
        .hero-button { padding: 10px 20px !important; font-size: 14px !important; }
        .cta-button { padding: 10px 20px !important; font-size: 14px !important; }
        .hero-buttons { flex-direction: column !important; align-items: center !important; gap: 16px !important; }
        
        /* Layout */
        .grid-layout { grid-template-columns: 1fr !important; }
        .services-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        .migration-process-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        .features-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
      }
      
      @media (max-width: 360px) {
        .hero-title { font-size: clamp(14px, 5vw, 20px) !important; line-height: 1.05 !important; }
        .hero-subtitle { font-size: clamp(11px, 3.5vw, 14px) !important; }
        .section-title { font-size: clamp(16px, 5.5vw, 22px) !important; }
        .section-description { font-size: clamp(10px, 3vw, 12px) !important; }
        .features-card { height: 260px !important; }
        .features-card-padding { padding: 16px 12px !important; }
        .service-card { height: 320px !important; }
        .service-card-padding { padding: 18px 14px !important; }
        .process-card { height: 300px !important; }
        .process-card-padding { padding: 18px 14px !important; }
        .country-flag { font-size: clamp(32px, 8vw, 42px) !important; }
        .country-name { font-size: clamp(8px, 2vw, 10px) !important; }
        .services-title { font-size: clamp(16px, 4vw, 24px) !important; }
        .services-description { font-size: clamp(9px, 2.5vw, 12px) !important; line-height: 1.2 !important; margin-bottom: 30px !important; }
        .discovery-title { font-size: clamp(14px, 3.5vw, 20px) !important; }
        .discovery-description { font-size: clamp(10px, 2.5vw, 12px) !important; line-height: 1.2 !important; margin-bottom: 18px !important; }
        .process-section-title { font-size: clamp(16px, 4vw, 24px) !important; }
        .process-section-description { font-size: clamp(9px, 2.5vw, 12px) !important; line-height: 1.2 !important; margin-bottom: 30px !important; }
        .operate-title { font-size: clamp(16px, 4vw, 24px) !important; }
        .operate-description { font-size: clamp(9px, 2.5vw, 12px) !important; line-height: 1.2 !important; margin-bottom: 30px !important; }
        .cta-main-title { font-size: clamp(14px, 3.5vw, 24px) !important; }
        .cta-main-description { font-size: clamp(9px, 2.5vw, 12px) !important; line-height: 1.2 !important; margin-bottom: 30px !important; }
        .cta-card-title { font-size: clamp(12px, 3vw, 18px) !important; }
        .cta-card-description { font-size: clamp(9px, 2.2vw, 11px) !important; line-height: 1.2 !important; margin-bottom: 16px !important; }
        .why-choose-text { font-size: clamp(10px, 3vw, 14px) !important; line-height: 1.25 !important; margin-bottom: 12px !important; }
        .hero-button { padding: 8px 16px !important; font-size: 13px !important; }
        .cta-button { padding: 8px 16px !important; font-size: 13px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const services = [
    {
      id: 'sme',
      title: 'SME Payroll Migration',
      description:
        'Complete payroll system migration for small to medium businesses with minimal disruption.',
      icon: <Business sx={{ fontSize: 24, color: '#3b82f6' }} />,
      href: '/services/sme',
      features: [
        '4-8 week implementation',
        'Affordable migration packages',
        'Dedicated project manager',
        'Zero downtime guarantee',
      ],
      timeline: '4-8 weeks',
      subtitle: 'Cost-effective solutions for growing businesses',
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description:
        'Large-scale payroll migrations with complex integrations and multi-jurisdictional support.',
      icon: <People sx={{ fontSize: 24, color: '#3b82f6' }} />,
      href: '/services/large-enterprise',
      features: [
        'Multi-country deployments',
        'Enterprise-grade security',
        '24/7 global support',
        'Complex system integrations',
      ],
      timeline: '8-16 weeks',
      subtitle: 'Global payroll transformations at scale',
    },
    {
      id: 'consultancy',
      title: 'Payroll Consultancy',
      description: 'Expert advisory services for payroll optimization and compliance requirements.',
      icon: <Timeline sx={{ fontSize: 24, color: '#3b82f6' }} />,
      href: '/services/consultancy',
      features: [
        'Strategic payroll planning',
        'Compliance assessments',
        'System optimization',
        'Expert advisory services',
      ],
      timeline: '2-6 weeks',
      subtitle: 'Strategic guidance for payroll excellence',
    },
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 32 }} />,
      title: 'UK & Global Compliance Experts',
      description:
        'Deep expertise in UK payroll regulations, HMRC requirements, and auto-enrolment compliance.',
    },
    {
      icon: <Speed sx={{ fontSize: 32 }} />,
      title: 'Zero Downtime Migration',
      description:
        'Seamless transitions with parallel running periods to ensure continuous payroll operations.',
    },
    {
      icon: <Analytics sx={{ fontSize: 32 }} />,
      title: '500+ Successful Migrations',
      description:
        'Proven track record across all major payroll systems including ADP, Workday, SAP, and Sage.',
    },
  ];

  return (
    <div
      style={{
        background: '#e3f2fd',
        minHeight: '100vh',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
        color: '#1a237e',
      }}
    >
      {/* Hero Section - Apple Style */}
      <section
        style={{
          padding: '50px 20px 40px 20px',
          textAlign: 'center',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Enhanced Liquid Glass Background - Sky Blue Harmony */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '30%',
            width: '40%',
            height: '300px',
            background:
              'radial-gradient(ellipse, rgba(255, 255, 255, 0.25) 0%, rgba(240, 248, 255, 0.15) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '20%',
            width: '50%',
            height: '250px',
            background:
              'radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, rgba(230, 244, 252, 0.1) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '35%',
            height: '200px',
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(225, 239, 254, 0.08) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        <div style={{ width: '95%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1
            className='hero-title'
            style={{
              fontSize: 'clamp(24px, 4.5vw, 44px)',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#1a237e',
              marginBottom: '16px',
              letterSpacing: '-0.025em',
              textShadow: '0 1px 3px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            UK-Based{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                fontWeight: '700',
                paddingBottom: '4px',
                lineHeight: '1.2',
              }}
            >
              Payroll Migration Specialists
            </span>{' '}
            for Seamless Global Transitions
          </h1>
          <p
            className='hero-subtitle'
            style={{
              fontSize: 'clamp(16px, 4vw, 20px)',
              lineHeight: '1.3',
              color: '#283593',
              fontWeight: '400',
              marginBottom: '32px',
              maxWidth: '90%',
              margin: '0 auto 32px auto',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            Trusted by companies across the UK, US, Germany, France, Spain, Netherlands, UAE, and
            beyond — we help businesses migrate to modern payroll platforms with precision,
            compliance, and complete peace of mind.
          </p>
          <div
            className='hero-buttons'
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
          >
            <Link
              to='/contact'
              className='hero-button'
              style={{
                background: '#007AFF',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '980px',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.background = '#0056CC';
                e.target.style.boxShadow = '0 8px 24px rgba(0, 122, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = '#007AFF';
                e.target.style.boxShadow = '0 4px 16px rgba(0, 122, 255, 0.3)';
              }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Industry-Grade Mobile */}
      <section
        style={{
          padding: '0px 20px 40px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Liquid Glass Background */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '300px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 12s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '20%',
            width: '250px',
            height: '350px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 15s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'left',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2
            className='services-title'
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              color: '#1a237e',
              marginBottom: '12px',
              letterSpacing: '-0.025em',
              textAlign: 'center',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Our Services
          </h2>
          <p
            className='services-description'
            style={{
              fontSize: '18px',
              color: '#283593',
              marginBottom: '50px',
              lineHeight: '1.4',
              textAlign: 'center',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            We provide tailored, end-to-end services to support your business through every phase of
            payroll transformation — from legacy system replacement to modern implementation,
            strategic consultancy, and compliance improvement.
          </p>

          <div
            className='services-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className='service-card'
                style={{
                  perspective: '1000px',
                  height: '480px',
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  onMouseEnter={() => handleCardHover(index, true, setFlippedCards)}
                  onMouseLeave={() => handleCardHover(index, false, setFlippedCards)}
                >
                  {/* Front of card */}
                  <div
                    className='service-card-padding front-content'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '20px',
                      padding: '36px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    <div>
                      <div
                        className='icon-bg front-icon-bg'
                        style={{
                          marginBottom: '20px',
                          padding: '20px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(240, 248, 255, 0.3) 100%)`,
                          display: 'inline-block',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.4)',
                        }}
                      >
                        {React.cloneElement(service.icon, {
                          sx: { fontSize: 28, color: '#1a237e' },
                          className: 'service-card-icon',
                        })}
                      </div>
                      <h3
                        className='service-card-title front-title'
                        style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          background:
                            'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '8px',
                          letterSpacing: '-0.01em',
                          textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className='service-card-subtitle front-subtitle'
                        style={{
                          fontSize: '14px',
                          color: '#283593',
                          fontWeight: '500',
                          marginBottom: '12px',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        }}
                      >
                        {service.subtitle}
                      </p>
                      <p
                        className='service-card-description front-description'
                        style={{
                          fontSize: '15px',
                          color: '#1a237e',
                          lineHeight: '1.4',
                          fontWeight: '400',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                    <div
                      className='hover-hint'
                      style={{
                        textAlign: 'center',
                        padding: '12px 20px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      Hover to see details
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className='back-content'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: `linear-gradient(135deg, #1a237e 0%, #283593 100%)`,
                      borderRadius: '20px',
                      padding: '32px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      color: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 48px rgba(26, 35, 126, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    {/* Enhanced Glass Effect */}
                    <div
                      className='back-glass-1'
                      style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '250px',
                        height: '250px',
                        background:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 0,
                      }}
                    />
                    <div
                      className='back-glass-2'
                      style={{
                        position: 'absolute',
                        bottom: '-30%',
                        left: '-20%',
                        width: '200px',
                        height: '200px',
                        background:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0,
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        className='back-icon-bg'
                        style={{
                          marginBottom: '20px',
                          padding: '18px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'inline-block',
                        }}
                      >
                        {React.cloneElement(service.icon, {
                          sx: { fontSize: 24, color: 'rgba(255,255,255,0.9)' },
                        })}
                      </div>

                      <h3
                        className='back-title'
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: 'rgba(255, 255, 255, 0.95)',
                          marginBottom: '16px',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        What's included:
                      </h3>

                      <div style={{ marginBottom: '0' }}>
                        {service.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className='features-list-item'
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              marginBottom: '12px',
                              fontSize: '14px',
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                            }}
                          >
                            <div
                              className='check-icon'
                              style={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#34C759',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <span
                                style={{
                                  color: 'white',
                                  fontSize: '10px',
                                  fontWeight: '600',
                                }}
                              >
                                ✓
                              </span>
                            </div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={service.href}
                      className='learn-more-btn'
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        border: 'none',
                        borderRadius: '20px',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '13px',
                        fontWeight: '600',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.4)';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Discovery Call Section - Industry-Grade Mobile */}
      <section
        style={{
          padding: '60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Enhanced Liquid Glass Background */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '25%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '30%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(175, 82, 222, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            animation: 'float 10s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '32px',
              padding: '80px 60px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 20px 64px rgba(13, 71, 161, 0.15)',
              backdropFilter: 'blur(40px) saturate(200%)',
            }}
          >
            <h2
              className='discovery-title'
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: '600',
                color: '#1a237e',
                marginBottom: '16px',
                letterSpacing: '-0.025em',
                lineHeight: '1.1',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Book a free discovery call
            </h2>
            <p
              className='discovery-description'
              style={{
                fontSize: '18px',
                color: '#283593',
                lineHeight: '1.4',
                marginBottom: '32px',
                fontWeight: '400',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              Speak with our payroll migration experts. We'll assess your current system and provide
              a tailored migration roadmap at no cost.
            </p>
            <Link
              to='/quote'
              style={{
                background: '#007AFF',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '980px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '400',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                border: 'none',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.background = '#0056CC';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = '#007AFF';
              }}
            >
              Book Call
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Apple Style */}
      <section
        style={{
          padding: '60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Liquid Glass Background */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(52, 199, 89, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            animation: 'float 14s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '250px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(255, 149, 0, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 12s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              background:
                'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px',
              letterSpacing: '-0.025em',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Why Choose Us
          </h2>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(20px)',
              borderRadius: '28px',
              padding: '40px',
              marginBottom: '60px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
              <p
                className='why-choose-text'
                style={{
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                  background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                When your business outgrows outdated payroll systems or expands into new regions,
                migration becomes essential. But it doesn't have to be complex or disruptive.
              </p>

              <p
                className='why-choose-text'
                style={{
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                  background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We understand how stressful and resource-draining payroll migration can be —
                especially when compliance, data accuracy, and deadlines are on the line. That's why
                our expert UK-based team takes full ownership of the process, removing the burden
                from your internal teams and ensuring a smooth, audit-ready transition.
              </p>

              <p
                className='why-choose-text'
                style={{
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                  background:
                    'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                At GlobalPayrollMigration.com, we handle everything from data cleansing and
                statutory setup to testing, reconciliation, and go-live support. Whether you're
                moving to Dayforce, Workday, ADP, or another platform, we make your payroll
                migration accurate, compliant, and stress-free.
              </p>

              <p
                className='why-choose-text'
                style={{
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '0',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                  background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                From SMEs to large multinationals, we cater to businesses of all sizes — with
                solutions tailored to your scale, structure, and strategic goals.
              </p>
            </div>
          </div>

          <div
            className='features-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className='features-card'
                style={{
                  perspective: '1000px',
                  height: '417px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    transform: flippedFeatures[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  onMouseEnter={() => handleCardHover(index, true, setFlippedFeatures)}
                  onMouseLeave={() => handleCardHover(index, false, setFlippedFeatures)}
                >
                  {/* Front of card */}
                  <div
                    className='features-card-padding'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '20px',
                      padding: '40px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    <div
                      className='icon-bg'
                      style={{
                        marginBottom: '32px',
                        padding: '32px',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(240, 248, 255, 0.3) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        sx: { fontSize: 48, color: '#0d47a1' },
                        className: 'features-card-icon',
                      })}
                    </div>
                    <h3
                      className='features-card-title'
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '24px',
                        letterSpacing: '-0.01em',
                        textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <div
                      className='hover-hint'
                      style={{
                        textAlign: 'center',
                        padding: '12px 20px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      Hover for details
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className='features-card-padding'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: `linear-gradient(135deg, #1a237e 0%, #283593 100%)`,
                      borderRadius: '20px',
                      padding: '40px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 48px rgba(26, 35, 126, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    {/* Enhanced Glass Effect */}
                    <div
                      className='back-glass'
                      style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '200px',
                        height: '200px',
                        background:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 0,
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        className='back-icon-bg'
                        style={{
                          marginBottom: '24px',
                          padding: '20px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          display: 'inline-block',
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          sx: { fontSize: 32, color: 'rgba(255,255,255,0.9)' },
                        })}
                      </div>

                      <h3
                        className='back-title'
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: 'rgba(255, 255, 255, 0.95)',
                          marginBottom: '20px',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className='back-description'
                        style={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.5',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section - Apple Style */}
      <section
        style={{
          padding: '40px 20px 60px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Liquid Glass Background */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '20%',
            width: '350px',
            height: '250px',
            background: 'radial-gradient(ellipse, rgba(255, 45, 85, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            animation: 'float 16s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '25%',
            width: '280px',
            height: '350px',
            background: 'radial-gradient(ellipse, rgba(50, 215, 75, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 18s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2
            className='process-section-title'
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              background:
                'linear-gradient(135deg, #FF6B35 0%, #F7931E 35%, #FF5722 70%, #E64A19 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px',
              letterSpacing: '-0.025em',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Our Migration Process
          </h2>
          <p
            className='process-section-description'
            style={{
              fontSize: '20px',
              color: '#1a237e',
              marginBottom: '60px',
              lineHeight: '1.4',
              fontWeight: '500',
              textShadow: '0 1px 3px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            Proven methodology ensuring seamless transitions.
          </p>

          <div
            className='migration-process-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {[
              {
                step: '1',
                title: 'Assessment & Planning',
                description:
                  'Comprehensive audit of your current payroll system, data mapping, and migration timeline planning.',
              },
              {
                step: '2',
                title: 'Data Extraction & Cleansing',
                description:
                  'Secure extraction of payroll data with thorough validation and cleansing processes.',
              },
              {
                step: '3',
                title: 'System Configuration',
                description:
                  'New system setup with your specific payroll rules, reporting requirements, and integrations.',
              },
              {
                step: '4',
                title: 'Parallel Testing',
                description:
                  'Run both systems simultaneously to validate accuracy before full transition.',
              },
            ].map((process, index) => (
              <div
                key={index}
                className='process-card'
                style={{
                  perspective: '1000px',
                  height: '417px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    transform: flippedProcesses[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  onMouseEnter={() => handleCardHover(index, true, setFlippedProcesses)}
                  onMouseLeave={() => handleCardHover(index, false, setFlippedProcesses)}
                >
                  {/* Front of card */}
                  <div
                    className='process-card-padding'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '20px',
                      padding: '40px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    <div
                      className='process-step'
                      style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #0d47a1 0%, #1565c0 35%, #1976d2 70%, #1e88e5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '32px',
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {process.step}
                    </div>
                    <h3
                      className='process-title'
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        background:
                          'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '24px',
                        letterSpacing: '-0.01em',
                        textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      }}
                    >
                      {process.title}
                    </h3>
                    <div
                      className='hover-hint'
                      style={{
                        textAlign: 'center',
                        padding: '12px 20px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      Hover for details
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: `linear-gradient(135deg, #1a237e 0%, #283593 100%)`,
                      borderRadius: '20px',
                      padding: '40px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 48px rgba(26, 35, 126, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                    }}
                  >
                    {/* Enhanced Glass Effect */}
                    <div
                      className='back-glass'
                      style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '200px',
                        height: '200px',
                        background:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 0,
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          fontSize: '32px',
                          fontWeight: '700',
                          background:
                            'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '24px',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        {process.step}
                      </div>

                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: 'rgba(255, 255, 255, 0.95)',
                          marginBottom: '20px',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        }}
                      >
                        {process.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.5',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        }}
                      >
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Operate Section */}
      <section
        style={{
          padding: '80px 20px',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            className='operate-title'
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '700',
              color: '#1a237e',
              marginBottom: '20px',
              letterSpacing: '-0.025em',
              lineHeight: '1.05',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Where We Operate
          </h2>
          <p
            className='operate-description'
            style={{
              fontSize: '18px',
              color: '#283593',
              lineHeight: '1.4',
              textAlign: 'center',
              fontWeight: '400',
              marginBottom: '40px',
              maxWidth: '800px',
              margin: '0 auto 40px auto',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            We proudly support payroll transformation across the EMEA region and beyond
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.72)',
              borderRadius: '22px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#1a237e',
                marginBottom: '24px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Countries We Serve:
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {[
                { name: 'United Kingdom', flag: '🇬🇧' },
                { name: 'United States', flag: '🇺🇸' },
                { name: 'Germany', flag: '🇩🇪' },
                { name: 'France', flag: '🇫🇷' },
                { name: 'Spain', flag: '🇪🇸' },
                { name: 'Netherlands', flag: '🇳🇱' },
                { name: 'UAE', flag: '🇦🇪' },
                { name: 'Saudi Arabia', flag: '🇸🇦' },
                { name: 'Italy', flag: '🇮🇹' },
                { name: 'Belgium', flag: '🇧🇪' },
                { name: 'Switzerland', flag: '🇨🇭' },
                { name: 'Austria', flag: '🇦🇹' },
                { name: 'Sweden', flag: '🇸🇪' },
                { name: 'Qatar', flag: '🇶🇦' },
              ].map((country, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    const flag = e.currentTarget.querySelector('.waving-flag');
                    if (flag) {
                      flag.style.animationDuration = '0.8s';
                      flag.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const flag = e.currentTarget.querySelector('.waving-flag');
                    if (flag) {
                      flag.style.animationDuration = '2s';
                      flag.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <div
                    className='waving-flag country-flag'
                    style={{
                      fontSize: '64px',
                      lineHeight: '1',
                      filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {country.flag}
                  </div>
                  <span
                    className='country-name'
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#1a237e',
                      textAlign: 'center',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                      maxWidth: '90px',
                      lineHeight: '1.2',
                      opacity: 0.8,
                    }}
                  >
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
            
            <div
              style={{
                marginTop: '32px',
                padding: '16px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.08) 0%, rgba(255, 59, 48, 0.08) 100%)',
                border: '1px solid rgba(255, 149, 0, 0.15)',
                fontSize: '16px',
                color: '#1a237e',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                fontStyle: 'italic',
                textAlign: 'center',
                maxWidth: '300px',
                margin: '32px auto 0',
              }}
            >
              ...and expanding globally
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section
        style={{
          padding: '80px 20px',
          background: '#e3f2fd',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Enhanced Liquid Glass Background */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '300px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '25%',
            width: '350px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(175, 82, 222, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            animation: 'float 14s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            className='cta-main-title'
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '600',
              color: '#1a237e',
              marginBottom: '20px',
              letterSpacing: '-0.025em',
              lineHeight: '1.05',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}
          >
            Ready to Migrate Without the Stress?
          </h2>
          <p
            className='cta-main-description'
            style={{
              fontSize: '22px',
              color: '#283593',
              lineHeight: '1.33',
              marginBottom: '64px',
              fontWeight: '400',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            Let's discuss how we can support your payroll migration — whether you're just starting
            out or ready to move.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Link
                to='/contact'
                className='cta-button'
                style={{
                  background: '#007AFF',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-block',
                  marginBottom: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: 'none',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.background = '#0056CC';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = '#007AFF';
                }}
              >
                Book a Free Discovery Call
              </Link>
              <div
                className='cta-card-description'
                style={{
                  fontSize: '14px',
                  color: '#283593',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                }}
              >
                Speak directly with a migration expert — no obligation, just insight.
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link
                to='/quote'
                className='cta-button'
                style={{
                  color: '#007AFF',
                  padding: '14px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  border: '2px solid #007AFF',
                  background: 'transparent',
                  display: 'inline-block',
                  marginBottom: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#007AFF';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#007AFF';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Request a Custom Quote
              </Link>
              <div
                className='cta-card-description'
                style={{
                  fontSize: '14px',
                  color: '#283593',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  fontWeight: '400',
                }}
              >
                Tell us your requirements and get a tailored proposal within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalHome2025;
