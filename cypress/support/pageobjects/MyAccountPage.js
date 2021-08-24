/// <reference types="Cypress" />

import MyAccountElements from '../elements/myAccountElements'
const myAccountElements = new MyAccountElements

class MyAccountPage {
    // Validando nome no My Account
    validandoNomeMyAccount() {
        cy.get(myAccountElements.campoNome).should('contain', 'Raimundo')
    }
  
}

export default MyAccountPage;