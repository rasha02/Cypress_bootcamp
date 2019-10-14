/// <reference types="Cypress" />


describe('test suite bbcNewx', ()=>{   

    it('test case logIn with invalid credentials',()=>{
    
        cy.viewport('macbook-15');
        cy.visit('https://www.bbc.com/');
      
        cy.get('.module--header span').then((rasha) => {

           let text = rasha.text()
           cy.log(text);
        });
     
    })
    
    
    })