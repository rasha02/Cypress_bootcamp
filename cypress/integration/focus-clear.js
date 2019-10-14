/// <reference types="Cypress" />


describe('test suite skyScanner', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.skyscanner.nl/');
        //cy.get('#fsc-origin-search').focus();
        cy.get('#fsc-origin-search').clear();
        
   })
})