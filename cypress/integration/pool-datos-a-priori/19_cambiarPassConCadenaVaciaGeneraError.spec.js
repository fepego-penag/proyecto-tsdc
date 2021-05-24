/// <reference types="cypress" />

var data;
context('Actions', () => {
    before(function () {
        cy.clearCookies()
          cy.fixture('login_credentials').then(function (data) {
            this.data = data;
          })
        })
    beforeEach(() => {
          Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })

    it('Fill username & password then log in ', function(){
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    it('Select staff administration button and open Ghost user ', function() {
        cy.get('.gh-nav-top').contains('Staff').click()
        cy.get('div [class="apps-grid"]').contains('Ghost').click()
      })
    it('Fill and apply new password changes then click on submit - change Pass', function() {
        cy.get('#user-password-new').click({force: true})
        cy.get('#user-new-password-verification').click({force: true})
        cy.contains('Change Password').click()
        cy.contains(`Sorry, passwords can't be blank`)
    })
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}