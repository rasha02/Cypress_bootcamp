/// <reference types="Cypress" />


describe('test suite skyscanner', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.skyscanner.nl/');
       // cy.get('#footer-root').find('ul').eq(0); 
        // find all unordered list then select the first one (index 0)
      cy.get('#footer-root').find('ul').eq(1).find('a');
     
    })
    
    
    })