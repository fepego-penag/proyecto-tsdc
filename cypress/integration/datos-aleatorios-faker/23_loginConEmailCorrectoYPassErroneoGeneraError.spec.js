/// <reference types="cypress" />
const faker = require('faker');

var data;
context('Actions', () => {
    before(function () {
        cy.fixture('login_credentials').then(function (data) {
          this.data = data;
        })
      })

    it('Fill username & password then log in ', function(){
        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(faker.lorem.paragraph())
        cy.get('.login').click()
        
    })

    it('Review if error message appears', function() {
        cy.contains('Your password is incorrect.')
        cy.screenshot()
    })
});