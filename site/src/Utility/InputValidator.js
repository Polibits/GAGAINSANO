function validEmail(email) {
    var veredict = true;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if(emptyInput(email)){
        veredict = false;
    } else {
        if(SQLInjectionContent(email) == true){
            veredict = false;
        } else {
            const formatedEmail = email.match(regex);
            if(formatedEmail != null){
                if(formatedEmail[0] != email)
                    veredict = false;
            } else {
                veredict = false;
            }
        }
    }

    return veredict;
}

function validPassword(password) {
    const lettersRegex = /[a-z]/;
    const numbersRegex = /[0-9]/
    var veredict = true;

    if(emptyInput(password)){
        veredict = false;
    } else {
        const letters = password.match(lettersRegex);
        const numbers = password.match(numbersRegex);

        if(SQLInjectionContent(password) == true) {
            veredict = false;
        } else if(letters == null || numbers == null) {
            veredict = false;
        }
    }

    return veredict;
}

function validInput(input) {
    if(emptyInput(input)){
        return false;
    } else if(SQLInjectionContent(input)){
        return false;
    }
    return true;
}

function SQLInjectionContent(input) {
    var veredict = false;
    const regex = /['%=]|(OR|SELECT|WHERE|DROP|DELETE|UPDATE|EXISTS|BETWEEN|NULL|ABORT)/;

    const forbiddenCharacters = input.match(regex);

    //console.log(forbiddenCharacters);
    if(forbiddenCharacters != null){
        veredict = true;
    }

    return veredict;
}

function emptyInput(input) {
    if(input == '' || input == null){
        return true;
    }
    return false;
}

module.exports = {
    SQLInjectionContent,
    validEmail,
    validPassword,
    validInput
}