/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import MyAccountPage from '../pageobjects/MyAccountPage'

const homePage = new HomePage
const loginPage = new LoginPage
const myAccountPage = new MyAccountPage

Given("acesso o site Carrefour", () => {
    homePage.acessarSite()
})

When("acesso a pagina de login", () => {
    homePage.clicarBotaoPaginaLogin()
})

And("preencho o campo de email e prossigo", () => {
    loginPage.preencheEmail()
    loginPage.continuarEmail()
})

And("preencho o campo de senha e confirmo", () => {
    loginPage.preencheSenha()
    loginPage.continuarSenha()
})

Then("identifico que o usuário foi autenticado com sucesso", () => {
    homePage.visualizarUsuarioAutenticado()
    homePage.acessarMyAccount()
    myAccountPage.validandoNomeMyAccount()
})