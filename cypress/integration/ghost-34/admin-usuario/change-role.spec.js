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



describe("Change a role", () => {

    it("Changing role", () => {
        cy.contains('a', 'Staff')
            .first()
            .click({ force: true })
            .wait(3000)
        cy.screenshot()

        cy.contains('div', 'Photo of')
            .first()
            .click({ force: true })
            cy.screenshot()

        cy.get('#new-user-role')
            .select('Editor', { force: true })
            .should('have.value', '60a1b8ee229345243081b6cf')
            .wait(3000)

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
            .click({ force: true })
            cy.screenshot()
            .wait(3000)

        cy.contains('a', 'Staff')
            .first().click({ force: true })
            cy.screenshot()
            .wait(2000)
    })
});