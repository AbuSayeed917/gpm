// Security utilities and Content Security Policy configuration

export const sanitizeInput = (input: string): string => {
  // Basic XSS prevention by sanitizing user input
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const generateCSPHeader = (): string => {
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.emailjs.com https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://vitals.vercel-analytics.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    'upgrade-insecure-requests',
  ];

  return csp.join('; ');
};

export const securityHeaders = {
  'Content-Security-Policy': generateCSPHeader(),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

// Rate limiting for form submissions
class RateLimiter {
  private submissions: Map<string, number[]> = new Map();
  private maxSubmissions = 5; // Max 5 submissions
  private timeWindow = 15 * 60 * 1000; // 15 minutes

  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const submissions = this.submissions.get(identifier) || [];

    // Remove old submissions outside the time window
    const recentSubmissions = submissions.filter((timestamp) => now - timestamp < this.timeWindow);

    if (recentSubmissions.length >= this.maxSubmissions) {
      return true;
    }

    // Add current submission
    recentSubmissions.push(now);
    this.submissions.set(identifier, recentSubmissions);

    return false;
  }

  getRemainingTime(identifier: string): number {
    const submissions = this.submissions.get(identifier) || [];
    if (submissions.length === 0) return 0;

    const oldestSubmission = Math.min(...submissions);
    const remainingTime = this.timeWindow - (Date.now() - oldestSubmission);

    return Math.max(0, remainingTime);
  }
}

export const rateLimiter = new RateLimiter();

// CSRF protection
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, sessionToken: string): boolean => {
  return token === sessionToken && token.length === 64;
};

// Input validation schemas
export const validationSchemas: Record<string, Record<string, ValidationRule>> = {
  quoteForm: {
    contactName: {
      required: true,
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s'-]+$/,
    },
    email: {
      required: true,
      validate: validateEmail,
    },
    phone: {
      required: true,
      validate: validatePhoneNumber,
    },
    companyName: {
      required: true,
      minLength: 2,
      maxLength: 200,
    },
    additionalRequirements: {
      required: false,
      maxLength: 2000,
    },
  },
};

// Validation rule interface
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: any) => boolean;
}

// Validate form data
export const validateFormData = (
  data: Record<string, any>,
  schema: Record<string, ValidationRule>
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];

    if (rules.required && (!value || value.toString().trim() === '')) {
      errors.push(`${field} is required`);
      continue;
    }

    if (value && rules.minLength && value.toString().length < rules.minLength) {
      errors.push(`${field} must be at least ${rules.minLength} characters`);
    }

    if (value && rules.maxLength && value.toString().length > rules.maxLength) {
      errors.push(`${field} must be no more than ${rules.maxLength} characters`);
    }

    if (value && rules.pattern && !rules.pattern.test(value.toString())) {
      errors.push(`${field} has invalid format`);
    }

    if (value && rules.validate && !rules.validate(value)) {
      errors.push(`${field} is invalid`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Security event logging
export const logSecurityEvent = (event: string, details: Record<string, any>): void => {
  const securityEvent = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href,
    ip: 'client-side', // Would be set on server-side
  };

  // In production, send to security monitoring service
  if (process.env.NODE_ENV === 'production') {
    console.warn('Security Event:', securityEvent);
    // Send to monitoring service
  } else {
    console.log('Security Event (dev):', securityEvent);
  }
};
