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
        cy.get('.email').type(this.data.username).debug()
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('In the dashboard select the tab "Staff and enter the user Ghost', function () {
        cy.contains('Staff').parent().find('a').click()
        cy.wait(500)
        cy.get('div [class="apps-grid"]').contains('Ghost').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Clean up the bio and write', function () {
        cy.get('textarea[id="user-bio"]').clear()
        cy.get('textarea[id="user-bio"]').click({force: true})
        cy.wait(500)
        cy.screenshot()
    })

    it('We save the changes and return to the staff section', function () {
        cy.get('button').contains('Save').parent().find('span').click()
        cy.wait(500)
        cy.contains('Staff').parent().find('a').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Re-enter the Ghost user to verify the changes in the biography', function () {
        cy.get('div [class="apps-grid"]').contains('Ghost').click()
        cy.wait(500)
        cy.get('textarea[id="user-bio"]').click({force:true})
        cy.screenshot()
    })
});