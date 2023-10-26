//Biblioteca para prompt
const prompt = require('prompt-sync')
const prompt1 = prompt()

//Valor do etanol anidro 10/2023 - Referência: https://precos.petrobras.com.br/w/gasolina/sc#:~:text=3.,%24%202%2C44%20por%20litro.
const precoEtanol   = 2.44
const precoGasolina = 5.74

//Tipo de combustivel
const tipoCombustivel = [
    'gasolina',
    'etanol'
]

//Gasto médio de combustivel por KM
function mediaDoCliente(){
    let tipoCombustivelCliente = prompt1('Digite o tipo de combustivel do seu carro: ')
    let kmPorLitros            = prompt1('Quanto Km por Litro seu carro faz ?')
    let distanciaEmKm          = prompt1('Qual a distancia da viagem?: ')

    if(tipoCombustivelCliente.toLowerCase() === tipoCombustivel[0])  {
        console.log('1')
        let litrosConsulmidos = distanciaEmKm / parseInt(kmPorLitros)
        let valorGasto = litrosConsulmidos * precoGasolina
        console.log(`A média de combustivel que você ira gastar com ${tipoCombustivelCliente} é de: R$${valorGasto}`)
    } else if (tipoCombustivelCliente.toLowerCase() === tipoCombustivel[1]) {
        console.log('2')
        let litrosConsulmidos = distanciaEmKm / parseInt(kmPorLitros)
        let valorGasto = litrosConsulmidos * precoEtanol
        console.log(`A média de combustivel que você ira gastar com ${tipoCombustivelCliente} é de: R$${valorGasto}`)
    } else {
        console.log('Dados invalidos...')
    }
}

function ini() {
    console.log('-- Calculadora de viagens ---')
    console.log(`Valores dos combustiveis: \n Gasolina: ${precoGasolina}\n Etanol: ${precoEtanol}`)
    mediaDoCliente()
}

ini()

// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustivel que esta no seu carro;
// 4 - Gasto médio de combustivel do carro por KM;
// 5 - Distância em KM da viagem;
// Imprima no console o valor que sera gasto para realizar esta viagem