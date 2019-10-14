/// <reference types="Cypress" />

describe ('test suite facebook', () => {

    it('login with invalid credentials', () =>{

        cy.viewport('macbook-15')
        cy.visit('https://facebook.com')

      // cy.get('input')   // for using tag name
     // cy.get('#email')   // for using ID
     // cy.get('.uiButtonConfirm') // for using class name
     // cy.get('[name="firstname"]') // for using attribute and value
    
        //cy.get('.uiButtonConfirm input') 
     // look for element with class name 'uiButtonConfirm' 
     // then go and  look, in its children, for element with tag name 'input' 
    
      cy.get('.uiButtonConfirm [value="Connexion"]') 
      cy.get('.uiButtonConfirm [type="submit"]') 
    
     })

        // css selector
        /*
        1- Using tag name
        2- ID #
        3- Class .
        */

})