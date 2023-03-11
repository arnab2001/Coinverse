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

  it('Clicking on `Home` button', () => {
    cy.visit("0.0.0.0:3000");
    cy.contains('Home').click();
    cy.url().should('include', '/');
  })

  it('Clicking on `News` button', () => {
    cy.visit("0.0.0.0:3000");
    cy.contains('News').click();
    cy.url().should('include', '/News');
  })

  it('Clicking on `Show more` button', () => {
    cy.visit("0.0.0.0:3000");
    cy.get('#show-more-text').click();
    cy.url().should('include', '/Cryptocurrencies');
  })

  it('Testing the search button', () => {
    cy.visit("0.0.0.0:3000/Cryptocurrencies");
    cy.get(".search-crypto input").type("search any cryptocurrency");
  })

  it('Stats heading testing', () => {
    cy.visit("0.0.0.0:3000");
    cy.get(".top-heading h2").contains('Global Crypto Stats');
  })

  it("Testing bookmark button", () => {
    cy.visit("0.0.0.0:3000");
    cy.get('span.anticon.anticon-book').click({multiple: true});
  })
})