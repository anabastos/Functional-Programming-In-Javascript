# Introdução

## O que é FP?

 Não é atoa que o nome é "funcional". Uma linguagem funcional é qualquer linguagem construida sobre *funções* logicas, sendo baseadas em funções matematicas no fluxo computacional([Igual na aula da quarta série!](02-pure-functions/02-pure-functions.md)).
A estrutura básica destas linguagens de programação vem da logica combinatória e do calculo lambda, que vamos explicar no proximo capitulo.

A programação funcional consiste em uma abordagem distinta da convencional programação orientada a objetos para o desenvolvimento de aplicações e software.
Ressaltando que POO é bastante útil ainda hoje e seu ensino e seu uso ainda é  bastante comum atualmente, reafirmamos a sua importância contudo salientando suas limitações. Podemos citar a implantação da computação paralela utilizando POO tende a ser demasiadamente custosa e dificil, por os estados podem ser alterados bem como sofrer efeitos colaterais.
Em programação funcional não é permitido mutabilidade onde não deveria existir. Funções atuam como blocos de construção.

Programar em uma linguagem funcional consiste em construir definições e usar o computador para avaliar expressões sendo o papel do programador construir funções que obedecem princípios matemáticos para resolver um problema. Uma das principais características é que se uma expressão possui valores bem definidos, então a ordem em que o computador realiza essa avaliação não deve afetar o resultado evitando assim um sistema de estados mutáveis

Desde o seu surgimento, a programação funcional vem sendo a queridinha dos aficionados pela ciência da computação, valorizada pela sua pureza matemática e natureza intrigante, manteve-se escondida em laboratórios de informática, empoeirados... ocupados por cientistas de dados e PhDs esperançosos.

Programação funcional não é novidade e sequer modinha. O sistema formal do cálculo lambda foi desenvolvido na década de 30 pelo Allan Church para explorar a computabilidade para com definição e aplicação de funções e recursão. Linguagens como LISP existem há mais de 60 anos.

Mas até poucos anos atrás computadores não eram tão rapidos quanto hoje em dia e tinham bem pouco poder de processamento. Pra isso era importante utilizar linguagens que possibilitassem uma economia na memória e para isso linguagens imperativas que lidavam bem com a memória e faziam tarefas de forma procedural ficaram em alta.

Em um artigo publicado em 1965 na "Electronics Maganize", pergunta-se ao Gordon E. Moore, diretor de pesquisa e desenvolvimento dos semicondutores Fairchild, como ele previa a indústria nos próximos 10 anos e ele observou que o número de componentes em um circuito integrado havia dobrado em aproximadamente um ano, ele assumiu que a próxima geração de chips seria duas vezes mais rápida que a anterior em um período de 18 meses, mas com o mesmo custo que os modelos de anterior, Moore especulou que esse viria a acontecer pelo menos nos próximos anos 10. 

https://banner2.kisspng.com/20180806/ku/kisspng-moore-s-law-intel-central-processing-unit-dennard-5b6862deaeace6.8292659815335677107155.jpg

A parte mais engraçada é que esse padrão se repete até hoje, em o número de transistores aumentou exponencialmente e sua previsão foi popularizada e chamada de Lei de Moore. 
Até que fisicamente um único núcleo não fosse fisicamente capaz de ter mais transistores sem que super-aquecesse. A solução? Começa a era dos multi-nucleos.

Em contraste, a programação imperativa consiste no uso de comandos que alteram os estados da memória, permite efeitos colaterais que podem alterar a execução do programa e possuem sub rotinas em vez de funções (no sentido matemático). Por conta disso, diz-se que a programação imperativa não tem transparência referencial, ou seja, um mesmo bloco de código pode ter dois resultados completamente diferentes. É conveniente na estruturação do software problemas de múltipla comunicação de threads que ajudam a estruturar o código de forma a modelar a interface de usuário como threads separadas e, assim, lidar da melhor forma com concorrência em tempo real. 

De qualquer forma, atualmente processamento não é um problema, e faz sentido não se importar tanto com o que acontece por de baixo dos panos e que linguagem estamos usando se queremos garantir uma abstração que faz sentido. E por isso a programação funcional tem sua segunda chance.
Além disso, um modelo que faz sentido para concorrência e paralelismo com certeza é a programação funcional principalmente por suas vantagens em processamento.

