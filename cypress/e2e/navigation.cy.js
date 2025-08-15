describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main navigation', () => {
    cy.get('[role="navigation"]').should('be.visible');
    cy.get('.nav-brand').should('be.visible').and('contain.text', 'GPM');
  });

  it('should navigate to all main pages', () => {
    const pages = [
      { selector: 'a[href="/services/sme"]', path: '/services/sme' },
      { selector: 'a[href="/services/large-enterprise"]', path: '/services/large-enterprise' },
      { selector: 'a[href="/services/consultancy"]', path: '/services/consultancy' },
      { selector: 'a[href="/about"]', path: '/about' },
      { selector: 'a[href="/contact"]', path: '/contact' },
      { selector: 'a[href="/faq"]', path: '/faq' },
    ];

    pages.forEach(({ selector, path }) => {
      cy.get(selector).first().click();
      cy.url().should('include', path);
      cy.go('back');
    });
  });

  it('should have working dropdown menus', () => {
    // Test services dropdown
    cy.get('[aria-haspopup="true"]').first().click();
    cy.get('[role="menu"]').should('be.visible');
    cy.get('[role="menuitem"]').should('have.length.greaterThan', 0);
    
    // Click outside to close
    cy.get('body').click(0, 0);
    cy.get('[role="menu"]').should('not.exist');
  });

  it('should be keyboard accessible', () => {
    // Test skip link
    cy.get('body').tab();
    cy.focused().should('contain.text', 'Skip to main content');
    
    // Test navigation focus
    cy.get('body').tab();
    cy.focused().should('have.attr', 'aria-label', 'Global Payroll Migration - Home');
  });

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667);
    cy.get('.nav-brand').should('be.visible');
    
    // Mobile menu should work
    cy.get('.mobile-menu-toggle').should('be.visible');
  });
});