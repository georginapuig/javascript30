const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');

const handleCheck = e => console.log(e);
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));