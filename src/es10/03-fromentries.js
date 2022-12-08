const transformar = [['nombre', 'Leopoldo'],['edad','35']]
const entries = new Map(transformar)
console.log(transformar)
console.log(Object.fromEntries(transformar))
console.log(Object.fromEntries(entries))