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

Supondo que vamos receber vários argumentos na nossa função, nesse caso teremos que retornar funções que retornar funções que retornam funções. Para facilitar o processo, podemos usar o curry da biblioteca *RamdaJS* também para resolver nosso problema de forma semantica:
```javascript
const h =  curry((x, y) -> x + y)
h(a)(b) // a + b
```

Note que nossa função faz o papel de operador `+`, então quando fazemos `1 + 1` no javascript esta operação binaria tem dois parametros, em linguagens funcionais o operador `+` geralmente funciona como a função que criamos agora. Ou seja, quando voce escreve x + y o compilador reescreve o codigo transforma o calculo em infixo ((+) x y), em que a função + chama dois parametros.

## Partial Application

Notamos que funções com multiplos parametros podem ser quebrados em funções com parametros menores e é a forma matematica de se fazer isso mas isso nos leva a outra tecnica chamada *Aplicação parcial* e tem uma diferença tenua do *Curry*.


### Aridade

Podemos também implementar nosso proprio curry no javascript e pra isso chegamos no conceito *aridade*. Aridade é o numero de argumento que a nossa função espera para sabermos quando devemos parar de retornar funções e retornar um valor. Para implementarmos nosso curry temos de primeiro saber a aridade de nossa função

```javascript
const arity = fn => return fn.length
const add => (x, y) => x + y

arity(add) //2
```

Note que a função `add` que soma dois numeros tem um valor aridade igual a 2.

```javascript
const arity = fn => return fn.length
const curry = fn => const arity = arity(fn)
```

Para nossa função de curry vamos precisar saber qual a aridade da função e pra isso vamos reutilizar a função `arity`.
Continuando a logica, a cada vez que uma funções curried é chamada, nós adicionamos novos argumentos para um array salvo em uma closure. Se o numero de argumento é igual ao esperado, nós chamamos a função.

Vamos então criar nossa closure que vai conter uma lista de argumentos e uma função `resolver` que vai checar se deve retornar uma função parcial ou o valor dos argumentos aplicados.

```javascript
const curry = fn => {
    const arity = fn.length
    return (function resolver() {

    }())
}
```

Vamos então criar uma variavel chamada `memory` que usa a função **Array#slice** para copiar fazer uma copia dos argumentos recebidos e retornar uma função, pois será a aplicação parcial dessa função curried.

```javascript
ba
```

Agora vamos fazer a função retornada do resolve receber argumentos, então criaremos uma variavel chamada `local` que vai copia-los e em seguida adiciona-los usando **Array#push**. Em seguida vamos comparar o numero de argumentos recebidos com a aridade da nossa função, se é verdadeiro, chamaremos a função original, caso contrário faremos uma recursão da função resolver.

```javascript
const curry = fn => {
pode pa
}
```

Testando temos:

```javascript
const add = (x, y) => x + y

const curried = curry(add)
const add2 = add(2)
add2(2) //4
```
