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

    it('Fill username & password then log in ', function () {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
    })
});

describe("Publish a draft post", () => {
    it("Publishing a post", () => {
        cy.get('#ember28')
            .click()

        cy.contains('a', 'Draft')
            .first()
            .click({ force: true })

        cy.contains('div', 'Publish')
            .click({ force: true })

        cy.contains('div', 'Set it live now')
            .click({ force: true })

        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
            .click({ force: true })
            .wait(3000)
            .visit('http://localhost:2368/ghost/#/posts')
            .wait(1000)
        //        Cypress.on('uncaught:exception', (err, runnable) => {
        //            return false
        //          })
    })
});