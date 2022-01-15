//Exemplo 1:
let array = [1, true, null, undefined, 'katia']

array.forEach(e => console.log(e))


//Exemplo 2:
const numbers = [1, 2, 3, 4, 5, 6]

let quad = numbers.map(num => num * num)

console.log(quad)


//Exemplo 3:
const numbers = [1, 2, 3, 4, 5, 6]

let quad = numbers.filter(num => num % 2 == 0)

console.log(quad)
console.log(numbers)


//Exemplo 4:
const numbers = [1, 2, 3, 4, 5, 6, 2]

let quad = numbers.find(num => num == 2)

console.log(quad)
console.log(numbers)


//Exemplo 5:
const numbers = [1, 2, 3, 4, 5, 6, 2]

let quad = numbers.reduce(
    (acumulador, elementCorrente) => acumulador + elementCorrente
)

console.log(quad)


//Exemplo 6:
const numbers = [1, 2, 3, 4, 5, 6, 2]

let quad = numbers
.filter(num => num % 2 == 0)
.reduce((acumulador, elementCorrente) => acumulador + elementCorrente
)

console.log(quad)


//Exemplo 7:
const numbers = [1, 2, 3, 4, 5, 6, 2]

let quad = numbers
  .map(n => n + 3)
  .filter(n => n % 2 == 0)
  .reduce((acumulador, elemtCorrente) => acumulador + elemtCorrente)

console.log(quad)


