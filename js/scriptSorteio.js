console.log(window.screen);
window.document.body.innerHTML="ola"
document.body.style.backgroundColor="aliceblue"

let div = document.createElement("div");

let pMin=document.createElement("p");
let pMax=document.createElement("p");

//campo peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="minimo"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputMinimo"
div.appendChild(temp)

//campo peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="maximo"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputMaximo"
div.appendChild(temp)

//add botao
div.appendChild(document.createElement("br"))
tmp=document.createElement("button");
tmp.id="btnSortear";
tmp.innerHTML="Sortear"
div.append(tmp);

tmp.addEventListener("click", ()=>{
    inputPeso=document.getElementById("inputMinimo")
    inputAltura=document.getElementById("inputMaximo")
    min=Number.parseFloat(inputMinimo.value)
    max=Number.parseFloat(inputMaximo.value)
    sorteio=peso/(altura*altura);
    console.log(imc)
    //exibir
    result=document.createElement("p");
    result.innerHTML=imc
    div.appendChild(result)
})

