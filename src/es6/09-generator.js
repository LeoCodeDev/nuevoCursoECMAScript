function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Leo','Veri','Sammy','Francia']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)