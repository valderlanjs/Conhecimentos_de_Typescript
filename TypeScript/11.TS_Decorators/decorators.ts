/*
Decorators são um tipo especial de declaração que pode ser
anexada a uma classe, método, propriedade, accessor ou
parâmetro. Ele utilizam o formato @expression, onde
expression é uma função que vai ser chamada na execução
com informações sobre a declaração decorada.Resumidamente,
com isso é possível acrescentar funcionalidades extras
aonde quer que o decorator seja inserido.  
 */


function Decorator() {
    return function(target, key, descriptor) {
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado ao quadrado`)
            return value * value
        }
    }
}

class Planet {
    name: string


    constructor( name: string ) {
        this.name = name
    }

    @Decorator()
    calculate(value: number) {
        // ...
        console.log(`Calculando ${value} vezes 2.`)
        return value * 2
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`Resulta: ${result}`)