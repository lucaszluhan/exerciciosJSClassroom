console.log('Exercicio 1');

for (let i = 5; i <= 25; i++) {
   console.log(i);
}

console.log('Exercicio 2');

for (i = 10; i > 0; i--) console.log(i);

console.log('Exercicio 3');

for (i = 1; i <= 10; i++) console.log(`${i}x6 = ${i * 6}`);

console.log('Exercicio 4');

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
console.log(`O primeiro mes eh ${meses[0]} e o ultimo é ${meses[meses.length - 1]}`);

console.log('Exercicio 5');

for (let i = meses.length - 1; i >= 0; i--) {
   console.log(meses[i]);
}

console.log('Exercicio 6');

let notas = [10, 7, 8, 5, 9, 5, 4, 3, 9, 5];

let numb = 1;
notas.forEach((element) => {
   console.log(`${numb}ª nota: ${element}`);
   numb++;
});

console.log('Exercicio 7');

let media = (notas) => {
   let soma = 0;
   notas.forEach((element) => {
      soma = soma + element;
   });
   let media = soma / notas.length;
   console.log(`A media das notas é ${media}`);
};

media(notas);

console.log('Exercicio 8');
let j = 1;
let soma = 0;
while (j <= 10) {
   soma = soma + j;
   j++;
}
console.log(`A soma dos numeros inteiros de 1 a 10 é: ${soma}`);
