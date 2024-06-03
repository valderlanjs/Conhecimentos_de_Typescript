**** O que é TypeScript?

- TypeScript é JavaScript com sintaxe para tipos.

- É uma lingagem de programação.

- É um superset de JavaScript, ou seja, é uma linguagem construída "em cima" do JavaScript. Ele posso todo o conteúdo que tem no JavaScript e outras coisas a mais, possui recursos extras, recursos que não encontra no JavaScript convencional.

- Todo código JavaScript válido é um código TypeScript válido.
(Se eu tiver um arquivo escrito todo em JS do início ao fim e tratar ele como arquivo TS, ele funciona sem nenhum problema.)
A relação dos dois pode ser vista como semelhante a do CSS e o SCSS. 

- É uma linguagem fortemente tipada.


**** Por que usar?

1.  Aumenta muito a produtividade, isso porque os recursos que o TS possui permite que a IDE consiga entebder muito melhor o código, a partir dos recursos do TS a IDE consegue inferir os tipos as variáveis fazendo coisas que parece que está "muito mais inteligente", apontando erros e mostrando opções com autocomplete.

2. Permite identificar erros em tempo de complilação ao invés de em tempo de execução.

3. Curva de aprendizado é muito reduzida, visto que ele usa a sintaxe do JavaScript e é possivel adotar o TypeScript de forma parcial e gradativa.

4. Traz recursos extrar que não existem nativamente no JavaScript, como tuplas, enums, melhor suporte à POO.

**** Quando usar?

- TypeScript é especialmente vantajoso em projetos grandes.

- Por que um superset do JavaVScript é importante já tenha um bom conhecimento deste.

- Mesmo em um projeto escrito em TS é preciso saber quando usar susa funcionalidades.

**** TypeScript VS JavaScript

- Mesma sintaxe básica:
    1. Declaração de variáveis.
    2. Operadores lógicos e aritméticos.
    3. Condicionais e repetiçoes.
    4. Funções.
    5. Objetos.
    6. Promises.

- Suporte ao ES6+:
    1. Classes.
    2. Arrow functions.
    3. Async e await.

- Tipagem de variáveis:

    * JavaScript: Tipagem fraca e dinâmica - não precisa atribuir o tipo da variável o JS dinâmicamente já sabe se é uma string ou numero e pode mudar o tipo da variável, string para number ou visse versa.

    * TypeScript: Tipagem forte e estática - em alguns casos não precisa atribuir o tipo da variável porém ela vai ter um tipo que é estático, se tentar atribuir o tipo de uma variável string para numero ele aponta um erro, precisa de um método específico para isso.

-  Funcionamento no navegador:

    * JavaScript: roda em qualquer navegador.

    * TypeScript: não roda em nenhum navegador, precisa ser transformado em código JavaScript.

- Funcionamento com Node.js: 

    * JavaScript: linguagem padrão suportada pelo Node.

    * TypeScript: também não é suportado pleo Node e precisa ser compilado em código JavaScript.


** As vantagens do TS estão todas mais relacionadas ao desenvolvimento, ou seja, enquanto está criando a aplicação, uma vez que esteja pronta, as vantegens meio que desaparece.


**** Principais Recursos do TypeScript:

1.  Tipagem para variáveis, objetos, parâmetros e retornos de funções.
2. Criação de próprios tipos e interfaces.
3. Checagem de erros pela IDE enquanto escreve o código.
4. Função de autocompletar da IDE.
5. Excelente documentação e suporte da comunidade.




**** TIPOS PRIMITIVOS:

- Assim como no JavaScript, os tipos primitivos são os mais básicos e mais utilizados.

- São aqueles que  normalmente obtêm usando o operador typeof.

- Existem três tipos mais utilizados:

    1. boolean: os valores que equivalem a true ou false.
    (let example: boolean = true).

    2. number:  como no JS não diferencia inteiros e pontos flutuantes. (let example:number = 10).

    3. string: valores de texto, como "Hello world!" (let example:string = 'Hello')

- Além disso, temos também o Array, que representa as listas de dados. 

    * A sintaxe básica para especificar um array é utilizando o tipo dos seus elementos. Por exemplo, string[]  ou namber[]. (let example:number[] = [1,2,3,4], let exapmle:Array<number>=[1,2,3,4]). 

    * Idealmente, usamos arrays como sendo uam lista onde todos os elementos têm o memso tipo, mas esses comportamento também pode ser evitado.
