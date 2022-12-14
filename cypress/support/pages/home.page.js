const HomeElements = require('../elements/home.elements')

/** classe para navegar metodos da página home */
export default class HomePage {

    static acessarSite(){
        cy.viewport(1920, 1080)
        cy.visit('/')
    }

    static navegarMenuParaVoce(){
        return cy.visit('/onde-aceita.htm')
    }

    static clicarMenuParaVoce(){
        HomeElements.navigationParaVoce()
            .click()
            .url()
            .should('include','/onde-aceita.htm')
    }
}