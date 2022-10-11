// let x = {
//     username: "manu",
//     company: "tyss",
//     details: function () {
//         console.log(this);
//     },
//     detailsWithArrow: () => {
//         console.log(this);
//     },
// };
// x.details();                         //normal function will always target current object
// x.detailsWithArrow();                //arrow function will always target window object



//call method******
// let shashiObject = {
//     name: "shashi",
//     amount: 1000,
// };

// let manuObject = {
//     name: "manu",
//     amount: 10000,
// };

// let dixithObject = {
//     name: "dixith",
//     amount: 500,
// };

// let windowObject = window;

// function callAnyObject() {
//     console.log(`i need money from ${this.name} amount is ${this.amount}`);
// }
// function method call CALL method
// callAnyObject.call(manuObject);



//call , apply and bind using normal function
// let obj1 = {
//     num: 100,
// };

// let obj2 = {
//     num:1000,
// }

// function getTotalValue(num1, num2) {
//     return this.num + num1 + num2;
// }
// let totalCall = getTotalValue.call(obj2, 100, 200);
// let totalApply = getTotalValue.apply(obj2, [100, 200]);        //always should be called in array for apply method
// let totalBind = getTotalValue.bind(obj2, 100, 100);
// console.log(totalCall);
// console.log(totalApply);
// console.log(totalBind());



//we cannot use call, apply and bind using arrow functions
// let obj1 = {
//   num: 100,
// };

// let obj2 = {
//   num: 1000,
// };

// let x= getTotalValue((num1, num2) => {
//   return this.num + num1 + num2 ;
// })
// let totalCall = getTotalValue.call(obj2, 100, 200);
// let totalApply = getTotalValue.apply(obj2, [100, 200]);      //always should be called in array for apply method
// let totalBind = getTotalValue.bind(obj2, 100, 100);
// console.log(totalCall);
// console.log(totalApply);
// console.log(totalBind());


