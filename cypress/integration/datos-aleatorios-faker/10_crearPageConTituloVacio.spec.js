/// <reference types="cypress" />
const faker = require('faker');

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

    it('Select page administration"', function () {
        cy.contains('Pages').parent().find('a').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('click on button "New Page"', function () {
        cy.contains('New page').parent().find('a').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Fill form page title', function () {
        cy.get('textarea[placeholder="Page Title"]').click({force: true})
        cy.get('div[data-kg="editor"]').click()
        cy.screenshot()
    })
    it('Fill form page body', function () {
        cy.get('div[data-kg="editor"]').click({force: true})
        cy.get('div[data-kg="editor"]').type(faker.lorem.paragraph())
        cy.get('div[data-kg="editor"]').click()
        cy.screenshot()
    })

    it('Check if new page appears on list', function () {
        cy.visit('http://localhost:2369/ghost/#/pages')
        cy.wait(500)
        cy.screenshot()
    })
});