## Currying vs Partial Application

## Currying

Como vimos no [capitulo 1](https://github.com/anabastos/Functional-Book-ES6/blob/master/02-%CE%BB-calculus/02-%CE%BB-calculus.md) a composição de funções recebe apenas um parametro que são aplicados um de cada vez, por isso ao programarmos em linguagens puramente funcional geralmente podemos usar uma função com multiplos parametros pois o proprio compilar reescreve em novas funções de apenas um parametros compostas entre si. Isso é o que chamamos de **"Currying"**, palavra que veio do Haskell Curry, um matematico que foi de grande influencia no desenvolvimento de linguagens funcionais.

Voltando a ponte de funções matematicas, vimos na escola blablabal composição de função.

Porém, quando usamos multiplos argumentos no js temos algo parecido com isso:

```javascript
const add = (x, y) =>  x + y
add(1) //NaN
add(1, 1) //2
```

Para simularmos um currying no javascript podemos fazer algo assim:
```javascript
const h =  x => y => x + y
}
add(a)(b) // a + b
```

Nesse caso estamos retornar uma sub-função dentro de uma função para podermos resolver o `x + y` passando um parametro por vez.
Tanto que, quanto tentamos aplicar apenas um dos argumentos, não recebemos um NaN mas sim uma função esperando o proximo argumento.

```javascript
add(a) // y => a + y
```

Supondo que vamos receber vários argumentos na nossa função, nesse caso teremos que retornar funções que retornar funções que retornam funções. 

```javascript
const addThree =  x => y => z => x + y + z
}
addThree(a)(b)(c) // a + b + c
```

Compiladores de linguagens funcionais como haskell interpretam apenas um argumento por vez, então por mais que você coloque os argumentos como `add(1,2)` ele já faz o próprio curry por padrãoe portanto a aplicação parcial de um `add(1)(2)` da mesma função seria aceita sem problemas.
Um exemplo disso é assinatura das funções em Haskell, uma função como a função abaixo teria a seguinte assinatura:

```haskell
addThree :: Int -> Int -> Int -> Int  
addThree x y z = x + y + z  
```

Em que representa os argumentos que serão recebidos em ordem e o retorno esperado da função, no caso um inteiro com a soma dos argumentos.
Isso vem do fato que haskell teve suas bases no [calculo lambda]() em que apenas um argumento é aceito por função, veremos mais sobre isso no capitulo de calculo lambda.

Para facilitar o processo e simular o que linguagens funcionais fazem, podemos usar o curry da biblioteca *RamdaJS* também para resolver nosso problema de forma semantica:
```javascript
const add =  curry((x, y) -> x + y)
add(a)(b) // a + b
```

Quando fazemos `1 + 1` no javascript esta operação binaria tem dois parametros, em linguagens funcionais o operador `+` geralmente funciona como a função que criamos agora. Ou seja, quando voce escreve x + y o compilador reescreve o codigo transforma o calculo em infixo ((+) x y), em que a função + chama dois parametros.

## Partial Application

Notamos que funções com multiplos parametros podem ser quebrados em funções com parametros menores e é a forma matematica de se fazer isso mas isso nos leva a outra tecnica chamada *Aplicação parcial* e tem uma diferença tenua do *Curry*.


``` javascript
const add = (a, b) =>
    (b === undefined) ? (b => add(a, b)) : a + b
```

### Aridade

Podemos também implementar nosso proprio curry no javascript e pra isso chegamos no conceito *aridade*. Aridade é o numero de argumento que a nossa função espera para sabermos quando devemos parar de retornar funções e retornar um valor. Para implementarmos nosso curry temos de primeiro saber a aridade de nossa função

```javascript
const arity = fn => return fn.length
const add => (x, y) => x + y

arity(add) //2
```

Note que a função `add` que soma dois numeros tem um valor aridade igual a 2.

```javascript
const arity = fn => fn.length
```

Para implementarmos uma função de curry vamos precisar saber qual a aridade da função e pra isso vamos reutilizar a função `arity`.
Continuando a logica, vamos então criar uma função `curry` e fazer com que ela chame uma uma nova função chamada `curried` que vai ser nossa função ""curriada"".

```javascript
const curry = (fn) => {
    return const curried = () => "Curry com batata"
}
```

Assim:
```javascript
const add = (x, y) => x + y
curry(add) //[Function]
curry(add)(1) //"Curry com batata" 
curry(add)(1)(2) //TypeError: curry(...)(...) is not a function
```

Para considerarmos mais de um argumento podemos então receber os argumentos da primeira função e passar como argumento para nossa curried. Alcançou a aridade a função é chamada caso contrario a função curried é chamada novamente com os argumentos remanescentes.

```javascript
const curry = (fn, ...args) => {
  return const curried = (...args) => {
      return args.length >= arity(fn) ?
        fn.call(this, ...args) :
        (...rest) =>  curried.call(this, ...args, ...rest);
  }
}

Testando temos o esperado:

```javascript
const add = (x, y) => x + y

const curriedAdd = curry(add)
const addTwo = add(2)
add2(2) //4
```

TODO:
- [ ] Aridade
- [ ] Aplicação parcial e curry
- [ ] Curry do ramda
- [ ] Bons exemplos, reaproveitamento de codigo
- [ ] Citar capitulo de architecture(injeção de dependencia etc)
