/// <reference types="Cypress" />


describe('test suite view port', () =>{

    it('test case cnn on desktop view', ()=>{
        cy.viewport('macbook-15')
        cy.visit('https://cnn.com')

    })
    
    it('test case cnn on mobile view', ()=>{
        cy.viewport('iphone-6')
        cy.visit('https://cnn.com')

    })

})
