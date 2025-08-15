# Contributing to Global Payroll Migration Website

Thank you for your interest in contributing to the GPM website! This document
provides guidelines and instructions for contributing to the project.

## 🚀 Quick Start

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/gpm-website.git
   cd gpm-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 📋 Development Guidelines

### Code Quality Standards

- **TypeScript**: Prefer TypeScript for new files (.tsx/.ts)
- **ESLint**: Code must pass linting (`npm run lint`)
- **Prettier**: Code must be formatted (`npm run format`)
- **Testing**: All new components must have tests
- **Accessibility**: Follow WCAG 2.2 AA guidelines

### Commit Message Convention

We use [Conventional Commits](https://conventionalcommits.org/) for clear commit
messages:

```
type(scope): description

feat(navigation): add mobile hamburger menu
fix(forms): resolve email validation issue
docs(readme): update installation instructions
style(buttons): improve hover states
refactor(utils): optimize performance helper functions
test(components): add ErrorBoundary test coverage
```

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `test/test-description` - Adding or updating tests

## 🏗️ Project Structure

```
src/
├── components/         # Reusable components
│   ├── ComponentName/
│   │   ├── index.ts
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.test.tsx
│   │   └── ComponentName.stories.tsx
├── pages/             # Page components
├── services/          # API services and utilities
├── contexts/          # React contexts
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── styles/           # CSS files and design system
```

## 🧪 Testing Requirements

### Unit Tests

- All components must have unit tests
- Use React Testing Library and Jest
- Test accessibility features
- Aim for >80% code coverage

```bash
npm run test:coverage
```

### E2E Tests

- Add Cypress tests for user flows
- Test on multiple devices/viewports
- Verify accessibility compliance

```bash
npm run cy:run
```

## 🎨 Design System

### Components

- Follow Material Design 3.0 principles
- Use CSS custom properties for theming
- Ensure responsive design (mobile-first)
- Support dark/light themes

### Accessibility

- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios

### Storybook

- Document components in Storybook
- Provide usage examples
- Include accessibility tests

```bash
npm run storybook
```

## 🔒 Security Guidelines

### Input Validation

- Sanitize all user inputs
- Validate email addresses and phone numbers
- Implement rate limiting for form submissions

### Content Security Policy

- Follow CSP headers configuration
- No inline scripts or styles
- Whitelist external domains

### Dependencies

- Run security audits regularly
- Keep dependencies up to date
- Review vulnerability reports

```bash
npm run security:audit
```

## 📝 Pull Request Process

### Before Submitting

1. **Run all checks locally**

   ```bash
   npm run lint
   npm run test
   npm run build
   ```

2. **Update documentation**
   - Update README if needed
   - Add/update component documentation
   - Update CHANGELOG.md

3. **Test thoroughly**
   - Test on multiple browsers
   - Verify responsive design
   - Check accessibility compliance

### PR Requirements

- [ ] All tests passing
- [ ] No linting errors
- [ ] No console errors/warnings
- [ ] Accessibility compliant
- [ ] Documentation updated
- [ ] Security review (if applicable)

### Review Process

1. Automated CI checks must pass
2. Code review by maintainers
3. Manual testing on staging
4. Final approval and merge

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment details**
   - Browser and version
   - Operating system
   - Device type (mobile/desktop)

2. **Steps to reproduce**
   - Clear, numbered steps
   - Expected vs actual behavior
   - Screenshots or recordings

3. **Code examples**
   - Minimal reproducible example
   - Relevant error messages
   - Console logs

## 💡 Feature Requests

For new features:

1. **Check existing issues** - Avoid duplicates
2. **Use feature template** - Provide detailed description
3. **Consider alternatives** - Discuss different approaches
4. **Impact assessment** - Consider performance/accessibility impact

## 🎯 Performance Guidelines

### Bundle Size

- Keep bundle size under 500KB (gzipped)
- Use dynamic imports for large dependencies
- Optimize images and assets

### Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Monitoring

```bash
npm run analyze:bundle    # Bundle size analysis
npm run analyze:source-map # Source map exploration
```

## 🤝 Community

### Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Email**: Contact maintainers at dev@globalpayrollmigration.com

### Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow professional communication standards

## 📄 License

By contributing to this project, you agree that your contributions will be
licensed under the same license as the project.

## 🙏 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- Annual contributor appreciation

---

Thank you for contributing to making payroll migration services more accessible
and user-friendly! 🚀
