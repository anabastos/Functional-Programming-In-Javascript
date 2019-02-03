# Functional Programming in Javascript

Javascript approach to functional programming.
Our book is still in portuguese but we will translate it later 🤷🏻‍️

* [Summary](README.html)
* [Introduction](00-introduction/00-introduction.html)
* [Lambda Calculus](01-λ-calculus/01-λ-calculus.html)
* [Pure Functions](02-pure-functions/02-pure-functions.html)
* [Currying vs Parcial Application](03-currying-vs-partial-application/03-currying-vs-partial-application.html)
* [Immutability](04-immutability/04-immutability.html)
* [Declarative Programming](05-declarative/05-declarative.html)
* [High Order Functions](06-higher-order-functions/06-higher-order-functions.html)
* [Recursion](07-recursion/07-recursion.html)
* [Composition and Pipeline](08-composition-and-pipelines/08-composition-and-pipelines.html)
* [Modules, Async, contracts, error handling](09-modules-and-async/09-modules-and-async.html)
* [Not using classes](10-classes/10-classes.html)
* [Tacit Programming](11-tacit/11-tacit.html)
* [Combinators](12-combinators/12-combinators.html)
* [Category Theory](13-category-theory/13-category-theory.html)
* [Functional Architecture](14-architecture/14-architecture.html)
* [FP Languages that compiles to JS](15-langs/15-langs.html)

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