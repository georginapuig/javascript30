const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // px or ''
  // document.documentElement.style.setProperty(`--spacing`, 10 + px);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  console.log(suffix);
}

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
