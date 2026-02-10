console.log('Rosa');

const nome = 'Rosa';

let curso = 'JS'; 
curso = 'HTML/CSS'; 
// let é possivel redefinir o valor
console.log(nome);
console.log(curso);

const nav = document.querySelector('nav');
const produtos = document.querySelector('.produto a')
console.log (nav);
console.log (produtos);
console.log (produtos.innerHTML);
console.log (produtos.href);
console.dir(nav);

nav.style.backgroundColor = "black";
nav.style.padding = "1rem"; 
//adiciona classe com classList
nav.classList.add('ativo');

const texto = 'Curso de JavaScript';
const condicao = 'Novo';
const frase = texto + ': ' + condicao;
console.log(frase);

//Para utilizar aspas simples ou dupla envolvendo o texto, como "Joguei" ela então sera envolvida por aspas simples para o js não ler como string e vice-versa
const phrase = 'Isso é o meu "jogo"';
console.log(phrase);

let total = 0;
const compras = 30;
const imposto = 10;
total = compras + imposto;
const dobro = total*2;
const divisao = total/2;
const desconto = total-30;
console.log(total);
console.log(dobro);
console.log(divisao);
// string com string só faz a junção
const strings = '20' + '20';
console.log(strings);

const numbers = 20 + 20;
console.log(numbers);

//é possivel transformar string em number
const transformar = Number("25") + 20.5;
console.log(transformar);

//obejto organiza e associa os dados
const livro = {
  nome: 'Senhor dos Aneis',
  ano: 1954,
  autor: 'J.R.R. Tolkien' 
};
const filme = {
  nome: 'Senhor dos Aneis',
  ano: 2001,
  autor: 'J.R.R. Tolkien',
  diretor: 'Peter Jackson'
};
console.log(livro);
console.log(2026 - livro.ano);
console.log(livro.ano + " - " +filme.diretor);

//tudo é objeto no js
const txt = document.querySelector('p');
console.log(txt.innerHTML);
//O txt.innerHTML seria assim const txt = { innerHTML: "Esse Texto"}
console.log(txt.clientHeight); // altura do texto

console.log(livro.autor.toUpperCase());

const decimal = 1222.99;
console.log(Number(decimal.toFixed())+ 3); // arredonda valor em string , podemos ja transformar em numero usando a função Number

const resultado = decimal.toFixed().length.toFixed();
console.log(resultado);