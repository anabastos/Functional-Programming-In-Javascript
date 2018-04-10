# Higher Order Functions
![Higher Order Functions](http://i.imgur.com/jRvXtcO.jpg)

Na Computação _Funções de Alta Ordem_ também conhecidas como _Funções de Primeira Classe_
são funções que suportam a passagem de outras funções como argumentos retornando como valor para outras funções.
Em outras palavras, são funções que operam em outras funções, seja levando-os como argumentos ou devolvendo-os.

De certa forma podemos dizer que uma Self-invoking function é uma higher-order function. Higher-order functions são funções que recebem ou retornam outras.

Não é comum vermos Higher-order functions em linguagens tradicionais. O programador imperativo certemante usará um loop para iterar um array, porém, o funcional adotará uma abordagem completamente diferente. Podemos trabalhar o array com uma higher-order function, aplicando-a em cada item prar criar um novo array.

Essa é a ideia central do paradigma funcional. Uma Higher-order function permite-nos passar sua lógica a outras funções, bem como objetos.

Funções em JavaScript são tratadas como "Cidadãs de primeira classe", tal comportamento pode ser encontrado no Haskell, Scheme ou em linguagens funcionais clássicas. Esse termo pode soar bizarro - Cidadãs de primeira classe -, mas isso simplesmente quer dizer que funções são tratadas da mesma maneira que tipos primitivos: números e objetos. Se números e objetos tem "passe livre", funções também têm.

É possivel atribuir essas funções a variaveis `var` ou `let`ou ainda a constantes `const`

```javascript
var soma = (x, y) => x + y;
let subtracao = (x, y) => x - y;
const calcular = (fn, x, y) => fn(x, y);
calcular(soma, 1, 2); // 3
calcular(subtracao, 1, 2); // -1
```

Para vermos isto em ação, usaremos uma higher-order com nossa função ValueAccumulator() da seção anterior:

```javascript
// using forEach() to iterate through an array and call a
// callback function, accumulator, for each item
var accumulator2 = ValueAccumulator();
var objects = [ obj1, obj2, obj3 ]; // could be huge array of objects
objects.forEach( accumulator2 );
console.log( accumulator2() );
```

[Fonte](https://gist.github.com/lukkaslt/1c2514d4e241498bf81d24ac2da97986)
