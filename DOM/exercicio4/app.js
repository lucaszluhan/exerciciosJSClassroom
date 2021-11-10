let section = document.querySelector('section');
console.log(section);

section.style.backgroundImage = 'url(./a.png)';
section.style.backgroundRepeat = 'no-repeat';
section.style.backgroundSize = 'cover';
section.style.height = '100vh';
section.style.display = 'flex';
section.style.justifyContent = 'center';

let body = document.querySelector('body');
body.style.backgroundColor = 'black';

let p = document.createElement('p');
p.innerText = 'Corre';
p.style.color = 'white';
p.style.paddingTop = '50px';
section.appendChild(p);
