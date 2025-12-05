const input = require("../input");
//const toUpperCase = require("toUpperCase")

(async() =>{

    console.log("Qual é o seu nome :");
    nome = await input();
    nome = nome.toLowerCase();
    nomeM = nome[0].toUpperCase();

    console.log("Qual é o seu sobre nome :")
    sobre = await input();
    sobre = sobre.toUpperCase();
    sobre =sobre[0];

    console.log(`Citação ${sobre}.${nomeM}${nome} `)
})();