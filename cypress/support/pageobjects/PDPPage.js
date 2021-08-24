/// <reference types="Cypress" />

import PDPElements from '../elements/PDPElements'
const pdpElements = new PDPElements
const pdpURL = Cypress.config("PDPURL")

class PDPPage {
    // Acessa a PDP
    acessoPDP() {
        cy.visit(pdpURL)
    }
    
    // Preenchendo o CEP
    PreenchendoCEP() {
        cy.get(pdpElements.campoCEP()).type('72880542')
    }

    // Validando a apresentação do resultado da consulta de frete para o CEP
    validandoRetornoFrete() {
       cy.xpath('//table[@class="w-100"]').should('be.visible')
    }

    // Acionando o botão comprar
    AcionandoBotaoComprar() {
        //ATENÇÃO: a mesma página possui dois botões comprar com exatamente os mesmos elementos
        //Dessa forma, para colocar o produto no carrinho foi preciso clicar nos dois botões, duplicando o produto
        //Nem mesmo com Xpath conseguir selecionar apenas um botão =( Help!
        //PS: O scrolto'Botom' é para forçar o botão flutuante ficar vísivel, pois mesmo com o force:true
        //O Cypress não estava conseguindo clicar no botão
        cy.get(pdpElements.telefone()).should('exist')
        cy.scrollTo('bottom')
        cy.get(pdpElements.botaoComprar()).click({ multiple: true },{ force: true })
    }
  
}

export default PDPPage;