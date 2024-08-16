const name = "Sahil"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sahil-sk-com')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newStringOne = "   Sahil   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahil.com/sahil%20kamila"

console.log(url.replace('%20', '-'));

console.log(url.includes('sahil'));

console.log(gameName.split('-'));











