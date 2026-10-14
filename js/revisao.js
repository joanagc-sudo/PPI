//definir variaveis
var b;
let a;
const c=3.14;

//if else; for; switch

//String, Number, null, undefided

console.log("O tipo da variável B: "+ typeof(b));

a=2;
console.log("O tipo da variável B: "+ typeof(a));

if(a==b){
    console.log("O valor dessas variáveis é igual");
}

if(!(a===b)){
    console.log("O valor dessas variáveis são difrentes")
}

var itensChurrasco = [];
itensChurrasco.push("costela");
itensChurrasco.push("pão de alho");
itensChurrasco.push("linguiça");
itensChurrasco.push("romops");

for ( let i=0; i<itensChurrasco.length-1; i++){

}

itensChurrasco.forEach((e, i)=>{
    console.log(i+"-"+e);
});

nome = "João Henrique Marcelo Boss";

console.log(nome.split('').reverse().join(''));

//funções com array
//reverse, join, map

itensChurrasco.map((e)=>{
    console.log(e.length);
});

//filter
//console.log(itensChurrasco.filter((e,i)=>{return i!=3}));
//filtrar 
console.log(itensChurrasco.filter((e,i)=>{
    return !e.split("").includes("p");
}))

console.log(JSON.stringify(itensChurrasco));

