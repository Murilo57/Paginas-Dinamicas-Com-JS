//Tipo de varaivel Boolean
const testeBoolean = true;

function numeroPar() {
    const numero = 10
    const numeroPar = (numero % 2) === 0 

    console.log(numeroPar)
}

function initialize() {

    numeroPar()

    if (testeBoolean) {
        return console.log('Teste verdadeiro')
    }
}

initialize()