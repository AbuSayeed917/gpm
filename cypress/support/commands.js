// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to simulate user filling out quote form
Cypress.Commands.add('fillQuoteForm', (data = {}) => {
  const defaultData = {
    companyName: 'Test Company',
    contactName: 'John Doe',
    email: 'john@test.com',
    phone: '123-456-7890',
    industry: 'Technology',
    employeeCount: '50-100',
  };

  const formData = { ...defaultData, ...data };

  cy.get('input[name="companyName"]').type(formData.companyName);
  cy.get('input[name="contactName"]').type(formData.contactName);
  cy.get('input[name="email"]').type(formData.email);
  cy.get('input[name="phone"]').type(formData.phone);
  
  if (cy.get('select[name="industry"]').should('exist')) {
    cy.get('select[name="industry"]').select(formData.industry);
  }
  
  if (cy.get('select[name="employeeCount"]').should('exist')) {
    cy.get('select[name="employeeCount"]').select(formData.employeeCount);
  }
});

// Custom command to wait for page to be fully loaded
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'navigator');
  cy.document().should('have.property', 'readyState', 'complete');
  
  // Wait for React to finish rendering
  cy.get('[data-testid="loading"]').should('not.exist');
  cy.get('body').should('be.visible');
});

// Custom command to test theme switching
Cypress.Commands.add('testThemeSwitch', () => {
  cy.get('[data-testid="theme-toggle"]').click();
  cy.get('body').should('have.class', 'dark-theme');
  
  cy.get('[data-testid="theme-toggle"]').click();
  cy.get('body').should('not.have.class', 'dark-theme');
});

// Custom command to check for console errors
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    const consoleError = cy.stub(win.console, 'error');
    cy.wrap(consoleError).should('not.have.been.called');
  });
});