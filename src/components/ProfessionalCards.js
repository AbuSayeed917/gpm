import React from 'react';
import { 
  Business,
  CloudUpload,
  Assessment,
  Security,
  Speed,
  Support,
  TrendingUp,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';

// Professional Service Card Component
export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  onLearnMore,
  className = '' 
}) => {
  return (
    <div className={`card service-card ${className}`}>
      <div className="card-body">
        <div className="service-icon">
          {icon}
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        
        {onLearnMore && (
          <button 
            className="btn btn-outline btn-sm"
            onClick={onLearnMore}
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <ArrowForward size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

// Professional Feature Card Component
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <div className="service-icon" style={{ margin: '0 auto var(--space-4)' }}>
          {icon}
        </div>
        <h4 className="service-title">{title}</h4>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

// Professional Stats Card Component
export const StatsCard = ({ 
  value, 
  label, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`card stat-card ${className}`}>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <div className="stat-number">{value}</div>
        <div className="stat-label">{label}</div>
        {description && (
          <p className="text-tertiary text-sm" style={{ marginTop: 'var(--space-2)' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// Professional Testimonial Card Component
export const TestimonialCard = ({ 
  quote, 
  author, 
  title, 
  company, 
  avatar,
  className = '' 
}) => {
  return (
    <div className={`card testimonial-card ${className}`}>
      <div className="card-body">
        <p className="testimonial-text">"{quote}"</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">
            {avatar || author.charAt(0)}
          </div>
          <div className="testimonial-info">
            <h4>{author}</h4>
            <p>{title} {company && `at ${company}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Professional CTA Card Component
export const CTACard = ({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction,
  gradient = false,
  className = '' 
}) => {
  const cardClass = gradient ? 'cta-section' : 'card';
  
  return (
    <div className={`${cardClass} ${className}`}>
      <div className={gradient ? 'cta-content' : 'card-body'} style={{ textAlign: 'center' }}>
        <h2 className={gradient ? 'text-inverse' : ''}>{title}</h2>
        {subtitle && (
          <p className={`${gradient ? 'text-inverse' : 'text-secondary'} text-lg`} 
             style={{ marginBottom: 'var(--space-6)' }}>
            {subtitle}
          </p>
        )}
        
        <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
          {primaryAction && (
            <button 
              className={`btn ${gradient ? 'btn-secondary' : 'btn-primary'} btn-lg`}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button 
              className={`btn ${gradient ? 'btn-ghost' : 'btn-outline'} btn-lg`}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Icon mapping for services
export const getServiceIcon = (serviceType) => {
  const icons = {
    sme: <Business />,
    enterprise: <CloudUpload />,
    consultancy: <Assessment />
  };
  return icons[serviceType] || <Business />;
};

// Icon mapping for features
export const getFeatureIcon = (featureType) => {
  const icons = {
    security: <Security />,
    speed: <Speed />,
    support: <Support />,
    analytics: <TrendingUp />,
    default: <CheckCircle />
  };
  return icons[featureType] || icons.default;
};

const ProfessionalCards = {
  ServiceCard,
  FeatureCard,
  StatsCard,
  TestimonialCard,
  CTACard,
  getServiceIcon,
  getFeatureIcon
};

export default ProfessionalCards;