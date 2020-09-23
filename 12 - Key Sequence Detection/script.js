const h1 = document.getElementsByTagName('h1')[0];
const h1Text = h1.innerHTML;
const pressed = [];
const secretCode = 'hi';

h1.addEventListener('click', (e) => {
  if (h1.innerHTML === h1Text) {
    h1.innerHTML = secretCode;
  } else {
    h1.innerHTML = h1Text;
  }
});

window.addEventListener('keyup', (e) => { 
  pressed.push(e.key);
  console.log(pressed);
  
  // pressed.splice(index, deleteCount);
  pressed.splice(0, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  } 
});

console.log(pressed);

