// let obj = {
//     ename: "rahul",
//     id: 777,
//     city: "mangalore",
//     age: 26,
// }
// console.log(obj);


// let obj1 = {
//     ename: "sannu",
//     id: 888,
//     city: "mangalore",
//     age:26,
// }
// console.log(obj1);


// let x = JSON.stringify(obj);
// console.log(x);
// console.log(typeof x);

// let y = JSON.parse(x);
// console.log(y);
// console.log(typeof y);

// let arr = [10, 20, 30, 40, 50, 60];
// const [a, b, , d] = arr;
// console.log(a);
// console.log(b);
// console.log(d);


//object destructuring
// let emp = {
//     eid: 123,
//     ename: "rahul",
//     location: "mangalore",
// }

// let { eid: id, ename: name, location: city } = emp;

// console.log(id);
// console.log(name);
// console.log(city);


// let persondetails = {
//     name: "xyz",
//     email: "rahul@gmail.com",
//     martialstatus: "married",
//     address: {
//         area: "dk",
//         pincode: 575006,
//     },
// };

// let alldetails = {
//     name: "abc",
//     tel: +91 -9663667925,
//     qualification: "graduate",
// }
// console.log(persondetails);

// console.log(alldetails);


// const teacher = {
//     name: "reena",
//     age: 30,
//     color: "pink",
//     subjects: ["social", "English"],
// };

// const address = {
//     city: "blore",
//     pincode: 575504,
//     landmark: "BTM",
// };

//ADDING EXTRA KEYS AND VALUE FOR THE CREATED OBJECTS
// const teacherDetails = {
//     ...teacher, ...address
// };
// console.log(teacherDetails);
// console.log("teacher with address", teacherDetails);

// const teacherwithphonno = {
//     ...teacher, phone: 1234567,
//     married: false,
// };

// console.log("teacher with phone number", teacherwithphonno);


//spread operator with object
// const person = {
//     name: "rahul",
//     age: 35,
//     place: "blore",
// };
// console.log(person);

// creating a copy of object
// const copyofperson = { ...person };
// console.log(copyofperson);

// person.name = "sundar";
// console.log("the person list is", person);
// console.log("the copy of person" ,copyofperson);







