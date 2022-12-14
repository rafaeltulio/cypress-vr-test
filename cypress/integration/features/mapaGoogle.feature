Feature: Validar exibição 

    Eu como usuário do cartão VR desejo acessar o mapa para pesquisar uma localidade onde possa utilizar meu cartão

    Scenario: Validar a exibição do mapa do Google para pesquisa de onde usar
        Given Estou navegando no site vr
        When navegar até a página para você
        And Seleciono o botão onde usar meu cartão
        Then O sistema deve exibir o mapa para realizar a pesquisa
    
    Scenario: Validar a exibição do mapa do Google para pesquisa de onde usar, acessando pelo menu
        Given Estou navegando no site vr
        When Clico no menu para você
        And Seleciono o botão onde usar meu cartão
        Then O sistema deve exibir o mapa para realizar a pesquisa