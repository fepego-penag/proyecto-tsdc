/// <reference types="cypress" />
var data;
context('Actions', ()=> {
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
          cy.get('.email').type(this.data.username).debug()
          cy.get('.password').type(this.data.password)
          cy.get('.login').click()
          Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    it('Select tag administration button and search and delete a tag', function() {
        cy.contains('Tags').parent().find('a').click()
        cy.contains('Tag name Test').click()
        cy.contains('Delete tag').click()
        cy.wait(1000)
        cy.get('.modal-content').contains('Delete').click({force: true})
        cy.get('Tag name Test').should('not.exist');
      })
})