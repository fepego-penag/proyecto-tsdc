/// <reference types="cypress" />
const faker = require('faker');

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
        cy.visit('http://localhost:2369/ghost/#/signin')
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
        cy.get('#user-password-new').type(faker.lorem.paragraph())
        cy.get('#user-new-password-verification').type(faker.lorem.paragraph())
        cy.contains('Change Password').click()
        cy.contains('Your new passwords do not match')
    })
});