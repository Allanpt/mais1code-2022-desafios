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
let opcao;
let sabor = []
let quantidade = []
let pedido = []
let funcionarios = []
let listaDoCardapio = ["Calabresa", "Portuguesa", "Mussarela", "Frango", "Atum"]

let leia = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    } else if (opcao == 4) {
        console.log()
        console.log(removerItensCardapio())
        return leia.close
    }  else if (opcao == 5) {
        console.log()
        console.log(verListaDePedidos())
        return leia.close
    } else if (opcao == 6) {
        console.log()
        console.log(verListaDeFuncionarios())
        return leia.close 
    } else if (opcao == 7) {
        console.log()
        console.log(adicionarNovoFuncionarioNaLista())
        return leia.close
    } else if (opcao == 8) {
        console.log()
        console.log(removerFuncionarioNaLista())
        return leia.close
    }
})

const cardapio = () => {
    console.log(`Cardápio`)
    console.log()
    for (let i = 0; i < listaDoCardapio.length; i++) {
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
    console.log(`Cardápio`)
    console.log()
    for (let i = 0; i < listaDoCardapio.length; i++) {
        console.log(`${i + 1} ${listaDoCardapio[i]}`)
    }
    console.log()
    leia.question(`Qual item você vai querer? 
    Digite um número: `, input => {
        sabor.push(Number(input) - 1)

        console.log()
        leia.question(`Quantidade?: `, input => {
            quantidade.push(Number(input))
            leia.close()

            pedido.push(`Pedido ${pedido.length + 1}`)
            console.log(`Pedido Adicionado com sucesso`)

        })
    })




}

const verListaDePedidos = () => {
    for (let i = 0; i < pedido.length; i++) {
        console.log(`${pedido[i]}
        Sabor: ${sabor[i]}
        Quantidade: ${quantidade[i]}`)
        console.log()
        
    }
}

const verListaDeFuncionarios = () => {
    console.log(`Funcionários:`)
    console.log()
    for(let i = 0; i < funcionarios.length; i++){
        console.log(`${funcionarios[i]}`)
    }
    leia.close()
 }
const adicionarNovoFuncionarioNaLista = () => {
    leia.question(`Qual funcionário você quer adicionar?
    Digite o nome: `, input =>{
        funcionarios.push(String(input))
        console.log(`Novo funcionário adicionado com sucesso`)
        leia.close()
    })
 }
const removerFuncionarioNaLista = () => {
    let funcionarioQueSeraExcluido;
    leia.question("Qual funcionário você quer remover? ", input => {
        funcionarioQueSeraExcluido = input;
        let funcionarioQueSeraExcluidoEmMinusculo = funcionarioQueSeraExcluido.toLowerCase()
        for (let i = 0; i < funcionarios.length; i++) {
            if (funcionarioQueSeraExcluidoEmMinusculo == funcionarios[i].toLowerCase()) {
                delete funcionarios[i]
                console.log()
                console.log(`O funcionário '${funcionarioQueSeraExcluido}'foi desligado com sucesso`)
            }
        }
        console.log(verListaDeFuncionarios())
        leia.close()
    })
 }





