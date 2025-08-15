import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || 'info@globalpayrollmigration.com';

// Initialize EmailJS only if configuration is available
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendQuoteRequest = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Using fallback method.');
      return sendViaMailto(formData);
    }

    // Format the form data for email
    const emailData = {
      to_email: CONTACT_EMAIL,
      from_name: formData.contactName,
      from_email: formData.email,
      subject: `New Quote Request - ${formData.serviceCategory.toUpperCase()}`,

      // Company Information
      company_name: formData.companyName,
      industry: formData.industry,
      employee_count: formData.employeeCount,
      data_volume: formData.dataVolume,

      // Service Details
      service_category: formData.serviceCategory,
      target_system: formData.targetSystem,
      custom_migration_type: formData.customMigrationType,
      current_system: formData.currentSystem,
      migration_urgency: formData.migrationUrgency,

      // Technical Requirements
      migration_scope: formData.migrationScope.join(', '),
      compliance_requirements: formData.complianceRequirements.join(', '),

      // Contact Information
      contact_name: formData.contactName,
      job_title: formData.jobTitle,
      email: formData.email,
      phone: formData.phone,

      // Timeline and Budget
      timeline: formData.timeline,
      budget: formData.budget,
      additional_requirements: formData.additionalRequirements,

      // Formatted message for email body
      message: formatQuoteRequestMessage(formData),
    };

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData);

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Helper function to format the quote request message
const formatQuoteRequestMessage = (formData) => {
  const serviceTypes = {
    sme: 'SME Payroll Migration',
    'large-enterprise': 'Large Enterprise Solutions',
    consultancy: 'Payroll Consultancy',
  };

  return `
NEW QUOTE REQUEST - ${serviceTypes[formData.serviceCategory] || formData.serviceCategory}

CONTACT INFORMATION:
- Name: ${formData.contactName}
- Job Title: ${formData.jobTitle}
- Email: ${formData.email}
- Phone: ${formData.phone}

COMPANY DETAILS:
- Company: ${formData.companyName}
- Industry: ${formData.industry}
- Employee Count: ${formData.employeeCount}
- Data Volume: ${formData.dataVolume}

SERVICE REQUIREMENTS:
- Service Type: ${serviceTypes[formData.serviceCategory] || formData.serviceCategory}
- Migration Type: ${formData.targetSystem}${formData.customMigrationType ? ` (${formData.customMigrationType})` : ''}
- Current System: ${formData.currentSystem}
- Migration Urgency: ${formData.migrationUrgency}

TECHNICAL REQUIREMENTS:
- Migration Scope: ${formData.migrationScope.length > 0 ? formData.migrationScope.join(', ') : 'Not specified'}
- Compliance Requirements: ${formData.complianceRequirements.length > 0 ? formData.complianceRequirements.join(', ') : 'Not specified'}

PROJECT DETAILS:
- Preferred Timeline: ${formData.timeline}
- Budget Range: ${formData.budget}

ADDITIONAL REQUIREMENTS:
${formData.additionalRequirements || 'None specified'}

---
This quote request was submitted through the website quote form.
Please respond within 24 hours as promised.
  `.trim();
};

// Fallback method using mailto when EmailJS is not configured
const sendViaMailto = async (formData) => {
  const subject = `New Quote Request - ${formData.serviceCategory.toUpperCase()}`;
  const body = formatQuoteRequestMessage(formData);

  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open mailto link
  window.open(mailtoUrl, '_blank');

  return {
    success: true,
    method: 'mailto',
    message: 'Email client opened. Please send the email to complete your quote request.',
  };
};
