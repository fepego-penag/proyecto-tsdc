/// <reference types="cypress" />
var data;
context('Actions', () => {
    before(function () {
        cy.fixture('login_credentials').then(function (data) {
            this.data = data;
        })
    })
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })

    it('Fill username & password then log in ', function () {
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
    })
});

describe("Delete post", () => {
    it("Deleting post", () => {

        cy.get('#ember28')
            .click()

        cy.get('.gh-content-entry-title')
            .first()
            .click({ force: true })

        cy.get('.post-settings')
            .click({ force: true })

        cy.contains('Delete post')
            .click({ force: true })

        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
            .first()
            .click({ force: true })
            .wait(2000)
    })
});
