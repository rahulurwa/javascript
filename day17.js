//dom methods
// let demo = document.getElementById("demo");        //only one node
// let demo1 = document.querySelector("#demo");
// console.log(demo1);
// console.log(demo);
// console.log(typeof demo1);
// console.log(typeof demo);
// console.log(demo.id);
// console.log(demo1.id);


// let div = document.getElementsByTagName("div");                    //tagname //it returns html collection
// let divWithQuerry = document.querySelectorAll("div");
// // css selector // it returns nodelist by default it supports foreach method

// console.log(div);
// console.log(divWithQuerry);


// let div = document.getElementsByTagName("div");
// div[0].style.background = "red";
// div[1].style.background = "yellow";


// //by using traditional method
// for (let i = 0; i < div.length; i++){
//     div[i].style.background = "red";
//     div[i].style.margin = "5px";
//     div[i].style.padding = "5px";
//     div[i].style.color = "#fff";
// }


// // by using for of
// for (let i of div) {
//     i.style.background = "green";
//     i.style.margin = "5px";
//     i.style.padding = "5px";
//     i.style.color = "#fff";
// }


// [...div].forEach(val => {
//     val.style.background = "crimson";
//     val.style.padding = "10px";
//     val.style.margin = "10px";
//     val.style.color = "#fff";
// });


//task
// let section = document.getElementsByTagName("section");
// section[0].style.display = "flex";     // it is used for targeting the element by using index
// section[0].style.width = "1000px";
// section[0].style.gap = "40px";
// section[0].style.margin = "20px auto";


//fetch all images
// let images = document.images;
// [...images].forEach(img => {         //it is used convert into array
//     img.style.width = "100%";
//     img.style.height = "200px";
// });


//fetch all divs  //by using html collection
// let divs = document.getElementsByTagName("div");
// Array.from(divs).forEach(val => {
//     val.style.flexbasis = "30%";
//     val.style.background = "#fff";
//     val.style.height = "300px";
// });


//instead of html collection we are using node list
// let divsWithQuerryAll = document.querySelectorAll("div");
// console.log(divsWithQuerryAll);    //nodelist
// divsWithQuerryAll.forEach(val => {     //we can use for each method directly cause it a method of nodelist
//     val.style.flexbasis = "30%";
//     val.style.background = "#fff";
//     val.style.height = "300px";
// })


// one more method by add id and class name in js method                   //open add css file along with it


// let section = document.querySelectorAll("section");
// section.forEach(val => {
//     val.id = "mainsection";   //adding id
// });


// fetch all images and add classes to images
// let images = document.images;
// [...images].forEach(img => {
//     img.className = "course-image";  //adding class
// });


// fetch all divs and add classes to div
// let divs = document.querySelectorAll("div");
// divs.forEach(div => {
//     div.className = "container";
// });


// let ul = document.querySelectorAll("ul");
// ul.forEach(list => {
//     let li = list.getElementsByTagName("li");
//     [...li].forEach((val, index) => {
//         val.className = `demo -$(index + 1)`;
//         val.innerHTML = `DEMO -$(index + 1)`;
//     });
// });


let section = document.getElementById("mainSection");
let divs = section.getElementsByTagName("div");
console.log(divs);
[...divs].forEach((div, i) => {
    div.className = `container`;
    div.innerHTML = `
    <h1>testYantra</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <button class="btn">next</button>`;
});













