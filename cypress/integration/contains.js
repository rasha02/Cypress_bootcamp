/// <reference types="Cypress" />


describe('test suite facebook', ()=>{

it('test case login',()=>{

    cy.viewport('macbook-15');
    cy.visit('https://facebook.com');
    //cy.get('.uiButtonConfirm [type="submit"]');
    cy.contains('Messenger');
})


})

// contains for texts
// and get for css selector