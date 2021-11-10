acessoAoSite();
mostrarMensagem();
dobro(6);
boasVindas('Lucas');
calcularMedia(80, 70, 95, 'Lucas');

console.log('**********');
console.log('exercicio 1');
console.log('**********');

let idade = 28;
console.log(`minha idade eh ${idade}`);

console.log('**********');
console.log('exercicio 2');
console.log('**********');

const numb1 = 2;
const numb2 = 6;
let soma = numb1 + numb2;
console.log(soma);
alert(soma);

console.log('**********');
console.log('exercicio 3');
console.log('**********');

const valorCompra = 200;
let numbParc = 3;
let valorParc = valorCompra / numbParc;
console.log(valorParc.toFixed(2));

console.log('**********');
console.log('exercicio 4');
console.log('**********');

let minutos = 30;
let segundos = minutos * 60;
console.log(segundos);

console.log('**********');
console.log('exercicio 5');
console.log('**********');

let valorPagar = 200;
let valorRecebido = 150;
let troco = valorPagar - valorRecebido;
console.log(troco);

console.log('**********');
console.log('exercicio 6');
console.log('**********');

const aluno = 'Lucas';
const notaA = 95;
const notaB = 98;
const notaC = 76;
const media = ((notaA + notaB + notaC) / 3).toFixed(0);
console.log(`O aluno ${aluno} ficou com media ${media}.`);

console.log('**********');
console.log('exercicio 7');
console.log('**********');

function acessoAoSite() {
   alert('Bem vindo ao site.');
}
console.log('Alerta de bem vindo');

console.log('**********');
console.log('exercicio 8');
console.log('**********');

function mostrarMensagem() {
   alert('Bem vindo a aplicacao exercicios de js!');
   console.log('Acesso a aplicacao exercicios de js');
}
console.log('alerta e log de acesso aplicacao');

console.log('**********');
console.log('exercicio 9');
console.log('**********');

function dobro(numbInt) {
   let dobro = numbInt * 2;
   alert(dobro);
}
console.log('alerta numero 12 ao carregar');

console.log('**********');
console.log('exercicio 10');
console.log('**********');

function boasVindas(nome) {
   alert(`Seja bem vindo ${nome}.`);
}
console.log('aleta de bem vindo com nome de usuario');

console.log('**********');
console.log('exercicio 11');
console.log('**********');

function calcularMedia(nota1, nota2, nota3, nome) {
   let media = ((nota1 + nota2 + nota3) / 3).toFixed(0);
   alert(`${nome}, sua media eh ${media}`);
   console.log(`Notas recebidas => Nota 1:${nota1}, Nota 2:${nota2}, Nota3:${nota3}`);
}
console.log('Alerta com media e nome do usuario, junto do console mostrando as notas no inicio.');
console.log('**********');
