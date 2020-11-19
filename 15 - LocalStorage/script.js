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
  populateList(items, itemslist);
  this.reset();
}

function populateList(platesList, plates = []) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);