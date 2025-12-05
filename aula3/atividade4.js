const input = require("../input");

(async() =>{

    console.log("Voce quer ganhar um abraso y/n");
    let usuario = await input();
    usuario = usuario.toLowerCase();

    if(usuario =="y")
    {
        console.log("voce ganhou u abraco");
    }
    else if(usuario =="n")
    {
     console.log("voce ganhou 50 reais");
    }
    else if(usuario !="y" || usuario !="n")
    {
        console.log("Digite apenas y ou n")
    }
})();
