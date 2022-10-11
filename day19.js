// //get attribute
// let mainSection = document.getElementById("mainSection");
// console.log(mainSection);
// console.dir(mainSection.attributes[0]);

// let test = (mainSection.attributes[0].id = "demo");
// console.log(test);

// mainSection.id = "demo";
// mainSection.className = "demo";
// mainSection.disabled = true;
// mainSection.title = "hello we are learning js and DOM";
// console.log(mainSection.tagName);
// if (mainSection.tagName === "DIV") {
//     console.log("this is a div Block");
// }
// else {
//     console.log("it is not a div Block");
// }

// let demo = (mainSection.chombu = "yes iam chombu");
// console.log(demo);

// mainSection.setAttribute("chombu", "yes iam chombu");


// //set attribute
// let mainSection = document.getElementById("mainSection");
// mainSection.querySelectorAll("container").forEach((val, index) => {
//     let attr = val.getAttribute("class");
//     console.log(attr);
//     val.setAttribute("id", `index-${index + 1}`);
//     let idAttr = val.getAttribute("id");
//     console.log(idAttr);
// });


// //remove attribute
// let demoSection = document.getElementById("demoSection");

// let btn = document.getElementById("btn");

// //inbuilt function button
// btn.onclick = function () {

//     if (demoSection.className ==="active") {
//         demoSection.removeAttribute("class");
//         demoSection.setAttribute("class","inactive");
//     }
// };


//DOMTOKENLIST

// mainSection.classList.add();
// mainSection.classList.remove();
// mainSection.classList.toggle();
// mainSection.classList.contains();
// mainSection.classList.entries();
// mainSection.classList.forEach();
// mainSection.classList.values();
// console.dir(mainSection.classList);
// mainSection.classList.add("demo", "qsp", "testyantra");

// mainSection.className = "active demo ty qsp";


// let text = document.getElementById("block");
// let showBtn = document.getElementById("showBtn");
// let hideBtn = document.getElementById("hideBtn");

// showBtn.onclick = function () {
//     text.classList.add("active");
//     text.style.display = "block";
// };
// hideBtn.onclick = function () {
//     text.classList.remove("active");
//     text.style.display = "none";
// };


// let text = document.getElementById("block");
// let showBtn = document.getElementById("showBtn");
// let hideBtn = document.getElementById("hideBtn");

// showBtn.onclick = function () {
//     if (text.classList.contains("active")) {
//         text.style.display = "block";
//     }
// };

// hideBtn.onclick = function () {
//     text.style.display = "none";
// };


//using only one btn
// let text = document.getElementById("block");
// let btn = document.getElementById("btn");
// btn.onclick = function () {
//     let toggle = text.classList.toggle("active");
//     if (toggle) {
//         text.style.display = "none";
//     } else {
//         text.style.display = "block";
//     }
// };


// let text = document.getElementById("block");
// let btn = document.getElementById("btn");

// btn.onclick = function () {
//     let toggle = text.classList.toggle("active");
//     if (toggle) {
//         text.style.display = "block";
//         text.style.background = "yellow";
//         text.style.fontSize = "20px";
//     }
// }

// let

// let drop1 = document.getElementsByClassName("drop1")[0];
// let drop2 = document.getElementsByClassName("drop2")[0];
// let drop3 = document.getElementsByClassName("drop3")[0];
// let drop4 = document.getElementsByClassName("drop4")[0];

// let btn = document.getElementById("bgclr");

// function bg() {
//   document.body.style.backgroundColor == "black" ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor == "black";
// }
// console.dir(hide);

// function eff1() {
//   if (drop1.className == "drop1") {
//     drop1.className = "div1";
    // var img = document.createElement("img");
    // img.style.backgroundSize = "100% ";
    // img.style.width = "100vw";
    // img.src = "./20376340.jpg";
    // document.body.appendChild(img);
  // } else {
  //   drop1.className = "drop1";
    // document.body.removeChild(img)
    // document.body.style.backgroundColor="black"
//   }
// }
// function eff2() {
//   if (drop2.className == "drop2") {
//     drop2.className = "div2";
    // var img = document.createElement("img");
    // img.style.backgroundSize = "100% ";
    // img.style.width = "100vw";
    // img.src = "./20376340.jpg";
    // document.body.appendChild(img);
  // } else {
  //   drop2.className = "drop2";
    // document.body.removeChild(img);
    // document.body.style.backgroundColor = "black";
//   }
// }
// function eff3() {
//   if (drop3.className == "drop3") {
//     drop3.className = "div3";
    // var img1 = document.createElement("img");
    // img1.style.backgroundSize = "100% ";
    // img1.style.width = "100vw";
    // img1.src = "./646425611.jpg";
    // document.body.appendChild(img1);
  // } else {
  //   drop3.className = "drop3";
    // document.body.removeChild(img1);
    // document.body.style.backgroundColor = "black";
//   }
// }
// function eff4() {
//   if (drop4.className == "drop4") {
//     drop4.className = "div4";
    // var img1 = document.createElement("img");
    // img1.style.backgroundSize = "100% ";
    // img1.style.width = "100vw";
    // img1.src = "./646425611.jpg";
    // document.body.appendChild(img1);
  // } else {
  //   drop4.className = "drop4";
    // document.body.removeChild(img1);
    // document.body.style.backgroundColor = "black";
//   }
// }


