//exemplo de switch
const input = require("../input");

teste = await input();
switch(teste){
    case 1:
        console.log("valor case 1")
        break;
    case 2:
        console.log("valor case 2")
        break;
    default:
        console.log("nao foi dessa vez!")
}