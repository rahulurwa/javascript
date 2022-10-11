//video play function
// let video = document.querySelector(".video");
// let btn = document.querySelector(".btn");
// btn.onclick = function () {
//     let toggle = video.classList.toggle("video");
//     if (!toggle) {
//         video.play();
//         this.innerHTML = "pause";
//     } else {
//         video.pause();
//         this.innerHTML = "Play";
//     }
// };

//audio play function
// let audio = document.querySelector(".audio");
// let img = document.getElementById("img");

// img.onclick = function () {
//     let toggle = audio.classList.toggle("audio");
//     if (!toggle) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// };




//dom events
// let btn = document.getElementById("btn");

// btn.onclick = function (event) {
//     console.log(event);
// };
// btn.onmouseenter = function (event) {
//     document.body.style.background = "red";
// };
// btn.onmouseleave = function (event) {
//     document.body.style.background = "green";
// };


// let btn = document.getElementById("btn");

// //event property way
// btn.onclick = function (e) {
//     console.log(e);
// };

// //event method way
// btn.addEventListener("click", event => {
//     console.log(event);
// });


// btn.addEventListener("mouseenter", event => {
//     document.body.style.background = "red";
// });

// btn.addEventListener("mouseleave", event => {
//     document.body.style.background = "green";
// });

// function eff1() {
//   if (drop1.className == "drop1") {
//     drop1.className = "div1";
//     // var img = document.createElement("img");
//     // img.style.backgroundSize = "100% ";
//     // img.style.width = "100vw";
//     // img.src = "./20376340.jpg";
//     // document.body.appendChild(img);
//   } else {
//     drop1.className = "drop1";
//     // document.body.removeChild(img)
//     // document.body.style.backgroundColor="black"
//   }
// }
// function eff2() {
//   if (drop2.className == "drop2") {
//     drop2.className = "div2";
//     // var img = document.createElement("img");
//     // img.style.backgroundSize = "100% ";
//     // img.style.width = "100vw";
//     // img.src = "./20376340.jpg";
//     // document.body.appendChild(img);
//   } else {
//     drop2.className = "drop2";
//     // document.body.removeChild(img);
//     // document.body.style.backgroundColor = "black";
//   }
// }
// function eff3() {
//   if (drop3.className == "drop3") {
//     drop3.className = "div3";
//     // var img1 = document.createElement("img");
//     // img1.style.backgroundSize = "100% ";
//     // img1.style.width = "100vw";
//     // img1.src = "./646425611.jpg";
//     // document.body.appendChild(img1);
//   } else {
//     drop3.className = "drop3";
//     // document.body.removeChild(img1);
//     // document.body.style.backgroundColor = "black";
//   }
// }
// function eff4() {
//   if (drop4.className == "drop4") {
//     drop4.className = "div4";
//     // var img1 = document.createElement("img");
//     // img1.style.backgroundSize = "100% ";
//     // img1.style.width = "100vw";
//     // img1.src = "./646425611.jpg";
//     // document.body.appendChild(img1);
//   } else {
//     drop4.className = "drop4";
//     // document.body.removeChild(img1);
//     // document.body.style.backgroundColor = "black";
//   }
// }

// let btn = document.getElementById("btn");
// let container = document.querySelector(".container");

// //event method way
// btn.addEventListener("mouseenter", event => {
//     container.style.display = "block";
// });

// //event method way
// btn.addEventListener("mouseleave", event => {
//     container.style.display = "none";
// });


// let btn = document.querySelector("#btn");
// //event method
// btn.addEventListener("click", e => {
//     if (e.pointerType === "mouse") {
//         console.log("mouse event");
//     }
//     else {
//         console.log("touch event");
//     }
// });


// keyboard events

// let input = document.getElementsByTagName("input");
// input.addEventListener("keyup", e => {
//     console.log(e);
//     if (e.type === "keyup") {
//         console.log("this is keyup event");
//     }
//     else {
//         console.log("it is not keyup event");
//     }
// });

// input.addEventListener("keydown", e => {
//   console.log(e);
//   if (e.type === "keydown") {
//     console.log("this is keydown event");
//   } else {
//     console.log("it is not keydown event");
//   }
// });


// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// input.addEventListener("keyup", e => {
//     if (e.keyup === "Enter") {
//         console.log(e.key);
//         console.log("enter key presses");
//     }
//     //or
//     if (e.keyCode === 13) {
//         console.log(e.key);
//         console.log("enter key presses");
//     }
// });


// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// input.addEventListener("keyup", e => {
//   if (e.keyup === "Enter") {
//     console.log(e.target.value);
//   }
//   //or
//   if (e.keyCode === 13) {
//     console.log(e.target.value);
//   }
// });

// //change event
// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let span = document.querySelector("span");

// //event handler
// input.addEventListener("change", e => {
//     if (e.target.value === "") {
//         input.style.border = "2px solid red";
//         span.classList.add("active");
//         span.innerHTML = "this field is required";
//     } else {
//         input.style.border = "2px solid green";
//         span.classList.remove("active");
//         span.innerHTML = "";
//     }
// });


//task
let form = document.querySelector("form");
form.addEventListener("submit", e => {
    console.log(e);
    e.preventDefault();                  // it will not submit form to the server it will block going to server
    let email = e.target[0].value;
    let password = e.target[1].value;
    console.log({ email, password });
});

let input = document.querySelector("input");
let btn = document.querySelector("button");
let span = document.querySelector("span");


// btn.addEventListener("change", e=>{
//   if (document.querySelector("input").value === "") {
//     button.disabled = true; 
//   } else {
//     button.disabled = false; 
// }


//event handler
// input.addEventListener("change", e => {
//     if (e.target.value === "") {
//         console.log(input);
//         input.style.border = "2px solid red";
//         span.classList.add("active");
//         span.innerHTML = "this field is required";
//     } else {
//         input.style.background = "green";
//         span.classList.remove("active");
//         span.innerHTML = "everything is fine";
//     }
// });









