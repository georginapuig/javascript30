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

function populateList(platesList, plates = []) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);