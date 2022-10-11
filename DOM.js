
// let element = document.getElementById("demo");
// console.log(element);

//by using inner html we can target inner html tags
// element.style.color = "red";
// element.style.backgroundColor = "lightblue";
// element.innerHTML = "<a>link</a>";
// element.innerHTML = "<h1>rahul</h1>"
// element.innerHTML = "<a>link</a> <h1>rahul</h1>";
// console.log(element);


//it is case sensitive
//if we dont write proper "demo" it will return "NULL"
// let element = document.getElementById("Demo");
// console.log(element);



//getelementsbyclassname

// let element = document.getElementsByClassName("cls");
// console.log(element);

// to target the particular class we can take as
// let element = document.getElementsByClassName("cls")[2];
// console.log(element);



//getelementbytagname

// let element = document.getElementsByTagName("h1")[3];
// console.log(element);

// let element = document.getElementsByTagName("h1")[2];
// console.log(element);

// let element = document.getElementsByTagName("h1");
// console.log(element);

// let demo = document.getElementById("demo");
// let element = demo.getElementsByTagName("h1");
// console.log(element);


//getelementbyname

// let element = document.getElementsByName("para1");
// console.log(element);

// let element = document.getElementsByName("test");
// console.log(element);

// let element = document.getElementsByName("test")[2];
// console.log(element);

// element.style.backgroundColor = "red";

// Array.isArray(element);
// console.log(Array.isArray(element));



//queryselector()method

// let element = document.querySelector("#demo");
// console.log(element);

// let element = document.querySelector(".demo");
// console.log(element);


//queryselectorAll()method

// let element = document.querySelectorAll(".demo p");
// console.log(element);


//open and close method
// function fun() {
//     const test = window.open();
//     test.document.open();
//     test.document.innerHTML('<h1> hello </h1>');
// }

// function fun() {
//     window.close();
// }


//date 3-10-22
// function Test() {
//    return arguments;                            //it is a argument object
// }
// let value = Test("shashi", "manu", "harish");
// console.log(value);
// console.log(typeof value);                      //it is used to check the datatype like (array or object)
// console.log(Array.isArray (value));             //is used to check array or not (it give boolean value)
// let finalvalue = Array.from((value));           //it is used to convert anything into array
// console.log(finalvalue);
// console.log(Array.isArray(finalvalue));



//uncaughtreference error:arguments is not defined
// let x = () => {
//     return arguments;
// };
// let y = x("shashi", "harish");
// console.log(y);                                  //we cannot use argument object in arrow functions


// let NormalFun = function (...rest) {
//     return rest;
// };
// let test1 = NormalFun("shashi", "harish");  
// console.log(test1);
// console.log(Array.isArray(test1));


// let ArrowFun = (...rest) => {
//     return rest;
// };
// let test2 = ArrowFun("shashi", "Harish");
// console.log(test2);
// console.log(Array.isArray(test2));


// let x = (username, password, html, css, js, react) => {
//     return { username, password, html, css, js, react };
// };
// let y = x("shashi", "shashi123", "html", "css", "js", "react");
// console.log(y);

// let z = (username, password, ...rest) => {             //rest parameter can use any no of arguments
//     return { username, password, rest };
// };
// let a = z("shashi", "shashi123", "html", "css", "js", "react");
// console.log(a);


// let x = ["shashi", "harish", "manu", "vinu", "dixith", "arun"];
// console.log(x);
// console.log(x[0]);
// console.log(x[1]);


// let [...rest] = x;
// console.log(rest);


// let str = "shashi is very bad....";
// let strToArray = str.split("");                          //depends on space given btw double quotes
// console.log(str);
// console.log(strToArray);

//es6 feature
// let trywithspread = [...str];
// console.log(trywithspread);


//converting argument object to array
// function Test() {
//     return arguments;
// }
// let x = Test("js", "html", "nodejs");
// console.log(x);
// let finalValue = [...x];
// console.log(finalValue);


// let frontend = ["html", "css", "js", "react", "angular"];
// let backend = ["nodejs", "expressjs", "nextjs", "mongodb", "socket.io", "aws"];
// let fullstack = frontend.concat(backend);
// console.log(fullstack);


//spread way
// let spreadWay = [...frontend, ...backend];
// console.log(spreadWay);


//explicit return
// function Test() {                               // (need to write the return keyword)
//     return "shashi";
// }
// console.log(Test());


//implicit return                                  // (no need to write the return keyword)
// let arrowWithFun = () =>
//     "shashi";
// console.log(arrowWithFun());


//explicit with array
// function Test() {
//     return ["shashi", "harish"];
// }
// console.log(Test());


//implicit with array
// let ArrowWithFun = () => ["shashi", "harish"];
// console.log(ArrowWithFun());


//implicit & explicit  with object
// function Test() {
//     return {
//         username: "shashi",
//         password: "1234",
//     };
// }
// console.log(Test());


// let ArrowWithFun = () => {
//     return {
//         username: "shashi", password: "1234"
//     };
    // console.log(ArrowWithFun());

    // let ArrowWithFunImplicit = () => ({
    //     username: "shashi",
    //     password: "1234"
    // });
    // console.log(ArrowWithFunImplicit());


//doing everything implicitly passing as an argument
// let str = val => val;
// console.log(str("manish"));

// let arr = (...val) => val;                            //rest parameter always returns to array
// console.log(arr("html", "css", "js"));

// let obj = ({ ...val }) => val;
// console.log(obj({username:"shashi" , password:"1234"}));


//implicit with function
// function parent() {
//     return function () {
//         console.log("im child");
//     };
// }
// parent()();


// let ArrowWithExplicit = () => {
//     return () => {
//         console.log("child here");
//     };
// };
// ArrowWithExplicit()();


// let ArrowWithImplicit = () => () => console.log("child here");
// ArrowWithImplicit()();


//function with arguments
// let ArrowWithExplicit = () => {
//     return val => {
//         return val;
//     };
// };
// let val = ArrowWithExplicit()("shashi");
// console.log(val);


// let ArrowWithImplicit = () => val => val;
// let val1 = ArrowWithImplicit()("shashi");
// console.log(val1);


// let x = _ => "shashi";
// console.log(x());


// let x = () => `hello
// how r
// u`
// console.log(x());


//for multiple block or line using parasynthesis
// let y = () => (`<h1>hello</h1>
// <p>hello</p>
// `);
// console.log(y());


//only possible with normal function-constructor (new)
// function user(name, age, company) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
// }
// let user1 = new user("vinu", 21, "ty");
// let user2 = new user("manu", 22, "capgemini");
// console.log(user1, user2);


//not possible with arrow function -constructor (new)
// let userwitharrow = (name, age, company) => {
//     this.name = name;
//     this.age = age;
//     this.company = company;
// };
// let user1 = new userwitharrow("manu", 30, "tyss");
// console.log(user1);


// function empdetails(ename, id, ...rest) {
//     this.ename = "ename";
//     this.age = "age";
//     this.company = "company"
//     this.city = "city";
//     this.education = "education";
//     this.rest = "rest";
// };
// let Emp = new empdetails("rahul", 25, "company", "mangalore", "education");
// console.log(Emp);


// function sum(a, b) {
//     return a + b;
// }
// sum(10);
// console.log(sum());


// function sum(a, b) {
//   return a + b;
// }
// sum(10,);
// console.log(sum());


// function sum(a, b) {
//   return a + b;
// }
// sum(,20);
// console.log(sum());


// function sum(a, b) {
//   return a + b;
// }
// sum();
// console.log(sum());


// function sum(a, b) {
//   return a + b;
// }
// sum(undefined);
// console.log(sum());




















