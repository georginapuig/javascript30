const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  // minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);
  // hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
  console.log(hoursDegrees);
}

setInterval(setDate, 1000);