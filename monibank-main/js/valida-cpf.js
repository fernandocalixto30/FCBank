export function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");
  validaNumerosRepitidos(cpf);
  validaPrimeiroDigito(cpf);
}
function validaNumerosRepitidos(cpf) {
  const numerosRepitidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    -"99999999999",
  ];
  console.log(numerosRepitidos(cpf))
  return numerosRepitidos.includes(cpf);
  
}

function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;
  for(let quantidade = 0; quantidade < 9 ;quantidade++){
    soma += cpf[quantidade] * multiplicador
multiplicador--

  }
soma = (soma * 10) % 11
if(soma == 10 || soma == 11){
  soma =0

}
return soma  != cpf[9]

}

