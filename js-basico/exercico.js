function livro(nome, ano, autor){
  const maiusculo = nome.toUpperCase();  
  const calculo = 2026 - ano;
  const frase = nome + ' por '+ autor;
  const objeto = {
    nome: maiusculo,
    calculo,
    frase,
  };
  return objeto;
}

const livroRetorno = livro('O senhor dos aneis', 1954, 'J.R. R. Tolkien');
console.log(livroRetorno);

// mais limpa
function book(nome, ano, autor){
  const objeto = {
    nome: nome.toUpperCase(),
    ano: 2026 - ano,
    frase: nome + ' por '+ autor,
  };
  return objeto;
}

const bookRetorno = livro('O senhor dos aneis', 1954, 'J.R. R. Tolkien');
console.log(bookRetorno);

// mais limpa ainda
function books(nome, ano, autor){
  return {
    nome: nome.toUpperCase(),
    ano: 2026 - ano,
    frase: nome + ' por '+ autor,
  };
}

const booking = livro('O senhor dos aneis', 1954, 'J.R. R. Tolkien');
console.log(booking);