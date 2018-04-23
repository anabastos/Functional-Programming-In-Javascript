# Functional Programming in Javascript

Javascript approach to functional programming.
Our book is still in portuguese but we will translate it later 🤷🏻‍️

* [Summary](README.html)
* [Introduction](00-introduction/00-introduction.html)
* [Category Theory](01-category-theory/01-category-theory.html)
* [Lambda Calculus](02-λ-calculus/02-λ-calculus.html)
* [Pure Functions](03-pure-functions/03-pure-functions.html)
* [High Order Functions](04-higher-order-functions/04-higher-order-functions.html)
* [Functional Methods With Arrays](05-functional-methods-with-arrays/05-functional-methods-with-arrays.html)
* [Currying vs Parcial Application](06-currying-vs-partial-application/06-currying-vs-partial-application.html)
* [Composition and Pipeline](07-composition-and-pipelines/07-composition-and-pipelines.html)
* [Functors](08-functors/08-functors.html)
* [Monads](09-monads/09-monads.html)

### Authors

- [AnaBastos](https://github.com/anabastos)
- [Lukkaslt](https://github.com/lukkaslt)
- [Wdiasvargas](https://github.com/wdiasvargas)
- [Samverneck](https://github.com/samverneck)

[Template](https://github.com/BjoernSchotte/gitbook-template)

## Collaborating

### Installing
npm install -g gitbook-cli

### Running
`gitbook serve`

### Build to gh-pages
```bash
gitbook install && gitbook build
cp -R _book/* .
git clean -fx _book
```