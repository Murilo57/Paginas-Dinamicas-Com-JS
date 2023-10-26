//Exercicio para utilizar e exercitar Else if

const numero = 12;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O numero é invalido')
} else if (numeroDivisivelPor5) {
    console.log('Sim')
} else {
    console.log('Não')
} 