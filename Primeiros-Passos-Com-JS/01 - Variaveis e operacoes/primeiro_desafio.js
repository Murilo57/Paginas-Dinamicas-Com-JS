/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
    1- Preço de combustivel
    2 - Gasto médio de combustivel do carro por KM
    3 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/

//Variaveis de entrada 
const precoCombustivel = 5.79;
const kmPorLitros      = 10;
const distanciaEmKm   = 100;

const litrosConsulmidos = distanciaEmKm / kmPorLitros

let valorGasto = litrosConsulmidos * precoCombustivel

console.log(`Seu carro gasta uma média de `+litrosConsulmidos)
console.log(valorGasto.toFixed(2))
                //O metodo .toFixed(2) ira fixar 2 casas decimais 

