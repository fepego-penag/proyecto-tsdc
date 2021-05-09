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



describe("Change a role", () => {

    it("Changing role", () => {
        cy.contains('a', 'Staff')
            .first()
            .click({ force: true })
            .wait(3000)

        cy.contains('div', 'Photo of')
            .first()
            .click({ force: true })

        cy.get('#new-user-role')
            .select('Editor', { force: true })
            .should('have.value', '608f60ef706b3c0458a65e83')
            .wait(3000)

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
            .click({ force: true })
            .wait(3000)

        cy.contains('a', 'Staff')
            .first().click({ force: true })
            .wait(2000)

    })
});