describe('Google öörežiim', () => {
  beforeEach(() => {
    // Küpsiste kustutamine
    cy.clearCookies();
  });
  it('Keeldutakse Google küpsistest ning käivitatakse öörežiim', () => {
    // Ava Google
    cy.visit('https://www.google.com');

    // Keeldu küpsistest
    cy.get('#L2AGLb').click();

    // Leia ja vajuta Eelistused/Settings nupule
    cy.get('.CcNe6e').should('be.visible').click();

    // Leia ja vajuta öörežiimi nupule
    cy.get('.tFYjZe') // Targeting a class that might contain the dark mode toggle
        .click({force:true});
  });
});
