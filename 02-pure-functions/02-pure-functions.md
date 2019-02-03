# O que é pureza?

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