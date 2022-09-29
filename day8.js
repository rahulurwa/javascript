// closures

// console.log("start");
// function x(p,q) {
//     var a = 10;
//     console.log("im x()");
//     function y() {
//         console.log(p);
//         console.log(a);
//         console.log(q);
//     }
//     return y;
// }
// x(5,6)();
// console.log("end");


// there is no closures in below example

// console.log("start");
// function x() {
//     var a = 10;
//     console.log(a);
//     console.log("im x()");
//     function y() {
//         console.log("im y()");
//         var b = 20;
//         console.log(b);
//     }
//     y();
// }
// x();
// console.log("end");



// console.log("start");
// var str = "test";
// function x() {
//     var a = 10;
//     console.log(a);
//     var p = "hi";
//     console.log(p);
//     console.log("im x()");
//     function y() {
//         console.log(a);
//         console.log(str);
//         console.log("im y()");
//         var b = 20;
//         console.log(b);
//     }
//     y();
// }
// x();
// console.log("end");



// console.log("start");
// var str = "test";
// function x(j, k) {
//   var str = "demo";
//   var a = 10;
//   console.log(a);
//   var p = "hi";
//   console.log(p);
//   console.log("im x()");
// function y() {
//   console.log(a);
//   console.log(str);
//   console.log(this.str);
//   console.log(j);
//   var b = 20;
//   console.log(b);
// function z() {
//   console.log(b);
//   console.log(a);
//   console.log(k);
//     }
//     z();
//   }
//   y();
// }
// x(55,88);
// console.log("end");