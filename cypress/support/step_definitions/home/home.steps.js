/// <reference types="cypress" />

/* global Then, When, Given */
const HomePage = require('../../pages/home.page')

/* acessando a tela do site */
Given('Estou navegando no site vr', () => {
    HomePage.acessarSite()
 })

/* navegar até a página onde-aceite */
 When('navegar até a página para você', () => {
    HomePage.navegarMenuParaVoce()
 
})

/* navegar até a página onde-aceite */
When('Clico no menu para você', () => {
    HomePage.clicarMenuParaVoce()
})

