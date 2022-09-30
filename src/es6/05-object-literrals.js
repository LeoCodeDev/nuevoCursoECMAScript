/* enhanced object literals */

function newUser(user, age, coutry, uId, email){
    return {
        user,
        age,
        coutry,
        uId,
        email
    }
}

console.log(newUser('Clw3', 34, 'VE', 149286620, 'alb.mar.cta@proton.me'))