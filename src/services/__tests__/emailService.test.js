import { sendQuoteRequest } from '../emailService';
import emailjs from '@emailjs/browser';

// Mock emailjs
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn(),
}));

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockOpen,
  writable: true,
});

const mockFormData = {
  contactName: 'John Doe',
  email: 'john@example.com',
  companyName: 'Test Company',
  industry: 'Technology',
  employeeCount: '50-100',
  dataVolume: 'Medium',
  serviceCategory: 'sme',
  targetSystem: 'ADP',
  customMigrationType: '',
  currentSystem: 'Legacy System',
  migrationUrgency: 'High',
  migrationScope: ['Payroll Data', 'Employee Records'],
  complianceRequirements: ['GDPR', 'SOX'],
  jobTitle: 'HR Director',
  phone: '123-456-7890',
  timeline: '3-6 months',
  budget: '$10,000-$25,000',
  additionalRequirements: 'Need data backup',
};

// Mock console.log to avoid cluttering test output
const originalLog = console.log;
const originalError = console.error;
beforeAll(() => {
  console.log = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
  console.error = originalError;
});

describe('emailService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset environment variables
    delete process.env.REACT_APP_EMAILJS_SERVICE_ID;
    delete process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    delete process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    delete process.env.REACT_APP_CONTACT_EMAIL;
  });

  describe('sendQuoteRequest', () => {
    test('sends email successfully when EmailJS is configured', async () => {
      // Setup environment variables
      process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test_service';
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test_template';
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test_key';
      process.env.REACT_APP_CONTACT_EMAIL = 'test@example.com';

      const mockResponse = { status: 200, text: 'OK' };
      emailjs.send.mockResolvedValue(mockResponse);

      const result = await sendQuoteRequest(mockFormData);

      expect(emailjs.send).toHaveBeenCalledWith(
        'test_service',
        'test_template',
        expect.objectContaining({
          to_email: 'test@example.com',
          from_name: 'John Doe',
          from_email: 'john@example.com',
          subject: 'New Quote Request - SME',
        })
      );

      expect(result).toEqual({
        success: true,
        response: mockResponse,
      });
    });

    test('uses mailto fallback when EmailJS is not configured', async () => {
      const result = await sendQuoteRequest(mockFormData);

      expect(emailjs.send).not.toHaveBeenCalled();
      expect(mockOpen).toHaveBeenCalledWith(
        expect.stringContaining('mailto:info@globalpayrollmigration.com'),
        '_blank'
      );
      expect(result).toEqual({
        success: true,
        method: 'mailto',
        message: 'Email client opened. Please send the email to complete your quote request.',
      });
    });

    test('handles EmailJS send error gracefully', async () => {
      process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test_service';
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test_template';
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test_key';

      const mockError = new Error('Network error');
      emailjs.send.mockRejectedValue(mockError);

      const result = await sendQuoteRequest(mockFormData);

      expect(result).toEqual({
        success: false,
        error: mockError,
      });
    });

    test('formats email data correctly', async () => {
      process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test_service';
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test_template';
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test_key';

      emailjs.send.mockResolvedValue({ status: 200 });

      await sendQuoteRequest(mockFormData);

      expect(emailjs.send).toHaveBeenCalledWith(
        'test_service',
        'test_template',
        expect.objectContaining({
          company_name: 'Test Company',
          industry: 'Technology',
          employee_count: '50-100',
          service_category: 'sme',
          migration_scope: 'Payroll Data, Employee Records',
          compliance_requirements: 'GDPR, SOX',
          timeline: '3-6 months',
          budget: '$10,000-$25,000',
          message: expect.stringContaining('NEW QUOTE REQUEST - SME Payroll Migration'),
        })
      );
    });

    test('generates correct mailto URL with encoded parameters', async () => {
      const result = await sendQuoteRequest(mockFormData);

      expect(mockOpen).toHaveBeenCalledWith(
        expect.stringMatching(/^mailto:.*subject=.*body=.*/),
        '_blank'
      );

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain('subject=New%20Quote%20Request%20-%20SME');
      expect(callArgs).toContain('John%20Doe');
      expect(callArgs).toContain('Test%20Company');
    });
  });
});
