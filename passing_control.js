/*

Generators have the ability to yield control to other generators,
this is done by using the `yield*` statement

*/

function* myGen () {
  yield 1
  yield 2
  yield* myGen2()
  yield 5
}

function* myGen2 () {
  yield 3
  yield 4
}

let g = myGen()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

/*   Output:

Object {
  "done": false,
  "value": 1
}
Object {
  "done": false,
  "value": 2
}
Object {
  "done": false,
  "value": 3
}
Object {
  "done": false,
  "value": 4
}
Object {
  "done": false,
  "value": 5
}
Object {
  "done": true,
  "value": undefined
}

*/