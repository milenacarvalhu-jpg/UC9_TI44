/*
Faça um programa que permita que 
usuário cadastrar uma agenda telefônica,
pedindo nome e telefone, a cada item 
inserido pergunta se ele deseja inseir
um novo, no máximo 5 itens. No final 
exiba todos itens da lista
*/

const input = require("../input");

/*(async()=>{

console.log("agenda telefonica ☎️")
console.log("Cadastre-se:")
console.log("Digite seu nome, Numere")

    let agenda = [0]
    console.log(`Nome ${agenda.user1[nome = await input()]} e seu numero ${agenda.user1 = [numero = await input()]}`)
    
    console.log(agenda.user1.nome)
    console.log(agenda.user1.numero)


})();
*/

(async()=>{


        console.log("agenda telefonica ☎️")
        console.log("Cadastre-se:")

        let agenda = []
        let user = []

        for(l = 5 ;l > 0; l--)
        {
            let cont = await input();
            if(cont == "sim")
            {
                console.log("Deseja continuar:")
                cont = await input();
                console.log("Digite seu nome:")
                agenda[i] = (user = [nome = await input()])
                console.log("Digite seu numero:")
                agenda = (user = [numero = await input()])
            }

                
        }      
    
    })();