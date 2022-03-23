function  imprimirDados(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

//Passando a função de callback dentro da função imprimir dados
imprimirDados( function() {
    return 'Olá mundo'
})