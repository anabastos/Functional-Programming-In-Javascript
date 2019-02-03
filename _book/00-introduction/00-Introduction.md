# Introdução

## O que é FP em linguagens como JS?

A programação funcional consiste em uma abordagem distinta da convencional programação orientada a obejtos para o desenvolvimento de aplicaçoes e software.
Ressaltando que POO é bastante util ainda hoje e seu ensino e utilizacao ainda é  bastante comum atualmente, reafirmamos a sua importancia contudo salientando suas limitações. Podemos citar a implantacao do computação paralela utilizando POO tende a ser demasiadamente custosa e dificil, por os estados podem ser alterados bem como sofrer efeitos colaterais.
Em programação funcional nao sao permitidos _mutables_.Funções atuam como blocos de construção.
Mesmo javascript nao sendo uma linguagem puramente funcional podemos utilizar alguns principios funcionais no nosso codigo

Desde o seu surgimento, a programação funcional vem sendo a queridinha dos aficionados pela Ciência da computação, valorizada pela sua pureza matemática e natureza intrigante, manteve-se escondida em laboratórios de informática, empoeirados... ocupados por cientistas de dados e PhDs esperançosos. Entretanto, de um tempo para cá, vem regenerando-se graças às linguagens modernas, como Python, Julia, Ruby, Clojure e - por último mas não menos importante - JavaScipt.

-- Você disse, JavaScript? Aquela linguagem de script usada em programação web?

-- Sim!

A JavaScript provou ser uma tecnologia importante, e que veio para ficar - por longo tempo. Em grande parte dos casos, isso é devido ao fato dela poder ser "renascida", extendida, com novas estruturas providas por bibliotecas como o Backbone.js, o jQuery, Dojo, underscore.js e tantas mais. Isto está intimamente relacionado com a sua identidade como "linguagem de programação funcional". Compreendermos a aplicação de estruturas e algoritmos provenientes da programação funcional nos será útil por longo tempo, independentemente de nível e/ou habilidades de quem a procura.

-- Por que devo procurá-la?

A programação funcional é muito poderosa, robusta e elegante; extremamente útil para a manipulação de grandes estruturas de dados. Podemos obter diversas vantagens com JavaScript — uma linguagem de script do lado do cliente - se usada como o meio da aplicação do paradigma funcional em tarefas como, respostas ao dom, exibir de forma ordenada a resposta de uma Api e tantas outras das quais precisam os nossos modernos websites.

Neste livro, aprenderemos grande parte do necessário sobre a programação funcional com JavaScript, a emponderarmos aplicações web mediante o uso de "JavaScript Funcional", a desbloquear seus poderes secretos permitindo-nos escrever programas mais curtos e poderosos, mais rápidos, pois num piscar de olhos são transmitidos pela camada TCP devido ao ínfimo tamanho. Veremos a ideia central do paradigma funcional e como aplicá-lo com o auxílio da JavaScript, um passo-a-passo de problemas e precauções que podem surgir, e juntamente, a programação orientada a objetos que será o nosso auxílio - "auxílio do auxílio".

#### Demonstação
Talvez seja uma rápida demonstração a melhor maneira de iniciarmos com o paradigma funcional. Realizaremos uma só tarefa de duas maneiras, na primeira utilizaremos os métodos já existentes no 'Core' e noutra o paradigma funcional. Em seguida, compararemos os dois métodos.

#### A aplicação – an e-commerce website
Digamos que estamos a construir uma aplicação do mundo real, um comércio eletrônico para uma empresa de feijão e café que tem como objetivo aceitar pedidos por conrrespondência. Eles vendem café de qualidade e quantidade distintas, acarretando mudanças de preço.

### Metodos imperativos
Primeiramente, vamos conferir o estilo imperativo. Para melhor demonstração, temos de criar objetos que mantenham os dados. Neles podemos buscar valores como se estivéssemos operando no banco de dados; e posteriormente, talvez possamos operá-los por lá. Mas, no momento, assumiremos que são definidos de forma estática.

``` javascript 
// create some objects to store the data
var columbian = {
  name: 'columbian',
  basePrice: 5
};
var frenchRoast = {
  name: 'french roast',
  basePrice: 8
};
var decaf = {
  name: 'decaf',
  basePrice: 6
};

// we'll use a helper function to calculate the cost
// according to the size and print it to an HTML list
function printPrice( coffee, size ) {
  if( size == 'small' ) {
    var price = coffee.basePrice + 2;
  }
  else if( size == 'medium' ) {
    var price = coffee.basePrice + 4;
  }
  else {
    var price = coffee.basePrice + 6
  }

  // create the new html list item
  var node = document.createElement( 'li' );
  var label = coffee.name + ' ' + size;
  var textnode = document.createTextNode( label + ' price: $'+price );
  node.appendChild( textnode );
  document.getElementById( 'products1' ).appendChild( node );
}

// now all we need to do is call the printPrice function
// for every sigle combination of coffee type and size
printPrice( columbian, 'small' );
printPrice( columbian, 'medium' );
printPrice( decaf, 'medium' );
```
Notemos a simplicidade do código. E se houvessem mais sabores além dos três? quem sabe 20, ou talvez 40? Imaginemos então que se além do tamanho, existisse as opções orgânico e não orgânico. Haja código!

