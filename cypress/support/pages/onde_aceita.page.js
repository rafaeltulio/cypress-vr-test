const OndeAceitaElements = require('../elements/onde_aceita_elements')

/** classe para navegar metodos da página Onde aceita */
export default class OndeAceitaPage {

    static clicarBotaoOndeUsarCartao(){
    return OndeAceitaElements.btnUsarCartao()
            .click()
    }

    static validarExibicaMapaGoogle(){
    return OndeAceitaElements.modalMapaGoogle()
            .should('be.visible')
            .should("have.text","Buscar")
    }
}