class PDPElements {
    //Campo para preencher o número do CEP
    campoCEP = () => { return '[type="tel"]' }

    //Botão Comprar
    botaoComprar = () => { return '.vtex-add-to-cart-button-0-x-buttonText' }

    //Elemento do footer
    telefone = () => { return 'a:contains(3004-2222)' }

  }
  
  export default PDPElements;