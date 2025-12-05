const input = require(`../input`);


function soma(n1,n2)
{
    return n1 + n2;       
}

function sub(n1,n2)
{
    return n1 - n2;       
}

function div(n1,n2)
{
    return n1 / n2;       
}

function mult(n1,n2)
{
    return n1 * n2;       
}


(async()=>{

    console.log("------calculadora------")
    
    console.log("Para somar digite 1")
    console.log("Para subtrair digite 2")
    console.log("Para multiplicar digite 3")
    console.log("Para dividir digite 4")

    let resposta = await input();

    let func;

    switch(resposta)
    {
        case "1": func = soma; break;
        case "2": func = sub; break;
        case "3": func = mult; break;
        case "4": func = div; break;
        default: console.log("alternativa invalida!😒😒"); return;
    }
    
    console.log("Digite um numero:")
    let n1 = Number(await input())
    console.log("Digite outro numero:")
    let n2 = Number(await input())

    console.log(`O resultado é ${func(n1,n2)}😁😁`)


})();