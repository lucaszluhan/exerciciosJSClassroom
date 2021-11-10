let exercicio2 = document.getElementById('exercicio2');

function addContentList() {
   const words = ['arroz', 'feijao', 'bolinho', 'pepino'];
   for (word of words) {
      exercicio2.innerHTML += `<p>${word}</p>`;
   }
}
addContentList();
