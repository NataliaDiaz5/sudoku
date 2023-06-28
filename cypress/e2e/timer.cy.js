describe('template spec', () => {
    it('10 seconds', () => {
        cy.visit('/');
        for (let k =0 ; k < 10; k++) {
          cy.contains('.status__time', `00:0${k}`);
        }
        
      //cy.get('.game__cell--filled').should('have.length.greaterThan',20)
    })
  })