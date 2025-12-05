const { userInfo } = require("os");
const input = require("../input");

(async()=>{


    //tabela de precos

    let xSalada = 12.00;
    let xburger = 10.00;
    let mistoQuente = 8.50;
    let sucoNatural = 6.00;
    let refrigetante = 5.00;

    //-------------------------------------------------------

    // tabelas de combos

    

    //-------------------------------------------------------
    console.log("------Cardapio da lanchonete ------")
    // menu
    console.log("Digite 1 para X-Salada")
    console.log("Digite 2 X-Burger")
    console.log("Digite 3 Misto quente")
    console.log("Digite 4 Suco Naural")
    console.log("Digite 5 Refrigerante")
    console.log("-----------------------------------")

    usuario = Number(await input());    

    let valor = parseFloat();

    switch(usuario)
    {
        case 1:
            valor = xSalada;
            console.log("Voce escolheu um X-salada O valor a pagar é R$" + valor)
            break;
        case 2: 
            valor = xburger;
            console.log("Voce escolheu X-Burguer O valor a pagar é R$" + valor)
        break;
        case 3 :
            valor = mistoQuente;
            console.log("Voce escolheu Misto quente O valor a pagar é R$" + valor)
            break;
        case 4: 
            valor = sucoNatural;
            console.log("Voce escolheu Suco natural O valor a pagar é R$" + valor)
            break;
        case 5:
            valor = refrigetante;
            console.log("Voce escolheu um refrigerante O valor a pagar é R$" + valor)
            break;
        default:
            console.log("nenhuma das opções anteriores! tente novamente !")
    }
})();

