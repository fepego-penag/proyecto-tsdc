/// <reference types="cypress" />
const correoPrueba = require("../data/email.json");
const nombrePrueba = require("../data/user.json");
const descripcionPrueba = require("../data/dataParrafo.json");
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
        let indice = new Number();
        let correoFake = new String();
        let descripcionFake = new String();
        let nombreFake = new String();
        let dataEspFake = new String();
        indice = getRandom(1, 99);
        correoFake = correoPrueba[indice].correo;
        descripcionFake = descripcionPrueba[indice].parrafo
        nombreFake = nombrePrueba[indice].login
        dataEspFake = dataEspPrueba[indice].data
        cy.get('textarea[placeholder="Page Title"]').type(dataEspFake,{force: true})
        cy.get('div[data-kg="editor"]').click()
        cy.screenshot()
    })
    it('Fill form page body', function () {
        let indice = new Number();
        let correoFake = new String();
        let descripcionFake = new String();
        let nombreFake = new String();
        let dataEspFake = new String();
        indice = getRandom(1, 99);
        correoFake = correoPrueba[indice].correo;
        descripcionFake = descripcionPrueba[indice].parrafo
        nombreFake = nombrePrueba[indice].login
        dataEspFake = dataEspPrueba[indice].data
        cy.get('div[data-kg="editor"]').click({force: true})
        cy.get('div[data-kg="editor"]').type(dataEspFake + correoFake)
        cy.get('div[data-kg="editor"]').click()
        cy.screenshot()
    })

    it('Check if new page appears on list', function () {
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.screenshot()
    })
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}