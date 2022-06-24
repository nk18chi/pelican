describe('Navigation', () => {
  it('should show headline in top page', () => {
    cy.visit('/');

    cy.get('h2').contains('money');
  });
});
