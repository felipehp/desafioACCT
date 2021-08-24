Feature: Calcular frete de produto carrefour

    Scenario: Calcular Frete
        Given acesso uma página de produto
        When preencho os dados de calculo de frete
        Then o site me apresenta os valores de frete