const btn = document.querySelector('button');


function somar (){
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
  console.log(total);
  if(total<10){
    div.innerText = total;
  }else{
    console.log('Não é possivel adicionar mais')
  }
}
if(btn){
  btn.addEventListener('click', somar);
}