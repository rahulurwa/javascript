// //create section
// let section = document.createElement("section");
// section.id = "mainSection";



// //create article
// let article = document.createElement("article");
// article.classList.add("container");
// //insert between section
// section.appendChild(article);


// //create two div's
// let logoDiv = document.createElement("div");
// logoDiv.className = "logoBlock";
// logoDiv.innerHTML = "LOGO";


// let menuDiv = document.createElement("div");
// menuDiv.className = "menuBlock";
// menuDiv.innerHTML = "menu";
// article.appendChild(logoDiv);
// article.appendChild(menuDiv);

// document.body.appendChild(section);
// console.log(section);


// form.style.width = "300px";
// form.style.height = "300px";
// form.style.background = "black";
// form.style.position = "relative";
// form.style.left = "450px";
// form.style.top = "200px";
// form.style.color = "white";



// //task
// // Create a table
// let form = document.createElement("form");
// form.style.background = "black";
// form.style.color = "white";
// form.style.textAlign = "center";
// form.style.height = "300px";
// form.style.width = "300px";
// form.style.position = "relative";
// form.style.left = "500px";
// form.style.top = "200px";
// document.body.append(form);
// console.log(form);

// let fieldset = document.createElement("fieldset");
// fieldset.style.display = "block";
// form.appendChild(fieldset);

// let h1 = document.createElement("h1");
// h1.innerHTML = "Login";
// fieldset.appendChild(h1);

// let input = document.createElement("input");
// input.style.placeholder = "enter your username";
// input.innerText = "Username";
// fieldset.appendChild(input);

// let input1 = document.createElement("input");
// input1.innerText = "Email";
// fieldset.appendChild(input1);

// let input2 = document.createElement("input");
// input2.innerText = "Email";
// fieldset.appendChild(input2);

// let button = document.createElement("button");
// fieldset.appendChild(button);
// button.innerText = "submit";

// let button1 = document.createElement("button");
// fieldset.appendChild(button1);
// button1.innerText = "reset";



// let form = document.createElement("form");
// form.method = "get";
// form.action = "index.php";

// let label = document.createElement("label");
// label.innerHTML = "useremail";

// let emailInput = document.createElement("input");
// emailInput.type = "email";
// emailInput.className = "form-control";
// emailInput.name = "email";
// emailInput.placeholder = "Enter your email";

// let btn = document.createElement("button");
// btn.classList.add("btn");
// btn.innerHTML = "submit";

// form.appendChild(label);
// form.appendChild(emailInput);
// form.appendChild(btn);
// document.body.appendChild(form);



// // relation btw children and parent
// let remove = document.querySelectorAll(".delete");
// remove.forEach(span => {
//     span.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     });
// });

// let list = document.querySelectorAll("li");
// list.forEach(li => {
//     let remove = li.children[1];
//     remove.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     });
// });



// let emp = [
//   {
//     employeeName: "rahul",
//     employeeId: "444",
//     employeeSalary: 40000,
//     employeeDesignation: "engineer",
//   },
//   {
//     employeeName: "rahul",
//     employeeId: "444",
//     employeeSalary: 40000,
//     employeeDesignation: "engineer",
//   },
//   {
//     employeeName: "rahul",
//     employeeId: "444",
//     employeeSalary: 40000,
//     employeeDesignation: "engineer",
//   },
//   {
//     employeeName: "rahul",
//     employeeId: "444",
//     employeeSalary: 40000,
//     employeeDesignation: "engineer",
//   },
// ];
// // console.log(emp);


// let output = "";
// for (let employees of emp) {
//     output += `<tr>
//     <td>${employees.employeeName}</td>
//     <td>${employees.employeeId}</td>
//     <td>${employees.employeeSalary}</td>
//     <td>${employees.employeeDesignation}</td>
//     <td>
//     <span id="delete">delete</span></td>
//     </tr>`;
// }

// let tbody = document.getElementById("tbody");
// tbody.innerHTML = output;
// document.querySelectorAll("#delete").forEach(span => {
//   span.addEventListener("click", e => {
//       //let test=e.target.parentNode.parentNode.remove();
//         e.target.parentElement.parentElement.remove();
//     });
// });


// //nextElementSibling
// let tr = document.querySelector("tr th:nth-child(2)");
// console.log(tr);
// console.log(tr.nextElementSibling);
// console.log(tr.previousElementSibling);    //it dont have any upper siblings   it will provide null as output
// tr.nextElementSibling.style.color = "red";
// tr.nextElementSibling.nextElementSibling.style.color = "green";
// tr.previousElementSibling.style.color = "#fff";
// tr.previousElementSibling.style.background = "green";


//task
// let div1 = document.getElementById("div1")
// div1.onclick = function () {
//     document.body.style.background = "red";
// }
// div2.onclick = function () {
//   document.body.style.background = "green";
// };
// div3.onclick = function () {
//   document.body.style.background = "blue";
// };

//task (background color using math floor)
// let body = document.body;
// let button = document.querySelector("#btn");
// btn.onclick = function () {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   body.style.backgroundColor = "rgb(" + red + "," +green + "," + blue + ")";
// };

// //task (digital clock)
// let date = new Date();
// document.write(date.getHours());
// document.write(date.getMinutes())
// document.write(date.getSeconds());


// //file upload option
// let form = document.querySelector("form");
// let input = document.querySelector("input");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   console.log(e.target[0].files[0].name);
// });

// // ---------------//or//--------------//  
// input.addEventListener("change", e => {
//   console.log(e.target.files[0].name);
// });



// //how to create custom event
// let demo = document.querySelector("#demo");
// let customEvent = new CustomEvent("mern", {
//   detail: {
//     frontend: {
//       mark: "html",
//       style: "css",
//     },
//     backend: {
//       server: "nodejs",
//       framework: "express",
//     },
//   },
// });

// //call event listener
// demo.addEventListener("mern", e => {
//   console.log(e);
// });

// demo.dispatchEvent(customEvent);
