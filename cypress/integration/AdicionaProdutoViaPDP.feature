Feature: Adiciona produto no carrinho via PDP

    Scenario: Adicionar produto no carrinho via PDP
        Given acesso uma página de produto
        When aciono o botão comprar
        Then sou direcionado para o carrinho com o produto adicionado