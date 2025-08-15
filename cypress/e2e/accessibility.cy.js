describe('Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have proper skip links', () => {
    cy.get('a[href="#main-content"]').should('exist');
    cy.get('#main-content').should('exist');
  });

  it('should have proper heading hierarchy', () => {
    // Check that h1 exists and is unique
    cy.get('h1').should('have.length', 1);
    
    // Check heading order (should not skip levels)
    cy.get('h1, h2, h3, h4, h5, h6').then(($headings) => {
      const headingLevels = Array.from($headings).map(el => parseInt(el.tagName.charAt(1)));
      let previousLevel = 0;
      
      headingLevels.forEach(level => {
        expect(level - previousLevel).to.be.at.most(1);
        previousLevel = level;
      });
    });
  });

  it('should have alt text for all images', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });

  it('should have proper form labels', () => {
    cy.visit('/contact');
    
    cy.get('input, textarea, select').each(($input) => {
      const id = $input.attr('id');
      const ariaLabel = $input.attr('aria-label');
      const ariaLabelledBy = $input.attr('aria-labelledby');
      
      if (id) {
        cy.get(`label[for="${id}"]`).should('exist');
      } else {
        expect(ariaLabel || ariaLabelledBy).to.exist;
      }
    });
  });

  it('should have proper focus management', () => {
    // Test tab navigation
    cy.get('body').tab();
    cy.focused().should('be.visible');
    
    // Test focus indicators
    cy.get('a, button, input').first().focus();
    cy.focused().should('have.css', 'outline-style', 'solid')
      .or('have.css', 'box-shadow');
  });

  it('should have proper ARIA labels and roles', () => {
    cy.get('[role="navigation"]').should('exist');
    cy.get('[role="main"], main').should('exist');
    cy.get('[role="contentinfo"], footer').should('exist');
    
    // Check buttons have accessible names
    cy.get('button').each(($button) => {
      const ariaLabel = $button.attr('aria-label');
      const text = $button.text().trim();
      const ariaLabelledBy = $button.attr('aria-labelledby');
      
      expect(ariaLabel || text || ariaLabelledBy).to.exist;
    });
  });

  it('should have sufficient color contrast', () => {
    // This is a basic check - in real projects, use axe-core
    cy.get('body').should('have.css', 'background-color');
    cy.get('body').should('have.css', 'color');
  });

  it('should work with screen reader announcements', () => {
    // Check for live regions
    cy.get('[aria-live]').should('exist');
    
    // Check for screen reader only content
    cy.get('.sr-only, .visually-hidden').should('exist');
  });

  it('should have proper link descriptions', () => {
    cy.get('a').each(($link) => {
      const text = $link.text().trim();
      const ariaLabel = $link.attr('aria-label');
      const title = $link.attr('title');
      
      // Links should have descriptive text, not just "click here" or "read more"
      const descriptiveText = ariaLabel || text || title;
      expect(descriptiveText).to.exist;
      expect(descriptiveText.toLowerCase()).not.to.match(/^(click here|read more|more|link)$/);
    });
  });

  it('should support keyboard navigation for interactive elements', () => {
    // Test dropdowns can be opened with keyboard
    cy.get('[aria-haspopup="true"]').first().focus().type('{enter}');
    cy.get('[role="menu"]').should('be.visible');
    
    // Test escape key closes dropdown
    cy.focused().type('{esc}');
    cy.get('[role="menu"]').should('not.exist');
  });
});