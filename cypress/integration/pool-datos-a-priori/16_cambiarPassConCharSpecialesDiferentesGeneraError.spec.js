/// <reference types="cypress" />
const correoPrueba = require("../data/email.json");
const nombrePrueba = require("../data/user.json");
const dataEspPrueba = require("../data/dataEspecial.json");
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

    it('Fill username & password then log in ', function(){
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    it('Select staff administration button and open Ghost user ', function() {
        cy.get('.gh-nav-top').contains('Staff').click()
        cy.get('div [class="apps-grid"]').contains('Ghost').click()
      })
    it('Fill and apply new password changes then click on submit - change Pass', function() {
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
        cy.get('#user-password-new').type(nombreFake)
        cy.get('#user-new-password-verification').type(dataEspFake)
        cy.contains('Change Password').click()
        cy.contains('Your new passwords do not match')
    })
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}