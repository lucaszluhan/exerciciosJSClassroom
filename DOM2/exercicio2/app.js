const nav = document.getElementsByTagName('nav')[0];
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.background = 'blue';
nav.style.padding = '5px';

let imgOff = false;
const img = document.getElementsByTagName('img')[0];
img.style.height = '100px';
img.onclick = () => (img.style.display = 'none');

const h1 = document.getElementsByTagName('h1')[0];
let clicado = false;
h1.onclick = () => {
   if (!clicado) {
      h1.innerText = 'Texto 2';
      clicado = true;
   } else if (clicado) {
      h1.innerText = 'Texto 1';
      clicado = false;
   }
};
