const name = "Devin "
const age = 20

// console.log(name + age + " years"); //--> not properly readable and is unrealiable
// To fix this problem, we use placeholders using ${} and quote string with backtick '`'

console.log(`Hello! My name is ${name} and I am ${age} years old`);

const gameName = new String('devin-dc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   devin    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devin.com/devin%20dsilva"

console.log(url.replace('%20', '-'))

console.log(url.includes('google'))

console.log(gameName.split('-'));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split