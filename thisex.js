// let obj1 = {
//     eName: "sarala",
//     id: 555,
//     demo: () => {
//         console.log(this.id);
//     },
// };
// console.log(obj1.demo());

// let obj2 = {
//     eName: "virala",
//     id: 8888,
//     test: function () {
//         console.log(this.eName);
//     },
// };
// console.log(obj2.test());
// console.log(obj2);


// let empDetails = {
//     eName: "harish",
//     id: 555,
//     company: "tyss",
//     address: function () {
//         console.log(this);
//     },
// };

// console.log(object.keys
//     (empDetails));

// console.log(object.values
//     (empDetails));

// console.log(object.entries
// (empDetails));

// console.log(empDetails);


let obj = {
    sName: "Raj",
    id: 222,
};
console.log(obj);

Object.seal(obj);     // can update only existing values of key in object
console.log(Object.isSealed(obj));     //to check      whether it is sealed or not
// obj.company = "qsp";
// console.log(obj);

// obj.id = 555;
// console.log(obj);

Object.freeze(obj);
console.log(Object.isFrozen(obj));

obj.city = "blore";
console.log(obj);            //cannnot add new key
obj.id = 111;                //cannot update the existing value of key in object