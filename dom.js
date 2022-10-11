//access html data
//direct access
document.doctype;
let title = document.title;
let head = document.head;
let body = document.body;
let style = document.styleSheets;
console.log(title);
console.log(head);
console.log(body);
console.log(style);

let script = document.scripts;
console.log(script);
let img = document.images;
console.log(img);
console.log(document.documentURI);
console.log(document.contentType);
console.log(document.nodeName);
console.log(document.nodeType);
console.log(document.URL);
console.log(document.onloadedmetadata);
console.log(document.embeds);
console.log(document.open("https://www.google.com"));


let allProperties = window.document.all;
// console.log(allProperties);            // html collection                       (it is like array like object);
// console.log(Array.isArray(allProperties));
// let convertIntoArray = Array.from(allProperties);
// console.log(convertIntoArray);
// console.log(Array.isArray(convertIntoArray));


//for each is only for array and nodelist
[...allProperties].forEach(val => {
    console.log(val);
});

//looping elements can be used in all case senarious
// for (let i = 0;  i < allProperties.length;  i++){
//     console.log(allProperties[i]);
// }
// for (let i of allProperties) {
//     console.log(i);
// }

