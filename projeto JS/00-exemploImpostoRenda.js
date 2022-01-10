//João está criando uma aplicação para calcular o IR a partir do salário. 
//Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:


const salario = 3300.0;

//Está errado
//if(salario < 2600.0) 
    //console.log("A sua aliquota é de 15%");
    //console.log("Você pode deduzir até R$ 350");

//if(salario < 3750.0) 
    //console.log("A sua aliquota é de 22,5%");
   // console.log("Você pode deduzir até R$ 636");

    //Você pode deduzir até R$ 350
//A sua aliquota é de 22,5%
//Você pode deduzir até R$ 636


//Está Certo...
if(salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}        
if(salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}

//if (idade > 18 && idade < 65)
//{

//}
//Os operadores lógicos devem ter no lado esquerdo e direito uma expressão booleana.

//O operador lógico AND é representado pelos caracteres && e o OR pelo ||.
//Correta! AND é representado pelo && e OR pelo ||.