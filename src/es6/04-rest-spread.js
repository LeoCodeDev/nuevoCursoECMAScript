/* Array destructuring */

let fruit = ['Apple', 'Banana']
let [a, b] = fruit;
console.log(a, fruit[1])

/* Object destructuring */

let user = {userName: 'Leopoldo', age: 34};
let {userName, age} = user;
console.log(userName, user.age);

/* Spread Operator */

let person = {name: 'Oscar', age: 28};
let country = 'MX';
let data = {id: 1,...person, country};

console.log(data);

/* Rest */

function sum(num, ...values){
    console.log(values);
    console.log(num + values[1]);
    return num + values[2];
}

console.log(sum(1, 1, 2, 3))
