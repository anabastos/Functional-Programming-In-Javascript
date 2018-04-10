const arity = fn => fn.length

const curry = (fn, ...args) => {
  console.log(fn, ...args)

  const resolver = (xs) => {

    xs.length > arity(fn)
      ? fn.apply(undefined, xs)
      : ((...args) => resolver(xs.concat(args)))

  return resolver(...args)
  }
}

const add = (x, y) => x + y

const curried = curry(add)
console.log(add(2))
// const add2 = add(2)
// console.log(add2(2)) //4
