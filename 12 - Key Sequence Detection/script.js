const pressed = [];
const secretCode = 'georgina';

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

