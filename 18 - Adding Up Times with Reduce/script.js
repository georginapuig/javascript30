const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time) // iterate through node list
  .map(timeCode => { // iterate through each time
    const [mins, secs] = timeCode.split(':').map(parseFloat); // split in minutes and seconds and convert the string into a number
    return ((mins * 60) + secs) // return seconds of each video
  })
  .reduce((total, vidSeconds) => total + vidSeconds); //sum all seconds

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins,secondsLeft);