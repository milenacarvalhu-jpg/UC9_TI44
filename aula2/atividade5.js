const input = require("../input");

(async() =>{
    console.log("Digite um numero:")
    n = await input();

    n2 = n * 2
    
    console.log(`O dobro é numero é ${n2}.`)
})();