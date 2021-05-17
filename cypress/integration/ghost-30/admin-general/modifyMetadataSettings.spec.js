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

    it('Select general administration button and select site metadata settings', function() {
        cy.get('.gh-nav-top').contains('General').click()
        cy.get('.flex.flex-row.justify-between.w-100').contains('Expand').first().click({ force: true }).wait(3000)
        cy.get('.ember-text-field.gh-input.ember-view').first().click({ force: true }).type("CMS Administrator")
        cy.wait(500)
        cy.get('.gh-main ').contains('Save settings').click()
    })
});