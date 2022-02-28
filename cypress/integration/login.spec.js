/// <reference types = "cypress" />

describe ('login test', () => {

    it ('visit gallery page',() => {    
    cy.visit ("/");
});
it('click on the login button', () => {
    cy.visit ("/");
    //jos jedan nacin ya getovanje elemenata
    //cy.get('a[href="/login"]').click();
    cy.get('.nav-link').eq(1).click();
    cy.get('#email').type('mila1@dp.com');
    cy.get('#password').type('test1234');
    cy.get('button').click();
    //logout

    
});
it ('logout', () => {
    cy.get ('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(3).click();

});
});
