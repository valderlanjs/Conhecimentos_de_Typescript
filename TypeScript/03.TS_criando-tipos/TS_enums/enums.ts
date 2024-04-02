// enums conjunto de constantes.

/*

O que são Enums?

- Conjunto de constantes que recebem nomes.
- Facilita o trabalho com valores no código.
- Não existe nativamente no JavaScript.
- Recursos exclusivo do TypeScript.


- Por padrão, valores numéricos incrementais (0, 1, 2, 3...).
- Pode customizar para começar em outro número.
- Pode usar strings ao invés de números.


* Utilidades:

- Legibilidade do código.
- Referenciar valores facilmente.
- Evita precisar memorizar números mágicos.
*/

//Salvar tipo de planeta no banco de dados.
enum Planets {
    MERCURY,  
    VENUS,   
    EARTH,  
    MARS   
}

Planets.EARTH


//Definir perfis de usuário (admin, user etc.).
enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}

Roles.ADMIN