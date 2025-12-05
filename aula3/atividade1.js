const input = require("../input");

(async() => {
    console.log("Qual é o seu saldo:")
    let saldo = Number( await input());

    if(saldo > 5 && saldo!=NaN){

        let button = false;
        console.log("Precione o botao correspondete ao seu pedido !")
        let entrada =  await input();
        
        if(entrada =="42"){
            button = true;
            
        }else{console.log("nao temos este produto volte outra hora!") 
            button==false;
        }

        if(button)
        {
            console.log("pegue uma coca-cola")
        }
        else{
             let invalido = saldo -5;
             console.log(`Esta faltando ${invalido}`)
        }
    }
    else{console.log("saldo insuiciente")}
})();
