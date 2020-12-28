const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // console.log(width);
  // console.log(height);

  const { offsetWidth: width, offsetHeight: height } = hero; // same as line 5 and 6
  let { offsetX: x, offsetY: y } = e;
  
  // console.log(x, y);
  // console.log(this,  e.target);
  console.log(x,  width);
  
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / width * walk) - (walk / 2));
}

hero.addEventListener('mousemove', shadow);