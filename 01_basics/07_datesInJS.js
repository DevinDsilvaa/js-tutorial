let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2025 , 4 , 1)
// console.log(myCreatedDate.toDateString());
// const myCreatedDate = new Date(2025 , 4 , 1 , 5 , 30 , 00)
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("2025-05-01") //--> US format
const myCreatedDate = new Date("01-05-2025") //--> INDIAN format
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000)); //-->to get current time in seconds

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`Day ${newDate.getDay()} of the week and time is ${Date.now().toLocaleString()}`)

newDate.toLocaleString('default' , {
    weekday : "long",
    hour:"2-digit",
    minute:"numeric"
});
console.log(newDate);
