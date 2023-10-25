//Tipo de varaivel Boolean
const testeBoolean = true;

function numeroPar() {
    const numero = 11
    const numeroPar = (numero % 2) === 0 

    console.log(numeroPar)

    if (numeroPar) {
        console.log('Par')
    }
    else {
        console.log('Impar')
    }
}


function initialize() {

    numeroPar()

    if (testeBoolean) {
        return console.log('Teste verdadeiro')
    }
}

initialize()