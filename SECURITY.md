# Security Policy

## 🛡️ Supported Versions

We actively support the following versions with security updates:

| Version | Supported |
| ------- | --------- |
| 1.x.x   | ✅ Yes    |
| < 1.0   | ❌ No     |

## 🚨 Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue,
please report it responsibly.

### How to Report

1. **Email**: Send details to `security@globalpayrollmigration.com`
2. **Subject**: Include "SECURITY" in the subject line
3. **PGP**: Use our PGP key for sensitive information (available at
   `/.well-known/pgp-key.txt`)

### What to Include

Please provide the following information:

- **Description** of the vulnerability
- **Steps to reproduce** the issue
- **Impact assessment** (who is affected, what data is at risk)
- **Proof of concept** (if applicable)
- **Suggested fix** (if you have one)

### Response Timeline

- **Acknowledgment**: Within 24 hours
- **Initial assessment**: Within 72 hours
- **Status update**: Weekly until resolved
- **Resolution**: Target 30 days (varies by complexity)

## 🔒 Security Measures

### Current Protections

#### Content Security Policy (CSP)

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://cdn.emailjs.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https: blob:;
connect-src 'self' https://api.emailjs.com;
frame-src 'none';
object-src 'none';
```

#### Security Headers

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`

#### Input Validation

- All form inputs are sanitized
- Email and phone validation
- Rate limiting on form submissions
- CSRF protection for state-changing operations

#### Dependencies

- Regular security audits with `npm audit`
- Automated dependency updates
- Vulnerability scanning in CI/CD

### Data Protection

#### Personal Information

- **Collection**: Only collect necessary data for service quotes
- **Storage**: No persistent storage of form data in browser
- **Transmission**: All data encrypted in transit (HTTPS)
- **Retention**: Email data processed according to EmailJS privacy policy

#### Third-Party Services

- **EmailJS**: Form submissions (see their privacy policy)
- **Google Analytics** (if enabled): Anonymous usage analytics
- **Fonts**: Google Fonts loaded from CDN

## 🔍 Security Testing

### Automated Scanning

```bash
npm run security:audit      # Dependency vulnerability scan
npm run security:audit:ci   # CI-friendly audit
npm run security:deps       # Unused dependency check
```

### Manual Testing

- Cross-Site Scripting (XSS) protection
- Content Security Policy validation
- Input sanitization verification
- Authentication bypass testing (where applicable)
- Access control verification

### Security Headers Testing

Test your deployment:

```bash
curl -I https://your-domain.com
```

Verify these headers are present:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Strict-Transport-Security`

## 🎯 Security Best Practices

### For Contributors

1. **Never commit secrets** (API keys, passwords, tokens)
2. **Sanitize user inputs** in all form handling
3. **Use HTTPS** for all external requests
4. **Follow secure coding practices**
5. **Run security tests** before submitting PRs

### For Deployment

1. **Enable HTTPS** with valid certificates
2. **Configure security headers** properly
3. **Regular security updates** for dependencies
4. **Monitor for vulnerabilities** continuously
5. **Backup and disaster recovery** procedures

## 🚫 Out of Scope

The following are **not** considered security vulnerabilities:

- **Clickjacking** on pages without sensitive actions
- **Missing security headers** on non-sensitive static content
- **Self-XSS** that requires user to paste malicious content
- **Physical attacks** requiring device access
- **Social engineering** attacks
- **DoS attacks** that don't expose data
- **Issues in third-party services** (report to them directly)

## 📊 Vulnerability Disclosure Timeline

1. **Day 0**: Vulnerability reported
2. **Day 1**: Acknowledgment sent
3. **Day 3**: Initial assessment completed
4. **Day 7**: Weekly status update
5. **Day 30**: Target resolution (may vary)
6. **Day 45**: Public disclosure (if resolved)

## 🏆 Hall of Fame

We recognize security researchers who responsibly disclose vulnerabilities:

_No reports yet - be the first!_

To be listed:

- Report must lead to a security fix
- Follow responsible disclosure process
- Provide permission to list your name

## 📞 Contact Information

- **Security Team**: security@globalpayrollmigration.com
- **General Contact**: info@globalpayrollmigration.com
- **Website**: https://globalpayrollmigration.com
- **Security Page**: https://globalpayrollmigration.com/security

## 🔄 Policy Updates

This security policy is reviewed and updated:

- **Quarterly**: Regular review cycle
- **As needed**: After security incidents
- **Version changes**: With major releases

Last updated: August 2025 Next review: November 2025

---

**Remember**: Security is everyone's responsibility. When in doubt, err on the
side of caution and report potential issues.
