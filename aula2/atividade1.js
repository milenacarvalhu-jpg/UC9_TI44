const readline = require('../input');

(async() => {

    console.log("Qual é o seu nome :");
    let nome = await readline();
    console.log("Qual é a sua idade");
    let idade = await readline();    
    
    console.log(`qual é o seu nome ${nome} e qual é a sua idade ${idade}.`);
})();