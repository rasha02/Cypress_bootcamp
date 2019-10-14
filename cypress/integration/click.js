/// <reference types="Cypress" />


describe('test suite facebook', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://facebook.com');
        cy.get('#email').type('rachahamdii@gmail.com {backspace}') ;
        cy.get('#pass').type('azerty');
        cy.get('.uiButtonConfirm input').click(); 
        // cy.get('.uiButtonConfirm input').click(topRight); 
    })
    
    
    })