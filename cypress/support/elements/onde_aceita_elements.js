export default class OndeAceitaElements {
    
    static btnUsarCartao(){
      return cy.get('.vr-hero__actions > .vr-button--negative')
    }
    
    static modalMapaGoogle(){
        return cy.get('#buscarResultados')
    }


}