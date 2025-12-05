const { clear } = require("console");
const input = require("../input")

// faca uma atividade que soteia um numero de 1 a 10 ate o usuarioa acertar
let nUsuario;
let tentativas = parseInt(10);
let nSorteado = Math.floor(Math.random()* 10);

(async()=>{

    console.log("Tente acerta o numero que eu estou pensado de 1 a 10:");
    do{
        //console.log(nSorteado)

        console.log("Digite sua sugestao :")
        let nUsuario = await parseInt( input());
        tentativas--;
        console.log(`Voce tem mais ${tentativas} tentativas`)

    }while(nUsuario != nSorteado || tentativas < 0)
    if(nUsuario == nSorteado) console.log("Voce acertou o numero")
})();