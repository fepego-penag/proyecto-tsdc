/// <reference types="cypress" />
const correoPrueba = require("../data/email.json");
const descripcionPrueba = require("../data/dataParrafo.json");

var data;
context('Actions', () => {
    before(function () {
        cy.fixture('login_credentials').then(function (data) {
          this.data = data;
        })
      })

    it('Fill username & password then log in ', function(){
        cy.visit('http://localhost:2368/ghost/#/signin')
        let indice = new Number();
        let correoFake = new String();
        let descripcionFake = new String();
        indice = getRandom(1, 99);
        correoFake = correoPrueba[indice].correo;
        descripcionFake = descripcionPrueba[indice].parrafo
        cy.get('.email').type(descripcionFake)
        cy.get('.password').type(descripcionFake)
        cy.get('.login').click()
        
    })

    it('Review if error message appears', function() {
        cy.contains('Please fill out the form to sign in.')
        cy.screenshot()
    })
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}