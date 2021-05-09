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

    it('Select page administration', function () {
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
    })

    it('click on button "New Page", fill form page title and check if new page appears on list', function () {
        cy.contains('New page').parent().find('a').click()
        cy.get('textarea[placeholder="Page Title"]').type('Mi segunda página')
        cy.get('article').type("co")
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(500)
    })

    it('Search the page "Mi segunda página" and select', function () {
        cy.get('a[title="Edit this post"]').contains('Mi segunda página').click()
        cy.wait(500)
    })

    it('Clear title and Update title of "Modificando mi primer página"', function () {
        cy.get('textarea[placeholder="Page Title"]').clear()
        cy.get('textarea[placeholder="Page Title"]').type('Modificando mi primer página')
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
    })

    it('Check if new page appears on list', function () {
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
    })
});