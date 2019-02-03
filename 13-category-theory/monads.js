const isSomething = a => (a !== null && a !== undefined && typeof a !== 'number') || (typeof a === 'number' && !isNaN(a))

const maybe = a => isSomething(a) ? just(a) : nothing(a)

const just = a => a
const nothing = x => x

const either = (a, b) => {
    if (a && typeof a.value === 'function') {
        a = a.value(null)
    }
    if (b && typeof b.value === 'function') {
        b = b.value(null)
    }
    return isSomething(a) ? new Left(a) : new Right(b)
}


const cons = (x, xs) => [x].concat(xs);

const partial = (f, ...xs) => f.bind.apply(f, [null, ...xs]);

const range = n => Array.from({length: n}, (v, i) => i);

const range = n => Array.from({length: n}, (v, i) => i);


//https://gist.github.com/jbmusso/bcaafb36ab027ea6a13c#file-fold-js-L18
//https://github.com/kimhogeling/es6-monads/blob/master/sandbox.js
//https://github.com/kimhogeling/es6-monads/blob/master/Either.js