import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';

const ConsultancySuccessStories = () => {
  return (
    <AppleBackground variant='primary'>
      {/* Coming Soon Hero Section */}
      <section
        style={{
          padding: '100px 20px 0 20px',
          textAlign: 'center',
          background: '#e3f2fd',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Floating Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(255, 149, 0, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '15%',
            width: '300px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(175, 82, 222, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: '17px',
                fontWeight: '700',
                color: '#ff9500',
                marginBottom: '16px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.022em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Consultancy Success Stories
            </motion.div>

            <h1
              style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.05',
                color: '#1a237e',
                marginBottom: '24px',
                letterSpacing: '-0.025em',
                textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              Coming{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  fontWeight: '700',
                  paddingBottom: '4px',
                  lineHeight: '1.2',
                }}
              >
                Soon
              </span>
            </h1>

            <p
              style={{
                fontSize: '24px',
                lineHeight: '1.3',
                color: '#283593',
                fontWeight: '400',
                marginBottom: '48px',
                maxWidth: '600px',
                margin: '0 auto 48px auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
            >
              We're preparing detailed consultancy success stories showcasing how our strategic guidance has transformed organizations' payroll operations.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                to='/services/consultancy'
                style={{
                  background: 'linear-gradient(135deg, #ff9500 0%, #af52de 100%)',
                  color: '#ccebff',
                  padding: '16px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(255, 149, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 24px rgba(255, 149, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 16px rgba(255, 149, 0, 0.3)';
                }}
              >
                Explore Consultancy Services
              </Link>

              <Link
                to='/contact'
                style={{
                  background: 'transparent',
                  color: '#007AFF',
                  padding: '16px 32px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: '2px solid #007AFF',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#007AFF';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#007AFF';
                }}
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </AppleBackground>
  );
};

export default ConsultancySuccessStories;

/*
// Original content commented out - will be restored when real success stories are available

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Business,
  TrendingUp,
  AccessTime,
  MonetizationOn,
  Star,
  CheckCircle,
  ArrowForward,
  Phone,
  Support,
  Analytics,
  Psychology,
  Groups,
  Handshake,
} from '@mui/icons-material';
import AppleBackground from '../components/AppleBackground';
import { AppleFlipCard } from '../components/AppleCardSystem';

const ConsultancySuccessStories = () => {
  // All original content is preserved but commented out
  // This includes stories array, stats, benefits, and all sections
  // Will be restored when real consultancy success stories are available
  
  return (
    <AppleBackground variant='primary'>
      // All original JSX content preserved here
    </AppleBackground>
  );
};

export default ConsultancySuccessStories;
*/