const input = require("../input");

(async() =>{
    console.log("Digite uma frase contendo a palavra 'startup'");
    fraseUser = await input();
    console.log(fraseUser.replace("startup","emrpesa")) // replase pega um apalavra e faz alteracao epla palavra desejada
})();