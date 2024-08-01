describe('Registration Flow', () => {
    it('should display errors for empty fields', () => {
      cy.visit('/register');
      cy.get('button[type="submit"]').click();
      cy.get('p').contains('Username is required').should('exist');
      cy.get('p').contains('Password is required').should('exist');
      cy.get('p').contains('Confirm Password is required').should('exist');
    });
  
    it('should display error for mismatched passwords', () => {
      cy.visit('/register');
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password124');
      cy.get('button[type="submit"]').click();
      cy.get('p').contains('Passwords do not match').should('exist');
    });
  
    it('should display error if username is already taken', () => {
      cy.visit('/register');
      cy.get('input[name="username"]').type('existinguser'); // Assume 'existinguser' is already taken
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.get('p').contains('Username already taken').should('exist');
    });
  });
  