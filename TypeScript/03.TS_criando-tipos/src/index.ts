// Tipo literal --  atribui literalmente o valor, não string, boolean, number
// ou seja, atribuir o valor exato

let literal: 'hello world'
let pi: 3.14159

// pi = 3.14158 // erro
// literal = 'hello' // erro

// ** por padrão qualquer variável const é um valor literal

// unindo com union types
// ou seja, pode ser um OU outro.
let option: 'yes' | 'no' | 'maybe'

option = 'no' // certo
option = 'yes' // certo

//  com isso dá para criar tipos mais personalizados

let qnt: number | string

qnt = 10 // certo
qnt = 'dez' // certo
// qnt = true // erro




// se quiser reutilizar um tipo, e criando tipos personalizados

type planet = 'earth' | 'mars' | 'jupiter' | 'saturn' | 'neptune'

let planet: planet

let homePlanet: planet

function checkPlanet(planet: planet) {
    if (planet === 'earth') {
        console.log('Estamos na Terra')
      }
}

// Ao consumir um API, dá para trabalahar com valores específicos.