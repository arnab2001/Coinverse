describe('Coinverse Testing', () => {
  it('Testing our website to open', () => {
    cy.visit("0.0.0.0:3000");
    cy.url().should('include', "0.0.0.0:3000");
  });

  it('Test Light Theme', () => {
    cy.visit('0.0.0.0:3000');
    cy.get('.ant-layout-header').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('Test Dark Mode', () => {
    cy.visit("0.0.0.0:3000");
    
    cy.get('.bulb-icon').click();
    cy.get('.ant-layout-header').should('have.css', 'background-color', 'rgb(27, 27, 27)');

  });

  it('Clicking the `Cryptocurrencies` button', () => {
    cy.visit("0.0.0.0:3000");
    cy.contains('Cryptocurrencies').click();

    cy.url().should('include', '/Cryptocurrencies');
  });

})