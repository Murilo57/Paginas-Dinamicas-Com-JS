const prompt1 = require('prompt-sync')
const prompt = prompt1()

function calculoIMC() {
    let peso = prompt('Digite seu peso: ')
    let altura = prompt('Digite sua altura: ')

    let IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        console.log(`Seu IMC é de: ${IMC.toFixed(1)} isso significa que você esta abaixo do peso!`)
    } else if (IMC > 18.5 && IMC < 25) {
        console.log(`Seu IMC é de: ${IMC.toFixed(1)} isso significa que você esta com o peso normal!`)
    } else if (IMC > 25.5 && IMC < 30) {
        console.log(`Seu IMC é de: ${IMC.toFixed(1)} isso significa que você esta acima do peso!`)
    } else if (IMC > 30 && IMC < 40) {
        console.log(`Seu IMC é de: ${IMC.toFixed(1)} isso significa que você esta obeso!`)
    } else if (IMC > 40) {
        console.log(`Seu IMC é de: ${IMC.toFixed(1)} isso significa que você esta com obesidade grave!`)
    }
}

function initialize() {
    calculoIMC()
}

initialize()

// 2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar a indicação sobre a condição de peso de uma pessoa adulta

// Formula do IMC:
// IMC = peso / altura 

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos, condição:
// - Abaixo de 18.5, abaixo do peso;
// - Entre 18.5 e 25, peso normal;
// - Entre 25 e 30, acima do peso;
// - Entre 30 e 40, obeso;
// - Acima de 40, obesidade grave;