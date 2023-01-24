/*
Pizzaria Massaborosa

Como funcionário da Pizzaria,
Quero poder ter acesso ao cardápio online.
Quero poder adicionar novos Itens ao cardápio.
Quero poder remover itens do cardápio.
Quero poder adicionar pedidos realizados.
Quero poder ver a lista de todos os pedidos.
Quero poder ver a lista de funcionários.
Quero poder adicionar um novo funcionário a lista de funcionários.
Quero poder remover um funcionário da lista de funcionários.
*/
let listaDoCardapio = ["Calabresa", "Portuguesa", "Mussarela", "Frango", "Atum"]
let leia = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const cardapio = () => {

    return listaDoCardapio
}
const adicionarNovosItens = (item) => {
    listaDoCardapio.push(item)
    return "Item adicionado"
}
const removerItensCardapio = () => {
    
    let saborQueSeraExcluido;
    leia.question("Qual item você quer remover? ", input => {
        saborQueSeraExcluido = input;
        console.log(typeof saborQueSeraExcluido)
        leia.close()

    

    })
}
const adicionarPedidos = () => { }
const verListaDePedidos = () => { }
const verListaDeFuncionarios = () => { }
const adicionarNovoFuncionarioNaLista = () => { }
const removerFuncionarioNaLista = () => { }

console.log(cardapio())
console.log(adicionarNovosItens("Bauru"))
console.log(removerItensCardapio())
