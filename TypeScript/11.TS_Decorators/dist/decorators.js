/*
Decorators são um tipo especial de declaração que pode ser
anexada a uma classe, método, propriedade, accessor ou
parâmetro. Ele utilizam o formato @expression, onde
expression é uma função que vai ser chamada na execução
com informações sobre a declaração decorada.Resumidamente,
com isso é possível acrescentar funcionalidades extras
aonde quer que o decorator seja inserido.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            console.log(`Calculando ${value} elevado ao quadrado`);
            return value * value;
        };
    };
}
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculando ${value} vezes 2.`);
        return value * 2;
    }
}
__decorate([
    Decorator()
], Planet.prototype, "calculate", null);
const planet = new Planet('Terra');
const result = planet.calculate(5);
console.log(`Resulta: ${result}`);
