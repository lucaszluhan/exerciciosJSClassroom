let exercicio3 = document.getElementById('exercicio3');

function addContentList() {
   const words = ['banana', 'milho', 'tomate', 'dinheiro'];
   for (let word in words) {
      console.log(word);
      exercicio3.innerHTML += `<p>${words[word]}</p>`;
   }
}
addContentList();
