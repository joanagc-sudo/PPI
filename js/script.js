//no navgdor o js tem window

console.log(window.screen);
window.document.body.innerHTML="ola"
document.body.style.backgroundColor="aliceblue"

let div = document.createElement("div");

let pNome=document.createElement("p");
let pPeso=document.createElement("p");
let pAltura=document.createElement("p");

//campo nome
document.body.appendChild(div);
temp=document.createElement("label");
temp.innerHTML="Nome"
div.appendChild(temp)
temp=document.createElement("input")
temp.id="inputNome"
div.appendChild(temp);


//campo peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="peso"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputPeso"
div.appendChild(temp)

//campo altura
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="altura"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputAltura"
div.append(temp)

//add botao
div.appendChild(document.createElement("br"))
tmp=document.createElement("button");
tmp.id="btnCalcular";
tmp.innerHTML="Calcular"
div.append(tmp);

tmp.addEventListener("click", ()=>{
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputPeso")
    peso=Number.parseFloat(inputPeso.value)
    altura=Number.parseFloat(inputAltura.value)
    imc=peso/(altura*altura);
    console.log(imc)
    //exibir
    result=document.createElement("p");
    result.innerHTML=imc
    div.appendChild(result)
})

