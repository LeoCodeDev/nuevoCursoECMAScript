const regex = /\b(Apple)+\b/g

const fruits = 'Apple, Pine Apple, Apple pie, Banana, kiwi, strawberry'

for (const match of fruits.matchAll(regex)) {
    console.table(match)
}