/// <reference types="Cypress" />


describe('test suite facebook', ()=>{   

    it('test case login',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://facebook.com');
        cy.get('#email').type('rachahamdii@gmail.com {backspace}') ;


    })
    
    
    })