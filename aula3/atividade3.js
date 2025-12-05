const input = require("../input");

(async() =>{
    console.log("----------Verificado de numer pares e inpares---------- ");
    console.log("Digite um numero :")
    let n = Number( await input());
    if(isNaN(n))
    {
        console.log("isso nao é um numero, digite um numero por favor ! ")
    }
    else{
        
        if(n % 2==0)
        {
            console.log(`O numero ${n} é par !`)
        }
        else{
            
            console.log(`O numero ${n} é impar !`)
        }
    }
})();