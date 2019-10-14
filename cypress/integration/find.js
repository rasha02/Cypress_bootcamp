/// <reference types="Cypress" />


describe('test suite skyscanner', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.skyscanner.nl/');
        cy.get('#footer-root').find('ul'); // find all unordered list
        // cy.get('#footer-root').find('a'); //find all a tags

        cy.get('#footer-root').find('a').filter('#media-index');

    })
    
    
    })