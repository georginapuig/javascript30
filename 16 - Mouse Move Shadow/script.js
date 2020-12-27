const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // console.log(width);
  // console.log(height);

  const { offsetWidth: width, offsetHeight: height } = hero; // same as line 5 and 6
  let { offsetX: x, offsetY: y } = e;
  
  console.log(x, y);
}

hero.addEventListener('mousemove', shadow);