/// <reference types="cypress" />
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
      //cy.get('div [id="ember82"]').contains('name').type('Net Tag Test')
      //cy.contains('name').parent().find('input').type('Net Tag Test')
    })
    it('Fill form tag info', function (){
      cy.screenshot() 
      cy.get('#tag-name').type('#Tag name Test',{force: true})
      cy.get('#tag-slug').type('test',{force: true})
      cy.get('#tag-slug').clear({force: true})
      cy.get('#tag-slug').type('test',{force: true})
      cy.get('#tag-description').type('internal testing the description field',{force: true})
      cy.contains('Save').click()
      cy.visit('http://localhost:2368/ghost/#/tags')
    })
    it('Check if new tag appears on list', function() {
      cy.contains('Internal tags').click()
      cy.screenshot() 
      cy.contains('#Tag name Test')
    })

});