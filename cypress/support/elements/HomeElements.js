class HomeElements {
    //Elemento que leva até a tela de login
    botaoLogin = () => { return 'a:contains(Bem-vindo)' }
  
    //Elemento que carrega o nome do usuário autenticado
    campoNomeAutenticado = () => { return 'a:contains(Raimundo)' }

    //Elemento que leva até o My Account
    myAccount = () => { return '.vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--login-header-my-profile flex justify-between nowrap' }

  }
  
  export default HomeElements;