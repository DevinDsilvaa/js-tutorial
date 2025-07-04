// const tinderUser = new Object() //--> singleton object
const tinderUser = {}              //--> non-singleton object

tinderUser.id = "07xyz"
tinderUser.name = "Brian"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "anonymous@gmail.com",
    fullname: {
        userfullname: {
            firstname: "devin",
            lastname: "d'silva"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "devin@gmail.com"
    },
    {
        id: 1,
        email: "devin@gmail.com"
    },
    {
        id: 1,
        email: "devin@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "499",
    courseInstructor: "devin"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// const {coursename} = course
// console.log(courseInstructor);
// console.log(coursename);
console.log(instructor);

// {
//     "name": "devin",
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// use json formatter tool to have better understanding of json api
