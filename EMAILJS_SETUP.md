# EmailJS Setup Instructions

To enable email sending for the quote form, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (you'll need this later)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Quote Request - {{service_category}}

Hello,

You have received a new quote request through your website.

CONTACT INFORMATION:
Name: {{contact_name}}
Job Title: {{job_title}}
Email: {{email}}
Phone: {{phone}}

COMPANY DETAILS:
Company: {{company_name}}
Industry: {{industry}}
Employee Count: {{employee_count}}
Data Volume: {{data_volume}}

SERVICE REQUIREMENTS:
Service Type: {{service_category}}
Migration Type: {{target_system}}
Custom Migration Type: {{custom_migration_type}}
Current System: {{current_system}}
Migration Urgency: {{migration_urgency}}

TECHNICAL REQUIREMENTS:
Migration Scope: {{migration_scope}}
Compliance Requirements: {{compliance_requirements}}

PROJECT DETAILS:
Preferred Timeline: {{timeline}}
Budget Range: {{budget}}

ADDITIONAL REQUIREMENTS:
{{additional_requirements}}

---
This request was submitted through the website quote form.

Best regards,
Website Quote Form
```

4. Save the template and note down the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (User ID)
3. Copy this key

## 5. Update Configuration

1. Open `src/services/emailService.js`
2. Replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Replace with your Public Key
```

## 6. Test the Setup

1. Start your development server: `npm start`
2. Navigate to the quote page
3. Fill out the form completely
4. Submit the form
5. Check your email (info@globalpayrollmigration.com) for the quote request

## Important Notes

- **Free Tier Limits**: EmailJS free tier allows 200 emails per month
- **Email Delivery**: Make sure to check spam folders initially
- **Template Variables**: All template variables ({{variable_name}}) must match the ones sent from the form
- **Error Handling**: The form will show an error message if sending fails
- **Fallback**: Users are provided with the direct email address if sending fails

## Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify template variables match exactly
- Check EmailJS dashboard for send logs
- Ensure service is properly connected

**Form shows error?**
- Check browser console for specific error messages
- Verify all three IDs are correct in emailService.js
- Make sure EmailJS service is active

**Still having issues?**
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Verify email service connection in EmailJS dashboard
- Test with a simple template first

## Security Note

The configuration in this setup is safe for frontend use. EmailJS public keys are meant to be exposed in client-side code. However, consider setting up rate limiting in your EmailJS dashboard to prevent abuse.