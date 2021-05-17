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
        cy.screenshot()
    })

    it('Select page administration', function () {
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('click on button "New Page", fill form page title and check if new page appears on list', function () {
        cy.contains('New page').parent().find('a').click()
        cy.get('textarea[placeholder="Page Title"]').type('Mi cuarta página')
        cy.get('div[data-kg="editor"]').click()
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(500)
        cy.screenshot()
    })

    it('Search the page "Mi cuarta página", select page and click on menu "Settings"', function () {
        cy.get('a[title="Edit this post"]').contains('Mi cuarta página').click()
        cy.get('button[title="Settings"]').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Scroll down to the bottom and select "Delete Page"', function () {
        cy.get('button').contains('Delete').parent().find('span').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Confirm the pop-up message by clicking on the "Delete" option', function () {
        cy.get('div[class="modal-footer"]').contains('Delete').click({force:true})
        cy.wait(500)
        cy.screenshot()
    })

    it('Check if new page appears on list', function () {
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(500)
        cy.screenshot()
    })
});