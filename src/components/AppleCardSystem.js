import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  Business,
  CorporateFare,
  Groups,
  CheckCircle,
  Star,
  TrendingUp,
  Security,
  Speed,
  Support,
  Assessment,
  Settings,
  Cloud,
  Analytics,
} from '@mui/icons-material';

// Apple Flip Card with stunning 3D animations
export const AppleFlipCard = ({
  frontContent,
  backContent,
  className = '',
  style = {},
  ...props
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className={`apple-flip-card ${className}`}
      style={{
        perspective: '1000px',
        width: '100%',
        height: '100%',
        minHeight: '400px',
        ...style,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      {...props}
    >
      <motion.div
        className='apple-flip-card-inner'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {frontContent}
        </div>

        {/* Back Side */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

// Modern Apple Card with consistent sizing and beautiful icons
export const AppleCard = ({
  title,
  subtitle,
  description,
  icon,
  iconColor = '#007AFF',
  features = [],
  primaryAction,
  secondaryAction,
  gradient,
  className = '',
  style = {},
  size = 'default', // compact, default, large
  variant = 'glass', // glass, solid, gradient
  flipCard = false,
  backContent,
  ...props
}) => {
  const sizeStyles = {
    compact: {
      minHeight: '280px',
      padding: '24px',
    },
    default: {
      minHeight: '360px',
      padding: '32px',
    },
    large: {
      minHeight: '440px',
      padding: '40px',
    },
  };

  const variantStyles = {
    glass: {
      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      border: 'none',
      color: '#FFFFFF',
    },
    solid: {
      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      border: 'none',
      color: '#FFFFFF',
    },
    gradient: {
      background: gradient || 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      border: 'none',
      color: '#FFFFFF',
    },
  };

  return (
    <motion.div
      className={`apple-card ${className}`}
      style={{
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {/* Icon */}
      <motion.div
        style={{
          marginBottom: '16px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
      >
        {React.cloneElement(icon, {
          sx: { fontSize: size === 'compact' ? 28 : size === 'large' ? 40 : 32, color: '#FFFFFF' },
        })}
      </motion.div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <h3
          style={{
            fontSize: size === 'compact' ? '18px' : size === 'large' ? '24px' : '20px',
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: '8px',
            fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: '1.25',
            letterSpacing: '0.0125em',
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.87)',
              fontWeight: '400',
              marginBottom: '16px',
              fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
              lineHeight: '1.4',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.87)',
              marginBottom: '24px',
              flex: 1,
              fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {description}
          </p>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.87)',
                    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
                    lineHeight: '1.4',
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle
                    sx={{
                      fontSize: 14,
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: 'auto',
          }}
        >
          {primaryAction && (
            <motion.button
              style={{
                flex: 1,
                padding: '14px 24px',
                background: iconColor,
                border: 'none',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
              <ArrowForward sx={{ fontSize: 18 }} />
            </motion.button>
          )}

          {secondaryAction && (
            <motion.button
              style={{
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.25)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.icon || secondaryAction.label}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Grid container for consistent card layouts
export const AppleCardGrid = ({
  children,
  columns = 'auto-fit',
  minWidth = '320px',
  gap = '24px',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`apple-card-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns:
          columns === 'auto-fit'
            ? `repeat(auto-fit, minmax(${minWidth}, 1fr))`
            : `repeat(${columns}, 1fr)`,
        gap: gap,
        alignItems: 'stretch',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Service Card specifically designed for services
export const AppleServiceCard = ({
  service,
  size = 'default',
  onLearnMore,
  onGetQuote,
  ...props
}) => {
  const iconMap = {
    sme: <Business />,
    enterprise: <CorporateFare />,
    consultancy: <Groups />,
  };

  const colorMap = {
    sme: '#007AFF',
    enterprise: '#FF3B30',
    consultancy: '#30D158',
  };

  const gradientMap = {
    sme: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
    enterprise: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)',
    consultancy: 'linear-gradient(135deg, #30D158 0%, #32D74B 100%)',
  };

  return (
    <AppleCard
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      icon={iconMap[service.id] || iconMap.sme}
      iconColor={colorMap[service.id] || colorMap.sme}
      gradient={gradientMap[service.id]}
      features={service.features || []}
      size={size}
      variant='glass'
      primaryAction={{
        label: 'Learn More',
        onClick: () => onLearnMore?.(service),
      }}
      secondaryAction={{
        icon: <ArrowForward sx={{ fontSize: 18 }} />,
        onClick: () => onGetQuote?.(service),
      }}
      {...props}
    />
  );
};

// Feature Card for showcasing features
export const AppleFeatureCard = ({ feature, size = 'compact', ...props }) => {
  const iconMap = {
    security: <Security />,
    speed: <Speed />,
    support: <Support />,
    analytics: <Analytics />,
    cloud: <Cloud />,
    integration: <Settings />,
  };

  return (
    <AppleCard
      title={feature.title}
      description={feature.description}
      icon={iconMap[feature.icon] || <Star />}
      iconColor={feature.color || '#007AFF'}
      size={size}
      variant='glass'
      {...props}
    />
  );
};

// Success Story Card
export const AppleSuccessCard = ({ story, size = 'default', ...props }) => {
  return (
    <AppleCard
      title={story.company}
      subtitle={story.industry}
      description={story.challenge}
      icon={<TrendingUp />}
      iconColor='#30D158'
      gradient='linear-gradient(135deg, #30D158 0%, #32D74B 100%)'
      features={[
        `Saved ${story.timeSaved || '60%'} time`,
        `Reduced errors by ${story.errorReduction || '95%'}`,
        `${story.employeeCount || '500+'} employees migrated`,
      ]}
      size={size}
      variant='gradient'
      primaryAction={{
        label: 'Read Story',
        onClick: () => console.log('Read story:', story.company),
      }}
      {...props}
    />
  );
};

// Statistics Card
export const AppleStatsCard = ({
  title,
  value,
  subtitle,
  icon,
  color = '#007AFF',
  size = 'compact',
  ...props
}) => {
  return (
    <AppleCard
      title={value}
      subtitle={title}
      description={subtitle}
      icon={icon || <Assessment />}
      iconColor={color}
      size={size}
      variant='glass'
      {...props}
      style={{
        textAlign: 'center',
        ...props.style,
      }}
    />
  );
};

const AppleCardComponents = {
  AppleCard,
  AppleCardGrid,
  AppleFlipCard,
  AppleServiceCard,
  AppleFeatureCard,
  AppleSuccessCard,
  AppleStatsCard,
};

export default AppleCardComponents;
