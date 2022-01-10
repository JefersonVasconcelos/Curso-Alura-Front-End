console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}



for(let cont = 0 ; cont < 3; cont ++){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        
    }
 
}



//O while sempre 
//precisará de uma expressão condicional que definirá quando o laço deve ser interrompido.

//Correta. Muito bem! Lembre-se, essa expressão condicional precisará ser informada 
//dentro dos parênteses do while e pode ainda utilizar qualquer um dos 
//operadores de comparação e operadores lógicos aprendidos no capítulo 5.

//Na expressão condicional do while é possível utilizar qualquer operador de 
//comparação (< [menor], > [maior], <= [menor ou igual], >= [maior ou igual], == [igual a]
//e != [diferente de]) e qualquer operador lógico (&& [and], || [ou]).

//Correta. Isso aí! Todos os operadores de 
//comparação e lógicos são válidos na expressão condicional do while! Use-os com sabedoria!