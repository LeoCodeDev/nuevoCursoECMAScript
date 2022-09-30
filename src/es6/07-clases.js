/* Declarando */
class User {};

/* instancia de una clase */
const newUser = new User();

class user {
    /* Metodo */
    greeting(){
        return 'Hello';
    }
};

const clw3 = new user();
console.log(clw3.greeting());

const veriveri = new user();
console.log(veriveri.greeting());

/* Constructor */

class user {
    /* Constructor */
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const leo = new user();

/* This */

class user {
    constructor (name) {
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const samantha = new user('Samantha');
console.log(samantha.greeting());

/* Getters y Setters */

class user {
    //Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n;
    }
}

const sammy = new user('Samantha', 7);
console.log(sammy.uAge);
console.log(sammy.uAge = 18);