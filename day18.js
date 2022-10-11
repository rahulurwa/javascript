let array = [1, 2, 3, 4, 5, 6];
let totalEach = array.forEach(val => {             // for each will not support return keyword
    console.log(val + 10);
});
let totalMap = array.map(val => {
    return val + 10;                               // instead we go for map method
});
console.log(array);
console.log(totalEach);
console.log(totalMap);


// let array = [1, 2, 3, 4, 5, 6];
//let old array=array.forEach(val=> val).reverse();
// console.log(oldArray);

// let newArray = array.map(val => val).reverse().reduce((a, b) => {
//     let test = a + b;
//     console.log(typeof test);
//     return test;
// });
// console.log(newArray);


// let mainSection = document.getElementById("mainSection");
// let container = mainSection.getElementsByClassName("container");
// console.log(container);
// // convert array like object into array
// // array.prototype.forEach()
// let convertIntoArray = Array.from(container);
// console.dir(convertIntoArray);
// convertIntoArray.forEach((val, i) => {
//     console.log(val);
//     val.textContent = `Demo${i+1}`;
// });

// let sectionBlock = document.querySelector("#mainSection");
// sectionBlock.querySelectorAll(".container").forEach((val, i) => {
//     val.innerHTML = `demo${i}`;
// });


let mainSection = document.getElementById("mainSection");
mainSection.querySelectorAll(".container:nth-child(odd)").forEach(val => {
    val.className = "odd";
    val.innerHTML = "odd";
});


mainSection.querySelectorAll(".container:nth-child(even)").forEach(val => {
    val.className = "even";
    val.innerHTML = "even";
});







