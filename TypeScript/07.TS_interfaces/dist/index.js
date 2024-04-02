let sun;
sun.name = 'Sol';
sun.mass = 1.989e30;
sun.age = 4600000000;
sun.planets = [];
class MilkyWayPlanet {
    name;
    mass;
    population;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        // ...
    }
}
// Assim dá para trabalhar com tipos até nas classes.
// Assim dá para criar a interface para trabalhar com API's.
