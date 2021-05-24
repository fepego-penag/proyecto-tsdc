/// <reference types="cypress" />
const dataEspPrueba = require("../data/dataEspecial.json");

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
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        cy.screenshot()
    })
});

describe("Create post", () => {
    it("Creating post", () => {
        let indice = new Number();
        let dataEspFake = new String();
        indice = getRandom(1, 99);
        dataEspFake = dataEspPrueba[indice].data
        cy.get('#ember28')
            .click()
            cy.wait(2000)
        cy.screenshot()           
        
        cy.contains('New post')
            .click({ force: true })
        cy.screenshot()
        
            cy.hash()
            .should('include', '#/editor/post')

        cy.get('textarea[placeholder="Post Title"]')
            .type(dataEspFake, { timeout: 40000 })
        cy.screenshot()
        
        cy.get('[data-placeholder="Begin writing your post..."]')
            .should('be.visible')
            .type(dataEspFake)
        cy.screenshot()
        
        cy.url()
            .should('include', 'post')

        cy.visit('http://localhost:2368/ghost/#/posts')
            .wait(4000)
        cy.screenshot()
        })
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}