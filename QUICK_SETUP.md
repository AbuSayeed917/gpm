# Quick Setup Guide - Quote Form Email

Your quote form is now ready to work! Here are your options:

## ✅ Option 1: Use Right Now (Fallback Method)
The form will work immediately using your default email client:

1. **Test it now**: Fill out the quote form
2. **It will open your email client** (Gmail, Outlook, Apple Mail, etc.)
3. **Click send** in your email client
4. **Done!** You'll receive the quote request

**No setup required** - works out of the box!

## ⚡ Option 2: Full Automation (5 minutes)
For automatic email delivery without user interaction:

### Step 1: Get EmailJS Account (2 minutes)
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email
3. Verify your account

### Step 2: Connect Your Email (2 minutes)
1. In EmailJS dashboard → **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (easiest)
4. Click **Connect Account** and authorize
5. Copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Template (1 minute)
1. Go to **Email Templates** → **Create New Template**
2. Copy this template exactly:

**Subject:** `New Quote Request - {{service_category}}`

**Content:**
```
QUOTE REQUEST DETAILS

Contact: {{contact_name}} ({{job_title}})
Email: {{email}}
Phone: {{phone}}

Company: {{company_name}}
Industry: {{industry}}
Employees: {{employee_count}}

Service: {{service_category}}
Migration: {{target_system}}
Current System: {{current_system}}
Urgency: {{migration_urgency}}

Timeline: {{timeline}}
Budget: {{budget}}

Requirements:
{{additional_requirements}}

Technical Scope: {{migration_scope}}
Compliance: {{compliance_requirements}}
```

3. Save and copy the **Template ID** (looks like: `template_xyz789`)

### Step 4: Configure Your Website
1. In your project, copy `.env.example` to `.env`
2. Edit `.env` file:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_CONTACT_EMAIL=info@globalpayrollmigration.com
```

3. Get your **Public Key** from EmailJS Account → General
4. Replace the values in `.env`
5. Restart your development server: `npm start`

## 🧪 Test It

1. Go to your quote form
2. Fill out completely (all required fields)
3. Submit
4. Check `info@globalpayrollmigration.com` inbox

## ⚠️ Important Notes

- **Option 1** works immediately but requires user to send email manually
- **Option 2** is fully automatic but needs 5 minutes of setup
- **Free EmailJS** allows 200 emails/month (plenty for quotes)
- **Fallback protection**: If EmailJS fails, it automatically uses Option 1

## Need Help?

If you have any issues:
1. Check the browser console for error messages
2. Verify all IDs are correctly copied (no extra spaces)
3. Make sure `.env` file is in the project root
4. Restart the development server after changing `.env`

**The form works right now with Option 1** - you can start receiving quote requests immediately!