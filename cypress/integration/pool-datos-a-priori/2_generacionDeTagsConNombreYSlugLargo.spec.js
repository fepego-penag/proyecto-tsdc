/// <reference types="cypress" />
const correoPrueba = require("../data/email.json");
const nombrePrueba = require("../data/user.json");
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
        cy.screenshot() 
        cy.get('.email').type(this.data.username).debug()
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    it('Select tag administration button and open tag creation', function() {
      cy.contains('Tags').parent().find('a').click()
      cy.screenshot() 
      cy.contains('New tag').parent().find('a').click()
    })
    it('Fill form tag info', function (){
      cy.screenshot() 

      let indice = new Number();
      let correoFake = new String();
      let descripcionFake = new String();
      let nombreFake = new String();
      indice = getRandom(1, 99);
      correoFake = correoPrueba[indice].correo;
      descripcionFake = descripcionPrueba[indice].parrafo
      nombreFake = nombrePrueba[indice].login

      cy.get('#tag-name').type(nombreFake,{force: true})
      cy.get('#tag-slug').type(nombreFake,{force: true})
      cy.get('#tag-slug').clear({force: true})
      cy.get('#tag-slug').type(descripcionFake,{force: true})
      cy.get('#tag-description').type(descripcionFake,{force: true})
      cy.contains('Save').click()
      cy.visit('http://localhost:2368/ghost/#/tags')
    })
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}