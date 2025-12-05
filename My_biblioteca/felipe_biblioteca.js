function random(inferior=0, superior=1, tipo='float'){
    if(superior<inferior)
    {
        console
            .error("Numero superior deve ser maior que o numero");
        return;
    }

    switch(tipo){
        case 'float': 
            return Math.random()
                *(superior+1-inferior)+(inferior);
        case 'int': 
            return Math.floor(Math.random()
                *(superior+1-inferior))+(inferior);
    }   
}


function validarEmail(email) { //fucao para validacao de email
    // Expressão regular para um formato de e-mail comum
    const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    // O método test() da regex retorna true ou false
    return regex.test(email);
}


function validarTelefone(telefone) {
    // Regex para validar o formato brasileiro comum (10 ou 11 dígitos, com DDD opcional)
    const regex = /^\(?\d{2}\)?\s?(\d{4,5})\-?\d{4}$/;
    
    return regex.test(telefone);
}

module.exports = { random, validarEmail,validarTelefone}