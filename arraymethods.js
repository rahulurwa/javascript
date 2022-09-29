//steps to create an array
// let arr = [1, "hi", () => { }, {}, true, null, undefined];
// console.log(arr);

// let arr1 = new Array(1, 2, 3);
// console.log(arr1);
// console.log(arr1.length);


//how to fetch the items of an array?
// let arr = [1, 2, 3, 4]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.indexOf(1));

//Array methods:  pop , push , shift , unshift ,
// let arrEg = [10, "hi", 55, true];

//pop():removes the values items present in the last index position
// it affects original array
// console.log(arrEg.pop());
// console.log(arrEg);
// console.log(arrEg.pop());
// console.log(arrEg);

//we can empty an array by using pop method
// arrEg.pop();
// arrEg.pop();
// console.log(arrEg);


// we can add items using push method
// arrEg.push(55);
// arrEg.push("hi");
// arrEg.push(66, 77, 99);
// console.log(arrEg);

//push():
// let pushEg = [10, 20, 30];
// pushEg.push(40);
// console.log(pushEg);
// pushEg.push("hello");
// console.log(pushEg);

//push is a method that takes arguments(values) which will be added in the last position of an array.This method will also affect the original array.we can push(add)multiple values.


//shift():removes the values items present in the first index position
//it affects original array
// let shiftEg = [65, 55, 97];
// shiftEg.shift();
// console.log(shiftEg.shift());
// console.log(shiftEg);
// console.log(shiftEg);

//unshift(): add the values items to the first position
// shiftEg.unshift("rahul");
// shiftEg.unshift("first", "second", "third");
// console.log(shiftEg);

//splice:

//syntax: identifier.splice(indexPosition, items to be removed , items to be added)

// let test = [10, 55, 787, 11];
// test.splice(1, 2, "hello");
// console.log(test);           //first index is starting of index point , second is no of
// test.splice(1, 0, "test");  //items to be removed and 3 item is to be added at removed string
// console.log(test);

//by giving index number we can remove and add at atime but we can add only one item at a time

// test[1] = "hii";
// test[1, 2] = "bye";
// console.log(test);
// test.splice(0,3);
// console.log(test);

// slice: original array will not be affected it will be used only for trial and error
// let slc= [55, 88, 77, 58];
// // slc.slice(1, 3);
// console.log(slc.slice(1, 3));
// console.log(slc.slice(-1, 4));
// console.log(slc.slice(2,-1));
// console.log(slc);
// slc.slice(2, 2);
// console.log(slc.slice(0, 2));


// last index
// let arr1 = [22, 55, 88, 22];
// console.log(arr1.indexOf(55));
// console.log(arr1.indexOf(100));
// console.log(arr1.lastIndexOf(22));


//includesof():   true or false
// console.log(arr1.includes(22));
// console.log(arr1.includes(222));


//concat():to concat arrays
// let n1 = [1, 2, 3];
// let n2 = [4, 5, 6];
// let res = n1 + n2;
// console.log(res);
// console.log(n1.concat(n2));

//flat():
// let arr = [1, 2, 3, [4,[55,66],5]];
// console.log(arr);
// console.log(arr.flat());

//sort():
// let arr = [5, 8, 4, 1, 6, 9];
// console.log(arr.sort());

// let arr = [1, 5, 8, 3, 999, 22, 33, 3, 4, 7878, 256, 989, 111];
// let str = ["a", "z", "aa", "dd", "ff"];
// console.log(str.sort());
// console.log(arr.sort());


// let test = [2, 55, 222, "apple", "zebra", "j", "k", "$", "#", "A", "1a", "a1"];
// console.log(test.sort());  //always first preference for special character ,numbers,then alphabets


// ex:ascending order
// let z = [9, 1, 8, 3, 88];
// console.log(z.sort((a,b)=>{return a-b}));

