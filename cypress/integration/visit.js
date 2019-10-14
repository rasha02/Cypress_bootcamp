/// <reference types="Cypress" />

describe ('test suite facebook website', () =>{

    it('test case open facebook page', () =>{
        // we use sist command to navigate to any website
         cy.visit('https://facebook.com')
         

    })

    it('test case open google page', () =>{

        cy.visit('https://google.com')

   })

})  