// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = 'georgina';
let name2 = name; // georgina
console.log(name, name2); // georgina georgina
name = 'geo';
console.log(name, name2); // geo georgina

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
// You might think we can just do something like this:
// team[3] = 'Lux';
// however what happens when we update that array?
// copy by reference
console.log(players, team); // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);
// now when we update it, the original one isn't changed
const team5 = Array.from(players);
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
name: 'georgina',
age: 28
};

// and think we make a copy:
const captain = person;
captain.number = 99;
// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  