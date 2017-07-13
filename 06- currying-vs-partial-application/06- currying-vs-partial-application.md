## Currying vs Partial Application

## Currying

Como vimos no [capitulo 1](https://github.com/anabastos/Functional-Book-ES6/blob/master/02-%CE%BB-calculus/02-%CE%BB-calculus.md) a composição de funções recebe apenas um parametro que são aplicados um de cada vez, por isso ao programarmos em linguagens puramente funcional geralmente podemos usar uma função com multiplos parametros pois o proprio compilar reescreve em novas funções de apenas um parametros compostas entre si. Isso é o que chamamos de **"Currying"**, palavra que veio do Haskell Curry, um matematico que foi de grande influencia no desenvolvimento de linguagens funcionais.
Porém, quando usamos multiplos argumentos no js temos algo parecido com isso: 

```javascript
const k = (x, y) =>  x + y
k(1) //NaN
k(1, 1) //2
```

Para simularmos um currying no javascript podemos fazer algo assim:
```javascript
const h =  (x) => {
    const a = x
    return y => a + y 
}
h(a)(b) // a + b
```

Nesse caso estamos retornar uma sub-função dentro de uma função para podermos resolver o `x + y` passando um parametro por vez.
Tanto que, quanto tentamos aplicar apenas um dos argumentos, não recebemos um NaN mas sim uma função esperando o proximo argumento.

```javascript
h(a) // y => a + y
```

Como ja vimos, podemos usar o curry da biblioteca *RamdaJS* também para resolver nosso problema de forma semantica:
```javascript
const h =  curry((x, y) -> x + y)
h(a)(b) // a + b
```

Note que nossa função faz o papel de operador `+`, então quando fazemos `1 + 1` no javascript esta operação binaria tem dois parametros, em linguagens funcionais o operador `+` geralmente funciona como a função que criamos agora. Ou seja, quando voce escreve x + y o compilador reescreve o codigo transforma o calculo em infixo ((+) x y), em que a função + chama dois parametros.

## Partial Application

Notamos que funções com multiplos parametros podem ser quebrados em funções com parametros menores e é a forma matematica de se fazer isso mas isso nos leva a outra tecnica chamada *Aplicação parcial* e tem uma diferença tenua do *Curry*.