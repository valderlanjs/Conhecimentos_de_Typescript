// Evitar que o TS fique reclamando dos tipos.

//1 FROMA: tipos opcionais

function sendSpaceShip(spaceship: {pilot: string, copilot?: string}) {
    // ...
}

sendSpaceShip({ pilot: 'Han Solo', copilot: 'Chewbacca' })
// aqui ta dando erro porque falta o copilot. Então para parar de dá erro, 
//é só utilizar o ? para dizer que o copilot é opcional.

sendSpaceShip({ pilot: 'Luke'})

//2 FORMA: unknown, tipo desconhecido, ou seja, qualquer coisa que colocar ele vai aceitar.

let input: unknown

input = 'Olá'
input = 2
input = true
input = []

let text: string

//text = input // Já aqui ele não aceita por que o text é uma string e o input desconeciido, ou seja, não dá para saber se é string ou não.
//input = text // Aqui não dá erro por que o input é do tipo desconhecido, ou seja, por mais que o text seja uma string ele aceita.


//3 FORMA: any, qualquer coisa, ou seja, qualquer coisa que colocar ele vai aceitar.
// Aqui o typescript para de funcionar de qualquer forma.
//Quando utiliza o any, é como se fosse JS normal, porém deve-se evitar o uso do any.
let something: any

something = 'Olá'
something = 2
something = true


