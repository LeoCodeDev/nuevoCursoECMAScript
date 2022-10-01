const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Whooooops!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));

/* Generadores Asincronos */

async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  console.log('Hello!!');


const namesArr = ['leo','veri','luci','sammy','kim'];
async function arrayOfName(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfName(namesArr);
console.log('After')