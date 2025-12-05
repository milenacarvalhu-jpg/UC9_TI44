const { clear } = require("console");
const input = require("../input");

// Tamanho do lanche / combo (trabalhar com strings)
//Crie um programa que peça o tamanho do combo: P, M ou G.
//Converta a entrada para maiúsculo (ex.: tamanho.toUpperCase()).
//Use switch(tamanho) para:
//○	P: "Combo Pequeno escolhido (R$ 15.00)."
//○	M: "Combo Médio escolhido (R$ 20.00)."
//○	G: "Combo Grande escolhido (R$ 25.00)."
//○	default: "Tamanho inválido."
(async()=>{

    switch(await Menu())
    {
        case "P":
            console.log("Combo Pequeno escolhido (R$ 15.00)");
            break;
        case "M":
            console.log("Combo Médio escolhido (R$ 20.00)")
            break
        case "G":
            console.log("Combo Grande escolhido (R$ 25.00)")
        default:
            console.log("Tamanho inválidoo");
    }

})();

async function Menu(final)
{
      console.log("Qual tamanho do lache??")
    console.log("P: Combo Pequeno (R$ 15.00)")
    let p = parseFloat(15.50)
    console.log("M: Combo Médio (R$ 20.00)")
    let m = parseFloat(20.00)
    console.log("G: Combo Grande (R$ 25.00)")
    let g = parseFloat(25.00)
    console.log("----------------------------------------")

    tamanho = await input();
    return final = tamanho.toUpperCase();
    
} 

