/**
 * Tipos genéricos (ou Generics) são um recurso do TypeScript
 * que permite que um tipo seja passado como argumento para
 * um função ou classe. Isso é especialmente útil quando o 
 * tipo da entrada está diretamente relacionado ao tipo 
 * da saída, ou então os tipos de diferentes argumentos
 * está relacionado entre si de alguma forma. 
 */


function first(array) {
    return array[0];
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
    return array[array.length - 1];// aqui ele sabe que é um array de qualquer tipo
}

const pilots = ['Hamilton', 'Verstappen', 'Vettel', 'Bottas'];
//const number = [1, 2, 3, 4, 5];


const firstPilot = first(pilots); 

const lastPilot = last(pilots); // string
//const lastNumber = last(number); // number

// A função last ela sabe que se trata de um array de numero ou
// String, independente de qual seja, ela identifica o tipo e
// Tudo devido aos tipos genéricos


// EXEMPLO 2:


interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }


  
// Se não tiver o >ShipType< ele não vai saber que tipo de objeto.
  function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
 
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe') // por causa do <ShipType> ele retorna um fighter, caso contrario retornaria Ship

  