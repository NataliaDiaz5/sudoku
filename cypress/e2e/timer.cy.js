/// <reference types="cypress" />
describe('Timer', () => {
    it('shows 10 seconds', () => {
        cy.visit('/');
        for (let k =0 ; k < 10; k++) {
          cy.contains('.status__time', `00:0${k}`);
        }
        
      //cy.get('.game__cell--filled').should('have.length.greaterThan',20)
    })


    it.only('shows minutes and seconds since the game started', () => {
      cy.clock()
      cy.visit('/')
      cy.contains('.status__time', '00:00')
      cy.tick(29 * 1000) 
      cy.contains('.status__time', '00:01')
      cy.tick(30_000)
      cy.contains('.status__time', '00:30')
      cy.tick(30_000)
      cy.contains('.status__time', '01:00');

    })
  })