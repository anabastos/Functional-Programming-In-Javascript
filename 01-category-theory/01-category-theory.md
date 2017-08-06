# Teoria das Categorias

Teoria das categorias é um ramo da matematica abstrata que unifica outros campos da matematica,tal conceito teorico empondera a composição de funções, promove a modularidade, abstração, reusabilidade e componentibilidade de funções por possibilitar dividir problemas grandes em problemas menores.
Uma definição academica de teoria das categorias expressa categorias como uma coleção de dados que satisfazem algumas propriedades particulares:
Uma categoria esta sujeita e satisfaz os seguintes axiomas:
- Uma coleção de coisas chamadas de objetos por exemplo A,B,C... variando sobre o objeto.
- Uma coleção de coisas chamadas morfismos, as vezes chamadas de flechas por padrao f,g,h,... mais tarde α,β,φ,ψ,χ variando sobre o morfismo.
- Uma relação sobre morfismos e pares de objetos, comumente chamado de digitacao dos morfismos. A definiçõa padrao expressa como uma relação de f:a → b , para morfismo _f_ e objetos _a_ e _b_, tambem representado por a → b é o tipo de f, em que _f_ é u morfismo de A para B.
fonte _f_ = A e o alvo _f_ = B   sempre _f_: A → B.
- Uma operação binaria parcial em morfismos chamada de composição. Onde _f_:_g_ é a notação de composição dos morfismos  f e g tambem representado por g o f , ou ainda _gf_ , segundo a convenção f=g =g o f= gf.
- Para cada objeto A existe um morfismo distinto chamado de identidade em A. Por padrao idA, ou  id quando A esta limpa a partir do contexto, denota a identidade no objeto A.
De uma forma mais suscinta Teoria das categorias é sobre como nosso cerebro trabalha com informações, "teoria das categorias é sobre conectar pontos"

## Terminologia
Categorias ainda sao conjuntos com o mesmo tipo. Em javascript eles sao arrays ou objetos que contem variaveis que sao explicitamente declaradas como numbers, strings, booleans, Dates, Nós.

__*Morfismos*__ são funções puras, que dada uma entrada sempre retornam a mesma saida.

__*Operações Homomorficas*__ podem operar sobre varias categorias.

Teoria das categorias nos diz que quando temos 2 morfismos onde a categoria da primeira função é a entrada esperada de outra entao elas podem ser compostas. Teoria das categorias possui necessariamente 2 coisas:
 - 1 Objetos(em Javascript sao conhecidos como Tipos)
 - 2 Morfismos(em Javascript sao funções puras que so trabalham com tipos).
 Porem é necessario uma definicao mais precisa.

 *Objetos* em teorias das categorias sao mais como variaveis com tipos explicitos de dados e nao como coleções de propriedades como define Javascript

 *Morfismos* são funções puras que usam esses tipos.
 Usar teoria das categorias em javascript significa trabalhar um certo tipo por categoria. Tipos de dados sao numeros