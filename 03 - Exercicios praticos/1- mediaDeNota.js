const prompt = require('prompt-sync')
const prompt1 = prompt()

function calculaMedia() {
    let nota1 = prompt1('Digite a primeira nota: ')
    let nota2 = prompt1('Digite a segunda nota: ')
    let nota3 = prompt1('Digite a terceira nota: ')

    let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3

    console.log(`A sua média foi de: ${media.toFixed(2)}. Situação: `)
    if (media < 5) {
        console.log('Reprovado')
    } else if (media > 5 && media < 7) {
        console.log('Recuperação')
    } else {
        console.log('Aprovado')
    }
}

function initialize() {
    calculaMedia()
}

initialize()

// 1) Faça um algoritmo que dados as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Media = (nota 1 + nota 2 + nota 3) / 3

// Classificação:
//  - Média menor que 5, reprovação;
//  - Média entre 5 e 7, recuperação;
//  - Média acima de 7, passou de semestre;