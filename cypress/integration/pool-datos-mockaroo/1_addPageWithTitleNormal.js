/// <reference types="cypress" />
let dato;
context('Actions', () => {
    before(function () {
        cy.clearCookies()
        cy.fixture('login_credentials').then(function (data) {
            this.data = data;
        })
        let mockarooApiKey = '467c1d80';
        let url = `https://my.api.mockaroo.com/miso_test_pruebas_automatizadas.json?key=${mockarooApiKey}`;
        (async function () {
            try {
                const response = await fetch(url);
                let  myJson = await response.json();
                dato = myJson[0]["title"];
            } catch (error) {
                console.log('That did not go well.')
                throw error
            }
        })().catch( e => { console.error(e) })
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
        cy.get('textarea[placeholder="Page Title"]').type(dato) 
        cy.get('div[data-kg="editor"]').click()
        cy.screenshot()
    })

    it('Check if new page appears on list', function () {
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(500)
        cy.screenshot()
    })
});