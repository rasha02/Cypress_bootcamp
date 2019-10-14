/// <reference types="Cypress" />


describe('test suite skyScanner', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.skyscanner.nl/');
        cy.get('. [name="originFlexible"]').check();
        cy.get('input [name="directOnly"]').check();
        cy.get('input [name="originFlexible"]').uncheck({force: true});
    })
    
    
    })