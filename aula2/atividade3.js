const input = require("../input");

(async() =>{
    console.log("Digite um numero:")
    n = await input();
    n = parseInt(n);
    console.log("Digite outro numero :")
    n1 = Number(await input()); //desta froma tambem faz uma conversao de string para numerica
    //n1 = parseInt(n1);

    n2 = n+n1;
    console.log(`A soma entre os numero é ${n2}.`)
})();