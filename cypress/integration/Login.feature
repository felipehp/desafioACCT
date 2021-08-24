Feature: Login site Carrefour

    Scenario: Realizar Login
        Given acesso o site Carrefour
        When acesso a pagina de login
        And preencho o campo de email e prossigo
        And preencho o campo de senha e confirmo
        Then identifico que o usuário foi autenticado com sucesso