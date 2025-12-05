

// exemplo de criacao de função anonima (() => {

// })();

const input = require("../input");


(async () => {
     console.log("Qual é a sua idade :")
        let idade= await input();
        console.log(idade);
})();
