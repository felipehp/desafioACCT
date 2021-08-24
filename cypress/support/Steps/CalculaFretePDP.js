/* global Given, Then, When */

import PdpPage from '../pageobjects/PDPPage'

const pdpPage = new PdpPage

Given("acesso uma página de produto", () => {
    pdpPage.acessoPDP();
})

When("preencho os dados de calculo de frete", () => {
    pdpPage.PreenchendoCEP();
})

Then("o site me apresenta os valores de frete", () => {
    pdpPage.validandoRetornoFrete();
})