Usando este método, estamos dizendo à máquina o que imprimir para cada sabor e tamanho. Isso é o que há de pior em código imperativo - repetição.

Functional programming
Enquanto no paradigma imperativo dizemos para a máquina como ela deve agir para resolver o problema - passo a passo -, no funcional o descrevemos matematicamente para que a máquina aja sob ele.

Tomando o princípio funcional, teremos o mesmo aplicativo com o seguinte código:

``` javascript 
// separate the data and logic from the interface
var printPrice = function( price, label ) {
  var node = document.createElement( 'li' );
  var textnode = document.createTextNode( label + ' price: $' + price );
  node.appendChild( textnode );
  document.getElementById( 'products2' ).appendChild( node );
};

// create function objects for each type of coffee
var columbian = function() {
  this.name = 'columbian';
  this.basePrice = 5;
};
var frenchRoast = function() {
  this.name = 'french roast';
  this.basePrice = 8;
};
var decaf = function() {
  this.name = 'decaf';
  this.basePrice = 6;
};

//create object literals for te different sizes
var small = {
  getPrice : function() { return this.basePrice + 2 },
  getLabel : function() { return this.name + ' small' }
};
var medium = {
  getPrice : function() { return this.basePrice + 4 },
  getLabel : function() { return this.name + ' medium' }
};
var large = {
  getPrice : function() { return this.basePrice + 6 },
  getLabel : function() { return this.name + ' large' }
};

// put all the coffee types and sizes into arrays
var coffeeFlavors = [ columbian, frenchRoast, decaf ];
var coffeeSizes = [ small, medium, large ];

// build new objects that are combinations of the above
// and put them into a new array
var coffees = coffeeFlavors.reduce( function( previous, current ) {
  var newCoffee = coffeeSizes.map( function( mixin ) {
    // `plusmix` function for functional mixins, see Ch.7
    var newCoffeeObj = plusMixin( current, mixin );
    return new newCoffeeObj();
  });
  return previous.concat( newCoffee );
}, [] )

// we've now defined how to get the price and label for each
// coffee flavor and size combination, now we can just print them
coffees.forEach( function( coffee ) {
  printPrice( coffee.getPrice(), coffee.getLabel() );
})
```
Nos é evidente que este é enormemente maior em termos de modularidade. Torna-se agora tarefa simples adicionarmos novos tamanhos e sabores, segue-se abaixo um exemplo:

``` javascript 
var arabica = function() {
  this.name = 'arabica',
  this.basePrice = 11;
};

var extraLarge = {
  getPrice : function() { return this.basePrice + 10 },
  getLabel : function() { return this.name + ' extra large' }
};

coffeeFlavors.push( arabica );
coffeeSizes.push( extraLarge );
```

Os arrays de objetos coffee são "misturados" com os de objetos size - com o auxílio da função plusMixin (consulte o Cap. 7, Programação funcional e orientada a objetos em javascript). As classes de tipo coffee é quem armazena em variáveis o nome do sabor e o preço padrão, as de tipo size contêm métodos para operarmos com os nomes e preços. A "mistura" acontece dentro de uma operação map(), que aplica uma função pura em cada elemento do array e retorna uma nova função dentro da operação reduce() - outra higher order function similar a função map(), exceto pelo fato dele "reduzir" todos os elementos de um Array num só elemento. E por conseguinte, o novo array contendo todas as combinações de tipos e tamanhos é iterado com o método forEach(); o forEach() é outra higher order function que aplica um callback em cada objeto do array. Neste exemplo, fornecemos uma função anônima que instancia os objetos e chama a função printPrice() passando os métodos getPrice() e getLabel() como argumentos.

Poderíamos ainda, deixar nosso exemplo mais funcional removendo a variável coffees e fazendo um encadeamento de funções - este é um poder secreto da programação funcional.

``` javascript 
coffeeFlavors.reduce( function( previous, current ) {
  var newCoffee = coffeeSizes.map( function( mixin ) {
    // `plusMixin` function for functional mixins, see Ch. 7
    var newCoffeeObj = plusMixin( current, mixin );
    return new newCoffeeObj();
  });
  return previous.concat( newCoffee );
}, []).forEach(function( coffee ) {
  printPrice( coffee.getPrice(), coffee.getLabel() );
})
```

Além disso, o fluxo de controle não é "uma sentada de cima pra baixo" como aconteceu em nosso código imperativo. Na programação funcional, as higher-order functions tomam o lugar dos laços for e while, e, em consequência quase ou nenhuma importância é dada quanto a ordem de execução. Iniciantes tedem a tremer quando "batem o olho" em código quem tem como princípio o paradigma funcional, no começo pode até dar medo, confesso, mas basta um pouco de prática para pegarmos o jeito - não é doloroso -, e logo verá o quão bom é código funcional.

Este exemplo não nos apresentou, mas nem de longe, o que a programação funcional com JavaScript tem a oferecer. Veremos exemplos ainda mais poderosos da abordagem funcional.


Mais sobre javascript:
- Foi criada como OOP porém permite HOF
https://github.com/hemanth/functional-programming-jargon

[Fonte](https://gist.github.com/lukkaslt/1c2514d4e241498bf81d24ac2da97986)

- [ ] Definição de Funcional
- [ ] Paradigmas do JS
- [ ] Vantagens
- [ ] Exemplos real world
