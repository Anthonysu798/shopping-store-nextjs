describe('Login Flow', () => {
    it('should display errors for empty fields', () => {
      cy.visit('/login');
      cy.get('button[type="submit"]').click();
      cy.get('p.text-red-600').should('contain', 'Username is required');
      cy.get('input[name="username"]').type('testuser');
      cy.get('button[type="submit"]').click();
      cy.get('p.text-red-600').should('contain', 'Password is required');
    });
  
    it('should display error for incorrect credentials', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('nonexistentuser');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
      cy.get('p.text-red-600').should('contain', 'Invalid username or password');
    });
  
    it('should successfully log in a user', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/store'); // Redirects to store page
    });
  });
  