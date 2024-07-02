import { ehUmCPF } from "./valida-cpf.js";
const campoDosFormularios = document.querySelectorAll("[required]");

campoDosFormularios.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
});
function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
   console.log(soma) 
  }
}
let soma = 0
if(soma == 0){
const naosei = document.querySelector('.formulario__imagem') 
naosei.classList.add('li')
} else{
  alert('voce exedeu o limite maximo!')
}
