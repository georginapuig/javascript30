const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault(); // stop the page from reloading

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, // same as text: text
    done: false 
  };

  items.push(item);
  this.reset();
}

function populateList(plates = [], placeList) {
  placeList.innerHTML = plates.map().join('');
}

addItems.addEventListener('submit', addItem);