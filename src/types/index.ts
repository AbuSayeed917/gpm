// Global type definitions for the application

export interface QuoteFormData {
  // Contact Information
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;

  // Company Information
  companyName: string;
  industry: string;
  employeeCount: string;
  dataVolume: string;

  // Service Details
  serviceCategory: 'sme' | 'large-enterprise' | 'consultancy';
  targetSystem: string;
  customMigrationType?: string;
  currentSystem: string;
  migrationUrgency: 'Low' | 'Medium' | 'High' | 'Critical';

  // Technical Requirements
  migrationScope: string[];
  complianceRequirements: string[];

  // Project Details
  timeline: string;
  budget: string;
  additionalRequirements?: string;
}

export interface EmailServiceResponse {
  success: boolean;
  response?: any;
  error?: Error;
  method?: 'emailjs' | 'mailto';
  message?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface AccessibilityPreferences {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusVisible: boolean;
  screenReaderOptimized: boolean;
  fontSize: number;
}

export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ComponentType;
  external?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ComponentType;
}

export interface TestimonialData {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

// Environment variables type safety
export interface EnvironmentVariables {
  REACT_APP_EMAILJS_SERVICE_ID?: string;
  REACT_APP_EMAILJS_TEMPLATE_ID?: string;
  REACT_APP_EMAILJS_PUBLIC_KEY?: string;
  REACT_APP_CONTACT_EMAIL?: string;
  REACT_APP_ANALYTICS_ID?: string;
  REACT_APP_SENTRY_DSN?: string;
}
