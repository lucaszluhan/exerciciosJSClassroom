// exercicio 1
console.log('** Exercicio 1 **');

// const nome = 'Lucas';
// const peso = 72;
// const altura = 1.73;
// const imc = peso / (altura * altura);
let user = {
   nome: 'Lucas',
   peso: 72,
   altura: 1.73,
};

let imc = user.peso / (user.altura * user.altura);

if (imc >= 30) {
   console.log(`${user.nome} voce esta acima do peso.`);
} else console.log(`${user.nome} voce nao esta acima do peso`);

// exercicio 2
console.log('** Exercicio 2 **');

function calcularMedia(nome, n1, n2, n3) {
   let media = ((n1 + n2 * 2 + n3 * 3 + (n1 + n2 + n3) / 3) / 7).toFixed(1);
   let conceito;
   let resultado;

   if (media >= 9) {
      conceito = 'A';
   } else if (media >= 7.5) {
      conceito = 'B';
   } else if (media >= 6) {
      conceito = 'C';
   } else if (media >= 4) {
      conceito = 'D';
   } else conceito = 'E';

   conceito === 'A' || conceito === 'B' || conceito === 'C' ? (resultado = 'Aprovado') : (resultado = 'Reprovado');

   console.log(`Nome: ${nome}, Conceito: ${conceito}, Media: ${media}, Resultado final: ${resultado}`);
}
calcularMedia(user.nome, 5.8, 9.7, 8.6);
