// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Add custom commands for accessibility testing
Cypress.Commands.add('tab', { prevSubject: 'optional' }, (subject, options) => {
  return cy.wrap(subject).trigger('keydown', { keyCode: 9, which: 9, ...options });
});

// Command to check for accessibility violations
// In a real project, you would use cypress-axe for this
Cypress.Commands.add('checkA11y', (context = null, options = null) => {
  // Basic accessibility checks
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt');
  });
  
  cy.get('input, textarea, select').each(($input) => {
    const id = $input.attr('id');
    const ariaLabel = $input.attr('aria-label');
    const ariaLabelledBy = $input.attr('aria-labelledby');
    
    expect(id || ariaLabel || ariaLabelledBy).to.exist;
  });
});

// Custom command to test responsive design
Cypress.Commands.add('testResponsive', (breakpoints = [375, 768, 1024, 1280]) => {
  breakpoints.forEach((width) => {
    cy.viewport(width, 667);
    cy.wait(500); // Allow time for layout to adjust
    
    // Check that content is visible and not overlapping
    cy.get('body').should('be.visible');
    cy.get('nav').should('be.visible');
    
    // Ensure no horizontal scrollbar on mobile
    if (width < 768) {
      cy.window().then((win) => {
        expect(win.document.body.scrollWidth).to.be.at.most(win.innerWidth + 20);
      });
    }
  });
});