
let titulo = document.querySelector (".titulo");
console.log (titulo.textContent);
titulo.textContent = "fica grande";



let pacientes = document.querySelectorAll(".paciente");
for(i = 0; i< pacientes.length; i++ ) {
   
    console.log (pacientes);

let paciente = pacientes[i];
let tdPeso = paciente.querySelector(".info-peso");
console.log(tdPeso);
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
console.log(tdAltura);
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let pesoEhValido = true;
let alturaEhValida = true;

if (peso <= 0|| peso >=100) {
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00){
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false; 
}
if(pesoEhValido && alturaEhValida){
    let imc = peso/ (altura*altura);
    tdImc.textContent = imc;
}  else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}

}
