//atividade desconto
const input = require("../input");

(async()=>{
    console.log("Qual valor total da compra ??")
    let vt = Number(await input());

    switch(true)
    {
        case vt >= 100:
            console.log(`Voce ganhou o total de 20% de desconto valor total a pagar é ${vt-(20/100 * vt)}`)
            break;
        case vt >= 50:
            console.log(`Voce ganhou o total de 10% de desconto valor total a pagar é ${vt-(10/100 * vt)}`)
            break;
        case vt >= 20:
            console.log(`Voce ganhou o total de 5% de desconto valor total a pagar é ${vt-(5/100 * vt)}`)
            break;
    }

})();