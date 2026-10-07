let nome="Romulo";
var sobreNome;

if(nome=="Romulo"){
    sobreNome="Beninca";
    let idade = 20;
    var pet = "dog";
    console.log("nome:" + nome + " sobreNome:"+sobreNome+" Idade:"+idade+" pet:"+pet);
    }
let idade = 30;
//console.log("nome:" + nome + " sobreNome:"+sobreNome+" Idade:"+idade+" pet:"+pet);
//Estruturas de seleção no JS
//== compara diferentes tipos de variaveis e === apenas com tipos iguais
if(idade==20){
    console.log("nome: "+nome)
} else{
    console.log("nome:"+ "Gustavo");
}
peso=54;
altura=1.68;
imc=peso/(altura*altura)
//classificação do IMC
if(imc<18.5){
    console.log("Abaixo do peso")
} else if(imc>=18.5 && imc<25){
    console.log("Peso normal")
} else if(imc>=25 && imc<30){
    console.log("Acima do peso")
} else if(imc>=30 && imc<35){
    console.log("Obesidade grau 1")
} else if(imc>=35 && imc<40){
    console.log("Obesidade grau 2")
} else if(imc>=40){
    console.log("Obesidade grau 3")
}

//switch case - repetição
a=2
switch(a){
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D"); break;
}

switch(true){
    case a**a==4: console.log("A"); break;
    case 2==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D"); break;
}

switch(true){
    case imc<=18: console.log("Abaixo do peso");
    case (imc>=18.5 && imc<25): console.log("Normal");
    case (imc>=25 && imc<30): console.log("Acima do peso");
    case (imc>=30 && imc<35): console.log("Obesidade grau 1");
    case (imc>=35 && imc<40): console.log("Obsidade grau 2");
    case (imc>=40): console.log("Obesidade grau 3");

}

//estrutura de repetição while
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//for
for(let i=0; i<5; i++){
    console.log(i);
}

//arrays
let carnesDoChurrasco = ["picanha", "costela", "alcatra", "fraldinha"];

carnesDoChurrasco.forEach((v1) =>{
    console.log(v1)
})

