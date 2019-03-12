# Fugindo de classes

## Utilizando objetos literais e funções

## Closure

Closure é um metodo interessante para manter estado de uma função javascript.

“Writing in ECMAScript language without understanding closure is like writing Java without understanding classes” — Douglas Crockford.

JavaScript is a lexical scoping language. This means, inheritance flows inwards. A variable outside a function is available for usage within a function but not the other way around.

Javascript tem escopo de linguagem lexico. Ou seja, herança flui de dentro pra fora, sendo assim, uma variável fora de função está disponível dentro da função enquanto variáveis dentro da função estão disponíveis apenas dentro da propria função.
Quando colocamos codigo dentro de funções javascript fechamos o seu escopo e tornamos a variável passada como argumento como independente.

No exemplo a seguir temos uma função dentro de uma função closure em que retornamos a função de dentro:

```javascript
function closure(x) {

    function increase() {
        return 1 + x;
    }
    return increase;
}

console.log(closure(3));
```
Isso pode ser verificado no próprio navegador:
https://cdn-images-1.medium.com/max/1600/1*QGWZ21n2CUD_DwIWMprYBQ.jpeg

E ai vem a pergunta, se uma closure é o uso de uma variável fora da própria função, pq este exemplo não é uma closure?

```javascript
function closure(x) {

    const increased = 1 + x;
    return increased;
}

console.log(closure(3));
```

Não é por causa da forma como o Javascript avalia essa expressão. O escopo da função é criado assim que a memória é alocada a ele. Este processo acontece até que a memória alocada para a função ser liberda então qualquer valor criado é perdido.

```javascript
function closure(x) { // Função é chamda e memória é alocada para ela.

    const increased = 1 + x; // Expressão é executada.
    return increased; // No fim da função a memória é liberada.
} 

console.log(closure(3)); // Processo ocorre sempre que a função é chamada.
```

O ponto é: quando criamos uma função dentro de outra função criamos um novo escopo que não é desalocado ao fim da execução da função podendo guardar contextos.
Desta forma podemos criar um número ilimitado de instâncias de função guardando o contexto de seus valores passados.

```javascript
function closure(x) {

    function increase() {
        return 1 + x;
    }
    return increase;
}

const counting = closure(0);

console.log(counting.increase()); // return 1
console.log(counting.increase()); // return 2
```

Ou seja, closures são apenas funções com dados preservados. QUando criamos uma closure, estamos falando para o Javascript lembrar o estado de coisas dentro de sua função, e suas unicas variaveis usadas são consideradas 'closures'.
Isso é particularmente util principalmente porque closures são basicamente funções com estado, similar a classes que teriam variaveis privadas.
As variaveis são privadas porque funções externas não podem acessa-las com uma chamadas explicita. Isso permite que uma função inteira tenha conteúdo proprio e se proteja contra mudanças indesejadas.

Closures portanto são uma forma sucinta de modularizar sem a necessidade de criação de classes. Porém permitindo a replicabilidade do codigo e reduzindo o numero de escopos globais necessarios. 

Sendo assim, closures são mais do que criar funções dentro de outras funções. É uma tecnica usada para criar variaveis que são protegidas de mudanças externas, isoladas do resto da aplicação e com estado persistente.

## Lenses
