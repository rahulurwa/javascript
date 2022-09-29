// var a = 10;
// let b = 20;
// function x() {
//     var a = 20;
//     console.log(a);
//     console.log(this.a);
//     let b = 30;
//     console.log(b);
//     console.log(this.b);
// }
// x();

//to prove "this" keyword "window" object both are same:
// console.log(this);
// console.log(window);
// console.log(this == window);

// var m = 1;
// function x() {
//     var m = 2;
//     console.log(m);
//     console.log(this.m);                      //this is always search for global variable (var)
//     function y() {                            //this is a keyword that targets the window object by using this 
//     // var m = 3;                             // this keyword is can only fetch variables declared with var keyword
//     console.log(m);                           // which is present in global scope
//     console.log(this.m);                      // if your using use strict mode then this keyword will not work we
//     }                                         // get a error 
//     y();
// }
// x();

// var m = 1;
// function x() {
//    m = 2;
//   console.log(m);
//   console.log(this.m); 
//   function y(){
//     console.log(m);
//     console.log(this.m); 
//   } 
//   y();
// }
// x();