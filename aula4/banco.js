// atividade banco 
const input = require("../input");
(async()=>{
    let saldo = 100;
    let valor;
    let saque = Number();
    let deposito = Number();            //felipino???
    console.log("💸 Bem vindo ao banco Felipito ´ bank 🏦")
    console.log("Para depositar digite 1 ,para sacar digite 2 , para efetuar um saque digite 3, e para fazer um deposito digite 4  :")
    let resposta = parseInt(await input())
    if(resposta == 1)
    {
        console.log("Digite o valor que deseja depositar:")
        valor = Number(await input());
        saldo += valor
        console.log(`Seu saldo atual é ${saldo}`)   
    }
    else if(resposta == 2)
    {
        console.log(`Seu saldo atual é ${saldo}`)
    }
    else if(resposta == 3)
    {
        console.log("Digite o valor do seu saque :")
        saque = Number(await input())
        if(saque > saldo)
        {
            console .log("Saque invalodo, tente novamente😒👌 !")
        }
        else
        {
            saldo -= saque
            console.log(`Você efetuo um sque de ${saque} 😁💸`)
            console.log(`Seu saldo atual é : ${saldo} 💸😍`)
        }
    }
    else if(resposta ==4)
    {
        console.log("Digite o valor do seu deposito :")
        deposito = Number(await input())
        saldo += deposito
        console.log(`Você efetuou um deposuto de ${deposito}`)
        console.log(`Seu saldo atual é : ${saldo} 💸😍`)
    }
})();