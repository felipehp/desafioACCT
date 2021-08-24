/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(homeElements.botaoLogin()).click()
    }

    // Verifica se o usuário está autenticado na home
    visualizarUsuarioAutenticado() {
        cy.get(homeElements.campoNomeAutenticado()).should('be.visible')
    }

    // Acessa o My Account
    acessarMyAccount() {
        cy.xpath('//div[starts-with(text(),"Meu Cadastro")]').click({ force: true })
    }

}

export default HomePage;