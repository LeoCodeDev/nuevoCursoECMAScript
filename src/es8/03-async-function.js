const fxAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Async!!'), 20000)
        : reject(new Error('Error!'));
    })
}

const anotherFx = async () => {
    const something = await fxAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFx();
console.log('after');