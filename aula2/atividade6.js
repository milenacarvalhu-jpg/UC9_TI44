const input = require("../input");

(async() =>{

    console.log("Digite uma frase :")
    frase = await input();
    cont = frase.length; // conta quantos caracter tem em um vetor 
    console.log(cont)
})();