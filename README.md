<h1>TypeScript: O que é, como funciona e como usar</h1>

<h2>Introdução</h2>

<p>O TypeScript é uma linguagem de programação open source desenvolvida pela Microsoft que adiciona recursos adicionais ao JavaScript. Ele é um superconjunto tipado do JavaScript, ou seja, adiciona tipagem estática e outros recursos ao JS.</p>

<p>O TypeScript traz vários benefícios, como:</p>

<ul>
    <li>Detecção de erros em tempo de desenvolvimento (ao invés de em tempo de execução)</li>
    <li>Autocompletar de código</li>
    <li>Facilidade na refatoração</li>
    <li>Mais produtividade e menos bugs</li>
</ul>

<p>Neste ebook, vamos aprender:</p>

<ul>
    <li>O que é o TypeScript e suas principais características</li>
    <li>Por que e quando utilizar o TypeScript</li>
    <li>Como instalar e configurar o TypeScript nos seus projetos</li>
    <li>O que é tipagem e como ela funciona no TS</li>
    <li>Como criar seus próprios tipos no TS</li>
    <li>Programação Orientada a Objetos com TS</li>
    <li>Um pouco sobre programação funcional com TS</li>
</ul>

<h2>O que é TypeScript</h2>

<p>O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática ao JavaScript.</p>

<p>O JS é uma linguagem dinâmica e não tipada, o que pode trazer problemas para projetos muito grandes e com muitos desenvolvedores, pois fica difícil de entender e modificar trechos de código escritos por outras pessoas.</p>

<p>O TypeScript veio para resolver esse problema, adicionando tipagem ao JS. Dessa forma, as variáveis passam a ter um tipo definido, como string, number, boolean, etc.</p>

<p>Além da tipagem estática, o TS adiciona outros recursos ao JS como classes, interfaces, generics e outras features orientadas a objetos.</p>

<p>O código TypeScript precisa ser compilado para JavaScript para poder ser executado nos browsers e ambientes Node.js, pois os ambientes JS não entendem TS diretamente.</p>

<h2>Por que e quando utilizar TypeScript</h2>

<p>O TypeScript traz diversos benefícios para o desenvolvimento, especialmente em projetos grandes e com muitos desenvolvedores envolvidos.</p>

<p>Alguns motivos para utilizar TS:</p>

<ul>
    <li><p><strong>Maior produtividade:</strong> A tipagem e recursos adicionais como autocompletar de código e refatoração facilitam e agilizam o desenvolvimento.</p></li>
    <li><p><strong>Menos bugs:</strong> Muitos bugs podem ser detectados durante a compilação, antes mesmo de executar o código. Isso aumenta a qualidade do software.</p></li>
    <li><p><strong>Código mais legível:</strong> A tipagem deixa o código autoexplicativo, facilitando a leitura e manutenção no futuro.</p></li>
    <li><p>** Mais segurança:** A tipagem rigorosa evita muitos erros comuns de JavaScript.</p></li>
    <li><p><strong>Suporte a OO e FP:</strong> TypeScript adiciona recursos de programação orientada a objetos como classes e interfaces. Também suporta programação funcional.</p></li>
    <li><p><strong>Interoperabilidade com JS:</strong> Todo código JS funciona em TS. Além disso, é possível incorporar TS gradualmente em projetos JS existentes.</p></li>
</ul>

<p>O TypeScript é recomendado para projetos grandes, com muito código e vários desenvolvedores envolvidos. Porém, nada impede de utilizá-lo também em projetos menores para se beneficiar da tipagem estática e produtividade.</p>

<h2>Como instalar e configurar o TypeScript</h2>

<p>Para começar a utilizar o TypeScript, primeiro você precisa ter o Node.js instalado na sua máquina.</p><p>Feito isso, basta instalar o TypeScript de forma global com o NPM:</p>

<pre><code>npm install -g typescript</code></pre>

<p>Para compilar arquivos TS para JS, podemos utilizar o comando <code>tsc</code>:</p>

<pre><code>tsc nome-do-arquivo.ts</code></pre>

<p>Isso vai gerar um arquivo <code>nome-do-arquivo.js</code> com o código JS equivalente.</p><p>Também é possível fazer com que a compilação seja automática sempre que salvarmos um arquivo TS. Para isso, inicializamos um projeto TS com:</p>

<pre><code>tsc --init</code></pre>

<p>Isso cria um arquivo <code>tsconfig.json</code> com as configurações do projeto. Nele, podemos habilitar a opção <code>&quot;watch&quot;: true</code> para que a compilação seja automática.</p>

<p>Dessa forma, sempre que salvarmos um arquivo TS, o código será automaticamente compilado para JS!</p>

<h2>O que é tipagem e como funciona no TS</h2>

<p>A tipagem estática é um dos recursos mais importantes do TypeScript. Enquanto o JS é dinamicamente tipado, o TS adiciona tipos estáticos.</p>

