/// <reference types="cypress" />

/* global Then, When, Given */
const OndeAceitaPage = require('../../pages/onde_aceita.page')

/* selecionar o button onde utilizar o cartão */
And('Seleciono o botão onde usar meu cartão', () => {
    OndeAceitaPage.clicarBotaoOndeUsarCartao()
})

/* validar a exibição do mapa de pesquisa */
Then('O sistema deve exibir o mapa para realizar a pesquisa', () => {
    OndeAceitaPage.validarExibicaMapaGoogle()
});