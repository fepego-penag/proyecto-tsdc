/// <reference types="cypress" />
var data;
context('Actions', () => {
    before(function () {
        cy.fixture('login_credentials').then(function (data) {
            this.data = data;
        })
    })
    beforeEach(() => {
        cy.visit('http://localhost:2369/ghost/#/signin')
    })

    it('Fill username & password then log in ', function () {
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        cy.screenshot()
    })
});

describe("Delete post", () => {
    it("Deleting post", () => {

        cy.contains('a', 'Posts')
            .click({ force: true })
            .wait(1000)
        
        cy.get('.gh-content-entry-title')
            .first()
            .click({ force: true })
        cy.screenshot()

        cy.get('.post-settings')
            .click({ force: true })
        cy.screenshot()

        cy.contains('Delete post')
            .click({ force: true })
        cy.screenshot()

        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
            .first()
            .click({ force: true })
            .wait(2000)
            cy.screenshot()
        })
});
