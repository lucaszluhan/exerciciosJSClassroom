console.log('Ecercicio 1');

let produto = {
   preco: 90,
   descricao: 'mouse',
};
console.log(`O valor do atributo "descricao" é: "${produto.descricao}" e do atributo "preco" é: "${produto.preco}"`);

console.log('Exercicio 2');

let notebook = {
   Processador: 'I7',
   Memória: '16GB',
   Preço: 5000,
   HD: '1TB',
   SSD: '256GB',
};
for (let setup in notebook) {
   console.log(`${setup}: ${notebook[setup]}`);
}

console.log('Exercicio 3');

let aluno1 = {
   nome: 'Joao',
   nota1: 8,
   nota2: 6,
};
let aluno2 = {
   nome: 'Aline',
   nota1: 9,
   nota2: 4,
};
console.log(aluno1, aluno2);
let media1 = (aluno1.nota1 + aluno1.nota2) / 2;
let media2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log(`Media do(a) ${aluno1.nome}: ${media1}`);
console.log(`Media do(a) ${aluno2.nome}: ${media2}`);
console.log(`Media da turma: ${(media1 + media2) / 2}`);

console.log('Exercicio 4');

let alunoA = {
   name: 'Lucas',
   age: 28,
   skills: ['html', 'css', 'js', 'bootstrap', 'node.JS', 'react.JS'],
};
let alunoB = {
   name: 'Pedro',
   age: 40,
   skills: ['html', 'css', 'js', 'node.JS'],
};
let alunoC = {
   name: 'Jonas',
   age: 19,
   skills: ['html', 'css', 'js', 'react.JS'],
};
let alunoD = {
   name: 'Gabriel',
   age: 26,
   skills: ['html', 'css', 'js', 'bootstrap', 'node.JS'],
};
let alunoE = {
   name: 'Bruna',
   age: 22,
   skills: ['html', 'css', 'js', 'bootstrap'],
};

let alunos = [alunoA, alunoB, alunoC, alunoD, alunoE];

let skillSelector = (alunos, skill) => {
   for (let alunoss of alunos) {
      for (let skills of alunoss.skills) {
         if (skills == skill) {
            console.log(alunoss);
         }
      }
   }
};
skillSelector(alunos, 'react.JS');
