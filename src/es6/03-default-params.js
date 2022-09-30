function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Leopoldo', 35, 'Venezuela');

/* Valores por defecto ES6 */

function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}

newAdmin('Vericar', 29, 'VE/PT');
