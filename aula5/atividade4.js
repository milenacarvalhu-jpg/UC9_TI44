//atividade desconto
const input = require("../input");

(async()=>{
    console.log("Qual combo vc deseja ??")
    console.log("digite 1 para So lanche")
    console.log("digite 2 para lache + batata")
    console.log("digite 3 para lache + batata + refrigerante")
    let pedido = Number(await input());

    switch(pedido)
    {
        case 1:
            console.log(`Voce escolheu opcao 1 So lache `)
            break;
        case  2:
            console.log(`Voce escolheu opcao 2 lache + batata`)
            break;
        case vt >= 20:
            console.log(`Voce escolhey opcao 3 lanche + batata + refrigerante`)
            break;
        default:
            console.log("tente novamente")
    }

})();