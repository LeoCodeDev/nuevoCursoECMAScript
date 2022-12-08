const string = 'Este curso es bueno bueno bueno'

const replacedString = string.replaceAll('mucho', 'muchisimo')

console.log(replacedString)

function recursiveReplace(string, original, replacement){

    string = string.replace(original,replacement)

    if(!string.match(original)){

        newString = string

        return

    }else if(string.match(original)){

        recursiveReplace(string,original,replacement)
    }
    return newString
}

console.log(recursiveReplace(string, 'mucho', 'muchisimo'))