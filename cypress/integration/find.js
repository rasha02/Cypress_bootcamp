/// <reference types="Cypress" />


describe('test suite skyscanner', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.skyscanner.nl/');
        cy.get('#footer-root').find('ul');
        // cy.get('#footer-root').find('a');

    })
    
    
    })