// let fruits = ["apple", "banana", "kiwi"];

// for (let values of fruits) {
//     console.log(values);
// }

// for (let values in fruits) {
//     console.log(values);
// }

//ex1
// fruits.forEach((val,ind) => {
//     console.log(val);
//     console.log(ind);
// });

//ex2
// fruits.forEach((index, values) => {
//     console.log(index);//first parameter position is always for the values of the array
// });

//ex3
// fruits.forEach((p1, p2) => {
//     console.log(p1); //first parameter position is always for the values of array
// });

// fruits.map(val => { console.log(val); })

// let fruits = ["apple", "kiwi","tomato"];
// let map = fruits.map(items => {
//     console.log(items);
//     return items+"10";
// });
// console.log(map);
// console.log(fruits);


// let forEachEx = fruits.forEach(val => {
//     console.log(val);
//     return val;
// });
// console.log(forEachEx);             //it is a bug in js



// let studentDetails = {
//     sName: "rahul",
//     id: 420,
//     job: "developer",
// };
// console.log(studentDetails);
//Note:only for-in loop can be applied to the object returns keys

// for (let x in studentDetails) {
//     console.log(x);
// }

// console.log(Object.keys
// (studentDetails));


// for (let y of studentDetails) {
//     console.log(y);  //not possible
// }


// studentDetails.forEach((p1,p2) => {
//     console.log(p1);
// });
// will not work.




let arrayOfObjects = [
    {
        eName: "manish",
        id: 420,
        job: "developer",
    },
    {
        eName: "praful",
        id: 421,
        job: "data scientist",
    },
    {
        eName: "krish",
        id: 422,
        job: "manager",
    },
    {
        eName: "Sangu",
        id: 423,
        job: "tester",
    },
];


// let salaryAfterDeployment =
//     arrayOfObjects.map(val => {
//         console.log(val);

//         val.salary = 20000;
//         return val;
//     });
// console.log(salaryAfterDeployment);


// let p = arrayOfObjects.forEach((p1, p2) => {
//     return p1.id;
// });
// console.log(arrayOfObjects);
// console.log(p);     //UD


// let q = arrayOfObjects.map(p1 => {
//     console.log(p1);
//     console.log(p1.eName);
//     return p1.job;
// });
// console.log(arrayOfObjects);
// console.log(p);


//we cannot use return keyword for any for loops*******


