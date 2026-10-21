let h3titulo = document.getElementById("titulo");
h3titulo.innerHTML = "I6 2026"

let h3 = document.createElement("h3")
//h3.innerHTML="ola"
document.body.appendChild(h3)
let p = document.getElementById("imc")
p.innerHTML = "IMC"
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let calcular = document.querySelector("#btn")
let  pimc = document.querySelector("#IMC")
let  classific = document.querySelector("#class")
let imagem = document.querySelector("#img")
 
calcular.addEventListener("click", () =>{

let peso = Number.parseFloat(inputPeso.value)
console.log(typeof(peso))
let altura = Number.parseFloat(inputAltura.value)

let imc = peso/ (altura*altura)
console.log(imc)
pimc.innerHTML = imc

if(imc<18.5){
    console.log("Abaixo do peso")
    classific.innerHTML="Abaixo do peso";
    imagem.innerHTML='<img src="img/abaixopeso.png">'

} else if(imc>=18.5 && imc<25){
    console.log("Peso normal")
    classific.innerHTML="Peso normal";
    imagem.innerHTML='<img src="img/normal.png">'

} else if(imc>=25 && imc<30){
    console.log("Acima do peso")
    classific.innerHTML="Acima do peso";
    imagem.innerHTML='<img src="img/sobrepeso.png">'

} else if(imc>=30 && imc<35){
    console.log("Obesidade grau 1")
    classific.innerHTML="Obesidade grau 1";
    imagem.innerHTML='<img src="img/obesidade1.png">'

} else if(imc>=35 && imc<40){
    console.log("Obesidade grau 2")
    classific.innerHTML="Obesidade grau 2";
    imagem.innerHTML='<img src="img/obesidade2.png">'
} else if(imc>=40){
    console.log("Obesidade grau 3")
    classific.innerHTML="Obesidade grau 3";
    imagem.innerHTML='<img src="img/obesidade3.png">'
}

 });