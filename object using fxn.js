//creating object by using function

class MERN5 {
    constructor(eName, id, designation) {
        this.eName = eName,
            this.id = id,
            this.designation = designation;
    }
}

let e1 = new MERN5("siddarth", "TYC11", "Trainee");       //creates a new object
let e2 = new MERN5("Rajappa", "TYC22", "Trainee");
for (let value in e1)
{
    console.log(value);
}
for (let value in e2)
{
    console.log(value);
}
// let m = arr.map(value => {
//     return value.Ename
// })
// console.log(m);
// console.log(e1);
// e1.city = "Mangalore";



// function test(...emp)
// {
//     console.log(emp);
// }
// test("", "", "");

// function test(...a, b, c) {
//     console.log(emp);
// }
// test(10, 20, 30, 40);

// console.log(a);
// console.log(b);
// console.log(c);


// let test = function (...a) {
//     return a;
// }
// test(10, 20, 30, 40);

// console.log(a);          //syntax error
// console.log(b);
// console.log(c);

// spread operator
//array destructuring
// let demo = [10, 20, 30, 40];
// let [...x] = demo
// console.log(x)


// let demo1 = [10, 20, 30, 40];
// let { ...y } = demo;
// console.log(y);
// {
//     0: 10,
//         1: 20,
//         2: 30,
//             3:40,
// }

// let arr = [10, 20, 25, 33];
// let [a, b, ...c] = arr;       //array destructuring
// console.log(a);
// console.log(b);
// console.log(c);

// let { x, y, ...z } = arr;
// console.log(x);    //undefined
// console.log(y);    //undefined
// console.log(z);

// let { ...p } = arr;   //object destructuring
// console.log(p);


// let arr1 = [10, 20, 25, 33];
// let arr2 = [100, 2000, 300, 400];
// console.log(arr1.concat(arr2));
// console.log(arr1 + arr2);
// console.log(...arr1, ...arr2);
// let arr3 = { ...arr1, ...arr2 };
// console.log(arr3);


// let num = '123';
// let [...x] = num;
// console.log(x.reduce((acc, lv) => acc + lv));
// console.log(parseInt(x.reduce((acc, lv) => acc + lv)))
// console.log(x.map(m => parseInt(m)).reduce((acc, lv) => {
//     return acc + lv;
// }));

// //by using split()
// let s = num.split("");
// console.log(s.map(m => parseInt(m)).reduce((acc, lv) => acc + lv));






//task
// let n = '1234abc';
// let m = n.split(""); => ['1'....'c'];
// let x = m.splice(5, 3);["1", "2", "3", "4", "5"];
// console.log(x)=> ['a', 'b', 'c']


