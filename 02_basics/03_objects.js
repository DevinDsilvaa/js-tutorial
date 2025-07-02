// singleton
// Object.create --> creates singleton object

// object literals --> does not create singleton object

const mySym = Symbol("key1")


const JsUser = {
    name: "Devin",
    "full name": "Devin D'silva",
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "devin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "devin@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "devin@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());