De um tempo para cá a programação funcional vem regenerando-se e se mesclando em linguagens modernas, como Python, Julia, Java, Ruby, Clojure e - por último mas não menos importante - JavaScript.
Estas linguagens estão adquirindo elementos funcionais como expressões lambdas. E cada vez mais linguagens modernas vão passar a funcionalidades de programação funcional em breve ou já tem em seu core.

-- Você disse, JavaScript? Aquela linguagem de script usada em programação web?

-- Sim!

O JavaScript provou ser uma tecnologia importante, e que veio para ficar - por longo tempo. Basicamente porque é Javascript que roda por trás dos navegadores e devido a isso ela poder ser "renascida", extendida, com novas estruturas providas por bibliotecas como o React, o jQuery e tantas mais. Isto está intimamente relacionado com a sua identidade como "linguagem de programação funcional". Compreendermos a aplicação de estruturas e algoritmos provenientes da programação funcional nos será útil por longo tempo, independentemente de nível e/ou habilidades de quem a procura.

-- Por que javascript pode ser funcional?

O javascript assim como boa parte das linguagens, tem suporte a funções de primeira ordem, ou seja, suas funções podem ser passadas como argumento de outras funções. Além disso essas funções podem ser compostas chamando umas as outras como `a(b())`. Javascript tem suporte a funções anônimas e com "Arrow Functions" introduzidas na sua versão 5, é possivel tornar a linguagem cada vez mais funcional.

Não se engane no papo de paralelismo e concorrência: Javascript é uma linguagem single thread.
- explicar single thread
Mesmo javascript nao sendo uma linguagem puramente funcional podemos utilizar alguns principios funcionais no nosso codigo

-- Por que devo procurá-la então?

A programação funcional é muito poderosa, robusta e elegante; extremamente útil para a manipulação de grandes estruturas de dados. Podemos obter diversas vantagens com JavaScript — uma linguagem de script do lado do cliente - se usada como o meio da aplicação do paradigma funcional em tarefas como, respostas ao dom, exibir de forma ordenada a resposta de uma Api e tantas outras das quais precisam os nossos modernos websites.

Enquanto OOP depente diretamente um estado mutavel, os metodos chamados devem mutar o estado do atual "self" ou "this". A imutabilidade também pode ser importante para garantir menos bugs.

Para melhores aplicações precisamos de maneiras simples e possiveis para tal e a programação funcional te ajuda a escrever melhores programas and "reason"(n sei como traduzir) sobre os problemas que você quer resolver.

Muitas pessoas comentam que aparenta dificil de primeira vista, mas é pura questão de adaptação. Quem tem um background de programação procedural pode ter um pouco de dificuldade para se adaptar a um paradigma novo. Mas é similar a aprender OOP de novo ou aprender programação de logo.
Isso acontece pois você já está familiar com muitos termos e formas de pensar, como por exemplo, utilizar estruturas como "for" ou "while" para fazer loops ou "if" ao invés de pattern matchings. E da mesma forma, é um periodo de tempo até pegar todos os jargões e passar a ler de forma clara até entender seus fundamentos.

Uma das maiores vantagens são a sua mantenabilidade
- Declaratividade são uteis
- Front end e estado imutavel.

Neste livro, aprenderemos grande parte do necessário sobre a programação funcional com JavaScript, a emponderarmos aplicações web mediante o uso de "JavaScript Funcional", a desbloquear seus poderes secretos permitindo-nos escrever programas mais curtos e poderosos, mais rápidos, pois num piscar de olhos são transmitidos pela camada TCP devido ao ínfimo tamanho. Veremos a ideia central do paradigma funcional e como aplicá-lo com o auxílio do JavaScript, um passo-a-passo de problemas e precauções que podem surgir, e juntamente, a programação orientada a objetos que será o nosso auxílio - "auxílio do auxílio".

Este exemplo não nos apresentou, mas nem de longe, o que a programação funcional com JavaScript tem a oferecer. Veremos exemplos ainda mais poderosos da abordagem funcional.