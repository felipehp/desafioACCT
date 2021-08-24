/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {
    // Preenche o campo email válido
    preencheEmail() {
        cy.get(loginElements.campoEmail()).type('jojobaraimundo@gmail.com')
    }

    // Aciona o botão continuar na página do e-mail
    continuarEmail() {
        cy.get(loginElements.botãoContinuar()).click()
    }

    // Preenche o campo senha válida
    preencheSenha() {
        cy.get(loginElements.campoSenha()).type('Carrefour0102')
    }

    // Aciona o botão continuar na página da senha
    continuarSenha() {
        cy.get(loginElements.botãoContinuar()).click()
    }
  
}

export default LoginPage;