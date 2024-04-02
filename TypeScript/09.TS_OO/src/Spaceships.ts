class Spaceship {
  // primeira diferença, não é necessário declarar os atributos no contructor
  // niveis de encapsulamento: public, private, protected
  // public pode ser acessado de qualquer lugar
  // private só pode ser acessado dentro da classe
  // protected pode ser acessado dentro da classe e de suas subclasses


    private name
    protected captain
    protected speed

    constructor(name, captain) {
      this.name = name
      this.captain = captain
      this.speed = 0
    }
  
    public accelerate(rate, time) {
      this.speed = rate * time
    }
  }
  
  class Fighter extends Spaceship {
    weapons

    constructor(name, captain, weapons) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
      // this.name = '' //  dá eero porque ela só é acessivel na classe Spaceship
      this.captain = ''
      this.speed = 0 // funciona por que fighter é uma subclasse de spaceship
    }
  }
  
  let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  

  ship.accelerate(50, 10)