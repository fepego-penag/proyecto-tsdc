/// <reference types="cypress" />
var data;
context('Actions', () => {
    before(function () {
        cy.fixture('login_credentials').then(function (data) {
          this.data = data;
        })
      })
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
    })

    it('Fill username & password then log in ', function(){
        cy.get('.email').type(this.data.username)
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
    })
});