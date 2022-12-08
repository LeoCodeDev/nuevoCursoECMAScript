const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos)

const multidimensional = new Set();

multidimensional.add(
    {
        nombre: 'Leopoldo',
        apellido: 'Martinez',
        cursos: ['poo', 'poo intermedio', 'ES6', 'React']
    }
)
.add({
    nombre: 'Vericar',
    apellido: 'De Espiritu Santo',
    cursos: ['poo', 'poo intermedio', 'ES6', 'React']
})

let copia = [
    ...new Set(multidimensional)
]

console.log(copia)