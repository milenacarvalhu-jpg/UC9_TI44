const input = require("../input")

(async()=>{

    console.log("tente acerta o numero que eu estou pensando de 0 a 10")
    console.log("Digite seu palpite");

        for(n = 10 ; n > 0 ; n--)
        {
            let nS = Math.floor(Math.random() * 10);
            let user =await parseInt(  input());
            if(nS == user)
            {
                console.log("Voce acerto")
                n = 10
            }
            else{
                console.log("tente novamente:")
            }
        }

})();