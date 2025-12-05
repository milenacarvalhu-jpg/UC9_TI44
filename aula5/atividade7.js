const { randomInt } = require("node:crypto");
const input = require("../input");

function Tigrinho()
{
    return  numer = randomInt(1,11);

}
(()=>{
    
    console.log("Vamos sorter um numero ??");

    switch(Tigrinho())
    {
        case Tigrinho() < 6:
            console.log("Nao foi dessa vez! 😒");
            break;
        case Tigrinho() > 6 && Tigrinho < 10:
            console.log("Voce ganhou uma sobremesa😁");
            break;
        case Tigrinho() ==10:
            console.log("Voce ganhou um combo completo");
            break
        default:
            console.log("tende novamente")
            
    }

    
})();