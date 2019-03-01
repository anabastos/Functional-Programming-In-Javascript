# O que é pureza?

Como assim?
Talvez você não se recorde mas funções matemáticas são um conteúdo passado em escolas na quarta série.
Se lembra disto?
Em funções matematicas na escola aprendemos que uma função recebe um argumento(x no caso). No caso da função f(x) = x * x multiplicamos o que recebemos por si mesmo. Então caso x é 1 temos uma imagem y que equivale a 1(1 * 1 = 1), e assim por diante. 
https://speakerdeck.com/anabastos/javascript-funcional-front-end-campinas?slide=8

Com isso podemos desenhar uma reta num grafico demontrando as possíveis entradas e saidas.
É importante lembrar que cada função tem um dominio e imagem. Em um dominio, ou "input" de 1 a 4 temos como "output" uma imagem com os valores 2, 4, 9, 16 para suas respectivas contas. Não importa quantas vezes eu faça 1 * 1 pois a resposta SEMPRE será 1. 
https://speakerdeck.com/anabastos/javascript-funcional-front-end-campinas?slide=9

Caso 1 * 1 em algum momento dê 2 NAO TEMOS UMA FUNCAO MATEMATICA.

https://speakerdeck.com/anabastos/javascript-funcional-front-end-campinas?slide=11

Caso a função seja por exemplo, f(x) = ---- se o input de x for _ ou _ teremos o mesmo output. Isso é ok pois ainda assim temos uma função matematica.
https://speakerdeck.com/anabastos/javascript-funcional-front-end-campinas?slide=10

Ou seja, uma função pura é exatamente o que se espera de uma função matematica comum:
- Sempre recebem algo
- Sempre retornam algo
- Nunca mutam algo fora do escopo da propria função
- Para o mesmo input sempre retornam o mesmo output

```javascript
let taxa = 10

function valorTotal(valor) {
  return valor + taxa
}

valorTotal(10) // 20
taxa += 1;
valorTotal(10) // 21 :(
```

Funções nunca devem depender do contexto em que elas estão
```javascript
let taxa = 10

function valorTotal(valor) {
  return valor + taxa
}

valorTotal(10) // 20
taxa += 1;
valorTotal(10) // 21 :(
```

Uma opção correta seria receber mais argumentos:
```javascript
function valorTotal(valor, taxa) {
  return valor + taxa
}
```

Poxa mas em função matematica não recebemos apenas uma função como argumento?
Em matematica vimos que dá para criar funções em termos de outras funções e compor funções(f ∘ g).
Algo como:
f(x) = x + g(y).
Veremos isso no proximo capitulo de currying.

Here's a (non-exhaustive) list of FP features:

First-Class Functions
High-Order Functions
Pure Functions
Closures
Immutable State


## Pure functions
Uma Função Pura retorna o valor computado apenas com argumentos a ela passados. Com ela evitamos o chamado efeito colateral, ou seja, não tocamos em variáeis externas nem no estado global. Em outras palavras, ela deve manter tais argumentos intactos. Podemos concluir que: a função pura apenas retorna valores.

Exemplo disso é uma função matemática. A função `Math.sqrt(4)` sempre retornará 2, não usará nenhuma informação "obscura", como configurações ou estado, e nunca causará efeitos colaterais.

Podemos dizer que uma função pura corresponde ao termo 'função matemática'; **O Amor Uno** entre a entrada e a saída. São de fácil interpretação e altamente reutilizáveis. Por terem total independência, são mais suscetíveis a serem reuzadas aqui ou acolá, no projeto x ou y.

Segue-se abaixo o exemplo de função pura e "não pura" - [non-pure].

```javascript
// function that prints a message to the center of the screen
var printCenter = function( str ) {
  var elem = document.createElement( "div" );
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = window.innerHeight / 2 + "px";
  elem.style.left = window.innerWidth / 2 + "px";
  document.body.appendChild( elem );
};
printCenter( 'hello world' );

// pure function that accomplishes the same thing
var printSomewhere = function( str, height, width ) {
  var elem = document.createElement( "div" );
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = height;
  elem.style.left = width;
  return elem;
};
document.body.appendChild(
  printSomewhere(
    'hello world',
    ( window.innerHeight / 2 ) + 10 + "px",
    ( window.innerWidth / 2 )  + 10 + "px"
  )
);
```

A de percebermos que na "non-pure" exige-se o estado do objeto window para computar a altura [height] e largura [width], entretanto, a pura exige-nos que passêmo-las - height e width - como argumentos. E tal comportamento - que da pure function provém - permite-nos exibir a mensagem em qualquer posição, tornando-a muito versátil.

Tendemos a pensar que a função non-pure seja melhor devido a ela ter adicionado[appendChild] o elemento [elem] em vez de retorná-lo, entretanto, a função printSomewhere() está mais apta a encaixar-se nas técnias da programação funcional.

```javascript
var messages = [ 'Leibniz', '1646', 'função', 'matemática' ];
messages.map( function( s, i ) {
  return printSomewhere( s, 100 * i * 10, 10 * i * 10 );
}).forEach( function( element ) {
  document.body.appendChild( element );
});
```

Quando as funções são puras, ou seja, independentes de estado ou do ambiente, não precisamos dar a mínima importância para quando ou onde elas serão computadas. Veremos isso mais adiante com a avaliação preguiçosa.

[Fonte](https://gist.github.com/lukkaslt/1c2514d4e241498bf81d24ac2da97986)

Transparencia referencial: passando dois como argumento de uma função "quadrado" a resposta sempre sera a mesma
O mesmo não é valido para uma função de geradora de números ou ate mesmo uma que lê arquivos.

Basically, if a function consistently yields the same result for the same input, it is referentially transparent.

Pure Functions + Immutable Data = Referential Transparency

Com isso podemos trabalhar com memoization
With this concept, a cool thing we can do is to memoize the function. Imagine we have this function: (+ 3 (+ 5 8))
The (+ 5 8) equals 13. This function will always result in 13. So we can do this: (+ 3 13)
We can replace the entire expression with a numerical constant and memoize it.

TODO:
- [ ] O que é função pura(abordar paralelismo em outras langs)
- [ ] Idepotencia
- [ ] Retornar funções de forma consistente 
- [ ] Isolamento de funcionalidade para cada função
- [ ] Use parametros para dados substituiveis ao invés de hardcoding
- [ ] Testing