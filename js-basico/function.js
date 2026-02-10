//sem argumentos
function logCurso(){
  const nome = 'JavaScript';
  const horas = '40 horas';
  console.log(nome,horas);
}
logCurso();
logCurso();
logCurso();
// com argumentos detro dos pareteses
function logCursos(nome,horas){
  console.log(nome,horas);
}
// so passou um dos argumentos
logCursos('HTML');
// passou todos os orgumentos
logCursos('CSS', '40');

function curso(nome){
  console.log(nome);
  return nome + ' Log';
}

const valor = curso('JS');
console.log(valor);

//no return posso pasar função, array, objetos

function kurso(nome, horas){
  console.log(nome, horas, 'horas');
  return{
    nome: nome,
    horas: horas,
  };
}
const retorno = kurso('JS', '40');
kurso('HTML', '20');
console.log(retorno.horas);