<p>Isso significa que precisamos explicitamente definir quais são os tipos das nossas variáveis, parâmetros de função, retorno de funções, etc.</p>

<p>Os principais tipos nativos do TS são:</p>

<ul>
    <li><p><strong>number:</strong> para números. Ex: <code>let idade: number = 28;</code></p></li>
    <li><p><strong>string:</strong> para strings. Ex: <code>let nome: string = &quot;João&quot;;</code></p></li>
    <li><p><strong>boolean:</strong> para valores booleanos true/false.</p></li>
    <li><p><strong>any:</strong> para valores dinâmicos, sem um tipo específico. Equivale a não ter tipagem.</p></li>
    <li><p><strong>void:</strong> para funções que não retornam nada.</p></li>
    <li><p><strong>never:</strong> para funções que não finalizam sua execução.</p></li>
    <li><p><strong>object:</strong> para objetos em geral.</p></li>
    <li><p><strong>array:</strong> para arrays. Ex: <code>let list: number[] = [1, 2, 3];</code></p></li>
</ul>

<p>Além desses tipos básicos, também é possível criar enums, interfaces e tipos personalizados, como veremos mais adiante.</p>

<p>A grande vantagem da tipagem estática é a possibilidade de detectar erros durante o desenvolvimento. Por exemplo, se tentarmos atribuir uma string para uma variável numérica, o TS vai acusar erro antes mesmo de executar a aplicação.</p>

<p>Isso evita muitos bugs e problemas em potencial.</p>

<h2>Criando tipos personalizados</h2>

<p>Além dos tipos embutidos do TS como number, string, boolean, etc, também é possível criar nossos próprios tipos personalizados.</p>

<p>Isso é muito útil para representar objetos e formatos de dados específicos dentro da nossa aplicação.</p>

<p>Por exemplo, podemos criar um tipo para representar um usuário com nome e idade:</p>

<pre><code class="language-ts">type Usuario = {  nome: string;  idade: number; }function saudar(usuario: Usuario) {  console.log(&quot;Olá &quot; + usuario.nome); }const joao: Usuario = {  nome: &quot;João&quot;,  idade: 30}saudar(joao); // Olá João</code></pre>

<p>Perceba que criamos um tipo <code>Usuario</code> representando um objeto JS com nome e idade. Depois, usamos esse tipo como parâmetro e retorno de função.</p>

<p>Os tipos personalizados dão muito mais significado e contexto para o nosso código.</p>

<h2>Programação Orientada a Objetos</h2>

<p>O TypeScript adiciona suporte completo para Programação Orientada a Objetos, incluindo classes, interfaces, herança, modificadores de acesso e muito mais.</p>

<p>Por exemplo, podemos definir uma classe <code>Pessoa</code>:</p>

<pre><code class="language-ts">class Pessoa {  private nome: string;  public idade: number;  constructor(nome: string, idade: number) {    this.nome = nome;    this.idade = idade;  }    saudar() {    console.log(&quot;Olá, meu nome é &quot; + this.nome);    }}const joao = new Pessoa(&quot;João&quot;, 30);joao.saudar();</code></pre>

<p>Note que temos características de OO como classe, atributos privados e públicos, construtor e métodos.</p>

<p>Também é possível herdar classes umas das outras, implementar interfaces, utilizar modificadores de acesso como <code>public</code> e <code>private</code>, getters/setters, static types e muito mais.</p>

<h2>Programação Funcional</h2>

<p>O TypeScript também adiciona alguns recursos para programação funcional, como funções de primeira classe que podem ser atribuídas a variáveis e passadas por parâmetro, arrow functions, imutabilidade de dados, etc.</p>

<p>Por exemplo:</p>

<pre><code class="language-ts">function soma(a: number, b: number) {  return a + b; }let funcSoma = soma;console.log(funcSoma(10, 20)); // 30</code></pre>

<p>Perceba que a função soma foi atribuída para uma variável funcSoma, e depois foi chamada normalmente.</p><p>Também podemos passar funções por parâmetro para outras funções:</p>

<pre><code class="language-ts">function executarFunc(fn: (a: number, b: number) =&gt; number) {  let resultado = fn(10, 5)  console.log(resultado);}executarFunc(soma); // 15</code></pre>

<p>O TypeScript tem suporte limitado para recursos mais avançados de programação funcional como currying, composição, functors, monads etc. Para esses casos, é comum utilizar bibliotecas externas como RamdaJS.</p>

<h2>Conclusão</h2>

<p>Neste ebook, aprendemos o que é o TypeScript, suas principais características, benefícios, casos de uso e muito mais.</p>

<p>Vimos na prática como configurar o TS em um projeto, trabalhar com tipagem estática, criar nossos próprios tipos, classes e interfaces.</p>

<p>Também tivemos uma introdução à programação orientada a objetos e funcional com TypeScript.</p>

<p>Espero que você tenha gostado deste material introdutório. O TypeScript com certeza irá turbinar seus projetos JavaScript, então vale a pena aprender e começar a utilizar em seus projetos.</p>



