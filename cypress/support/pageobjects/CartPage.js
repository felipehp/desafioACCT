/// <reference types="Cypress" />

import CartElements from '../elements/CartElements'
const cartElements = new CartElements

class CartPage {
    // Verifica que há produtos no carrinho através da existência visível do botão "Limpar carrinho"
    validarApresentacaoBotaoEsvaziarCart() {
        cy.get(cartElements.esvaziarCarrinho()).should('be.visible')
    }

}

export default CartPage;