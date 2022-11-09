describe('Navigation', () => {
  it('should show headline in top page', () => {
    cy.visit('/');

    cy.get('h1').contains('Build Your Plan');
  });
});
