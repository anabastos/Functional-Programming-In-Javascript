### Functional Methods with arrays

### Array.prototype.map()

A função `map()` é a capitã do time. Ela simplesmente aplica o callback em cada elemento do array.

> Sintaxe: `arr.map( callback [, thisArg] );`

Parâmetros:

* `callback()`: esta função produz um elemento para o novo array, recebendo os argumentos:
  * `currentValue`: fornece-nos o elemento em processamento.
  * `index`: fornece-nos a posição do elemento em processamento.
  * `array`: fornece-nos o array em processamento.
* `thisArg()`: Esta função é opcional. O valor é usado com `this` ao executar o callback.

Exemplos:

```js
let
  integers = [ 1, -0, 9, -8, 3 ],
  numbers = [ 1, 2, 3, 4 ],
  str = "Santo Tomás de Aquino";

// map integers to their absolute values
console.log( integers.map( Math.abs ) );

// multiply an array of numbers by their position in the array
console.log( numbers.map( ( x, i ) => x * i ) );

// Capitalize every other word in a string
str
  .split(' ')
  .map( ( s, i ) => !( i % 2 ) && s.toUpperCase() || s );
```

Embora o método `Array.prototype.map` pertença à o objeto `Array`, este pode ser facilmente extendido e personalizado a gosto nosso.

```js
MyObject.prototype.map = function( f ) {
  return new MyObject( f( this.value ) );
}
```

### Array.prototype.filter()

A função `filter()` é usada para selecionar elementos de um array. O callback deve retornar `True` (para incluir o elemento no novo array) ou `False` (para ignorá-lo). Podemos obter um comportamento semelhante mediante o uso da função `map()` retornando o valor `null` para os elementos que desejarmos eliminar, mas a função `filter()` eliminará o elemento do novo array em vez de inserir `null` em seu lugar.

> Sintaxe: `arr.filter(callback [, thisArg]);`

Parâmetros:

* `callback()`: Esta função é usada para testar cada elemento do array. Retorna `True` para manter o elemento, `False` caso contrário. Segue-se seus parâmetros:
  * `currentValue`: fornece-nos o elemento em processamento.
  * `index`: fornece-nos a posição do elemento em processamento.
  * `array`: fornece-nos o array em processamento.
* `thisArg()`: Esta função é opcional. O valor é usado com `this` ao executar o callback. 

Exemplos:

```js
let 
  myArray = [ 1, 3, 6, 10, 15 ],
  words = "4 é o segundo número quadrado. 2² = 2 x 2 = 2 + 2.".split(' '),
  re = /[^x][a-zA-Z]|[éóáúí]/;

// remove all negative numbers
console.log( [ -1, 4, -10, 19 ].filter( x => x > 0 ) );

// remove null values after a map operation
console.log( words.filter( s => s.match( re ) ) );

// remove radom objects from a array
console.log( myArray.filter( () => 0 | Math.random() * 20 ) );
```

### Array.prototype.reduce()

Às vezes chamada de `fold`, a função `reduce()` é usada para reduzir os elementos do array em um. O callback retorna a lógica responsável por combinar os objetos. Geralmente a usamos com números para obter o produdório ou o somatório destes. E se tratando de um conjunto strings, a usamos para concatená-las formando uma só única.

> Sintaxe: `arr.reduce(callback [, initialValue]);`

* `callback()`: esta função retorna a combinação de dois elementos num só. Segue-se seus parâmetros:
  * `previousValue`: fornece-nos o valor previamente retornado pela última execução do callback, ou o `initialValue`, se fornecido
  * `currentValue`: fornece-nos o elemento em processamento.
  * `index`: fornece-nos a posição do elemento em processamento.
  * `array`: fornece-nos o array em processamento.
* `previousValue()`: Está função é opcional. É o objeto a ser usado pela primeira execução do `callback`.

Exemplos:

```js
let numbers = [ 1, 2, 3, 4 ];

// sum up all the values of an array
console.log( numbers.reduce( ( x, y ) => x + y, 0 ) );

// prod up all the values of an array
console.log( numbers.reduce( ( x, y ) => x * y, 1 ) );

// find the largest number
console.log( numbers.reduce( ( a, b ) => Math.max( a, b ) ) );
```

### Honorable mentions

A caixa de ferramentas a auxiliar-nos não é composta apenas pelas funções `map()`, `filter()` e `reduce()`. Existem tantas mais, as quais podemos usar em nossos aplicativos funcionais.

#### Array.prototype.forEach

Essencialmente a versão não pura do `map()`, `forEach()` também itera e aplica um `callback()` sobre cada elemento do array, porém, nada retorna. É simplesmente uma alternativa "clean" ao laço `for`.

> Sintaxe `arr.forEach(callback [, thisArg]);`

Parâmetros: 

* `callback()`: Está função será executada sobre cada elemento do array. Segue-se seus parâmetros:
  * `currentValue`: fornece-nos o elemento em processamento.
  * `index`: fornece-nos a posição do elemento em processamento.
  * `array`: fornece-nos o array em processamento.
* `thisArg()`: Esta função é opcional. O valor é usado com `this` ao executar o callback. 


Exemplos:

```js
let arr = [ 1, 4, 10, 20 ];

let nodes = arr.map( function( x ) {
  let elem = document.createElement( "div" );
  elem.textContent = x;
  return elem;
});

// log the value of each item
arr.forEach( function( x ) { console.log( x ) } );

// append notes to the DOM
nodes.forEach( function( x ) { document.body.appendChild( x ) } );
```

#### Array.prototype.concat

Ao trabalharmos com diversos arrays e, este trabalho não envolver loops `for` e `while`, certamente precisaremos uní-los. Eis a função "built-in" `concat()`. E o legal é que ela retorna os arryas mantendo-os intactos, ou seja, é pura. E tem mais, ela é capaz de unir uma quantidade indefinida de arrays.

```js
// concatenate two arrays
console.log( [ 2, 4, 6 ].concat( [ 'a', 'b', 'c' ] ) ); // out: [ 2, 4, 6, 'a', 'b', 'c' ]
```

Podemos perceber que ela uniu-os mantendo o original intacto. Isso quer dizer que podemos fazer o encadeamento sem maiores problemas.

```js
let
  arr1 = [ 2, 6, 12, 20 ],
  arr2 = [ 1, 4, 9, 16 ],
  arr3 = [ 1, 5, 13, 25 ];

let x = arr1.concat( arr2, arr3 );
let y = arr1.concat( arr2 ).concat( arr3 );
let z = arr1.concat( arr1.concat( arr3 ) );
console.log( x, y, z )
```

As variáveis `x`, `y` e `z` todas contêm `[ 2, 6, 12, 20, 1, 4, 9, 16, 1, 5, 13, 25 ]`.

#### Array.prototype.reverse
#### Array.prototype.sort
#### Array.prototype.every and Array.prototype.some

[Fonte](https://gist.github.com/lukkaslt/1c2514d4e241498bf81d24ac2da97986)
