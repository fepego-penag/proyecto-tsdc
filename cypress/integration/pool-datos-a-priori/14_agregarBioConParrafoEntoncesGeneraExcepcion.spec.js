/// <reference types="cypress" />
const descripcionPrueba = require("../data/dataParrafo.json");

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

    it('In the dashboard select the tab "Staff and enter the user Ghost', function () {
        cy.contains('Staff').parent().find('a').click()
        cy.wait(500)
        cy.get('div [class="apps-grid"]').contains('Ghost').click()
        cy.wait(500)
        cy.screenshot()
    })

    it('Clean up the bio and write', function () {
        let indice = new Number();
        let descripcionFake = new String();
        indice = getRandom(1, 99);
        descripcionFake = descripcionPrueba[indice].parrafo
        cy.get('textarea[id="user-bio"]').clear()
        cy.get('textarea[id="user-bio"]').type(descripcionFake,{force: true})
        cy.wait(500)
        cy.screenshot()
    })

    it('We save the changes and return to the staff section', function () {
        cy.get('button').contains('Save').parent().find('span').click()
        cy.wait(500)
        cy.contains('Bio is too long')
        cy.screenshot()
    })

});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}