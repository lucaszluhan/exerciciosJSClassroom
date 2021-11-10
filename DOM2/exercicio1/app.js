let input = document.getElementsByTagName('input');
let handleMenu = function () {
   if (!input[0].value) {
      alert('Digite seu nome!');
      return;
   }
   if (input[1].value == 1) {
      alert(`Olá, ${input[0].value}.`);
      return;
   }
   if (input[1].value == 2) {
      alert(`${input[0].value}, entrando no sistema.`);
      return;
   }
   if (input[1].value == 3) {
      alert(`Tchau, ${input[0].value}`);
      return;
   } else {
      alert(`Escolha uma opcao valida (1, 2 ou 3).`);
   }
};

let button = document.querySelector('button');
button.onclick = () => handleMenu();
