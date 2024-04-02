//criando tipo
type planetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

//Tupla
type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: planetSituation,
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: planetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi registrado com sucesso!`)
}


function findPlanet(name: string) {
    const planet = planets.find(planet => planet.name === name) //find retorna o primeiro elemento que satisfaz a condição

    return planet ?? false // se planet for undefined, retorna false
}

function updateSituation(situation: planetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualiada para ${situation}.`)

}

function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`)
}

function promptValidSituation() {
    let situation: planetSituation
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado")

        switch (situationInput) {
            case "1": 
                situation = 'Habitado'
                validSituation = true
                break;
            case "2":
                situation = 'Habitável'
                validSituation = true
                break;
            case "3":
                situation = 'Inabitável'
                validSituation = true
                break;
            case "4":
                situation = 'Inexplorado'
                validSituation = true
                break;
            default:
                alert("Opção inválida, tente novamente.")
                break;
        }
    }

    return situation
}

function promptValidPlanet(callbackfn: (planet: Planet) => void) {
    const planetName = prompt("Informe o nome do planeta:")
    const planet = findPlanet(planetName)

    if (planet) {
        callbackfn(planet)
    } else {
        alert("Planta não encontrado! Retornando ao menu...")
    }
}

// Opções do Menu

// Opções do Menu

function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))
  
    // Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation()
  
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)
  
    if (confirmation) {
      addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }
  }

  function secondMenuOption() {
    // Além disso temos acesso automático às informações
    // dos argumentos, nesse caso a variável planet
    promptValidPlanet(planet => {
      const situation = promptValidSituation()
      updateSituation(situation, planet)
    })
  }
  
  function thirdMenuOption() {
    promptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser adicionado:')
      addSatellite(satellite, planet)
    })
  }
  
  function fourthMenuOption() {
    promptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser removido:')
      removeSatellite(satellite, planet)
    })
  }

  function fifthMenuOption() {
    let list = 'Planetas:\n'
  
    planets.forEach(planet => {
      // Repare que as tuplas são uma forma fácil de permitir a
      // desestruturação com qualquer nome nas variáveis.
      // As variáveis a seguir podem ter qualquer nome pois a
      // tupla segue um padrão fixo.
      const [a, b, c, d] = planet.coordinates
  
      list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satélites: ${planet.satellites.length}
      `
  
      planet.satellites.forEach(satellite => {
        list += `    - ${satellite}\n`
      })
    })
  
    alert(list)
  }

  