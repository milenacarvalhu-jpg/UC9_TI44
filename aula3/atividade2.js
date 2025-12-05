const { Console } = require("console");
const input = require("../input");
const { text } = require("stream/consumers");

(async() =>{
    console.log("Voce tem o cartão de acesso  y/n ?");
    
    let hasCard = await input(); 
    hasCard = hasCard.toLowerCase();
    console.log(hasCard)
    if(hasCard == "y" || hasCard =="n")
    {
        if(hasCard =="y")
        {
            console.log("Passe o cartão e abra aporta!")
        }
        else if(hasCard=="n")
        {
            console.log("Digite a senha: ")
            let senha = await input();
            if(senha.includes("senac123"))
            {
                console.log("porta aberta")
            }
            else{
                console.log("Acesso negado !")
            }

        }

    }
    else{console.log("tente novamente !")}
})();