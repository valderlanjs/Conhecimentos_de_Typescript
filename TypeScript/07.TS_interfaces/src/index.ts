
// Utilizar principalmente interface para objetos.
// Muito semelhante ao type, mas com algumas diferenças.
interface CelestialBody {
    name: string;
    mass: number;
}

// Porém com a interface, consegue herdar propriedades de outras interfaces.
// Parace um pouco com as Classes.
interface Star extends CelestialBody {
    age: number;
    planets: Planet[];
}

interface Planet extends CelestialBody {
    population: number;
    createSatellite: (name: string) => void  // função
}

let sun: Star

sun.name = 'Sol';
sun.mass = 1.989e30;
sun.age = 4600000000;
sun.planets = [];


type Asteroid = CelestialBody & {
    size: number;
}

class MilkyWayPlanet implements Planet {
    name: string;
    mass: number;
    population: number;

    constructor(name: string, mass: number, population: number) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }

    createSatellite(name: string) {
        // ...
    }
}

// Assim dá para trabalhar com tipos até nas classes.
// Assim dá para criar a interface para trabalhar com API's.

