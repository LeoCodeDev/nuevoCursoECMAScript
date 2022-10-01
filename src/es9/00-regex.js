/* Regex */

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);

/* Propiedades de Propagacion */

const user = {userName:'Leopoldo', age: 34, country:'VE'}
const {userName, ...values} = user;

console.log(userName);
console.log(values);