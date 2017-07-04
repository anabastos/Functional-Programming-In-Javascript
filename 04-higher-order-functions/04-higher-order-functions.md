# Higher Order Functions
![Higher Order Functions](http://i.imgur.com/jRvXtcO.jpg)

Na Computação _Funções de Alta Ordem_ também conhecidas como _Funções de Primeira Classe_
são funções que suportam a passagem de outras funções como argumentos retornando como valor para outras funções.
Em outras palavras, são funções que operam em outras funções, seja levando-os como argumentos ou devolvendo-os.
É possivel atribuir essas funções a variaveis `var` ou `let`ou ainda a constantes `const`


```javascript
var soma = (x, y) => x + y;
let subtracao = (x, y) => x - y;
const calcular = (fn, x, y) => fn(x, y);
calcular(soma, 1, 2); // 3
calcular(subtracao, 1, 2); // -1
```