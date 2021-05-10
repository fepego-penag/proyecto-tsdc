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
        cy.contains('Ghost').click()
        cy.wait(500)
    })    

    it('Select Change Cover and Save ', function() {
        cy.get('.user-cover').contains('Change Cover').first().click({ force: true })
        cy.contains('Save').click
        cy.contains('a', 'Staff').first().click({ force: true }).wait(2000)
    })
});