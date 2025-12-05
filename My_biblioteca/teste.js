const {validarEmail} = require("./felipe_biblioteca.js");
const myB = require("./felipe_biblioteca.js")
const input = require("../input");

(async()=>{
    let lista = []
    let usuer = []
    let email;
    let phone;
    
    
    for(let i = Number() ; i < 10; i++)
    {
        console.log("Digite seu emali")
    
        let pegaEmail = await input();
    
        if(validarEmail(pegaEmail))
        {
            console.log("Ceu email é valido")
        }
        else
        {
            console.log("Seu email é invalido")
        }
        console.log("Digite seu numero de telefone:")
    
        let pegaPhone = await input();
    
        if(myB.validarTelefone(pegaPhone))
        {
            console.log("Seu numero de telefone é valido")
        }
        else{
            console.log("Seu numero de telefone é invalido")
        }
        
        if(myB.validarTelefone(pegaPhone) && validarEmail(pegaEmail))
        {
            user = {
                     email : pegaEmail, 
                     phone : pegaPhone
            }

            lista.push(user)

            console.log(lista)
        }
    }

})();


