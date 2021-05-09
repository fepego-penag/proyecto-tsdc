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
        cy.get('.email').type(this.data.username).debug()
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        cy.wait(500)
    })

    it('Select page administration and click on button "New Page"', function () {
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
    })

    it('click on button "New Page"', function () {
        cy.contains('New page').parent().find('a').click()
        cy.wait(500)
    })

    it('Fill form page title', function () {
        cy.get('textarea[placeholder="Page Title"]').type('Mi primera página')
        cy.wait(500)
    })

    it('Check if new page appears on list', function () {
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(500)
    })

});