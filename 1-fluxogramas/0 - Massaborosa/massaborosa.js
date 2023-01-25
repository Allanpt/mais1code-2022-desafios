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
let opcao;
leia.question(`Olá, o que deseja? 

    1 - Ver cardápio
    2 - Adicionar pedido
    3 - Adicionar novos itens
    4 - Remover itens do cardápio
    5 - Ver lista de pedidos
    6 - Ver lista de funcionários
    7 - Adicionar novo funcionário
    8 - Remover funcionário
    9 - SAIR
    
    Digite um número: `, input => {

    opcao = Number(input);
    if (opcao == 1) {
        console.log()
        console.log(cardapio())
        return leia.close()
    } else if (opcao == 2) {
        console.log()
        console.log(adicionarPedido())
        return leia.close
    } else if (opcao == 3) {
        console.log()
        console.log(adicionarNovosItens())
        return leia.close
    }
})

const cardapio = () => {
    console.log(`Cardápio`)
    console.log()
    for(let i = 0; i < listaDoCardapio.length; i++) {
        console.log(listaDoCardapio[i])
    }
}

const adicionarNovosItens = () => {
    let item;
    leia.question("Qual item você deseja adicionar? ", input => {
        item = input;
        let itemComAPrimeiraLetraMaiuscula = `${item.charAt(0).toUpperCase}${item.substring(1)}`
        listaDoCardapio.push(itemComAPrimeiraLetraMaiuscula)
        return "Item adicionado"
    })
}

const removerItensCardapio = () => {

    let saborQueSeraExcluido;
    leia.question("Qual item você quer remover? ", input => {
        saborQueSeraExcluido = input;
        let saborQueSeraExcluidoEmMinusculo = saborQueSeraExcluido.toLowerCase()
        for (let i = 0; i < listaDoCardapio.length; i++) {
            if (saborQueSeraExcluidoEmMinusculo == listaDoCardapio[i].toLowerCase()) {
                delete listaDoCardapio[i]
                console.log()
                console.log(`O sabor de '${saborQueSeraExcluido}'foi removido com sucesso do cardápio`)
            }
        }
        leia.close()
    })
}

const adicionarPedido = () => {
    let sabor;
    let quantidade;
    console.log(`Cardápio`)
    console.log()
    for(let i = 0; i < listaDoCardapio.length; i++) {
        console.log(`${i+1} ${listaDoCardapio[i]}`)
    }
    console.log()
    leia.question(`Qual item você vai querer? 
    Digite um número: `, input =>{
        sabor = input
        leia.close()
    })
    

}
const verListaDePedidos = () => { }
const verListaDeFuncionarios = () => { }
const adicionarNovoFuncionarioNaLista = () => { }
const removerFuncionarioNaLista = () => { }





