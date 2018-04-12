#### Sequential Pattern Strategy

Quando falamos de paradigmas de programação diferentes também falamos de formar de modelar e pensar em problemas diferentes. 

Em linguagens procedurais nossas computações envolvem nosso código separado em modulos operando em dados. Já em linguagens orientadas a objetos encapsulamos nosso código e dados para que eles interajam entre si por meio de mensagens. Esses modelos são assim pois vem da maquina de turing como já explicado em capitulos anteriores
Vis whose theoretical model of computation is the Turing Machine, LISP's theoretical model of computation is the Lambda calculus 

[Img](http://www.math-cs.gordon.edu/courses/cs323/LISP/lisp.html)

Pra quem esta habituado com OOP ou programação imperativa, a programação funcional mais pura lida de uma nova perspectiva a forma de modelar o fluxo do seu programa que é o de componentização. Nele os dados fluem por meio de apenas funções completamente independentes entre si visto que o seu modelo teorico de computação vem do lambda calculus lidar apenas com funções.

Então na pratica a forma de pensar para resolver um problema no padrão sequencial é, separar o problema em pequenas funções puras de sub-problemas e "compo-las" para solucionar.

**PLUS:** Também é muito mais facil testar seu código com pequenas funções em que você pode testar cada passo.

### Como composição de funções funciona?

Composiçao de funções vem também de um conceito matematico, nele trabalhamos com a combination combinação de funções como `f` ou `g` em `f . g`. 

Em Javascript normal fariamos algo assim:

```javascript
const f = x => x + 1;
const g = y => y * y;
const x = 2;
const composed = f(g(x)); // 5
```

Nesse exemplo, temos uma função que adiciona `1` e que dobra o valor. Quando passando x para a função `g` o seu retorno é passado para função `f` retornando o valor de 5.
Então nossa composição é avaliada de dentro para fora e não segue o fluxo sequencial que queremos então ele aparenta muito mais complexo do que deveria e pra isso precisamos de pipeline.

##### Pipeline

Pipeline em ciência da computação é todo tipo de processamento de dados conectado em série em que a saída de um elemento é a entrada do proximo similar ao pipe do UNIX.
O javascript tem uma proposal para a implementação de um [pipeline operator](https://github.com/tc39/proposal-pipeline-operator) inspirado por linguagens funcionais como F#, OCaml, Elixir, Elm. Mas por enquanto é necessario funções como `pipe()` e `compose()` do Ramda ou o `flow()` do Lodash.

Dessa forma nosso código pode aparentar assim:
```javascript
const f = x => x + 1
const g = y => y * y
const x = 2
const composed = x 
  |> f
  |> g // 5
```

Isso acaba se tornando muito mais legivel visto que temos uma visão sequencial em que temos controle do fluxo sendo aplicado ao valor x mantendo a declaratividade do código.

### Resolvendo problemas

### Currying

### Async

### Erros

### Either

### Side Effects
