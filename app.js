// let section = document.querySelector("section");
// let article = document.querySelector("article");
// console.log(section);

// let p = document.createElement("p");
// p.textContent = "para";


//to add any tag  before or after use this method
// section.insertBefore(p, article);

// section.insertAdjacentElement("beforebegin", p);
// section.insertAdjacentElement("afterbegin", p);
// section.insertAdjacentElement("beforeend", p);
// section.insertAdjacentElement("afterend", p);
// section.insertAdjacentText("afterbegin", "shashi");
// section.insertAdjacentHTML("afterbegin","<h1>shahsi</h1>")




// //to add read file
// let inputFile = document.querySelector("input");
// //add change event to file input
// inputFile.addEventListener("change", e => {
//     //fetch FileList from input type file
//     let file = e.target.files[0];   //blob file object
//     //add fileReader to read blob
//     let reader = new FileReader();
//     //add onload event to read blob
//     reader.onload = _ => {
//         console.log(reader.result);
//     };
//     //convert file into data URL
//     reader.readAsDataURL(file);
// });



// //ajax request   connecting one server to one more server
// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://api.github.com/users";  //API END POINT
// // console.log(URL);
// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//     let data = JSON.parse(this.response);
//     let output = "";
//     for (let user of data) {
//         output += `
//         <div>
//         <img src=${user.avatar_url}/>
//         <h1> ${user.login}</h1>
//         <a href=${user.html_url} target="_blank"/>View Profile</a>
//         </div>`;
//     }
//     document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();



// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://fakestoreapi.com/products"; //API END POINT
// // console.log(URL);
// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//   let data = JSON.parse(this.response);
//   let output = "";
//   for (let user of data) {
//     output += `
//         <div>
//         <img src=${user.avatar_url}/>
//         <h1> ${user.login}</h1>
//         <a href=${user.html_url} target="_blank"/>View Profile</a>
//         </div>`;
//   }
//   document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();



// let AjaxRequest = new XMLHttpRequest();
// let URL ="https://jsonplaceholder.typicode.com/todos/1"; //API END POINT
// // console.log(URL);
// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//   let data = JSON.parse(this.response);
//   let output = "";
//   for (let user of data) {
//     output += `
//         <div>
//         <h1> ${}</h1>
//         <a href=${user.html_url} target="_blank"/>View Profile</a>
//         </div>`;
//   }
//   document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();


// using e6 feature
// window.fetch("https://fakestoreapi.com/products").then(data => {
//     //readable stream
//     //convert stream into JSON
//     data.json().then(product => {
//         console.log(product);
//     });
// })
//     .catch()
//     .finally(_ => {
//         console.log("finally data");
//     });