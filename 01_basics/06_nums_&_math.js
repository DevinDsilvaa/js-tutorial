const score = 900
// console.log(score);

const balance = new Number(7)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(score.toFixed(2));

// const otherNum = 23.243
// const otherNum = 123.543
const otherNum = 9123.543
// console.log(otherNum.toPrecision(3));

const amount = 1000000; //-->difficult to quickly understand what amount it is whether 1 lakh or 10 lakh
// console.log(amount.toLocaleString()); //-->convert representation into US format
// console.log(amount.toLocaleString('en-IN')); //-->convert representation into our INDIAN format


// +*+*+*+*+*+*+*+*+*+*+*--MATHS--*+*+*+*+*+*+*+*+*+*+*+*+

console.log(Math.abs(-7));
console.log(Math.round(7.10));
console.log(Math.sqrt(100));
console.log(Math.pow(2,3));
console.log(Math.random());
console.log(Math.exp(10));
console.log(Math.floor(10.56));
console.log(Math.ceil(10.56));
console.log(Math.min(4,6,2,1,7));
console.log(Math.max(4,6,2,1,7));

console.log(Math.random() * 10 + 1); //--> to get value between 1-10 randomly , it may change depending upon the no. u multiply with
console.log((Math.random() * 100) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random(max - min + 1) * 10) + min);

