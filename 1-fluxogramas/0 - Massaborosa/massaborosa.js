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
    2 - Adicionar pedidos
    3 - Adicionar novos itens
    4 - Remover itens do cardápio
    5 - Ver lista de pedidos
    6 - Ver lista de funcionários
    7 - Adicionar novo funcionário
    8 - Remover funcionário
    
    `, input => {
    
    opcao = Number(input);
    if(opcao == 1) {
        console.log()
        console.log(cardapio())
        return leia.close()
    } else if (opcao == 2){
        console.log()
        console.log(adicionarPedidos())
        return leia.close
    } else if (opcao == 3){
        console.log()
         console.log(dicionarNovosItens())
         return leia.close
    }
})

const cardapio = () => {
    return listaDoCardapio
}

const adicionarNovosItens = () => {
    let item;
    leia.question("Qual item você deseja adicionar? ", input =>{
        item = input;
        let itemComAPrimeiraLetraMaiuscula = `${item.charAt(0).toLowerCase}${item.substring(1)}`    
        listaDoCardapio.push(itemComAPrimeiraLetraMaiuscula)
        return "Item adicionado"
    })
    listaDoCardapio.push()
    return "Item adicionado"
}

const removerItensCardapio = () => {
    
    let saborQueSeraExcluido;
    leia.question("Qual item você quer remover? ", input => {
        saborQueSeraExcluido = input;
        let saborQueSeraExcluidoEmMinusculo = saborQueSeraExcluido.toLowerCase()
        for(let i = 0; i < listaDoCardapio.length; i++){
            if(saborQueSeraExcluidoEmMinusculo == listaDoCardapio[i].toLowerCase()){
                delete listaDoCardapio[i]
                console.log()
                console.log(`O sabor de '${saborQueSeraExcluido}'foi removido com sucesso do cardápio`)
            }
        }
        leia.close()
    })
}

const adicionarPedidos = () => { 
    let sabor;
    let quantidade;
    
}
const verListaDePedidos = () => { }
const verListaDeFuncionarios = () => { }
const adicionarNovoFuncionarioNaLista = () => { }
const removerFuncionarioNaLista = () => { }



