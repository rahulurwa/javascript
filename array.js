// higher order functions / map method

// let m = [10, 20, 30, 40]
// let b = m.map(val => val + 5);
// console.log(b);

// let a = [10, 20, 30, 40];
// let c = a.filter(val => val > 10);
// console.log(c);

let d = [10, 20, 30, 40];
let e = d.reduce((acc, l) =>{
    return acc+l;
})
console.log(e);

// let mappedItems = m.map(val => { return val + 5 }
// console.log("mappedItems");


// map method is a higher order function or higher order method in which we are passing one more that will be affected to each items offunction as a call back to perform particular task  an array.

// function hof(arr, cb) {
//     console.log(arr);
//     console.log(cb);
//     let mappedItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         mappedItems.push(cb(arr[i]));
//     }
//     return mappedItems
// }
// console.log(hof([10, 20, 30, "hi"],
//     (val) => { return val + 100 }));



// let str1 = "hello";
// console.log(str1.split(""));
// let str2 = (str2.split("#"));
// console.log(str1.concat(str2));


// function hof(arr,cb) {
//     let filteredItem = []
//     for (let i = 0; i < arr.length; i++){
//         if (cb(arr[i])) {
//             filteredItem.push(arr[i])
//         }
//     }
//     console.log(filteredItem);
// }
// hof([50, 80, 100, 200], (c) => {
//     return c > 50;
// })



// let itemPrice=[150,110,180,240,650,2540] 20% GST find the value grater than 200 by using filter method interview questions

// function hof(arr, cb) {
//     let mappedItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         mappedItems.push(cb(arr[i]));
//     }
//     return mappedItems
// }
// console.log(hof([150,110,180,240,650,2540],
//     (val) => { return (val + (val * 0.2)) }));



//inbuilt method

// let arr = [150, 110, 180, 240, 650, 2540];
// let m = arr.map(val => val + (20 / 100) * val);
// console.log(m);
// let n = m.filter(val => val > 200);
// console.log(n);
// let p = n.reduce((a, b) => a + b);
// console.log(p);


//reduce method
//accumulator-updates and stores the previous values
//l is to store the last value of array
//initial for addition initial value is 0 by default
// 5 + 1= 6;
// 6 + 2= 8;
// 8 + 3= 11;
// 11+ 4= 15;

// let a = [1, 2, 3, 4];
// let r = a.reduce((acc, l)=> {
//     return (acc + l);
// } ,1)
// console.log(r);

// let items = [100, 200, 300, 400]
// let mappedItems = itemsmap (m => m + 10)
// console.log(mappedItems);
// let filteredItem = mappedItems.filter(f => f > 210);
// console.log();

// let a = [100, 200, 300];
// let r = a.map(m => m * "10");
// console.log(r);