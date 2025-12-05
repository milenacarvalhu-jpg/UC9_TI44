const input = require("../input");


let cont = Number();

(async()=>{
    
            console.log("Deseja continuar :(sim)")
    var continuar = await input();
    while(continuar =="sim"){

        console.log("Deseja continuar :(sim)")
        continuar = await input();

    }//do(continuar =="sim")

})();