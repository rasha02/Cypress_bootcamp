/// <reference types="Cypress" />


describe('test suite facebook', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://facebook.com');
       
        cy.get('#day').select('15'); 
        cy.get('#month').select('2');
        cy.get('#year').select('1988');  
    })
    
    
    })