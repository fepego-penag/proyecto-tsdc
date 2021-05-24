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
        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.screenshot() 
        cy.get('.email').type(this.data.username).debug()
        cy.get('.password').type(this.data.password)
        cy.get('.login').click()
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    it('Select tag administration button and search and delete a tag', function() {
        cy.contains('Tags').parent().find('a').click()
        cy.screenshot() 
        cy.contains('Tag name Test').click()
        cy.get('#tag-name').type(' edited',{force: true})
        cy.get('#tag-slug').type(' edited',{force: true})
        cy.get('#tag-slug').clear({force: true})
        cy.get('#tag-slug').type('test edited',{force: true})
        cy.get('#tag-description').type(' edited',{force: true})
        cy.contains('Save').click()
        cy.visit('http://localhost:2369/ghost/#/tags')
        cy.screenshot() 
      })
      it('Check if new tag appears on list', function() {
        cy.contains('Tag name Test edited')
      })
})