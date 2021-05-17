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
        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        cy.screenshot()
    })
});

describe("Edit a draft post", () => {
    it("Editing content", () => {
        cy.contains('a', 'Posts')
            .click({ force: true })
            .wait(1000)

        cy.contains('a', 'Draft')
            .first()
            .click({ force: true })
        cy.wait(2000)

        cy.screenshot()
        
        cy.get('.midgrey-l2.fw5')
            .first()
            .click({ force: true })
            .wait(2000)
        cy.screenshot()

        cy.get('[data-kg="editor"]')
            .first()
            .click({ force: true })
            .focused()
            .type('Editing body of the post{enter}', { wait: 3000 })
            .wait(2000)
        cy.screenshot()
            .visit('http://localhost:2369/ghost/#/posts?type=draft')
            .wait(2000)
        })
});

