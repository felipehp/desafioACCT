import PdpPage from '../pageobjects/PDPPage'
import CartPage from '../pageobjects/CartPage'

const pdpPage = new PdpPage
const cartPage = new CartPage

Given("acesso uma página de produto", () => {
    pdpPage.acessoPDP()
})

When("aciono o botão comprar", () => {
    pdpPage.AcionandoBotaoComprar()
})

Then("sou direcionado para o carrinho com o produto adicionado", () => {
    cartPage.validarApresentacaoBotaoEsvaziarCart()
})

