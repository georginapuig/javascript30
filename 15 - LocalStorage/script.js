const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault(); // stop the page from reloading
}

addItems.addEventListener('submit', addItem);