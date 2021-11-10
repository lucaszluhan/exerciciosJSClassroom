let div = document.getElementsByTagName('div')[0];

function ate80() {
   let ate80 = Math.floor(Math.random() * 80) + 1;
   ate80 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
   return ate80;
}
function ate50() {
   let ate50 = Math.floor(Math.random() * 50) + 1;
   ate50 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
   return ate50;
}

div.onclick = () => {
   let numb1 = ate50();
   let numb2 = ate80();
   div.style.marginBottom = `${numb1}%`;
   div.style.marginRight = `${numb2}%`;
};
