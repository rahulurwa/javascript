// higher order function

function demo(a,b,c) {
    return a + b + c;
}
console.log(demo(10, 20, 30));


// function main(a,b,c,test) {
//     return test(a, b, c);
// }
// let x = main(10, 20, 30, function(a,b,c) {
//     return (a + b + c);
// })
// console.log(main);


// function hof(a, b, cb) {
//     console.log(cb);
//     return cb(a, b);
// }
// let addition = hof(10, 20, function (a, b) {
//     return a + b;
// });
// console.log(addition);

// let subs = hof(20, 1,(a, b) => a - b);
// console.log(subs);


// let num = parseInt(prompt("enter a number"));

// let a = sqrt;
// let b = cuberoot;
// if(a==sqrt) {
//     res = a / 2;
//     console.log(res);
// }
// else if(b==cuberoot){
//     res1 = b / 3;
//     console.log(res1);
// }
// else {
//     console.log("Not a number");
// }


// let num = Number(prompt("enter the no"));
// let input = prompt("type SQRT for square root, type CBRT for cube root");
// switch (input) {
//     case ('sqrt'): console.log((num ** (1 / 2)));
//         break;
//     case('cbrt'): console.log((num ** (1 / 3)));
//         break;
//     default: console.log("enter the valid input");
//         break;
// }


// function sum(a, b, c, d)
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d(b));
//     return a + b;
// }
// function d(a)
// {
//     return a + 2;
// }
// let total = sum(5, 10, 15, d);
// console.log(total)



