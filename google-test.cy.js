describe('Google otsing', () => {
  beforeEach(() => {
    // Küpsiste kustutamine
    cy.clearCookies();
  });

    it('Keeldutakse Google küpsistest ning otsitakse märksõna "python"', () => {
      // Ava Google
      cy.visit('https://www.google.com');

      // Keeldu küpsistest
      cy.get('#L2AGLb').click();

      // Leia otsing ning sisesta "python"
      cy.get('.gLFyf').type('python');

      // Vajuta otsingu nupule
      cy.get('.gNO89b').eq(1).click(); // You might need to adjust the selector based on the current Google UI
    });
});